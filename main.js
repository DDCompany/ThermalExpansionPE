/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 39
*/



// file: header.js

/*

  _______ _                               _ ______                            _             _____  ______
 |__   __| |                             | |  ____|                          (_)           |  __ \|  ____|
    | |  | |__   ___ _ __ _ __ ___   __ _| | |__  __  ___ __   __ _ _ __  ___ _  ___  _ __ | |__) | |__
    | |  | '_ \ / _ \ '__| '_ ` _ \ / _` | |  __| \ \/ / '_ \ / _` | '_ \/ __| |/ _ \| '_ \|  ___/|  __|
    | |  | | | |  __/ |  | | | | | | (_| | | |____ >  <| |_) | (_| | | | \__ \ | (_) | | | | |    | |____
    |_|  |_| |_|\___|_|  |_| |_| |_|\__,_|_|______/_/\_\ .__/ \__,_|_| |_|___/_|\___/|_| |_|_|    |______|
                                                       | |
                                                       |_|
     by Dmitriy Medvedev(https://vk.com/id331953744), Abdulla Nagmetdulla (http://vk.com/abdulla000n), Artyom Kaktysh(https://vk.com/artyom_kaktysh) and Denis Dzhugalik(https://vk.com/id235887284)
 */
importLib("ToolType", "*");
importLib("energylib", "*");

var RF = EnergyTypeRegistry.assureEnergyType("RF", 1/4);




// file: localize.js

/* ---- INGOTS ---- */
Translation.addTranslation("Aluminum ingot", {ru: "Алюминиевый слиток"});
Translation.addTranslation("Bronze ingot", {ru: "Бронзовый слиток"});
Translation.addTranslation("Constantan ingot", {ru: "Константовый слиток"});
Translation.addTranslation("Copper ingot", {ru: "Медный слиток"});
Translation.addTranslation("Electrum ingot", {ru: "Электрумовый слиток"});
Translation.addTranslation("Enderium ingot", {ru: "Слиток эндериума"});
Translation.addTranslation("Invar ingot", {ru: "Инваровый слиток"});
Translation.addTranslation("Iridium ingot", {ru: "Иридиевый слиток"});
Translation.addTranslation("Lead ingot", {ru: "Свинцовый слиток"});
Translation.addTranslation("Lumium ingot", {ru: "Ламиумовый слиток"});
Translation.addTranslation("Mithril ingot", {ru: "Мифриловый слиток"});
Translation.addTranslation("Nickel ingot", {ru: "Никелевый слиток"});
Translation.addTranslation("Platinum ingot", {ru: "Платиновый слиток"});
Translation.addTranslation("Signalum ingot", {ru: "Сигналовый слиток"});
Translation.addTranslation("Silver ingot", {ru: "Серебряный слиток"});
Translation.addTranslation("Steel ingot", {ru: "Стальной слиток"});
Translation.addTranslation("Tin ingot", {ru: "Оловянный слиток"});
/* ---- DUSTS ---- */
Translation.addTranslation("Bronze dust", {ru: "Смесь бронзы"});
Translation.addTranslation("Charcoal dust", {ru: "Пыль древесного угля"});
Translation.addTranslation("Coal dust", {ru: "Измельчённый уголь"});
Translation.addTranslation("Constantan dust", {ru: "Константанская пыль"});
Translation.addTranslation("Copper dust", {ru: "Измельчённая медь"});
Translation.addTranslation("Electrum dust", {ru: "Смесь электрума"});
Translation.addTranslation("Enderium dust", {ru: "Смесь эндериума"});
Translation.addTranslation("Gold dust", {ru: "Измельчённое золото"});
Translation.addTranslation("Invar dust", {ru: "Смесь инвара"});
Translation.addTranslation("Iridium dust", {ru: "Иридиевая пыль"});
Translation.addTranslation("Iron dust", {ru: "Измельчённое железо"});
Translation.addTranslation("Lead dust", {ru: "Измельчённый свинец"});
Translation.addTranslation("Lumium dust", {ru: "Смесь люмиума"});
Translation.addTranslation("Mithril dust", {ru: "Измельчённый мифрил"});
Translation.addTranslation("Lumium dust", {ru: "Смесь люмиума"});
Translation.addTranslation("Nickel dust", {ru: "Измельчённый никель"});
Translation.addTranslation("Niter dust", {ru: "Cелитра"});
Translation.addTranslation("Obsidian dust", {ru: "Измельчённый обсидиан"});
Translation.addTranslation("Platinum dust", {ru: "Измельчённая платина"});
Translation.addTranslation("Signalum dust", {ru: "Смесь сигналума"});
Translation.addTranslation("Silver dust", {ru: "Измельчённое серебро"});
Translation.addTranslation("Steel dust", {ru: "Измельчённая сталь"});
Translation.addTranslation("Sulfur dust", {ru: "Измельчённая сера"});
Translation.addTranslation("Tin dust", {ru: "Измельчённое олово"});
Translation.addTranslation("Wood dust", {ru: "Деревянная пыль"});
Translation.addTranslation("Fertilizer basic", {ru: "Удобрение"});

/* ---- NUGGETS ---- */
Translation.addTranslation("Aluminum nugget", {ru: "Алюминиевый самородок"});
Translation.addTranslation("Bronze nugget", {ru: "Бронзовый самородок"});
Translation.addTranslation("Constantan nugget", {ru: "Константовый самородок"});
Translation.addTranslation("Copper nugget", {ru: "Медный самородок"});
Translation.addTranslation("Diamond nugget", {ru: "Алмазный самородок"});
Translation.addTranslation("Electrum nugget", {ru: "Электрумовый самородок"});
Translation.addTranslation("Enderium nugget", {ru: "Эндериумовый самородок"});
Translation.addTranslation("Invar nugget", {ru: "Инваровый самородок"});
Translation.addTranslation("Iridium nugget", {ru: "Иридиевий самородок"});
Translation.addTranslation("Iron nugget", {ru: "Железный самородок"});
Translation.addTranslation("Lead nugget", {ru: "Свинцовый самородок"});
Translation.addTranslation("Lumium nugget", {ru: "Лумиумий самородок"});
Translation.addTranslation("Mithril nugget", {ru: "Мифриловый самородок"});
Translation.addTranslation("Nickel nugget", {ru: "Никелевый самородок"});
Translation.addTranslation("Platinum nugget", {ru: "Платиновый самородок"});
Translation.addTranslation("Signalum nugget", {ru: "Сигналовый самородок"});
Translation.addTranslation("Silver nugget", {ru: "Серебряный самородок"});
Translation.addTranslation("Steel nugget", {ru: "Стальной самородок"});
Translation.addTranslation("Tin nugget", {ru: "Оловянный самородок"});
/* ---- GEARS ---- */
Translation.addTranslation("Aluminum gear", {ru: "Алюминиевая шестерня"});
Translation.addTranslation("Bronze gear", {ru: "Бронзовая шестерня"});
Translation.addTranslation("Constantan gear", {ru: "Константановая шестерня"});
Translation.addTranslation("Copper gear", {ru: "Медная шестерня"});
Translation.addTranslation("Electrum gear", {ru: "Электрумовая шестерня"});
Translation.addTranslation("Enderium gear", {ru: "Ендериева шестерня"});
Translation.addTranslation("Gold gear", {ru: "Золотая шестерня"});
Translation.addTranslation("Invar gear", {ru: "Инваровая шестерня"});
Translation.addTranslation("Iridium gear", {ru: "Иридиевая шестерня"});
Translation.addTranslation("Iron gear", {ru: "Железная шестерня"});
Translation.addTranslation("Lead gear", {ru: "Свинцовая шестерня"});
Translation.addTranslation("Lumium gear", {ru: "Лумиумовая шестерня"});
Translation.addTranslation("Mithril gear", {ru: "Мифриловая шестерня"});
Translation.addTranslation("Nickel gear", {ru: "Никелевая шестерня"});
Translation.addTranslation("Platinum gear", {ru: "Платиновая шестерня"});
Translation.addTranslation("Signalum gear", {ru: "Сигнальная шестерня"});
Translation.addTranslation("Silver gear", {ru: "Серебряная шестерня"});
Translation.addTranslation("Steel gear", {ru: "Стальная шестерня"});
Translation.addTranslation("Tin gear", {ru: "Оловянная шестерня"});
/* ---- ARMOR HELMET ---- */
Translation.addTranslation("Copper helmet", {ru: "Медный шлем"});
Translation.addTranslation("Tin helmet", {ru: "Оловянный шлем"});
Translation.addTranslation("Lead helmet", {ru: "Свинцовый шлем"});
Translation.addTranslation("Silver helmet", {ru: "Серебряный шлем"});
Translation.addTranslation("Nickel helmet", {ru: "Никель-шлем"});
Translation.addTranslation("Platinum helmet", {ru: "Платиновый шлем"});
Translation.addTranslation("Electrum helmet", {ru: "Электрумний шлем"});
Translation.addTranslation("Bronze helmet", {ru: "Бронзовый шлем"});
Translation.addTranslation("Invar helmet", {ru: "Инварный шлем"});
Translation.addTranslation("Steel helmet", {ru: "Стальной шлем"});
Translation.addTranslation("Constantan helmet", {ru: "Константановий шлем"});
Translation.addTranslation("Aluminum helmet", {ru: "Алюминиевый шлем"});
/* ---- ARMOR CHESTPLATE ---- */
Translation.addTranslation("Copper chestplate", {ru: "Медный нагрудник"});
Translation.addTranslation("Tin leggings", {ru: "Оловянная нагрудник"});
Translation.addTranslation("Silver chestplate", {ru: "Серебряный нагрудник"});
Translation.addTranslation("Aluminum chestplate", {ru: "Алюминиевый нагрудник"});
Translation.addTranslation("Nickel chestplate", {ru: "Никелиевий нагрудник"});
Translation.addTranslation("Platinum chestplate", {ru: "Платиновый нагрудник"});
Translation.addTranslation("Steel chestplate", {ru: "Стальной нагрудник"});
Translation.addTranslation("Electrum chestplate", {ru: "Електрумний нагрудник"});
Translation.addTranslation("Invar chestplate", {ru: "Инварной нагрудник"});
Translation.addTranslation("Bronze chestplate", {ru: "Бронзовый нагрудник"});
Translation.addTranslation("Constantan chestplate", {ru: "Константановий нагрудник"});
/* ---- ARMOR LEGGINGS ---- */
Translation.addTranslation("Copper leggings", {ru: "Медные поножи"});
Translation.addTranslation("Tin leggings", {ru: "Оловянные поножи"});
Translation.addTranslation("Silver leggings", {ru: "Серебряные поножи"});
Translation.addTranslation("Lead leggings", {ru: "Свинцовые поножи"});
Translation.addTranslation("Aluminum leggings", {ru: "Алюминиевые поножи"});
Translation.addTranslation("Nickel leggings", {ru: "Никелевые поножи"});
Translation.addTranslation("Platinum leggings", {ru: "Платиновые поножи"});
Translation.addTranslation("Steel leggings", {ru: "Стальные поножи"});
Translation.addTranslation("Electrum leggings", {ru: "Електрумние поножи"});
Translation.addTranslation("Invar leggings", {ru: "Инварные поножи"});
Translation.addTranslation("Bronze leggings", {ru: "Бронзовые поножи"});
Translation.addTranslation("Constantan leggings", {ru: "Константановие поножи"});
/* ---- ARMOR BOOTS ---- */
Translation.addTranslation("Copper boots", {ru: "Медные ботинки"});
Translation.addTranslation("Tin boots", {ru: "Оловянные ботинки"});
Translation.addTranslation("Silver boots", {ru: "Серебряные ботинки"});
Translation.addTranslation("Lead boots", {ru: "Cвинцовые ботинки"});
Translation.addTranslation("Aluminum boots", {ru: "Алюминиевые ботинки"});
Translation.addTranslation("Nickel boots", {ru: "Никелевые ботинки"});
Translation.addTranslation("Platinum boots", {ru: "Платиновые ботинки"});
Translation.addTranslation("Steel boots", {ru: "Стальные ботинки"});
Translation.addTranslation("Electrum boots", {ru: "Електрумние ботинки"});
Translation.addTranslation("Invar boots", {ru: "Инварные ботинки"});
Translation.addTranslation("Bronze boots", {ru: "Бронзовые ботинки"});
Translation.addTranslation("Constantan boots", {ru: "Константановие ботинки"});









// file: TE Core.js

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





// file: api/Config.js

var Config = {

    /* ----- ORE GEN ----- */
    genCopper: __config__.getBool("gen.copper"),
    genTin: __config__.getBool("gen.tin"),
    genLead: __config__.getBool("gen.lead"),
    genSilver: __config__.getBool("gen.silver"),
    genNickel: __config__.getBool("gen.nickel"),
    genPlatinum: __config__.getBool("gen.platinum")

};




// file: api/recipes/PulverizerRecipes.js

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

PulverizerRecipes.add({
    input: {id: 1, data: 0},
    result: {id: 2, data: 0, count: 3},
    dop: {id: 3, data: 0, count: 2, chance: 0.3}
});
PulverizerRecipes.add({
    input: {id: 15, data: 0},
    result: {id: ItemID.dustIron, data: 0, count: 2},
    dop: {id: ItemID.dustNickel, data: 0, count: 1, chance: 0.1}
});
PulverizerRecipes.add({
    input: {id: 14, data: 0},
    result: {id: ItemID.dustGold, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: 1, data: 0},
    result: {id: 4, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: 4, data: 0},
    result: {id: 12, data: 0, count: 1},
    dop: {id: 13, data: 0, count: 1, chance: 0.1}
});
PulverizerRecipes.add({
    input: {id: 43, data: 5},
    result: {id: 97, data: 4, count: 1},
});
PulverizerRecipes.add({
    input: {id: 155, data: 2},
    result: {id: 406, data: 0, count: 4},
});
PulverizerRecipes.add({
    input: {id: 156, data: 0},
    result: {id: 406, data: 0, count: 6},
});
PulverizerRecipes.add({
    input: {id: 13, data: 0},
    result: {id: 318, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: 20, data: 0},
    result: {id: 12, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: 24, data: 0},
    result: {id: 12, data: 0, count: 2},
    dop: {id: 13, data: 0, count: 1, chance: 0.1}
});
PulverizerRecipes.add({
    input: {id: BlockID.oreAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreIridium, data: 0},
    result: {id: ItemID.dustIridium, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreLead, data: 0},
    result: {id: ItemID.dustLead, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreMithril, data: 0},
    result: {id: ItemID.dustMithril, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.oreSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 2},
});
PulverizerRecipes.add({
    input: {id: BlockID.orePlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 2},
});

PulverizerRecipes.add({
    input: {id: BlockID.ingotCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotLead, data: 0},
    result: {id: ItemID.dustLead, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotPlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotElectrum, data: 0},
    result: {id: ItemID.dustElectrum, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotInvar, data: 0},
    result: {id: ItemID.dustInvar, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotBronze, data: 0},
    result: {id: ItemID.dustBronze, data: 0, count: 1},
});
PulverizerRecipes.add({
    input: {id: BlockID.ingotConstantan, data: 0},
    result: {id: ItemID.dustConstantan, data: 0, count: 1},
});




// file: api/recipes/SawmillRecipes.js

IDRegistry.genItemID("sawdust");
Item.createItem("sawdust", "Sawndust", {name: "Sawdust", meta: 0});

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
/*Рецепт Древесини*/
SawmillRecipes.add({
    input: {id: 17, data: 0},
    result: {id: 5, data: 0, count: 6},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 17, data: 1},
    result: {id: 5, data: 1, count: 6},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 17, data: 2},
    result: {id: 5, data: 2, count: 6},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 17, data: 3},
    result: {id: 5, data: 3, count: 6},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 162, data: 0},
    result: {id: 157, data: 4, count: 6},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 162, data: 1},
    result: {id: 157, data: 5, count: 6},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
/*Разное*/
SawmillRecipes.add({
    input: {id: 25, data: 0},
    result: {id: 5, data: 0, count: 8},
    dop: {id: 5, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 355, data: 0},
    result: {id: 5, data: 0, count: 3},
    dop: {id: 35, data: 0, count: 3}
});
SawmillRecipes.add({
    input: {id: 47, data: 0},
    result: {id: 5, data: 0, count: 6},
    dop: {id: 340, data: 0, count: 3}
});
SawmillRecipes.add({
    input: {id: 58, data: 0},
    result: {id: 5, data: 0, count: 4},
});
SawmillRecipes.add({
    input: {id: 63, data: 0},
    result: {id: 5, data: 0, count: 2},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 64, data: 0},
    result: {id: 5, data: 0, count: 6},
});
SawmillRecipes.add({
    input: {id: 72, data: 0},
    result: {id: 5, data: 0, count: 2},
});
SawmillRecipes.add({
    input: {id: 84, data: 0},
    result: {id: 5, data: 0, count: 8},
    dop: {id: 264, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 96, data: 0},
    result: {id: 5, data: 0, count: 3},
});
SawmillRecipes.add({
    input: {id: 333, data: 0},
    result: {id: 5, data: 0, count: 5},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 1},
    result: {id: 5, data: 1, count: 5},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 2},
    result: {id: 5, data: 2, count: 5},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 3},
    result: {id: 5, data: 3, count: 5},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 4},
    result: {id: 5, data: 4, count: 5},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 4},
    result: {id: 5, data: 4, count: 5},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 269, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 268, data: 0},
    result: {id: 5, data: 0, count: 2},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 271, data: 0},
    result: {id: 5, data: 0, count: 3},
    dop: {id: ItemID.sawdust, data: 0, count: 1}
});






// file: api/recipes/MagmaCrucibleRecipes.js

var MagmaCrucibleRecipes = {
   recipes: {},
   
   add: function(recipe){
   	this.recipes[recipe.id+":"+recipe.data] = recipe;
   },
   
   get: function(id, data){
   	return this.recipes[id+":"+data]
   }
   
};

MagmaCrucibleRecipes.add({
	id: 1, 
	data: 0,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});

MagmaCrucibleRecipes.add({
	id: 1, 
	data: 1,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});

MagmaCrucibleRecipes.add({
	id: 1, 
	data: 2,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});

MagmaCrucibleRecipes.add({
	id: 1, 
	data: 3,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});

MagmaCrucibleRecipes.add({
	id: 1, 
	data: 4,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});

MagmaCrucibleRecipes.add({
	id: 1, 
	data: 5,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});

MagmaCrucibleRecipes.add({
	id: 3, 
	data: 0,
	fluid: "lava",
	fluidAmount: 1,
	time: 20
});




// file: api/managers/SteamManager.js

var SteamManager = {
    fuels: {},

    addFuel: function (id, data, energy) {
        this.fuels[id + ":" + data] = energy;
    },

    getEnergy: function (id, data) {
        return this.fuels[id + ":" + data];
    }

};

SteamManager.addFuel(263, 0, 32000);




// file: items/others/slag.js

IDRegistry.genItemID("slag");
Item.createItem("slag", "Slag", {name:"Slag",meta:0}, {});

IDRegistry.genItemID("slagRicht");
Item.createItem("slagRicht", "Richt Slag", {name:"SlagRicht",meta:0}, {});




// file: blocks/frames.js

IDRegistry.genBlockID("machineFrameBasic");
Block.createBlock("machineFrameBasic", [
    {name: "Basic Machine Frame", texture: [["machineFrameBasic", 0]], inCreative: true}
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.machineFrameBasic, count: 1, data: 0}, [
                "1a1",
                "a2a",
                "1a1"
            ], ['a', 20, 0, '2', ItemID.gearTin, 0, 1, 265, 0]);
});




// file: blocks/ores.js

IDRegistry.genBlockID("oreIridium");
Block.createBlock("oreIridium", [
    {name: "Iridium ore", texture: [["ore_iridium", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead ore", texture: [["ore_lead", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril ore", texture: [["ore_mithril", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
    {name: "Nickel ore", texture: [["ore_nickel", 0]], inCreative: true}
]);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum ore", texture: [["ore_platinum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver ore", texture: [["ore_silver", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin ore", texture: [["ore_tin", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper ore", texture: [["ore_copper", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreAluminum");
Block.createBlock("oreAluminum", [
    {name: "Aluminum ore", texture: [["ore_aluminum", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.oreAluminum, BlockID.oreLead, BlockID.oreMithil, BlockID.orePlatinum, BlockID.oreSilver, BlockID.oreTin, BlockID.oreCopper]);
ToolAPI.registerBlockDiggingLevel(BlockID.oreLead, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreMithil, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.orePlatinum, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreSilver, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTin, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreCopper, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreAluminum, 1);
Callback.addCallback("PostLoaded", function () {

    //Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
    //Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
    //Recipes.addFurnace(BlockID.oreLead, ItemID.ingotLead, 0);
    //Recipes.addFurnace(BlockID.oreAluminum, ItemID.ingotAluminum, 0);
    //Recipes.addFurnace(BlockID.oreNickel, ItemID.ingotNickel, 0);
  //  Recipes.addFurnace(BlockID.orePlatinum, ItemID.ingotPlatinum, 0);
   // Recipes.addFurnace(BlockID.oreIridium, ItemID.ingotIridium, 0);
   // Recipes.addFurnace(BlockID.oreMithril, ItemID.ingotMithril, 0);

});

var OreGenerator = {
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate: function (x, y, z, maxCount) {
        if (World.getBlock(x, y, z).id === 1) {
            GenerationUtils.setLockedBlock(x, y, z);
            for (var i = 1; i < this.random(1, maxCount); i++) {
                GenerationUtils.setLockedBlock(x + this.random(-1, 1), y + this.random(-1, 1), z + this.random(-1, 1));
            }
        }
    }
};

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {

        if (Config.genCopper) {
            GenerationUtils.lockInBlock(BlockID.oreCopper, 0);
            for (var i = 0; i < 10; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 75);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genTin) {
            GenerationUtils.lockInBlock(BlockID.oreTin, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 55);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genLead) {
            GenerationUtils.lockInBlock(BlockID.oreLead, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
    

    if (Config.genSilver) {
        GenerationUtils.lockInBlock(BlockID.oreSilver, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 8);
        }
    }

    if (Config.genNickel) {
        GenerationUtils.lockInBlock(BlockID.oreNickel, 0);
        for (var i = 0; i < 3; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 20);
            OreGenerator.generate(coords.x, coords.y, coords.z, 4);
        }
    }

    if (Config.genPlatinum) {
        GenerationUtils.lockInBlock(BlockID.orePlatinum, 0);
        for (var i = 0; i < 8; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 1);
        }
    }


});




// file: blocks/duct/flux.js

function setupWireRender(id, groupName, width, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
}

IDRegistry.genBlockID("fluxductLeadstone");
Block.createBlock("fluxductLeadstone", [
    {name: "Leadstone Fluxduct", texture: [["fluxduct_lead", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductHardened");
Block.createBlock("fluxductHardened", [
    {name: "Hardened Fluxduct", texture: [["fluxduct_invar", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductRedstone");
Block.createBlock("fluxductRedstone", [
    {name: "Redstone Energy Fluxduct", texture: [["fluxduct_electrum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductSignalum");
Block.createBlock("fluxductSignalum", [
    {name: "Signalum Fluxduct", texture: [["fluxduct_signalum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductResonant");
Block.createBlock("fluxductResonant", [
    {name: "Resonant Fluxduct", texture: [["fluxduct_enderium", 0]], inCreative: true}
]);

RF.registerWire(BlockID.fluxductLeadstone);
RF.registerWire(BlockID.fluxductHardened);
RF.registerWire(BlockID.fluxductRedstone);
RF.registerWire(BlockID.fluxductSignalum);
RF.registerWire(BlockID.fluxductResonant);

setupWireRender(BlockID.fluxductLeadstone, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductHardened, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductRedstone, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductSignalum, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductResonant, "rf-wire", 0.38);

Block.setBlockShape(BlockID.fluxductLeadstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductHardened, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductRedstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductSignalum, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductResonant, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});




// file: blocks/dynamo/enervation.js

DynamoHelper.registerDynamo("dynamoEnervation", "Enervation dynamo", "dynamo_enervation", {
   defaultValues: {
       energy: 0
    },
	isGenerator: function() {
		return true;
	},
    tick: function () {
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot"), Math.min(150, this.getEnergyStorage() - this.data.energy), 2);
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
    },
    getEnergyStorage: function () {
      return 10000;
    },
    getGuiScreen: function () {
        return new UI.StandartWindow({standart: {header: {text: {
        text: Translation.translate("Enervation dynamo")}},
        inventory: {standart: true},background: {standart: true}},
    drawing: [{type: "bitmap", x: 501, y: 145, direction: 1, bitmap: "rf_scale", scale: 3.2}],
    elements: {
        "rfScale": {type: "scale", x: 501, y: 145, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "slot": {type: "slot", x: 421, y: 185}}});
    }
});




// file: blocks/dynamo/magmatic.js

var dynamoMagmaticGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Magmatic dynamo")
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
    {type: "bitmap", x: 501, y: 145, direction: 1, bitmap: "rf_scale", scale: 3.2},
	{type: "bitmap", x: 801, y: 125, direction: 2, bitmap: "fluid_scale_short", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 501, y: 145, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "liquidScale": {type: "scale", x: 801, y: 125, direction: 2, bitmap: "fluid_scale_short", scale: 3.2},
		"lavaScale": {type: "scale", x: 801, y: 125, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},
        "slot1": {type: "slot", x: 651, y: 125},
        "slot2": {type: "slot", x: 651, y: 250}
    }
});
DynamoHelper.registerDynamo("dynamoMagmatic", "Magmatic dynamo", "dynamo_magmatic" , {
	 defaultValues: {
       energy: 0
    },
	
	init: function () {
      this.liquidStorage.setLimit("lava", 4);
    },
	
	isGenerator: function() {
		return true;
	},
	
  tick: function () {

        if(World.getThreadTime() % 20 === 0){
            ContainerHelper.fluidContainerEmpty(["lava"], this, {full: "slot1", empty: "slot2"});
        }

        if(this.liquidStorage.getAmount("lava", 0.0001) > 0){
            var energy = DynamoHelper.calcEnergy(this);
            this.data.energy += Math.min(this.getEnergyStorage() - this.data.energy, energy);
            this.liquidStorage.getLiquid("lava", (energy / 1000) / 1);
        }

        this.liquidStorage.updateUiScale("lavaScale", "lava");
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
      return 10000;
    },
	  
    getGuiScreen: function () {
        return dynamoMagmaticGUI;
    }
	
});




// file: blocks/dynamo/steam.js

var dynamoSteamGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Steam dynamo")
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 340, y: 60, bitmap: "dynamo_steam", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 510, y: 95, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "steamScale": {type: "scale", x: 343, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},
        "waterScale": {type: "scale", x: 653, y: 63, direction: 1, bitmap: "fluid_scale", scale: 3.2},
        "fuelScale": {type: "scale", x: 580, y: 155, direction: 1, bitmap: "fire_scale", scale: 3.2},

        "slotFuel": {type: "slot", x: 426, y: 143},

        "slotWaterContainer": {type: "slot", x: 720, y: 70},
        "slotWaterContainerEmpty": {type: "slot", x: 720, y: 185}


    }
});

DynamoHelper.registerDynamo("dynamoSteam", "Steam dynamo", "dynamo_steam", {

    defaultValues: {
        fuelMax: 0,
        fuelCurrent: 0,
        energy: 0
    },

    init: function () {
        this.liquidStorage.setLimit("water", 10);
        this.liquidStorage.setLimit("steam", 4);
    },

    tick: function () {

        var slotFuel = this.container.getSlot("slotFuel");
        if (World.getThreadTime() % 20 === 0) {
            ContainerHelper.fluidContainerEmpty(["water"], this, {
                full: "slotWaterContainer",
                empty: "slotWaterContainerEmpty"
            });
        }


        if (this.data.fuelCurrent > 0) {
            var energy = DynamoHelper.calcEnergy(this);
            this.data.fuelCurrent -= energy;
            if (this.liquidStorage.getAmount("water") >= energy / 1000) {
                this.liquidStorage.getLiquid("water", energy / 1000);
                this.liquidStorage.addLiquid("steam", Math.min(energy / 1000, this.liquidStorage.getLimit("steam") - this.liquidStorage.getAmount("steam")));
            }
        } else if (slotFuel.id && this.liquidStorage.getAmount("steam") < this.liquidStorage.getLimit("steam")) {
            var energy_s = Recipes.getFuelBurnDuration(slotFuel.id, slotFuel.data);
            if (energy_s) {

                this.data.fuelMax = energy_s;
                this.data.fuelCurrent = energy_s;

                slotFuel.count--;
            }
        }

        if (this.liquidStorage.getAmount("steam") >= 3) {
            var energy = DynamoHelper.calcEnergy(this);
            this.data.energy += Math.min(this.getEnergyStorage() - this.data.energy, energy);
            this.liquidStorage.getLiquid("steam", (energy / 1000) / 2);
        }

        this.liquidStorage.updateUiScale("steamScale", "steam");
        this.liquidStorage.updateUiScale("waterScale", "water");
        this.container.setScale("fuelScale", this.data.fuelCurrent / this.data.fuelMax);
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 10000;
    },

    getGuiScreen: function () {
        return dynamoSteamGUI;
    }

});




// file: blocks/machines/pulverizer.js

IDRegistry.genBlockID("pulverizer");
Block.createBlockWithRotation("pulverizer", [
    {
        name: "Pulverizer",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_pulverizer", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.pulverizer, count: 1, data: 0}, [
        " x ",
        "b#b",
        "cac"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 33, 0, 'b', 318, 0, 'a', ItemID.RedstoneReceptionCoil, 0, 'c', ItemID.gearCopper, 0]);
});

var guipulverizer = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Pulverizer"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {
            type: "scale",
            x: 530,
            y: 146,
            direction: 0,
            value: 0.5,
            bitmap: "pulverizer_bar_scale",
            scale: 3.2
        },
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotResult": {type: "slot", x: 625, y: 102},
        "slotResultDop": {type: "slot", x: 625, y: 165}
    }
});

MachineRegistry.register(BlockID.pulverizer, {

    PROGRESS_TIME: 150,
    ENERGY_CONSUME: 20,

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guipulverizer;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult", "slotResultDop"]};
    },

    tick: function () {
        var slotSource = this.container.getSlot("slotSource");
        var slotResult = this.container.getSlot("slotResult");
        var slotResultDop = this.container.getSlot("slotResultDop");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }
            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_TIME) {
                var r = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
                if (slotResult.id === 0 || (slotResult.id === r.result.id && slotResult.data === r.result.data && slotResult.count + r.result.count <= Item.getMaxStack(slotResult.id))) {
                    if (!r.dop || (slotResultDop.id === 0 || (slotResultDop.id === r.dop.id && slotResultDop.data === r.dop.data && slotResultDop.count + r.dop.count <= Item.getMaxStack(slotResultDop.id)))) {
                        slotResult.count = !slotResult.id ? r.result.count : slotResult.count + r.result.count;
                        slotResult.id = r.result.id;
                        slotResult.data = r.result.data;

                        if (r.dop && (!r.dop.chance || Math.random() < r.dop.chance)) {
                            slotResultDop.count = !slotResultDop.id ? r.dop.count : slotResultDop.count + r.dop.count;
                            slotResultDop.id = r.dop.id;
                            slotResultDop.data = r.dop.data;
                        }

                        slotSource.count -= 1;
                        this.data.progress = 0;
                    }
                }
            } else {
                this.data.progress++;
				
				Music.playSound('pulverizer.ogg');
            }
        } else if (slotSource.id && PulverizerRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_TIME);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});
        




// file: blocks/machines/red_furnace.js

IDRegistry.genBlockID("RedFurnace");
Block.createBlockWithRotation("RedFurnace", [
    {
        name: "Red Furnace",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_furnace", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.RedFurnace, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.MachineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.RedstoneReceptionCoil, 0]);
});

var guiRedFurnace = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Red Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotResult": {type: "slot", x: 625, y: 142}
    }
});
MachineRegistry.register(BlockID.RedFurnace, {

    ENERGY_CONSUME: 20,
    PROGRESS_MAX: 150,

    defaultValues: {
        progress: 0
    },

    getGuiScreen: function () {
        return guiRedFurnace;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult"]};
    },

    tick: function () {
        var slotSource = this.container.getSlot("slotSource");
        var slotResult = this.container.getSlot("slotResult");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_MAX) {
                var result = Recipes.getFurnaceRecipeResult(slotSource.id, "iron");
                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + 1 <= Item.getMaxStack(slotResult.id))) {
                    slotResult.count = !slotResult.id ? 1 : slotResult.count + 1;
                    slotResult.id = result.id;
                    slotResult.data = result.data;
					
					Music.playSound('furnace.ogg');
					
                    slotSource.count -= 1;
                    this.data.progress = 0;
                }
            } else {
                this.data.progress++;
				
				Music.playSound('furnace.ogg');
            }
        } else if (slotSource.id && Recipes.getFurnaceRecipeResult(slotSource.id, "iron")) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});




// file: blocks/machines/sawmill.js

IDRegistry.genBlockID("sawmill");
Block.createBlockWithRotation("sawmill", [
    {
        name: "Sawmill",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["Machine_Face_Sawmill", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.sawmill, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.MachineFrameBasic, 0, 'x', 5, 0, 'a', 258, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.RedstoneReceptionCoil, 0]);
});

var guisawmill = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Sawmill"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 460, y: 210, bitmap: "sawmill_bar_baground", scale: 3.2},
        {type: "bitmap", x: 530, y: 146, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {
            type: "scale",
            x: 530,
            y: 146,
            direction: 0,
            value: 0.5,
            bitmap: "pulverizer_bar_scale",
            scale: 3.2
        },
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 449, y: 142},
        "slotResult": {type: "slot", x: 625, y: 102},
        "slotResultDop": {type: "slot", x: 625, y: 165}
    }
});

MachineRegistry.register(BlockID.sawmill, {

    PROGRESS_TIME: 130,
    ENERGY_CONSUME: 20,

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guisawmill;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult", "slotResultDop"]};
    },

    tick: function(){
        var slotSource = this.container.getSlot("slotSource");
        var slotResult = this.container.getSlot("slotResult");
        var slotResultDop = this.container.getSlot("slotResultDop");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }
            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_TIME) {
                var r = SawmillRecipes.getResult(slotSource.id, slotSource.data);
                if (slotResult.id === 0 || (slotResult.id === r.result.id && slotResult.data === r.result.data && slotResult.count + r.result.count <= Item.getMaxStack(slotResult.id))) {
                    if (!r.dop || (slotResultDop.id === 0 || (slotResultDop.id === r.dop.id && slotResultDop.data === r.dop.data && slotResultDop.count + r.dop.count <= Item.getMaxStack(slotResultDop.id)))) {
                        slotResult.count = !slotResult.id ? r.result.count : slotResult.count + r.result.count;
                        slotResult.id = r.result.id;
                        slotResult.data = r.result.data;

                        if (r.dop && (!r.dop.chance || Math.random() < r.dop.chance)) {
                            slotResultDop.count = !slotResultDop.id ? r.dop.count : slotResultDop.count + r.dop.count;
                            slotResultDop.id = r.dop.id;
                            slotResultDop.data = r.dop.data;
                        }
						
						
                        slotSource.count -= 1;
                        this.data.progress = 0;
                    }
                }
            } else {
                this.data.progress++;
				
				Music.playSound('sawmill.ogg');
            }
        } else if (slotSource.id && SawmillRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_TIME);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});




// file: blocks/machines/magma_crucible.js

IDRegistry.genBlockID("MagmaCrucible");
Block.createBlockWithRotation("MagmaCrucible", [
    {
        name: "Magma Tigel",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_crucible", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.MagmaCrucible, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.MachineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.RedstoneReceptionCoil, 0]);
});

var guiMagmaCrucible = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Magma Crucible"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
            {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
            {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
            {type: "bitmap", x: 640, y: 80, bitmap: "fluid_scale", scale: 3.2}
        ],

        elements: {
            "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
            "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
            "liquidScale": {type: "scale", x: 643, y: 83, direction: 1, bitmap: "fluid_scale", scale: 3.2},

            "slotSource": {type: "slot", x: 441, y: 142}
        }
});

MachineRegistry.register(BlockID.MagmaCrucible, {

    ENERGY_CONSUME: 20,

    defaultValues: {
        progress: 0, 
        progressMax: 0
    },

    getGuiScreen: function () {
        return guiMagmaCrucible;
    },

    init: function () {
        this.liquidStorage.setLimit(null, 10);
    },

	 tick: function () {
    	var slot = this.container.getSlot("slotSource");
        if(this.data.progress){
        	
            if(!slot.id) {
            	this.data.progress = 0;
                return
            }
        	if(this.data.energy >= this.ENERGY_CONSUME){
        	    this.data.energy -= this.ENERGY_CONSUME;
            }else {
            	return
            }
			if(slot.id > 0){
            this.data.progress++;
			 Music.playSound('crucible.ogg');
            if(this.data.progress >= this.data.progressMax){
            	var recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                var fluid = this.liquidStorage.getLiquidStored();
                 if(!fluid || (fluid == recipe.fluid && this.liquidStorage.getAmount(fluid) + recipe.fluidAmount <= 10)){
                 	this.liquidStorage.addLiquid(recipe.fluid, recipe.fluidAmount);
            	     
					 this.data.progress = 0;
					 
                     slot.count--;
                     this.container.validateAll();
				    } 
                 }
             } 
        }else{
            
            if(slot.id > 0){
            	var recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                if(recipe) {
                    this.data.progress = 1;
                    this.data.progressMax = recipe.time;
                }
            }
        }
        
        this.liquidStorage.updateUiScale("liquidScale", this.liquidStorage.getLiquidStored());
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    },

    getEnergyStorage: function () {
        return 15000;
    }
});




// file: core/fluid.js

LiquidRegistry.registerLiquid("steam", "Steam", ["fluid_steam"]);

LiquidRegistry.registerLiquid("redstone", "Destabilized Redstone", ["fluid_redstone"]);

LiquidRegistry.registerLiquid("glowstone", "Destabilized Glowstone", ["fluid_glowstone"]);

LiquidRegistry.registerLiquid("enderium", "Destabilized Enderium", ["fluid_enderium"]);




// file: core/materials.js

ToolAPI.addToolMaterial("copper", {durability: 175, level: 1, efficiency: 4, damage: 1, enchantability: 6});
ToolAPI.addToolMaterial("tin", {durability: 200, level: 1, efficiency: 5, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("silver", {durability: 200, level: 2, efficiency: 6, damage: 2, enchantability: 20});
ToolAPI.addToolMaterial("lead", {durability: 150, level: 1, efficiency: 5, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("aluminum", {durability: 225, level: 1, efficiency: 10, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("nickel", {durability: 300, level: 2, efficiency: 6, damage: 2, enchantability: 18});
ToolAPI.addToolMaterial("platinum", {durability: 1700, level: 4, efficiency: 9, damage: 4, enchantability: 9});
ToolAPI.addToolMaterial("steel", {durability: 500, level: 2, efficiency: 6, damage: 2, enchantability: 10});
ToolAPI.addToolMaterial("electrum", {durability: 100, level: 0, efficiency: 14, damage: 1, enchantability: 30});
ToolAPI.addToolMaterial("invar", {durability: 450, level: 2, efficiency: 7, damage: 3, enchantability: 16});
ToolAPI.addToolMaterial("bronze", {durability: 500, level: 2, efficiency: 6, damage: 2, enchantability: 15});
ToolAPI.addToolMaterial("constantan", {durability: 275, level: 2, efficiency: 6, damage: 2, enchantability: 20});

IDRegistry.genItemID("craftingHammer");
Item.createItem("craftingHammer", "Crafting hammer", {name: "hammer", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.craftingHammer, CRAFTING_TOOL_ITEM_MAX_DAMAGE);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: ItemID.craftingHammer, count: 1, data: 0}, [
        "bbb",
        "bab",
        " a "
    ], ['a', 280, 0, 'b', 265, 0]);

});




// file: integration/ic.js

/* INDUSTRIAL CRAFT INTEGRATION FILE */

ModAPI.addAPICallback("ICore", function (api) {
    industrial_loaded = true;
});




// file: items/coils.js

IDRegistry.genItemID("RedstoneReceptionCoil");
            Item.createItem("RedstoneReceptionCoil", "Redstone Reception Coil", {
                name: "RedstoneReceptionCoil",
                meta: 0
            }, {stack: 1});
            
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.RedstoneReceptionCoil, count: 1, data: 0}, [
                "aa1",
                "a2a",
                "1aa"
            ], ['1', 331, 0, '2', 266, 0]);
});




// file: items/tools.js

IDRegistry.genItemID("thermalWrench");
Item.createItem("thermalWrench", " Wrench", {name: "wrench", meta: 0}, {stack: 1});

Item.registerUseFunction("thermalWrench", function (coords) {
    var tile = World.getTileEntity(coords.x, coords.y, coords.z, 35);

    if (tile && tile.onWrenched) {
        tile.onWrenched();
    }
});




// file: items/others/dust.js

IDRegistry.genItemID("dustBronze");
Item.createItem("dustBronze", "Bronze dust", {name:"dust_bronze",meta:0}, {});

IDRegistry.genItemID("dustCharcoal");
Item.createItem("dustCharcoal", "Charcoal dust", {name:"dust_charcoal",meta:0}, {});

IDRegistry.genItemID("dustCoal");
Item.createItem("dustCoal", "Coal dust", {name:"dust_coal",meta:0}, {});

IDRegistry.genItemID("dustConstantan");
Item.createItem("dustConstantan", "Constantan dust", {name:"dust_constantan",meta:0}, {});

IDRegistry.genItemID("dustCopper");
Item.createItem("dustCopper", "Copper dust", {name:"dust_copper",meta:0}, {});

IDRegistry.genItemID("dustElectrum");
Item.createItem("dustElectrum", "Electrum dust", {name:"dust_electrum",meta:0}, {});

IDRegistry.genItemID("dustEnderium");
Item.createItem("dustEnderium", "Enderium dust", {name:"dust_enderium",meta:0}, {});

IDRegistry.genItemID("dustGold");
Item.createItem("dustGold", "Gold dust", {name:"dust_gold",meta:0}, {});

IDRegistry.genItemID("dustInvar");
Item.createItem("dustInvar", "Invar dust", {name:"dust_invar",meta:0}, {});

IDRegistry.genItemID("dustIridium");
Item.createItem("dustIridium", "Iridium dust", {name:"dust_iridium",meta:0}, {});

IDRegistry.genItemID("dustIron");
Item.createItem("dustIron", "Iron dust", {name:"dust_iron",meta:0}, {});

IDRegistry.genItemID("dustLead");
Item.createItem("dustLead", "Lead dust", {name:"dust_lead",meta:0}, {});

IDRegistry.genItemID("dustLumium");
Item.createItem("dustLumium", "Lumium dust", {name:"dust_lumium",meta:0}, {});

IDRegistry.genItemID("dustMithril");
Item.createItem("dustMithril", "Mithril dust", {name:"dust_mithril",meta:0}, {});

IDRegistry.genItemID("dustNickel");
Item.createItem("dustNickel", "Nickel dust", {name:"dust_nickel",meta:0}, {});

IDRegistry.genItemID("dustNiter");
Item.createItem("dustNiter", "Niter dust", {name:"dust_niter",meta:0}, {});

IDRegistry.genItemID("dustObsidian");
Item.createItem("dustObsidian", "Obsidian dust", {name:"dust_obsidian",meta:0}, {});

IDRegistry.genItemID("dustPlatinum");
Item.createItem("dustPlatinum", "Platinum dust", {name:"dust_platinum",meta:0}, {});

IDRegistry.genItemID("dustSignalum");
Item.createItem("dustSignalum", "Signalum dust", {name:"dust_signalum",meta:0}, {});

IDRegistry.genItemID("dustSilver");
Item.createItem("dustSilver", "Silver dust", {name:"dust_silver",meta:0}, {});

IDRegistry.genItemID("dustSteel");
Item.createItem("dustSteel", "Steel dust", {name:"dust_steel",meta:0}, {});

IDRegistry.genItemID("dustSulfur");
Item.createItem("dustSulfur", "Sulfur dust", {name:"dust_sulfur",meta:0}, {});

IDRegistry.genItemID("dustTin");
Item.createItem("dustTin", "Tin dust", {name:"dust_tin",meta:0}, {});

IDRegistry.genItemID("dustWood");
Item.createItem("dustWood", "Wood dust", {name:"dust_wood",meta:0}, {});

IDRegistry.genItemID("fertilizerBasic");
Item.createItem("fertilizerBasic", "Fertilizer basic", {name:"fertilizer_basic",meta:0}, {});

IDRegistry.genItemID("fertilizerRich");
Item.createItem("fertilizerRich", "Fertilizer rich", {name:"fertilizer_rich",meta:0}, {});




// file: items/others/gears.js

IDRegistry.genItemID("gearAluminum");
Item.createItem("gearAluminum", "Aluminum gear", {name:"gear_aluminum",meta:0}, {});

IDRegistry.genItemID("gearBronze");
Item.createItem("gearBronze", "Bronze gear", {name:"gear_bronze",meta:0}, {});

IDRegistry.genItemID("gearConstantan");
Item.createItem("gearConstantan", "Constantan gear", {name:"gear_constantan",meta:0}, {});

IDRegistry.genItemID("gearCopper");
Item.createItem("gearCopper", "Copper gear", {name:"gear_copper",meta:0}, {});

IDRegistry.genItemID("gearElectrum");
Item.createItem("gearElectrum", "Electrum gear", {name:"gear_electrum",meta:0}, {});

IDRegistry.genItemID("gearEnderium");
Item.createItem("gearEnderium", "Enderium gear", {name:"gear_enderium",meta:0}, {});

IDRegistry.genItemID("gearGold");
Item.createItem("gearGold", "Gold gear", {name:"gear_gold",meta:0}, {});

IDRegistry.genItemID("gearInvar");
Item.createItem("gearInvar", "Invar gear", {name:"gear_invar",meta:0}, {});

IDRegistry.genItemID("gearIridium");
Item.createItem("gearIridium", "Iridium gear", {name:"gear_iridium",meta:0}, {});

IDRegistry.genItemID("gearIron");
Item.createItem("gearIron", "Iron gear", {name:"gear_iron",meta:0}, {});

IDRegistry.genItemID("gearLead");
Item.createItem("gearLead", "Lead gear", {name:"gear_lead",meta:0}, {});

IDRegistry.genItemID("gearLumium");
Item.createItem("gearLumium", "Lumium gear", {name:"gear_lumium",meta:0}, {});

IDRegistry.genItemID("gearMithril");
Item.createItem("gearMithril", "Mithril gear", {name:"gear_mithril",meta:0}, {});

IDRegistry.genItemID("gearNickel");
Item.createItem("gearNickel", "Nickel gear", {name:"gear_nickel",meta:0}, {});

IDRegistry.genItemID("gearPlatinum");
Item.createItem("gearPlatinum", "Platinum gear", {name:"gear_platinum",meta:0}, {});

IDRegistry.genItemID("gearSignalum");
Item.createItem("gearSignalum", "Signalum gear", {name:"gear_signalum",meta:0}, {});

IDRegistry.genItemID("gearSilver");
Item.createItem("gearSilver", "Silver gear", {name:"gear_silver",meta:0}, {});

IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel", "Steel gear", {name:"gear_steel",meta:0}, {});

IDRegistry.genItemID("gearTin");
Item.createItem("gearTin", "Tin gear", {name:"gear_tin",meta:0}, {});

Callback.addCallback("PostLoaded", function(){

    Recipes.addShaped({id: ItemID.gearAluminum, count: 1, data: 0}, [
        " f ",
        "fdf",
        " f "
    ], ['f', ItemID.ingotAluminum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearBronze, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotBronze, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearConstantan, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotConstantan, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearCopper, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotCopper, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearElectrum, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotElectrum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearEnderium, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotEnderium, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearGold, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', 266, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearInvar, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotInvar, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearIridium, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotIridium, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearIron, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', 265, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearLead, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotLead, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearLumium, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotLumium, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearMithril, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotMithril, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearNickel, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotNickel, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearPlatinum, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotPlatinum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearSignalum, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotSignalum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearSilver, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotSilver, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearSteel, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotSteel, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearTin, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotTin, 0, 'd', 265, 0]);

});




// file: items/others/ingots.js

IDRegistry.genItemID("ingotAluminum");
Item.createItem("ingotAluminum", "Aluminum ingot", {name:"ingot_aluminum",meta:0}, {});

IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "Bronze ingot", {name:"ingot_bronze",meta:0}, {});

IDRegistry.genItemID("ingotConstantan");
Item.createItem("ingotConstantan", "Constantan ingot", {name:"ingot_constantan",meta:0}, {});

IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper ingot", {name:"ingot_copper",meta:0}, {});

IDRegistry.genItemID("ingotElectrum");
Item.createItem("ingotElectrum", "Electrum ingot", {name:"ingot_electrum",meta:0}, {});

IDRegistry.genItemID("ingotEnderium");
Item.createItem("ingotEnderium", "Enderium ingot", {name:"ingot_enderium",meta:0}, {});

IDRegistry.genItemID("ingotInvar");
Item.createItem("ingotInvar", "Invar ingot", {name:"ingot_invar",meta:0}, {});

IDRegistry.genItemID("ingotIridium");
Item.createItem("ingotIridium", "Iridium ingot", {name:"ingot_iridium",meta:0}, {});

IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead", "Lead ingot", {name:"ingot_lead",meta:0}, {});

IDRegistry.genItemID("ingotLumium");
Item.createItem("ingotLumium", "Lumium ingot", {name:"ingot_lumium",meta:0}, {});

IDRegistry.genItemID("ingotMithril");
Item.createItem("ingotMithril", "Mithril ingot", {name:"ingot_mithril",meta:0}, {});

IDRegistry.genItemID("ingotNickel");
Item.createItem("ingotNickel", "Nickel ingot", {name:"ingot_nickel",meta:0}, {});

IDRegistry.genItemID("ingotPlatinum");
Item.createItem("ingotPlatinum", "Platinum ingot", {name:"ingot_platinum",meta:0}, {});

IDRegistry.genItemID("ingotSignalum");
Item.createItem("ingotSignalum", "Signalum ingot", {name:"ingot_signalum",meta:0}, {});

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver ingot", {name:"ingot_silver",meta:0}, {});

IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Steel ingot", {name:"ingot_steel",meta:0}, {});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin ingot", {name:"ingot_tin",meta:0}, {});

Callback.addCallback("PostLoaded", function(){

    Recipes.addShaped({id: ItemID.ingotAluminum, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetAluminum, 0]);
    
    Recipes.addShaped({id: ItemID.ingotBronze, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetBronze, 0]);
    
    Recipes.addShaped({id: ItemID.ingotConstantan, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetConstantan, 0]);
    
    Recipes.addShaped({id: ItemID.ingotCopper, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetCopper, 0]);
    
    Recipes.addShaped({id: 264, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetDiamond, 0]);
    
    Recipes.addShaped({id: ItemID.ingotElectrum, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetElectrum, 0]);
    
    Recipes.addShaped({id: ItemID.ingotEnderium, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetEnderium, 0]);
    
    Recipes.addShaped({id: ItemID.ingotInvar, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetInvar, 0]);
    
    Recipes.addShaped({id: ItemID.ingotIridium, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetIridium, 0]);
    
    Recipes.addShaped({id: 265, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetIron, 0]);
    
    Recipes.addShaped({id: ItemID.ingotLead, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetLead, 0]);
    
    Recipes.addShaped({id: ItemID.ingotLumium, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetLumium, 0]);
    
    Recipes.addShaped({id: ItemID.ingotMithril, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetMithril, 0]);
    
    Recipes.addShaped({id: ItemID.ingotNickel, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetNickel, 0]);
    
    Recipes.addShaped({id: ItemID.ingotPlatinum, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetPlatinum, 0]);
    
    Recipes.addShaped({id: ItemID.ingotSignalum, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetSignalum, 0]);
    
    Recipes.addShaped({id: ItemID.ingotSilver, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetSilver, 0]);
    
    Recipes.addShaped({id: ItemID.ingotSteel, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetSteel, 0]);
    
    Recipes.addShaped({id: ItemID.ingotTin, count: 1, data: 0}, [
    				"aaa",
    				"aaa",
    				"aaa"
    ], ['a', ItemID.nuggetTin, 0]);

});




// file: items/others/nuggets.js

IDRegistry.genItemID("nuggetAluminum");
Item.createItem("nuggetAluminum", "Aluminum nugget", {name:"nugget_aluminum",meta:0}, {});

IDRegistry.genItemID("nuggetBronze");
Item.createItem("nuggetBronze", "Bronze nugget", {name:"nugget_bronze",meta:0}, {});

IDRegistry.genItemID("nuggetConstantan");
Item.createItem("nuggetConstantan", "Constantan nugget", {name:"nugget_constantan",meta:0}, {});

IDRegistry.genItemID("nuggetCopper");
Item.createItem("nuggetCopper", "Copper nugget", {name:"nugget_copper",meta:0}, {});

IDRegistry.genItemID("nuggetDiamond");
Item.createItem("nuggetDiamond", "Diamond nugget", {name:"nugget_diamond",meta:0}, {});

IDRegistry.genItemID("nuggetElectrum");
Item.createItem("nuggetElectrum", "Electrum nugget", {name:"nugget_electrum",meta:0}, {});

IDRegistry.genItemID("nuggetEnderium");
Item.createItem("nuggetEnderium", "Enderium nugget", {name:"nugget_enderium",meta:0}, {});

IDRegistry.genItemID("nuggetInvar");
Item.createItem("nuggetInvar", "Invar nugget", {name:"nugget_invar",meta:0}, {});

IDRegistry.genItemID("nuggetIridium");
Item.createItem("nuggetIridium", "Iridium nugget", {name:"nugget_iridium",meta:0}, {});

IDRegistry.genItemID("nuggetIron");
Item.createItem("nuggetIron", "Iron nugget", {name:"nugget_iron",meta:0}, {});

IDRegistry.genItemID("nuggetLead");
Item.createItem("nuggetLead", "Lead nugget", {name:"nugget_lead",meta:0}, {});

IDRegistry.genItemID("nuggetLumium");
Item.createItem("nuggetLumium", "Lumium nugget", {name:"nugget_lumium",meta:0}, {});

IDRegistry.genItemID("nuggetMithril");
Item.createItem("nuggetMithril", "Mithril nugget", {name:"nugget_mithril",meta:0}, {});

IDRegistry.genItemID("nuggetNickel");
Item.createItem("nuggetNickel", "Nickel nugget", {name:"nugget_nickel",meta:0}, {});

IDRegistry.genItemID("nuggetPlatinum");
Item.createItem("nuggetPlatinum", "Platinum nugget", {name:"nugget_platinum",meta:0}, {});

IDRegistry.genItemID("nuggetSignalum");
Item.createItem("nuggetSignalum", "Signalum nugget", {name:"nugget_signalum",meta:0}, {});

IDRegistry.genItemID("nuggetSilver");
Item.createItem("nuggetSilver", "Silver nugget", {name:"nugget_silver",meta:0}, {});

IDRegistry.genItemID("nuggetSteel");
Item.createItem("nuggetSteel", "Steel nugget", {name:"nugget_steel",meta:0}, {});

IDRegistry.genItemID("nuggetTin");
Item.createItem("nuggetTin", "Tin nugget", {name:"nugget_tin",meta:0}, {});

Callback.addCallback("PostLoaded", function(){

    Recipes.addShapeless({id: ItemID.nuggetAluminum, count: 9, data: 0}, [{id: ItemID.ingotAluminum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetBronze, count: 9, data: 0}, [{id: ItemID.ingotBronze, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetConstantan, count: 9, data: 0}, [{id: ItemID.ingotConstantan, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetCopper, count: 9, data: 0}, [{id: ItemID.ingotCopper, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetDiamond, count: 9, data: 0}, [{id: 264, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetElectrum, count: 9, data: 0}, [{id: ItemID.ingotElectrum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetEnderium, count: 9, data: 0}, [{id: ItemID.ingotEnderium, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetInvar, count: 9, data: 0}, [{id: ItemID.ingotInvar, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetIridium, count: 9, data: 0}, [{id: ItemID.ingotIridium, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetIron, count: 9, data: 0}, [{id: 264, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetLead, count: 9, data: 0}, [{id: ItemID.ingotLead, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetLumium, count: 9, data: 0}, [{id: ItemID.ingotLumium, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetMithril, count: 9, data: 0}, [{id: ItemID.ingotMithril, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetNickel, count: 9, data: 0}, [{id: ItemID.ingotNickel, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetPlatinum, count: 9, data: 0}, [{id: ItemID.ingotPlatinum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetSignalum, count: 9, data: 0}, [{id: ItemID.ingotSignalum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetSilver, count: 9, data: 0}, [{id: ItemID.ingotSilver, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetSteel, count: 9, data: 0}, [{id: ItemID.ingotSteel, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetTin, count: 9, data: 0}, [{id: ItemID.ingotTin, data: 0}]);

});




// file: items/others/plates.js

IDRegistry.genItemID("plateAluminum");
Item.createItem("plateAluminum", "Aluminum plate", {name:"plate_aluminum",meta:0}, {});

IDRegistry.genItemID("plateBronze");
Item.createItem("plateBronze", "Bronze plate", {name:"plate_bronze",meta:0}, {});

IDRegistry.genItemID("plateConstantan");
Item.createItem("plateConstantan", "Constantan plate", {name:"plate_constantan",meta:0}, {});

IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper", "Copper plate", {name:"plate_copper",meta:0}, {});

IDRegistry.genItemID("plateElectrum");
Item.createItem("plateElectrum", "Electrum plate", {name:"plate_electrum",meta:0}, {});

IDRegistry.genItemID("plateEnderium");
Item.createItem("plateEnderium", "Enderium plate", {name:"plate_enderium",meta:0}, {});

IDRegistry.genItemID("plateGold");
Item.createItem("plateGold", "Gold plate", {name:"plate_gold",meta:0}, {});

IDRegistry.genItemID("plateInvar");
Item.createItem("plateInvar", "Invar plate", {name:"plate_invar",meta:0}, {});

IDRegistry.genItemID("plateIridium");
Item.createItem("plateIridium", "Iridium plate", {name:"plate_iridium",meta:0}, {});

IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron plate", {name:"plate_iron",meta:0}, {});

IDRegistry.genItemID("plateLead");
Item.createItem("plateLead", "Lead plate", {name:"plate_lead",meta:0}, {});

IDRegistry.genItemID("plateLumium");
Item.createItem("plateLumium", "Lumium plate", {name:"plate_lumium",meta:0}, {});

IDRegistry.genItemID("plateMithril");
Item.createItem("plateMithril", "Mithril plate", {name:"plate_mithril",meta:0}, {});

IDRegistry.genItemID("plateNickel");
Item.createItem("plateNickel", "Nickel plate", {name:"plate_nickel",meta:0}, {});

IDRegistry.genItemID("platePlatinum");
Item.createItem("platePlatinum", "Platinum plate", {name:"plate_platinum",meta:0}, {});

IDRegistry.genItemID("plateSignalum");
Item.createItem("plateSignalum", "Signalum plate", {name:"plate_signalum",meta:0}, {});

IDRegistry.genItemID("plateSilver");
Item.createItem("plateSilver", "Silver plate", {name:"plate_silver",meta:0}, {});

IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel", "Steel plate", {name:"plate_steel",meta:0}, {});

IDRegistry.genItemID("plateTin");
Item.createItem("plateTin", "Tin plate", {name:"plate_tin",meta:0}, {});

Callback.addCallback("PostLoaded", function(){
	addRecipeWithCraftingTool({id: ItemID.plateAluminum, count: 1, data: 0}, [{id: ItemID.ingotAluminum, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateConstantan, count: 1, data: 0}, [{id: ItemID.ingotConstantan, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateElectrum, count: 1, data: 0}, [{id: ItemID.ingotElectrum, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateEnderium, count: 1, data: 0}, [{id: ItemID.ingotEnderium, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateGold, count: 1, data: 0}, [{id: 266, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateInvar, count: 1, data: 0}, [{id: ItemID.ingotInvar, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateIridium, count: 1, data: 0}, [{id: ItemID.ingotIridium, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{id: 265, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateLead, count: 1, data: 0}, [{id: ItemID.ingotLead, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateLumium, count: 1, data: 0}, [{id: ItemID.ingotLumium, data: 0}], ItemID.craftingHammer);
	
	addRecipeWithCraftingTool({id: ItemID.plateMithril, count: 1, data: 0}, [{id: ItemID.ingotMithril, data: 0}], ItemID.craftingHammer);

	addRecipeWithCraftingTool({id: ItemID.plateNickel, count: 1, data: 0}, [{id: ItemID.ingotNickel, data: 0}], ItemID.craftingHammer);
	
    addRecipeWithCraftingTool({id: ItemID.platePlatinum, count: 1, data: 0}, [{id: ItemID.ingotPlatinum, data: 0}], ItemID.craftingHammer);	
	
	addRecipeWithCraftingTool({id: ItemID.plateSignalum, count: 1, data: 0}, [{id: ItemID.ingotSignalum, data: 0}], ItemID.craftingHammer);	
	
	addRecipeWithCraftingTool({id: ItemID.plateSignalum, count: 1, data: 0}, [{id: ItemID.ingotSignalum, data: 0}], ItemID.craftingHammer);	
	
	addRecipeWithCraftingTool({id: ItemID.plateSilver, count: 1, data: 0}, [{id: ItemID.ingotSilver, data: 0}], ItemID.craftingHammer);

    addRecipeWithCraftingTool({id: ItemID.plateSteel, count: 1, data: 0}, [{id: ItemID.ingotSteel, data: 0}], ItemID.craftingHammer);		
	
	addRecipeWithCraftingTool({id: ItemID.plateTin, count: 1, data: 0}, [{id: ItemID.ingotTin, data: 0}], ItemID.craftingHammer);	
	
	
});




// file: items/others/armor/helmet.js

IDRegistry.genItemID("helmetCopper");
Item.createArmorItem("helmetCopper", "Copper helmet", {name: "helmet_copper"}, {
    type: "helmet",
    armor: 1,
    durability: 66,
    texture: "armor/copper_1.png"
});

IDRegistry.genItemID("helmetTin");
Item.createArmorItem("helmetTin", "Tin helmet", {name: "helmet_tin"}, {
    type: "helmet",
    armor: 1,
    durability: 88,
    texture: "armor/tin_1.png"
});

IDRegistry.genItemID("helmetLead");
Item.createArmorItem("helmetLead", "Lead helmet", {name: "helmet_lead"}, {
    type: "helmet",
    armor: 2,
    durability: 165,
    texture: "armor/lead_1.png"
});

IDRegistry.genItemID("helmetSilver");
Item.createArmorItem("helmetSilver", "Silver helmet", {name: "helmet_silver"}, {
    type: "helmet",
    armor: 2,
    durability: 121,
    texture: "armor/silver_1.png"
});

IDRegistry.genItemID("helmetNickel");
Item.createArmorItem("helmetNickel", "Nickel helmet", {name: "helmet_nickel"}, {
    type: "helmet",
    armor: 1,
    durability: 165,
    texture: "armor/nickel_1.png"
});

IDRegistry.genItemID("helmetPlatinum");
Item.createArmorItem("helmetPlatinum", "Platinum helmet", {name: "helmet_platinum"}, {
    type: "helmet",
    armor: 3,
    durability: 440,
    texture: "armor/platinum_1.png"
});

IDRegistry.genItemID("helmetElectrum");
Item.createArmorItem("helmetElectrum", "Electrum helmet", {name: "helmet_electrum"}, {
    type: "helmet",
    armor: 2,
    durability: 88,
    texture: "armor/electrum_1.png"
});

IDRegistry.genItemID("helmetBronze");
Item.createArmorItem("helmetBronze", "Bronze helmet", {name: "helmet_bronze"}, {
    type: "helmet",
    armor: 2,
    durability: 198,
    texture: "armor/bronze_1.png"
});

IDRegistry.genItemID("helmetInvar");
Item.createArmorItem("helmetInvar", "Invar helmet", {name: "helmet_invar"}, {
    type: "helmet",
    armor: 2,
    durability: 231,
    texture: "armor/invar_1.png"
});

IDRegistry.genItemID("helmetSteel");
Item.createArmorItem("helmetSteel", "Steel helmet", {name: "helmet_steel"}, {
    type: "helmet",
    armor: 2,
    durability: 242,
    texture: "armor/steel_1.png"
});

IDRegistry.genItemID("helmetConstantan");
Item.createArmorItem("helmetConstantan", "Constantan helmet", {name: "helmet_constantan"}, {
    type: "helmet",
    armor: 2,
    durability: 143,
    texture: "armor/constantan_1.png"
});

IDRegistry.genItemID("helmetAluminum");
Item.createArmorItem("helmetAluminum", "Aluminum helmet", {name: "helmet_aluminum"}, {
    type: "helmet",
    armor: 1,
    durability: 132,
    texture: "armor/aluminum_1.png"
});




// file: items/others/armor/chestplate.js

IDRegistry.genItemID("chestplateCopper");
Item.createArmorItem("chestplateCopper", "Copper chestplate", {name: "chestplate_copper"}, {type: "chestplate", armor: 3, durability: 96, texture: "armor/copper_1.png"});

IDRegistry.genItemID("chestplateTin");
Item.createArmorItem("chestplateTin", "Tin chestplate", {name: "chestplate_tin"}, {type: "chestplate", armor: 3, durability: 128, texture: "armor/tin_1.png"});

IDRegistry.genItemID("chestplateSilver");
Item.createArmorItem("chestplateSilver", "Silver chestplate", {name: "chestplate_silver"}, {type: "chestplate", armor: 4, durability: 176, texture: "armor/silver_1.png"});


IDRegistry.genItemID("chestplateAluminum");
Item.createArmorItem("chestplateAluminum", "Aluminum chestplate", {name: "chestplate_aluminum"}, {type: "chestplate", armor: 3, durability: 192, texture: "armor/aluminum_1.png"});

IDRegistry.genItemID("chestplateNickel");
Item.createArmorItem("chestplateNickel", "Nickel chestplate", {name: "chestplate_nickel"}, {type: "chestplate", armor: 5, durability: 240, texture: "armor/nickel_1.png"});

IDRegistry.genItemID("chestplatePlatinum");
Item.createArmorItem("chestplatePlatinum", "Platinum chestplate", {name: "chestplate_platinum"}, {type: "chestplate", armor: 6, durability: 640, texture: "armor/platinum_1.png"});

IDRegistry.genItemID("chestplateSteel");
Item.createArmorItem("chestplateSteel", "Steel Chestplate", {name: "chestplate_steel"}, {type: "chestplate", armor: 5, durability: 352, texture: "armor/steel_1.png"});


IDRegistry.genItemID("chestplateElectrum");
Item.createArmorItem("chestplateElectrum", "Electrum chestplate", {name: "chestplate_electrum"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/electrum_1.png"});

IDRegistry.genItemID("chestplateInvar");
Item.createArmorItem("chestplateInvar", "Invar chestplate", {name: "chestplate_invar"}, {type: "chestplate", armor: 5, durability: 336, texture: "armor/invar_1.png"});

IDRegistry.genItemID("chestplateBronze");
Item.createArmorItem("chestplateBronze", "Bronze chestplate", {name: "chestplate_bronze"}, {type: "chestplate", armor: 6, durability: 228, texture:  "armor/bronze_1.png"});

IDRegistry.genItemID("chestplateConstantan");
Item.createArmorItem("chestplateConstantan", "Constantan chestplate", {name: "chestplate_constantan"}, {type: "chestplate", armor: 4, durability: 208, texture:  "armor/constantan_1.png"});





// file: items/others/armor/leggings.js

IDRegistry.genItemID("leggingsCopper");
Item.createArmorItem("leggingsCopper", "Copper leggings", {name: "leggings_copper"}, {
    type: "leggings",
    armor: 3,
    durability: 90,
    texture: "armor/copper_2.png"
});

IDRegistry.genItemID("leggingsTin");
Item.createArmorItem("leggingsTin", "Tin leggings", {name: "leggings_tin"}, {
    type: "leggings",
    armor: 4,
    durability: 120,
    texture: "armor/tin_2.png"
});

IDRegistry.genItemID("leggingsSilver");
Item.createArmorItem("leggingsSilver", "Silver leggings", {name: "leggings_silver"}, {
    type: "leggings",
    armor: 4,
    durability: 165,
    texture: "armor/silver_2.png"
});

IDRegistry.genItemID("leggingsLead");
Item.createArmorItem("leggingsLead", "Lead leggings", {name: "leggings_lead"}, {
    type: "leggings",
    armor: 5,
    durability: 122,
    texture: "armor/lead_2.png"
});

IDRegistry.genItemID("leggingsAluminum");
Item.createArmorItem("leggingsAluminum", "Aluminum leggings", {name: "leggings_aluminum"}, {
    type: "leggings",
    armor: 4,
    durability: 180,
    texture: "armor/aluminum_2.png"
});

IDRegistry.genItemID("leggingsNickel");
Item.createArmorItem("leggingsNickel", "Nickel leggings", {name: "leggings_nickel"}, {
    type: "leggings",
    armor: 5,
    durability: 225,
    texture: "armor/nickel_2.png"
});

IDRegistry.genItemID("leggingsPlatinum");
Item.createArmorItem("leggingsPlatinum", "Platinum leggings", {name: "leggings_platinum"}, {
    type: "leggings",
    armor: 8,
    durability: 600,
    texture: "armor/platinum_2.png"
});

IDRegistry.genItemID("leggingsSteel");
Item.createArmorItem("leggingsSteel", "Steel leggings", {name: "leggings_steel"}, {
    type: "leggings",
    armor: 7,
    durability: 330,
    texture: "armor/steel_2.png"
});

IDRegistry.genItemID("leggingsElectrum");
Item.createArmorItem("leggingsElectrum", "Electrum leggings", {name: "leggings_electrum"}, {
    type: "leggings",
    armor: 4,
    durability: 120,
    texture: "armor/electrum_2.png"
});

IDRegistry.genItemID("leggingsInvar");
Item.createArmorItem("leggingsInvar", "Invar leggings", {name: "leggings_invar"}, {
    type: "leggings",
    armor: 7,
    durability: 270,
    texture: "armor/invar_2.png"
});

IDRegistry.genItemID("leggingsBronze");
Item.createArmorItem("leggingsBronze", "Bronze leggings", {name: "leggings_bronze"}, {
    type: "leggings",
    armor: 6,
    durability: 270,
    texture: "armor/bronze_2.png"
});

IDRegistry.genItemID("leggingsConstantan");
Item.createArmorItem("leggingsConstantan", "Constantan leggings", {name: "leggings_constantan"}, {
    type: "leggings",
    armor: 4,
    durability: 195,
    texture: "armor/constantan_2.png"
});




// file: items/others/armor/boots.js

IDRegistry.genItemID("bootsCopper");
Item.createArmorItem("bootsCopper", "Copper boots", {name: "boots_copper"}, {type: "boots", armor: 1, durability: 78, texture: "armor/copper_1.png"});

IDRegistry.genItemID("bootsTin");
Item.createArmorItem("bootsTin", "Tin boots", {name: "boots_tin"}, {type: "boots", armor: 1, durability: 104, texture: "armor/tin_1.png"});

IDRegistry.genItemID("bootsSilver");
Item.createArmorItem("bootsSilver", "Silver boots", {name: "boots_silver"}, {type: "boots", armor: 1, durability: 143, texture: "armor/silver_1.png"});

IDRegistry.genItemID("bootsLead");
Item.createArmorItem("bootsLead", "Lead boots", {name: "boots_lead"}, {type: "boots", armor: 1, durability: 195, texture: "armor/lead_1.png"});

IDRegistry.genItemID("bootsAluminum");
Item.createArmorItem("bootsAluminum", "Aluminum boots", {name: "boots_aluminum"}, {type: "boots", armor: 2, durability: 156, texture: "armor/aluminum_1.png"});


IDRegistry.genItemID("bootsNickel");
Item.createArmorItem("bootsNickel", "Nickel boots", {name: "boots_nickel"}, {type: "boots", armor: 2, durability: 195, texture: "armor/nickel_1.png"});


IDRegistry.genItemID("bootsPlatinum");
Item.createArmorItem("bootsPlatinum", "Platinum boots", {name: "boots_platinum"}, {type: "boots", armor: 3, durability: 520, texture: "armor/platinum_1.png"});

IDRegistry.genItemID("bootsSteel");
Item.createArmorItem("bootsSteel", "Steel boots", {name: "boots_steel"}, {type: "boots", armor: 2, durability: 286, texture: "armor/steel_1.png"});

IDRegistry.genItemID("bootsElectrum");
Item.createArmorItem("bootsElectrum", "Electrum boots", {name: "boots_electrum"}, {type: "boots", armor: 2, durability: 104, texture: "armor/electrum_1.png"});

IDRegistry.genItemID("bootsInvar");
Item.createArmorItem("bootsInvar", "Invar boots", {name: "boots_invar"}, {type: "boots", armor: 2, durability: 273, texture: "armor/invar_1.png"});

IDRegistry.genItemID("bootsBronze");
Item.createArmorItem("bootsBronze", "Bronze boots", {name: "boots_bronze"}, {type: "boots", armor: 2, durability: 234, texture: "armor/bronze_1.png"});

IDRegistry.genItemID("bootsConstantan");
Item.createArmorItem("bootsConstantan", "Constantan boots", {name: "boots_constantan"}, {type: "boots", armor: 2, durability: 169, texture: "armor/constantan_1.png"});




// file: items/others/tools/axe.js

IDRegistry.genItemID("axeAluminum");
Item.createItem("axeAluminum", "Aluminum axe", {name: "axe_aluminum", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeBronze");
Item.createItem("axeBronze", "Bronze axe", {name: "axe_bronze", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeConstantan");
Item.createItem("axeConstantan", "Constantan axe", {name: "axe_constantan", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeCopper");
Item.createItem("axeCopper", "Copper axe", {name: "axe_copper", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeElectrum");
Item.createItem("axeElectrum", "Electrum axe", {name: "axe_electrum", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeInvar");
Item.createItem("axeInvar", "Invar axe", {name: "axe_invar", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeLead");
Item.createItem("axeLead", "Lead axe", {name: "axe_lead", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeNickel");
Item.createItem("axeNickel", "Nickel axe", {name: "axe_nickel", meta: 0}, {stack: 1});

IDRegistry.genItemID("axePlatinum");
Item.createItem("axePlatinum", "Platinum axe", {name: "axe_platinum", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeSilver");
Item.createItem("axeSilver", "Silver axe", {name: "axe_silver", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeSteel");
Item.createItem("axeSteel", "Steel axe", {name: "axe_steel", meta: 0}, {stack: 1});

IDRegistry.genItemID("axeTin");
Item.createItem("axeTin", "Tin axe", {name: "axe_tin", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.axeAluminum, "aluminum", ToolType.axe);
ToolAPI.setTool(ItemID.axeBronze, "bronze", ToolType.axe);
ToolAPI.setTool(ItemID.axeConstantan, "constantan", ToolType.axe);
ToolAPI.setTool(ItemID.axeCopper, "copper", ToolType.axe);
ToolAPI.setTool(ItemID.axeElectrum, "electrum", ToolType.axe);
ToolAPI.setTool(ItemID.axeInvar, "invar", ToolType.axe);
ToolAPI.setTool(ItemID.axeLead, "lead", ToolType.axe);
ToolAPI.setTool(ItemID.axeNickel, "nickel", ToolType.axe);
ToolAPI.setTool(ItemID.axePlatinum, "platinum", ToolType.axe);
ToolAPI.setTool(ItemID.axeSilver, "silver", ToolType.axe);
ToolAPI.setTool(ItemID.axeSteel, "steel", ToolType.axe);
ToolAPI.setTool(ItemID.axeTin, "tin", ToolType.axe);




// file: items/others/tools/hoe.js

IDRegistry.genItemID("hoeAluminum");
Item.createItem("hoeAluminum", "Aluminum hoe", {name: "hoe_aluminum", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeBronze");
Item.createItem("hoeBronze", "Bronze hoe", {name: "hoe_bronze", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeConstantan");
Item.createItem("hoeConstantan", "Constantan hoe", {name: "hoe_constantan", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeCopper");
Item.createItem("hoeCopper", "Copper hoe", {name: "hoe_copper", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeElectrum");
Item.createItem("hoeElectrum", "Electrum hoe", {name: "hoe_electrum", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeInvar");
Item.createItem("hoeInvar", "Invar hoe", {name: "hoe_invar", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeLead");
Item.createItem("hoeLead", "Lead hoe", {name: "hoe_lead", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeNickel");
Item.createItem("hoeNickel", "Nickel hoe", {name: "hoe_nickel", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoePlatinum");
Item.createItem("hoePlatinum", "Platinum hoe", {name: "hoe_platinum", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeSilver");
Item.createItem("hoeSilver", "Silver hoe", {name: "hoe_silver", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeSteel");
Item.createItem("hoeSteel", "Steel hoe", {name: "hoe_steel", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoeTin");
Item.createItem("hoeTin", "Tin hoe", {name: "hoe_tin", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.hoeAluminum, "aluminum", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeBronze, "bronze", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeConstantan, "constantan", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeCopper, "copper", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeElectrum, "electrum", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeInvar, "invar", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeLead, "lead", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeNickel, "nickel", ToolType.hoe);
ToolAPI.setTool(ItemID.hoePlatinum, "platinum", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeSilver, "silver", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeSteel, "steel", ToolType.hoe);
ToolAPI.setTool(ItemID.hoeTin, "tin", ToolType.hoe);




// file: items/others/tools/pickaxe.js

IDRegistry.genItemID("pickaxeAluminum");
Item.createItem("pickaxeAluminum", "Aluminum pickaxe", {name: "pickaxe_aluminum", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeBronze");
Item.createItem("pickaxeBronze", "Bronze pickaxe", {name: "pickaxe_bronze", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeConstantan");
Item.createItem("pickaxeConstantan", "Constantan pickaxe", {name: "pickaxe_constantan", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeCopper");
Item.createItem("pickaxeCopper", "Copper pickaxe", {name: "pickaxe_copper", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeElectrum");
Item.createItem("pickaxeElectrum", "Electrum pickaxe", {name: "pickaxe_electrum", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeInvar");
Item.createItem("pickaxeInvar", "Invar pickaxe", {name: "pickaxe_invar", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeLead");
Item.createItem("pickaxeLead", "Lead pickaxe", {name: "pickaxe_lead", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeNickel");
Item.createItem("pickaxeNickel", "Nickel pickaxe", {name: "pickaxe_nickel", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxePlatinum");
Item.createItem("pickaxePlatinum", "Platinum pickaxe", {name: "pickaxe_platinum", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeSilver");
Item.createItem("pickaxeSilver", "Silver pickaxe", {name: "pickaxe_silver", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeSteel");
Item.createItem("pickaxeSteel", "Steel pickaxe", {name: "pickaxe_steel", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxeTin");
Item.createItem("pickaxeTin", "Tin pickaxe", {name: "pickaxe_tin", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.pickaxeAluminum, "aluminum", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeBronze, "bronze", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeConstantan, "constantan", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeCopper, "copper", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeElectrum, "electrum", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeInvar, "invar", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeLead, "lead", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeNickel, "nickel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxePlatinum, "platinum", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeSilver, "silver", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeSteel, "steel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pickaxeTin, "tin", ToolType.pickaxe);




// file: items/others/tools/shovel.js

IDRegistry.genItemID("shovelAluminum");
Item.createItem("shovelAluminum", "Aluminum shovel", {name: "shovel_aluminum", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelBronze");
Item.createItem("shovelBronze", "Bronze shovel", {name: "shovel_bronze", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelConstantan");
Item.createItem("shovelConstantan", "Constantan shovel", {name: "shovel_constantan", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelCopper");
Item.createItem("shovelCopper", "Copper shovel", {name: "shovel_copper", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelElectrum");
Item.createItem("shovelElectrum", "Electrum shovel", {name: "shovel_electrum", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelInvar");
Item.createItem("shovelInvar", "Invar shovel", {name: "shovel_invar", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelLead");
Item.createItem("shovelLead", "Lead shovel", {name: "shovel_lead", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelNickel");
Item.createItem("shovelNickel", "Nickel shovel", {name: "shovel_nickel", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelPlatinum");
Item.createItem("shovelPlatinum", "Platinum shovel", {name: "shovel_platinum", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelSilver");
Item.createItem("shovelSilver", "Silver shovel", {name: "shovel_silver", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelSteel");
Item.createItem("shovelSteel", "Steel shovel", {name: "shovel_steel", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovelTin");
Item.createItem("shovelTin", "Tin shovel", {name: "shovel_tin", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.shovelAluminum, "aluminum", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelBronze, "bronze", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelConstantan, "constantan", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelCopper, "copper", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelElectrum, "electrum", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelInvar, "invar", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelLead, "lead", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelNickel, "nickel", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelPlatinum, "platinum", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelSilver, "silver", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelSteel, "steel", ToolType.shovel);
ToolAPI.setTool(ItemID.shovelTin, "tin", ToolType.shovel);




// file: items/others/tools/sickle.js

ToolType.sickle = {
    blockTypes: ["plant"]
};

var sickle_destroy = false;
var sickles = [];
    Callback.addCallback("DestroyBlock", function(coords, block, player) {
        if (!sickle_destroy && sickles.indexOf(Player.getCarriedItem().id) > -1 && (block.id === 18 || block.id === 161 || (block.id === 31 && block.data === 1) )) {
            sickle_destroy = true;
            var used = 0;
            for (var xx = coords.x - 3; xx <= coords.x + 3; xx++) {
                for (var zz = coords.z - 3; zz <= coords.z + 3; zz++) {
                    if(World.getBlock(xx, coords.y, zz).id === block.id){
                        if(block.id === 18 || block.id === 161){
                            if(Math.random() <= 0.1) World.drop(xx, coords.y, zz, 260, 1);
                            if(Math.random() <= 0.3) World.drop(xx, coords.y, zz, 6, 1, block.id === 18 ? block.data : block.data + 3);
                        }else if(block.id === 31 && block.data === 1){
                            if(Math.random() <= 0.4) World.drop(xx, coords.y, zz, 295, 1);
                        }
                        World.setBlock(xx, coords.y, zz, 0);
                        used++;
                    }
                }
            }
            var item = Player.getCarriedItem();
            Player.setCarriedItem(item.id, 1, item.data + used);
        }
        sickle_destroy = false;
    }, 1);

IDRegistry.genItemID("sickleAluminum");
Item.createItem("sickleAluminum", "Aluminum sickle", {name: "sickle_aluminum", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleAluminum);

IDRegistry.genItemID("sickleBronze");
Item.createItem("sickleBronze", "Bronze sickle", {name: "sickle_bronze", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleBronze);

IDRegistry.genItemID("sickleConstantan");
Item.createItem("sickleConstantan", "Constantan sickle", {name: "sickle_constantan", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleConstantan);

IDRegistry.genItemID("sickleCopper");
Item.createItem("sickleCopper", "Copper sickle", {name: "sickle_copper", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleCopper);

IDRegistry.genItemID("sickleElectrum");
Item.createItem("sickleElectrum", "Electrum sickle", {name: "sickle_electrum", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleElectrum);

IDRegistry.genItemID("sickleInvar");
Item.createItem("sickleInvar", "Invar sickle", {name: "sickle_invar", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleInvar);

IDRegistry.genItemID("sickleLead");
Item.createItem("sickleLead", "Lead sickle", {name: "sickle_lead", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleLead);

IDRegistry.genItemID("sickleNickel");
Item.createItem("sickleNickel", "Nickel sickle", {name: "sickle_nickel", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleNickel);

IDRegistry.genItemID("sicklePlatinum");
Item.createItem("sicklePlatinum", "Platinum sickle", {name: "sickle_platinum", meta: 0}, {stack: 1});
sickles.push(ItemID.sicklePlatinum);

IDRegistry.genItemID("sickleSilver");
Item.createItem("sickleSilver", "Silver sickle", {name: "sickle_silver", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleSilver);

IDRegistry.genItemID("sickleSteel");
Item.createItem("sickleSteel", "Steel sickle", {name: "sickle_steel", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleSteel);

IDRegistry.genItemID("sickleTin");
Item.createItem("sickleTin", "Tin sickle", {name: "sickle_tin", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleTin);

ToolAPI.setTool(ItemID.sickleAluminum, "aluminum", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleBronze, "bronze", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleConstantan, "constantan", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleCopper, "copper", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleElectrum, "electrum", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleInvar, "invar", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleLead, "lead", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleNickel, "nickel", ToolType.sickle);
ToolAPI.setTool(ItemID.sicklePlatinum, "platinum", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleSilver, "silver", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleSteel, "steel", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleTin, "tin", ToolType.sickle);




// file: items/others/tools/swords.js

IDRegistry.genItemID("swordAluminum");
Item.createItem("swordAluminum", "Aluminum sword", {name: "sword_aluminum", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordBronze");
Item.createItem("swordBronze", "Bronze sword", {name: "sword_bronze", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordConstantan");
Item.createItem("swordConstantan", "Constantan sword", {name: "sword_constantan", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordCopper");
Item.createItem("swordCopper", "Copper sword", {name: "sword_copper", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordElectrum");
Item.createItem("swordElectrum", "Electrum sword", {name: "sword_electrum", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordInvar");
Item.createItem("swordInvar", "Invar sword", {name: "sword_invar", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordLead");
Item.createItem("swordLead", "Lead sword", {name: "sword_lead", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordNickel");
Item.createItem("swordNickel", "Nickel sword", {name: "sword_nickel", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordPlatinum");
Item.createItem("swordPlatinum", "Platinum sword", {name: "sword_platinum", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordSilver");
Item.createItem("swordSilver", "Silver sword", {name: "sword_silver", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordSteel");
Item.createItem("swordSteel", "Steel sword", {name: "sword_steel", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordTin");
Item.createItem("swordTin", "Tin sword", {name: "sword_tin", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.swordAluminum, "aluminum", ToolType.sword);
ToolAPI.setTool(ItemID.swordBronze, "bronze", ToolType.sword);
ToolAPI.setTool(ItemID.swordConstantan, "constantan", ToolType.sword);
ToolAPI.setTool(ItemID.swordCopper, "copper", ToolType.sword);
ToolAPI.setTool(ItemID.swordElectrum, "electrum", ToolType.sword);
ToolAPI.setTool(ItemID.swordInvar, "invar", ToolType.sword);
ToolAPI.setTool(ItemID.swordLead, "lead", ToolType.sword);
ToolAPI.setTool(ItemID.swordNickel, "nickel", ToolType.sword);
ToolAPI.setTool(ItemID.swordPlatinum, "platinum", ToolType.sword);
ToolAPI.setTool(ItemID.swordSilver, "silver", ToolType.sword);
ToolAPI.setTool(ItemID.swordSteel, "steel", ToolType.sword);
ToolAPI.setTool(ItemID.swordTin, "tin", ToolType.sword);




