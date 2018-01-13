/*
Name: "Thermal Core",
version: 1.0,
description: "Thermal Expancion API".
*/

//Machine registry
var MachineRegistry = {
    machines: {},

    register: function (id, prototype) {
        this.machines[id] = prototype;

        if (prototype.defaultValues) {
            prototype.defaultValues.energy = 0;
        } else {
            prototype.defaultValues = {
                energy: 0
            };
        }

        if (!prototype.getEnergyStorage) {
            prototype.getEnergyStorage = function () {
                return 0;
            }
        }

        if (!prototype.energyTick) {
            prototype.energyTick = function (type, src) {
                this.data.energy += src.get(this.getEnergyStorage() - this.data.energy);
            };
        }


        ICRender.getGroup("rf-wire").add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, prototype);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    }

};

//ChargeRegistry
var ChargeItemRegistry = {
	chargeData: {},
	
	registerItem: function(item, energy, level, preventUncharge, isTool){
		Item.setMaxDamage(item, energy + 1);
		this.chargeData[item] = {
			type: "normal",
			id: item,
			level: level || 0,
			maxDamage: energy + 1,
			maxCharge: energy,
			preventUncharge: preventUncharge,
			isTool: isTool
		};
	},
	
	registerFlashItem: function(item, energy, level){
		this.chargeData[item] = {
			type: "flash",
			id: item,
			level: level || 0,
			energy: energy,
		};
	},
	
	getItemData: function(id){
		return this.chargeData[id];
	},
	
	isFlashStorage: function(id){
		var data = this.getItemData(id);
		return data && data.type == "flash";
	},
	
	getEnergyFrom: function(item, amount, level, getFromAll){
		if(item.id==ItemID.debugItem){
			return amount;
		}
		
		level = level || 0;
		var data = this.getItemData(item.id);
		if(!data || data.level > level || !getFromAll && data.preventUncharge){
			return 0;
		}
		if(data.type == "flash"){
			if(amount < 1){
				return 0;
			}
			item.count--;
			if(item.count < 1){
				item.id = item.data = 0;
			}
			return data.energy;
		}
		if(item.data < 1){
			item.data = 1;
		}
		
		var energyGot = Math.min(amount, data.maxDamage - item.data);
		item.data += energyGot;
		return energyGot;
	},
	
	addEnergyTo: function(item, energy, transf, level){
		level = level || 0;
		var data = this.getItemData(item.id);
		if(!data || data.type == "flash" || data.level > level){
			return 0;
		}
		
		var energyAdd = Math.min(item.data - 1, transf);
		if(energy >= energyAdd){
			item.data -= energyAdd;
			return energyAdd;
		}
		return 0;
	},
	
	getEnergyStored: function(item){
		var data = this.getItemData(item.id);
		if(!data){
			return 0;
		}
		return data.maxDamage - item.data;
	}
}

ChargeItemRegistry.registerFlashItem(331, 500, 0); // redstone

Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem();
	var data = ChargeItemRegistry.getItemData(item.id);
	if(item.data==0 && data && data.type != "flash"){
		Player.setCarriedItem(item.id, 1, 1);
	}
});

var ICore = null;

ModAPI.addAPICallback("ICore", function(api){
 ICore = api;
});

Callback.addCallback("PostLoaded", function(){
   if(ICore){
       ChargeItemRegistry = ICore.ChargeRegistry;
   }
});

//Container Helper
var ContainerHelper = {
    /*
        Добавить жидкость в tile из slots.full и добавить пустой контейнер в slots.empty.
        ContainerHelper.fluidContainerEmpty(["water", "water"], tile, {full: "full", empty: "empty"});
     */
    fluidContainerEmpty: function (liquid, tile, slots) {
        var slotContainerFull = tile.container.getSlot(slots.full);
        var slotContainer = tile.container.getSlot(slots.empty);

        if (slotContainerFull && slotContainer && slotContainerFull.id) {
            var empty = LiquidRegistry.getEmptyItem(slotContainerFull.id, slotContainerFull.data);

            if (empty && (liquid === null || liquid.indexOf(empty.liquid)) > -1 && tile.liquidStorage.getAmount(empty.liquid) + 1 <= tile.liquidStorage.getLimit(empty.liquid)) {
                if (slotContainer.id === 0) {
                    tile.container.setSlot(slots.empty, empty.id, 1, empty.data);
                    tile.liquidStorage.addLiquid(empty.liquid, 1);
                    slotContainerFull.count--;
                    return true;
                } else if (slotContainer.id === empty.id && slotContainer.data === empty.data && slotContainer.count < Item.getMaxStack(slotContainer.id)) {
                    slotContainer.count++;
                    slotContainerFull.count--;
                    tile.liquidStorage.addLiquid(empty.liquid, 1);
                    return true;
                }
            }
        }

        return false;
    }

};

//DynamoHelper
var DynamoHelper = {

    MIN_POWER: 8,
    MAX_POWER: 80,

    registerDynamo: function (unique, name, texture, tile) {

        Block.setPrototype(unique, {
            type: Block.TYPE_BASE,

            getVariations: function () {
                return [
                    {name: name, texture: [[texture, 1], [texture, 2], [texture, 0]], inCreative: true}
                ];
            }

        });

        tile.energyTick = function(type, src){
		    var output = Math.min(32, this.data.energy);
		    this.data.energy += src.add(output) - output;
	    }

        /*var render = new TileRenderModel(BlockID[unique], 0);
        render.addBox(0, 0, 0, {x: 1, y: 0.61, z: 1}, {id: BlockID[unique], data: 0});
        render.addBox(0.250, 0.62, 0.250, {x: 0.496, y: 0.38, z: 0.496}, {id: BlockID[unique], data: 0});*/

       BlockRenderer.addRenderCallback(BlockID[unique], function(api, coords) {
            api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1, 0.61, 1, BlockID[unique], 0);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.250, 0.62, 0.250, 0.746, 1, 0.746, BlockID[unique], 0);
        });

        BlockRenderer.enableCustomRender(BlockID[unique]);

        tile.isGenerator = function(){return true;};
        Block.setBlockShape(BlockID[unique], {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.62, z: 0.999});
        MachineRegistry.register(BlockID[unique], tile);
    },

    calcEnergy: function (tile) {
        if (tile.data.energy < tile.getEnergyStorage() / 10) {
            return this.MAX_POWER; //max power
        }
        if (tile.data.energy > 9 * tile.getEnergyStorage() / 10) {
            return this.MIN_POWER; //min power
        }

        return (tile.getEnergyStorage() - tile.data.energy) / ((9 * tile.getEnergyStorage() / 10) / (tile.getEnergyStorage() / 10));
    }

};


//icrender
function TileRenderModel(id, data) {
    this.registerAsId = function (id, data) {
        var block = Unlimited.API.GetReal(id, data || 0);
        this.id = block.id;
        this.data = block.data;
        this.convertedId = this.id * 16 + this.data;

        if (this.convertedId) {
            ICRenderLib.registerTileModel(this.convertedId, this);
        }
        else {
            Logger.Log("tile model cannot be registred: block id is undefined or 0", "ERROR");
        }
    }

    this.cloneForId = function (id, data) {
        this.registerAsId(id, data);
    }

    this.registerAsId(id, data);

    this.boxes = [];
    this.dynamic = [];

    this.formatBox = function (x1, y1, z1, x2, y2, z2, block) {
        var M = 1.0;
        var box = [
            x1 * M, y1 * M, z1 * M,
            x2 * M, y2 * M, z2 * M,
        ];

        if (block) {
            block = Unlimited.API.GetReal(block.id, block.data);
            box.push(parseInt(block.id) || 0);
            box.push(parseInt(block.data) || 0)
        }
        else {
            box.push(-1);
            box.push(-1);
        }

        return box;
    }

    this.addBoxF = function (x1, y1, z1, x2, y2, z2, block) {
        this.boxes.push(this.formatBox(x1, y1, z1, x2, y2, z2, block));
    }

    this.addBox = function (x, y, z, size, block) {
        this.boxes.push(this.formatBox(
            x, y, z,
            (x + size.x),
            (y + size.y),
            (z + size.z),
            block
            )
        );
    }

    this.createCondition = function (x, y, z, mode) {
        var model = this;
        var condition = {
            x: x, y: y, z: z,
            mode: Math.max(0, mode || 0),

            boxes: [],

            addBoxF: function (x1, y1, z1, x2, y2, z2, block) {
                this.boxes.push(model.formatBox(x1, y1, z1, x2, y2, z2, block));
            },

            addBox: function (x, y, z, size, block) {
                this.boxes.push(model.formatBox(
                    x, y, z,
                    (x + size.x),
                    (y + size.y),
                    (z + size.z),
                    block
                    )
                );
            },

            tiles: {},
            tileGroups: [],

            addBlock: function (id, data) {
                var block = Unlimited.API.GetReal(id, data || 0);
                var convertedId = block.id * 16 + block.data;
                this.tiles[convertedId] = true;
            },

            addBlockGroup: function (name) {
                this.tileGroups.push(name);
            },

            addBlockGroupFinal: function (name) {
                var group = ICRenderLib.getConnectionGroup(name);
                for (var id in group) {
                    this.tiles[id] = true;
                }
            },

            writeCondition: function () {
                var output = parseInt(this.x) + " " + parseInt(this.y) + " " + parseInt(this.z) + " " + parseInt(this.mode) + "\n";

                for (var i in this.tileGroups) {
                    this.addBlockGroupFinal(this.tileGroups[i]);
                }

                var blocks = [];
                for (var id in this.tiles) {
                    blocks.push(id);
                }
                output += blocks.length + " " + blocks.join(" ") + "\n" + condition.boxes.length + "\n";

                for (var i in condition.boxes) {
                    output += condition.boxes[i].join(" ") + "\n";
                }

                return output;
            }
        };

        this.dynamic.push(condition);
        return condition;
    }

    this.connections = {};
    this.connectionGroups = [];
    this.connectionWidth = 0.5;
    this.hasConnections = false;

    this.setConnectionWidth = function (width) {
        this.connectionWidth = width;
    }

    this.addConnection = function (id, data) {
        var block = Unlimited.API.GetReal(id, data || 0);
        var convertedId = block.id * 16 + block.data;
        this.connections[convertedId] = true;
        this.hasConnections = true;
    }

    this.addConnectionGroup = function (name) {
        this.connectionGroups.push(name);
        this.hasConnections = true;
    }

    this.addConnectionGroupFinal = function (name) {
        var group = ICRenderLib.getConnectionGroup(name);
        for (var id in group) {
            this.connections[id] = true;
        }
    }

    this.addSelfConnection = function () {
        this.connections[this.convertedId] = true;
        this.hasConnections = true;
    }

    this.writeAsId = function (id) {
        var output = "";
        output += id + " " + (this.hasConnections ? 1 : 0) + "\n";
        output += this.boxes.length + "\n";

        for (var i in this.boxes) {
            output += this.boxes[i].join(" ") + "\n";
        }

        output += this.dynamic.length + "\n";
        for (var i in this.dynamic) {
            var condition = this.dynamic[i];
            output += condition.writeCondition();
        }

        for (var i in this.connectionGroups) {
            this.addConnectionGroupFinal(this.connectionGroups[i]);
        }

        var connections = [];
        for (var id in this.connections) {
            connections.push(id);
        }

        output += connections.length + " " + this.connectionWidth + "\n" + connections.join(" ");
        return output;
    }
}


var ICRenderLib = ModAPI.requireAPI("ICRenderLib");

if (!ICRenderLib) {
    var ICRenderLib = {
        /* model registry */
        tileModels: {},

        registerTileModel: function (convertedId, model) {
            this.tileModels[convertedId] = model;
        },

        /* output */
        writeAllData: function () {
            var output = "";
            var count = 0;
            for (var id in this.tileModels) {
                output += this.tileModels[id].writeAsId(id) + "\n\n";
                count++;
            }

            output = count + "\n\n" + output;
            FileTools.WriteText("games/com.mojang/mods/icrender", output);
        },

        /* connection groups functions */
        connectionGroups: {},

        addConnectionBlockWithData: function (name, blockId, blockData) {
            var group = this.connectionGroups[name];
            if (!group) {
                group = {};
                this.connectionGroups[name] = group;
            }

            var block = Unlimited.API.GetReal(blockId, blockData);
            group[block.id * 16 + block.data] = true;
        },

        addConnectionBlock: function (name, blockId) {
            for (var data = 0; data < 16; data++) {
                this.addConnectionBlockWithData(name, blockId, data);
            }
        },

        addConnectionGroup: function (name, blockIds) {
            for (var i in blockIds) {
                this.addConnectionBlock(name, blockIds[i]);
            }
        },

        getConnectionGroup: function (name) {
            return this.connectionGroups[name];
        },


        /* standart models */
        registerAsWire: function (id, connectionGroupName, width) {
            width = width || 0.5;

            var model = new TileRenderModel(id, 0);
            model.addConnectionGroup(connectionGroupName);
            model.addSelfConnection();
            model.setConnectionWidth(width);
            model.addBox(.5 - width / 2.0, .5 - width / 2.0, .5 - width / 2.0, {
                x: width,
                y: width,
                z: width,
            });

            this.addConnectionBlock(connectionGroupName, id);
        }
    };


    ModAPI.registerAPI("ICRenderLib", ICRenderLib);
    Callback.addCallback("PostLoaded", function () {
        ICRenderLib.writeAllData();
    });
    Logger.Log("ICRender API was created and shared by " + __name__ + " with name ICRenderLib", "API");
}

//SoundsAPI
var Music = {
playSound:function(music_file)
{
var mPlayer = new android.media.MediaPlayer(); 
var path = __dir__ + "/sounds/" + music_file; 
try{
mPlayer.setDataSource(path);
mPlayer.prepare();
mPlayer.start();
}catch(err){
Game.message("Playing error: " + err);
}}}

//Hammer
var CRAFTING_TOOL_ITEM_MAX_DAMAGE = 105;
function addRecipeWithCraftingTool(result, data, tool) {
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == tool) {
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}

var PulverizerRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};

var InductionRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input1.id + ":" + obj.input1.data] = obj;
    },
	
	add: function (objj) {
        if (!objj) return;

        this.recipes[objj.input2.id + ":" + objj.input2.data] = objj;
    },

    getResult1: function (id, data) {
        return this.recipes[id + ":" + data];
    },
	
	 getResult2: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};

var MagmaCrucibleRecipes = {
   recipes: {},
   
   add: function(recipe){
   	this.recipes[recipe.id+":"+recipe.data] = recipe;
   },
   
   get: function(id, data){
   	return this.recipes[id+":"+data]
   }
   
};

var SawmillRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};