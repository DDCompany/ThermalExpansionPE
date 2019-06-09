/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 46
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
     by Dmitriy Medvedev(https://vk.com/id331953744)
 */
importLib("ToolType", "*");
importLib("energylib", "*");
importLib("SoundAPI", "*");
IMPORT("BackpackAPI");

const nativeDropFunc = ModAPI.requireGlobal("Level.dropItem");
const getYaw = ModAPI.requireGlobal("Entity.getYaw");
const UIUtils = java.lang.Class.forName("zhekasmirnov.launcher.utils.UIUtils", true, UI.getContext().getClass().getClassLoader()).newInstance();

const MinecraftColor = Native.Color;
const Color = android.graphics.Color;
const Canvas = android.graphics.Canvas;
const BufferedOutputStream = java.io.BufferedOutputStream;
const FileOutputStream = java.io.FileOutputStream;
const Bitmap = android.graphics.Bitmap;
const File = java.io.File;
const Paint = android.graphics.Paint;

const RF = EnergyTypeRegistry.assureEnergyType("RF", 1 / 4);
const POWER_SCALING = [100, 150, 200, 250, 300, 300];
const TIERS_NAME = ["Basic", "Hardened", "Reinforced", "Signalum", "Resonant", "Creative"];
const FONT_WHITE_30 = {size: 30, color: Color.WHITE};
const RF_WIRE_GROUP = ICRender.getGroup("rf-wire");

const soundClick = new Sound("click.ogg");
soundClick.setInPlayer();

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateOre(blockId, chunkX, chunkZ, inChunk, size, minY, maxY) {
    for (let i = 0; i < inChunk; i++) {
        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, minY, maxY);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, blockId, 0, size);
    }
}

function generateSandOre(blockId, chunkX, chunkZ, size) {
    switch (World.getBiome(chunkX, chunkZ)) {
        case 2:
        case 17:
        case 130:
            break;
        default:
            return;
    }
    let coords = GenerationUtils.randomXZ(chunkX, chunkZ);
    coords = GenerationUtils.findHighSurface(coords.x, coords.z);

    GenerationUtils.generateOre(coords.x, coords.y, coords.z, blockId, 0, size, true);
}




// file: api/ThermalConfig.js

const ThermalConfig = {
    //GENERATION

    gen: {
        copper: {
            enabled: __config__.getBool("gen.copper.enabled"),
            size: __config__.getNumber("gen.copper.size"),
            inChunk: __config__.getNumber("gen.copper.inChunk"),
            minY: __config__.getNumber("gen.copper.minY"),
            maxY: __config__.getNumber("gen.copper.maxY")
        },

        tin: {
            enabled: __config__.getBool("gen.tin.enabled"),
            size: __config__.getNumber("gen.tin.size"),
            inChunk: __config__.getNumber("gen.tin.inChunk"),
            minY: __config__.getNumber("gen.tin.minY"),
            maxY: __config__.getNumber("gen.tin.maxY")
        },

        silver: {
            enabled: __config__.getBool("gen.silver.enabled"),
            size: __config__.getNumber("gen.silver.size"),
            inChunk: __config__.getNumber("gen.silver.inChunk"),
            minY: __config__.getNumber("gen.silver.minY"),
            maxY: __config__.getNumber("gen.silver.maxY")
        },

        lead: {
            enabled: __config__.getBool("gen.lead.enabled"),
            size: __config__.getNumber("gen.lead.size"),
            inChunk: __config__.getNumber("gen.lead.inChunk"),
            minY: __config__.getNumber("gen.lead.minY"),
            maxY: __config__.getNumber("gen.lead.maxY")
        },

        aluminum: {
            enabled: __config__.getBool("gen.aluminum.enabled"),
            size: __config__.getNumber("gen.aluminum.size"),
            inChunk: __config__.getNumber("gen.aluminum.inChunk"),
            minY: __config__.getNumber("gen.aluminum.minY"),
            maxY: __config__.getNumber("gen.aluminum.maxY")
        },

        nickel: {
            enabled: __config__.getBool("gen.nickel.enabled"),
            size: __config__.getNumber("gen.nickel.size"),
            inChunk: __config__.getNumber("gen.nickel.inChunk"),
            minY: __config__.getNumber("gen.nickel.minY"),
            maxY: __config__.getNumber("gen.nickel.maxY")
        },

        platinum: {
            enabled: __config__.getBool("gen.platinum.enabled"),
            size: __config__.getNumber("gen.platinum.size"),
            inChunk: __config__.getNumber("gen.platinum.inChunk"),
            minY: __config__.getNumber("gen.platinum.minY"),
            maxY: __config__.getNumber("gen.platinum.maxY")
        },

        oilSand: {
            enabled: __config__.getBool("gen.oilSand.enabled"),
            chance: __config__.getNumber("gen.oilSand.chance"),
            size: __config__.getNumber("gen.oilSand.size")
        },

        resonantEnd: {
            enabled: __config__.getBool("gen.resonantEnd.enabled"),
            chance: __config__.getNumber("gen.resonantEnd.chance"),
            size: __config__.getNumber("gen.resonantEnd.size"),
            inChunk: __config__.getNumber("gen.resonantEnd.inChunk"),
            minY: __config__.getNumber("gen.resonantEnd.minY"),
            maxY: __config__.getNumber("gen.resonantEnd.maxY")
        },

        destabilizedRedstone: {
            enabled: __config__.getBool("gen.destabilizedRedstone.enabled"),
            chance: __config__.getNumber("gen.destabilizedRedstone.chance"),
            size: __config__.getNumber("gen.destabilizedRedstone.size"),
            inChunk: __config__.getNumber("gen.destabilizedRedstone.inChunk"),
            minY: __config__.getNumber("gen.destabilizedRedstone.minY"),
            maxY: __config__.getNumber("gen.destabilizedRedstone.maxY")
        }
    },
};




// file: api/MaterialManager.js

ToolType.thermalSickle = {
    blockTypes: ["fibre", "plant", "cobweb"],
};

Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (!MaterialRegistry.isSickle(Player.getCarriedItem().id))
        return;

    if (Entity.getSneaking(Player.get()))
        return;

    let radius = 3;
    let uses = 0;

    for (let xx = coords.x - radius; xx <= coords.x + radius; xx++) {
        for (let zz = coords.z - radius; zz <= coords.z + radius; zz++) {
            let material = ToolAPI.getBlockMaterial(World.getBlockID(xx, coords.y, zz));
            if (material && ToolType.thermalSickle.blockTypes.indexOf(material.name) > -1) {
                World.destroyBlock(xx, coords.y, zz, true);
                uses++;
            }
        }
    }

    ToolAPI.breakCarriedTool(uses);
});

const MaterialRegistry = {
    sickles: [],

    addArmorSet: function (name, armor, durabilityModifier, ingotName) {
        let nameUp = name.charAt(0).toUpperCase() + name.substr(1);

        IDRegistry.genItemID("helmet" + nameUp);
        Item.createArmorItem("helmet" + nameUp, nameUp + " Helmet", {name: "helmet_" + name}, {
            type: "helmet",
            armor: armor[0],
            durability: durabilityModifier * 11,
            texture: "armor/" + name + "_1.png"
        });

        IDRegistry.genItemID("chestplate" + nameUp);
        Item.createArmorItem("chestplate" + nameUp, nameUp + " Chestplate", {name: "chestplate_" + name}, {
            type: "chestplate",
            armor: armor[1],
            durability: durabilityModifier * 16,
            texture: "armor/" + name + "_1.png"
        });

        IDRegistry.genItemID("leggings" + nameUp);
        Item.createArmorItem("leggings" + nameUp, nameUp + " Leggings", {name: "leggings_" + name}, {
            type: "leggings",
            armor: armor[2],
            durability: durabilityModifier * 15,
            texture: "armor/" + name + "_2.png"
        });

        IDRegistry.genItemID("boots" + nameUp);
        Item.createArmorItem("boots" + nameUp, nameUp + " Boots", {name: "boots_" + name}, {
            type: "boots",
            armor: armor[2],
            durability: durabilityModifier * 13,
            texture: "armor/" + name + "_1.png"
        });

        if (ingotName) {
            Recipes.addShaped({id: ItemID["helmet" + nameUp], count: 1, data: 0}, [
                "fff",
                "f f"
            ], ['f', ItemID[ingotName], -1]);

            Recipes.addShaped({id: ItemID["chestplate" + nameUp], count: 1, data: 0}, [
                "f f",
                "fff",
                "fff",
            ], ['f', ItemID[ingotName], -1]);

            Recipes.addShaped({id: ItemID["leggings" + nameUp], count: 1, data: 0}, [
                "fff",
                "f f",
                "f f",
            ], ['f', ItemID[ingotName], -1]);

            Recipes.addShaped({id: ItemID["boots" + nameUp], count: 1, data: 0}, [
                "f f",
                "f f",
            ], ['f', ItemID[ingotName], -1]);
        }
    },
    addToolSet: function (name, material, ingotId, isVanilla) {
        let nameUp = name.charAt(0).toUpperCase() + name.substr(1);

        if (!isVanilla) {
            IDRegistry.genItemID(name + "Sword");
            Item.createItem(name + "Sword", nameUp + " Sword", {name: "sword_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Sword"], material, ToolType.sword);

            IDRegistry.genItemID(name + "Pickaxe");
            Item.createItem(name + "Pickaxe", nameUp + " Pickaxe", {name: "pickaxe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Pickaxe"], material, ToolType.pickaxe);

            IDRegistry.genItemID(name + "Shovel");
            Item.createItem(name + "Shovel", nameUp + " Shovel", {name: "shovel_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Shovel"], material, ToolType.shovel);

            IDRegistry.genItemID(name + "Axe");
            Item.createItem(name + "Axe", nameUp + " Axe", {name: "axe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Axe"], material, ToolType.axe);

            IDRegistry.genItemID(name + "Hoe");
            Item.createItem(name + "Hoe", nameUp + " Hoe", {name: "hoe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Hoe"], material, ToolType.axe);
        }

        IDRegistry.genItemID(name + "Sickle");
        Item.createItem(name + "Sickle", nameUp + " Sickle", {name: "sickle_" + name, meta: 0}, {stack: 1});
        ToolAPI.setTool(ItemID[name + "Sickle"], material, ToolType.thermalSickle);
        this.sickles.push(ItemID[name + "Sickle"]);

        Callback.addCallback("PostLoaded", function () {
            if (!isVanilla) {
                Recipes.addShaped({id: ItemID[name + "Sword"], count: 1, data: 0}, [
                    "f",
                    "f",
                    "s",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Pickaxe"], count: 1, data: 0}, [
                    "fff",
                    " s ",
                    " s ",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Shovel"], count: 1, data: 0}, [
                    "f",
                    "s",
                    "s",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Axe"], count: 1, data: 0}, [
                    "ff ",
                    "fs ",
                    " s ",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Hoe"], count: 1, data: 0}, [
                    "ff",
                    " s",
                    " s",
                ], ['f', ingotId, -1, 's', 280, -1]);
            }

            Recipes.addShaped({id: ItemID[name + "Sickle"], count: 1, data: 0}, [
                " f ",
                "  f",
                "sf ",
            ], ['f', ingotId, -1, 's', 280, -1]);
        });
    },

    isSickle: function (id) {
        return this.sickles.indexOf(id) > -1;
    }
};




// file: api/RecipeHelper.js

const RecipeHelper = {
    addGearRecipes: function (ingotId, gearId) {
        let gearHearts = [265, ItemID.ingotCopper, ItemID.ingotTin, ItemID.ingotBronze];

        for (let i = 0; i < gearHearts.length; i++) {
            Recipes.addShaped({id: gearId, count: 1, data: 0}, [
                " f ",
                "fhf",
                " f ",
            ], ['f', ingotId, -1, 'h', gearHearts[i], -1]);
        }
    },

    addIngotRecipes: function (ingotId, nuggetId) {
        Recipes.addShaped({id: ingotId, count: 1, data: 0}, [
            "fff",
            "fff",
            "fff",
        ], ['f', nuggetId, -1]);
        Recipes.addShapeless({id: nuggetId, count: 9}, [{id: ingotId, data: -1}]);
    }
};




// file: api/MachineRegistry.js

const MachineRegistry = {
    invContainer: new UI.Container(),

    define: function (id, tile) {
        RF_WIRE_GROUP.add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, tile);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },

    updateEnergyBar: function (tile, isCreative) {
        if (tile.data._refreshUI) {
            let content = tile.container.getGuiScreen();
            if (content && (content = content.getWindowForTab(6).getContent())) {
                content.elements["energyScale"].bitmap = isCreative ? "bars.rf_creative" : "bars.rf_full";
                tile.data._refreshUI = false;
            }
        }

        tile.container.setScale("energyScale", isCreative ? 1 : tile.data.energy / tile.getEnergyStorage());
    },

    calcEnergy: function (basePower, energy) {
        let maxPowerLevel = 9 * basePower * 100;

        if (energy >= maxPowerLevel)
            return basePower;

        if (energy < basePower * 100)
            return Math.min(basePower / 10, energy);

        return energy / (maxPowerLevel / basePower);
    },

    installUpgradeFunc: function (tier, tile) {
        if (tier < 1 || tier > 5)
            return false;

        tile.data.tier = tier;
        tile.refreshModel();
        return true;
    },

    installUpgradeForPoweredFunc: function (tier, tile) {
        if (MachineRegistry.installUpgradeFunc(tier, tile)) {
            tile.data.basePower = 20 * POWER_SCALING[tier] / 100;
            return true;
        }

        return false;
    },

    placeFunc: function (rotatable) {
        return function (coords, item) {
            Game.prevent();
            let x = coords.relative.x;
            let y = coords.relative.y;
            let z = coords.relative.z;
            if (GenerationUtils.isTransparentBlock(World.getBlockID(x, y, z))) {
                let data = item.data;

                if (rotatable) {
                    //Скопировано из CoreEngine
                    let c;
                    for (c = Math.floor((getYaw(Player.get()) - 45) / 90); 0 > c;)
                        c += 4;
                    for (; 3 < c;)
                        c -= 4;
                    c = {
                        0: 2,
                        1: 0,
                        2: 3,
                        3: 1
                    }[c];
                    data = 4 * parseInt(item.data / 4) + c;
                }

                World.setBlock(x, y, z, item.id, data);
                let tile = World.addTileEntity(x, y, z);
                if (item.extra) {
                    tile.data = JSON.parse(item.extra.getString("data"));
                    tile.container.slots = JSON.parse(item.extra.getString("slots"));
                }
            }
        };
    },

    nameOverrideFunc: function (item, name) {
        let extra = Player.getCarriedItem().extra;

        if (extra) {
            return name + "\n§7Configured";
        }
        return name;
    }
};




// file: api/MachineUI.js

MachineRegistry.MachineUI = function (obj) {
    let ui = UI.TabbedWindow({
        location: obj.location || {
            x: 0,
            y: 0
        }
    });


    let tabIndex = 7;

    ui.setTab(6, {
        icon: {
            type: "image",
            x: -30,
            y: -30,
            width: 60,
            height: 60,
            bitmap: obj.tabIcon || "icons.nope"
        }
    }, obj);

    let recipesShower = obj.recipesShower;
    if (recipesShower) {
        ui.setTab(1, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.recipes"
            }
        }, {
            drawing: [
                {type: "background", color: Color.rgb(149, 134, 129)}
            ],
            elements: {
                "__frame": {
                    type: "frame",
                    x: 80,
                    y: 0, //
                    width: 835,
                    height: 55,
                    bitmap: "default_frame_bg_dark",
                    scale: 2
                },
                "__offsetIndex": {
                    type: "text",
                    text: "",
                    x: 70,
                    y: 0, //
                    font: FONT_WHITE_30
                },
                "__btnPrevious": {
                    type: "button",
                    x: 0,
                    y: 0, //
                    scale: 65 / 26,
                    bitmap: "buttons.previous_page",
                    bitmap2: "buttons.previous_page_pressed",
                    clicker: {
                        onClick: function () {
                            soundClick.play();
                            RecipesManager.offset =
                                RecipesManager.showers[recipesShower].previousOffset(RecipesManager.offset);
                            RecipesManager.drawOn(recipesShower, ui.getWindowForTab(1));
                        }
                    }
                },
                "__btnNext": {
                    type: "button",
                    x: 930,
                    y: 0, //
                    scale: 65 / 26,
                    bitmap: "buttons.next_page",
                    bitmap2: "buttons.next_page_pressed",
                    clicker: {
                        onClick: function () {
                            soundClick.play();
                            RecipesManager.offset =
                                RecipesManager.showers[recipesShower].nextOffset(RecipesManager.offset);
                            RecipesManager.drawOn(recipesShower, ui.getWindowForTab(1));
                        }
                    }
                }
            }
        });

        ui.setTabEventListener(1, {
            onOpen: function (window) {
                RecipesManager.drawOn(recipesShower, window);
            },

            onClose: function () {
                RecipesManager.offset = 0;
            }
        });
    }

    if (!obj.augmentsDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.augments"
            }
        }, {});
        tabIndex++;
    }

    if (!obj.configDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.config"
            }
        }, {});
        tabIndex++;
    }

    if (!obj.redstoneDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.redstone"
            }
        }, {});
    }

    if (!obj.inventoryDisabled) {
        let inventory = new UI.Window({
            location: {
                x: 120,
                y: 35,
                width: 250,
                height: UI.getScreenHeight() - 70,
                scrollY: 562
            },

            drawing: [],
            elements: {}
        });
        inventory.setDynamic(false);
        inventory.setInventoryNeeded(true);

        let x = 0;
        let y = 0;
        let slotSize = 250;

        for (let i = 0; i < 36; i++) {
            inventory.getContent().elements["__invSlot" + i] = {
                type: "invSlot",
                x: x,
                y: y,
                size: 251,
                index: i + 9
            };

            x += slotSize;
            if (x >= slotSize * 4) {
                x = 0;
                y += slotSize;
            }
        }

        ui.setTabEventListener(6, {
            onOpen: function () {
                MachineRegistry.invContainer.openAs(inventory);
            },

            onClose: function () {
                MachineRegistry.invContainer.close();
            }
        });
    }

    return ui;
};




// file: api/MachineTileEntity.js

MachineRegistry.TileEntity = function (obj, isNoPowerMachine) {
    if (!obj.defaultValues)
        obj.defaultValues = {};

    obj.defaultValues.tier = 0;

    if (!obj.installUpgrade) {
        if (isNoPowerMachine) {
            obj.installUpgrade = function (tier) {
                return MachineRegistry.installUpgradeFunc(tier, this);
            };
        } else {
            obj.installUpgrade = function (tier) {
                return MachineRegistry.installUpgradeForPoweredFunc(tier, this);
            };
        }
    }

    if (!isNoPowerMachine) {
        obj.defaultValues.energy = 0;

        if (!obj.energyTick) {
            obj.energyTick = function (type, src) {
                if (this.data.tier < 5)
                    this.data.energy += src.get(Math.min(this.data.basePower * 4, this.getEnergyStorage() - this.data.energy));
            };
        }

        if (!obj.getEnergyStorage) {
            obj.getEnergyStorage = function () {
                return this.data.basePower * 1000;
            }
        }
    }

    if (!obj.refreshModel) {
        obj.refreshModel = function () {
        };
    }

    if (!obj.destroyBlock) {
        obj.destroyBlock = function (coords) {
            let extra = new ItemExtraData();
            extra.putString("data", JSON.stringify(this.data));
            extra.putString("slots", JSON.stringify(this.container.slots));

            let slots = this.container.slots;
            for (let i in slots)
                this.container.clearSlot(i);

            nativeDropFunc(coords.x, coords.y, coords.z, 0, World.getBlockID(coords.x, coords.y, coords.z), 1, 0, extra);
        };
    }

    obj.___created = obj.created;
    obj.created = function () {
        if (this.___created)
            this.___created();

        this.refreshModel();
    };

    obj.___init = obj.init;
    obj.init = function () {
        if (this.___init)
            this.___init();

        this.refreshModel();
    };

    return obj;
};




// file: api/ModelHelper.js

const ModelHelper = {
    cache: {},

    getByData: function (data, textures) {
        switch (data) {
            case 0:
                return [textures[0], textures[1], textures[2], textures[3], textures[4], textures[5]];
            case 1:
                return [textures[0], textures[1], textures[3], textures[2], textures[5], textures[4]];
            case 2:
                return [textures[0], textures[1], textures[5], textures[4], textures[2], textures[3]];
            case 3:
                return [textures[0], textures[1], textures[4], textures[5], textures[3], textures[2]];
        }

        return textures;
    },

    mapEnergyCell: function (x, y, z, id, tier, heartIndex) {
        let key = id + ":" + ":" + tier + ":" + heartIndex;
        let render = this.cache[key];
        if (!render) {
            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            model.addBox(0, 0, 0, 1, 1, 1, "energy_cell", tier);
            model.addBox(0, 0, 0, 1, 1, 1, "cell_meter", heartIndex);

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    mapMachine: function (x, y, z, id, data, tier, textures) {
        let key = id + ":" + data + ":" + tier + ":" + textures[3];
        let render = this.cache[key];
        if (!render) {
            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            if (tier > 0)
                model.addBox(0, 0, 0, 1, 1, 1, "tier_border", tier);

            model.addBox(0, 0, 0, 1, 1, 1, this.getByData(data, textures));

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, data, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    mapStrongbox: function (x, y, z, id, data, tier) {
        let key = id + ":" + data + ":" + tier;
        let render = this.cache[key];
        if (!render) {
            let textures = [
                ["strongbox_top", tier], ["strongbox_top", tier], ["strongbox_side", tier],
                ["strongbox_side", tier], ["strongbox_side", tier], ["strongbox_side", tier]
            ];

            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            model.addBox(1 / 16, 0, 1 / 16, 15 / 16, 15 / 16, 15 / 16, this.getByData(data, textures));

            switch (data) {
                case 0:
                    model.addBox(0.43, 0.45, 0.93, 0.55, 0.7, 1, 42, 0);
                    break;
                case 1:
                    model.addBox(0.44, 0.45, 0, 0.57, 0.7, 0.07, 42, 0);
                    break;
                case 2:
                    model.addBox(0.93, 0.45, 0.45, 1, 0.7, 0.55, 42, 0);
                    break;
                case 3:
                    model.addBox(0, 0.45, 0.44, 0.07, 0.7, 0.55, 42, 0);
            }

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, data, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    }
};




// file: api/ContainerHelper.js

const ContainerHelper = {
    canPutInSlot: function (item, slot) {
        if (!slot.id)
            return true;

        item.count = item.count || 1;

        if (slot.id === item.id && slot.data === item.data && Item.getMaxStack(slot.id) - slot.count >= item.count)
            return true;
    },

    putInSlot: function (item, slot) {
        if (!this.canPutInSlot(item, slot))
            return false;

        slot.id = item.id;
        slot.data = item.data || 0;
        slot.count += item.count || 1;
        return true;
    }
};




// file: api/TextureBakery.js

const TextureBakery = {
    RES_CRUCIBLE: "/res/terrain-atlas/expansion/machines/crucible/thermal_machine_crucible_",
    OVERLAY_CRUCIBLE: FileTools.ReadImage(__dir__ + "/overlays/crucible.png"),

    bake: function () {
        let crucibleRecipes = MagmaCrucibleRecipes.recipes;
        for (let i in crucibleRecipes) {
            let recipe = crucibleRecipes[i];
            this.bakeForMagmaCrucible(recipe.fluid);
        }
    },

    bakeForMagmaCrucible: function (liquid) {
        let file = new File(__dir__ + this.RES_CRUCIBLE + liquid + "_0.png");

        if (!file.exists()) {
            file.createNewFile();

            let bitmap = this.OVERLAY_CRUCIBLE.copy(this.OVERLAY_CRUCIBLE.getConfig(), true);
            let canvas = new Canvas(bitmap);
            canvas.drawBitmap(LiquidRegistry.getLiquidUIBitmap(liquid, 4, 8), 6, 4, new Paint(Paint.FILTER_BITMAP_FLAG));

            let os = new BufferedOutputStream(new FileOutputStream(file));
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, os);
            os.close();
        }
    }
};

Callback.addCallback("PostLoaded", function () {
    TextureBakery.bake();
});




// file: api/UIHelper.js

const UIHelper = {
    getFont: function (element) {
        let fontField = element.getClass().getDeclaredField("font");
        fontField.setAccessible(true);
        return fontField.get(element);
    },

    getFontWidth: function(element) {
      return this.getFont(element).getTextWidth(element.description.text, 1);
    }
};




// file: api/recipes/RecipesManager.js

const RecipesManager = {
    showers: {},
    offset: 0,

    addShower: function (uid, desc) {
        if (!uid) {
            Logger.Log("Recipes Shower UID Not Valid ('" + uid + "')", "ERROR");
            return;
        }

        if (!desc) {
            Logger.Log("Recipes Shower Description Object Not Valid", "ERROR");
            return;
        }

        if (this.showers[uid]) {
            Logger.Log("Recipes Shower UID Must Be Unique ('" + uid + "')", "ERROR");
            return;
        }

        desc.draw = desc.draw || function (offset) {
            return offset;
        };

        desc.nextOffset = desc.nextOffset || function (current) {
            if (current + 1 >= this.getPages())
                return 0;

            return current + 1;
        };

        desc.previousOffset = desc.previousOffset || function (current) {
            if (current - 1 < 0)
                return this.getPages() - 1;

            return current - 1;
        };

        desc.getPages = desc.getPages || function () {
            return 0;
        };

        this.showers[uid] = desc;
    },

    basicShower: function (desc) {
        desc.draw = function (offset, elements, container, window) {
            let index = offset * 6;
            this.drawColumn(index, elements, container, 60, window);
            this.drawColumn(index + 3, elements, container, 530, window);
        };

        desc.drawColumn = function (offset, elements, container, xPos, window) {
            for (let i = 0; i < 3; i++) {
                let recipeId = offset + i;
                let recipe = desc.getRecipe(recipeId);

                if (!recipe)
                    return;

                let yPos = 60 + 170 * i;

                elements["_slotIn" + recipeId] = {
                    type: "slot",
                    x: xPos,
                    y: yPos,
                    size: 70,
                    visual: true
                };

                elements["speedScale" + recipeId] = {
                    type: "scale",
                    x: xPos + 2,
                    y: yPos + 85,
                    direction: 1,
                    value: 1,
                    bitmap: desc.getSpeedScaleBitmap ? desc.getSpeedScaleBitmap() : null,
                    scale: 4.5
                };

                elements["scale" + recipeId] = {
                    type: "scale",
                    x: xPos + 89,
                    y: yPos + 50,
                    direction: 0,
                    value: 1,
                    bitmap: desc.getProgressScaleBitmap ? desc.getProgressScaleBitmap() : null,
                    scale: 4
                };

                desc.drawResult(window, elements, container, recipe, recipeId, xPos, yPos);
            }
        };

        return desc;
    },

    drawOn: function (uid, window) {
        try {
            let elements = window.getContent().elements;
            let container = window.getContainer();
            let shower = this.showers[uid];

            if (!shower) {
                Logger.Log("Recipes Shower Not Founded (" + uid + ")", "ERROR");
                return;
            }

            let blackList = {
                "__frame": true,
                "__offsetIndex": true,
                "__btnPrevious": true,
                "__btnNext": true
            };

            for (let i in elements) {
                if (!blackList[i])
                    elements[i] = null;
            }

            let windowHeight = window.getLocation().getWindowHeight();

            elements["__offsetIndex"].text = this.offset + 1 + "/" + shower.getPages();
            elements["__offsetIndex"].y = windowHeight - 55;
            elements["__offsetIndex"].x = (1000 - UIHelper.getFontWidth(container.getElement("__offsetIndex"))) / 2;

            elements["__frame"].y = windowHeight - 65;
            elements["__btnPrevious"].y = windowHeight - 70;
            elements["__btnNext"].y = windowHeight - 70;

            shower.draw(this.offset, elements, container, window);
        } catch (e) {
            alert(e.message);
            alert(e.stack);
        }
    }
};




// file: api/recipes/PulverizerRecipes.js

const PulverizerRecipes = {
    recipes: [],

    add: function (obj) {
        if (!obj)
            return;

        let input = obj.input;
        if (!input || !input.id)
            return;

        input.data = input.data || 0;

        this.recipes.push(obj);
    },

    getResult: function (id, data) {
        if (!id)
            return null;

        for (let i in this.recipes) {
            let recipe = this.recipes[i];
            let input = recipe.input;
            if (input.id === id && (input.data === -1 || input.data === data))
                return recipe;
        }
        return null;
    }
};

RecipesManager.addShower("te:pulverizer", RecipesManager.basicShower({
    drawResult: function (window, elements, container, recipe, recipeId, xPos, yPos) {
        elements["textEnergy" + recipeId] = {
            type: "text",
            text: recipe.energy + " RF",
            x: xPos + 89,
            y: yPos + 118,
            font: FONT_WHITE_30
        };

        elements["_slotOut" + recipeId] = {
            type: "slot",
            x: xPos + 196,
            y: yPos + 46,
            size: 70,
            visual: true
        };

        elements["_slotSpecial" + recipeId] = {
            type: "slot",
            x: xPos + 279,
            y: yPos + 46,
            size: 70,
            visual: true
        };

        let special = recipe.dop || {id: 0, data: 0, count: 1, chance: 0};
        if (special.chance) {
            elements["textChance" + recipeId] = {
                type: "text",
                text: special.chance * 100 + "%",
                x: xPos + 354,
                y: yPos + 60,
                font: FONT_WHITE_30
            };

            container.setSlot("_slotSpecial" + recipeId, special.id, special.count || 1, special.data || 0);
        }

        container.setSlot("_slotIn" + recipeId, recipe.input.id, recipe.input.count || 1, recipe.input.data || 0);
        container.setSlot("_slotOut" + recipeId, recipe.result.id, recipe.result.count || 1, recipe.result.data || 0);
    },

    getProgressScaleBitmap: function () {
        return "bars.machine.def_empty";
    },

    getSpeedScaleBitmap: function () {
        return "bars.machine.pulverizer.speed_full";
    },

    getRecipe: function (index) {
        return PulverizerRecipes.recipes[index];
    },

    getPages: function () {
        return Math.ceil(PulverizerRecipes.recipes.length / 6);
    }
}));




// file: api/recipes/MagmaCrucibleRecipes.js

const MagmaCrucibleRecipes = {
    recipes: [],

    add: function (recipe) {
        this.recipes.push(recipe);
    },

    get: function (id, data) {
        if (!id)
            return null;

        for (let i in this.recipes) {
            let recipe = this.recipes[i];
            if (recipe.id === id && (recipe.data === -1 || recipe.data === data))
                return recipe;
        }
        return null;
    }
};

RecipesManager.addShower("te:magma_crucible", RecipesManager.basicShower({
    drawResult: function (window, elements, container, recipe, recipeId, xPos, yPos) {
        elements["textEnergy" + recipeId] = {
            type: "text",
            text: recipe.energy + " RF",
            x: xPos + 89,
            y: yPos + 118,
            font: FONT_WHITE_30
        };

        elements["textFluid" + recipeId] = {
            type: "text",
            text: LiquidRegistry.getLiquidName(recipe.fluid) + " (" + recipe.fluidAmount * 1000 + " mB)",
            x: xPos + 196,
            y: yPos + 75,
        };

        container.setSlot("_slotIn" + recipeId, recipe.id, recipe.count || 1, recipe.data || 0);
    },

    getProgressScaleBitmap: function () {
        return "bars.machine.fluid_full";
    },

    getSpeedScaleBitmap: function () {
        return "bars.machine.flame_full";
    },

    getRecipe: function (index) {
        return MagmaCrucibleRecipes.recipes[index];
    },

    getPages: function () {
        return Math.ceil(MagmaCrucibleRecipes.recipes.length / 6);
    }
}));




// file: blocks/machines/pulverizer/pulverizer.js

IDRegistry.genBlockID("thermalMachinePulverizer");
Block.createBlockWithRotation("thermalMachinePulverizer", [
    {
        name: "Pulverizer",
        texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_pulverizer", 0], ["thermal_machine", 2]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalMachinePulverizer, count: 1, data: 0}, [
        " x ",
        "b#b",
        "cac"
    ], ['#', BlockID.frameMachine, -1, 'x', 33, -1, 'b', 318, -1, 'a', ItemID.coilReception, -1, 'c', ItemID.gearCopper, -1]);
});




// file: blocks/machines/pulverizer/tile.js

MachineRegistry.define(BlockID.thermalMachinePulverizer, MachineRegistry.TileEntity({
    defaultValues: {
        progress: 0,
        progressMax: 0,
        basePower: 20
    },

    click: function () {
        this.data._refreshUI = true;
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let isCreative = this.data.tier === 5;
        let power = 0;

        if (this.data.progressMax) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.data.progressMax = 0;
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
                let slotResultDop = this.container.getSlot("slotResultDop");
                if (ContainerHelper.canPutInSlot(recipe.dop, slotResultDop) &&
                    ContainerHelper.putInSlot(recipe.result, this.container.getSlot("slotResult"))) {

                    let dop = recipe.dop;
                    if (dop && (!dop.chance || Math.random() < dop.chance)) {
                        slotResultDop.id = dop.id;
                        slotResultDop.data = dop.data || 0;
                        slotResultDop.count += dop.count || 1;
                    }

                    slotSource.count -= 1;
                    this.data.progress = 0;
                    this.data.progressMax = 0;
                    this.container.validateSlot("slotSource");
                    this.refreshModel();
                }
            } else {
                if (isCreative) {
                    power += this.data.basePower;
                } else {
                    power = MachineRegistry.calcEnergy(this.data.basePower, this.data.energy);
                    this.data.energy -= power;
                }

                this.data.progress += power;
            }
        } else if (slotSource.id) {
            let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);

            if (recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 2000;
                this.refreshModel();
            }
        }

        MachineRegistry.updateEnergyBar(this, isCreative);
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("speedScale", power / this.data.basePower);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_pulverizer" + (this.data.progressMax > 0 ? "_active" : ""), 0], ["thermal_machine", 2], ["thermal_machine", 2]]);
    },

    getGuiScreen: function () {
        return pulverizerUI;
    }
}));

Block.registerPlaceFunction(BlockID.thermalMachinePulverizer, MachineRegistry.placeFunc(true));
Block.registerDropFunction(BlockID.thermalMachinePulverizer, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachinePulverizer, MachineRegistry.nameOverrideFunc);




// file: blocks/machines/pulverizer/gui.js

const pulverizerUI = MachineRegistry.MachineUI({
    tabIcon: "icons.machines.pulverizer",
    recipesShower: "te:pulverizer",

    drawing: [
        {type: "background", color: Color.rgb(149, 134, 129)},
        {type: "text", text: "Pulverizer", x: 370, y: 70, font: {size: 25, color: Color.WHITE, shadow: 0.6}},
        {type: "bitmap", x: 550, y: 172, bitmap: "bars.machine.def_empty", scale: 4},
        {type: "bitmap", x: 466, y: 205, bitmap: "bars.machine.pulverizer.speed_empty", scale: 4.5},
        {type: "bitmap", x: 370, y: 100, bitmap: "bars.rf_empty", scale: 5}
    ],

    elements: {
        //@formatter:off
        "progressScale": {type: "scale", x: 550, y: 172, direction: 0, bitmap: "bars.machine.def_full", scale: 4},
        "energyScale": {type: "scale", x: 370, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5},
        "speedScale": {
            type: "scale",
            x: 466,
            y: 205,
            direction: 1,
            bitmap: "bars.machine.pulverizer.speed_full",
            scale: 4.5
        },

        "slotSource": {type: "slot", x: 461, y: 122, size: 70},
        "slotResult": {type: "slot", x: 657, y: 168, size: 70},
        "slotResultDop": {type: "slot", x: 737, y: 168, size: 70}
        //@formatter:on
    }
});




// file: blocks/machines/pulverizer/recipes.js

PulverizerRecipes.add({
    input: {id: 263},
    result: {id: ItemID.dustCoal, data: 0, count: 1},
    dop: {id: ItemID.dustSulfur, data: 0, chance: 0.15},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 263, data: 1},
    result: {id: ItemID.dustCharcoal, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 49, data: 0},
    result: {id: ItemID.dustObsidian, data: 0, count: 4},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 4, data: 0},
    result: {id: 12, data: 0, count: 1},
    dop: {id: 13, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 1, data: 0},
    result: {id: 13, data: 0, count: 1},
    dop: {id: 12, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 87, data: 0},
    result: {id: 13, data: 0, count: 1},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 13, data: 0},
    result: {id: 318, data: 0, count: 1},
    dop: {id: 12, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 24, data: -1},
    result: {id: 12, data: 0, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.4},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 352, data: 0},
    result: {id: 351, data: 15, count: 6},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 89, data: 0},
    result: {id: 348, data: 0, count: 4},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 409, data: 0},
    result: {id: 422, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 369, data: 0},
    result: {id: 377, data: 0, count: 4},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.5},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 17, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 8},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 162, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 8},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 5, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 2},
    energy: 1000
});

// ORES

PulverizerRecipes.add({
    input: {id: 15, data: 0},
    result: {id: ItemID.dustIron, data: 0, count: 2},
    dop: {id: ItemID.dustNickel, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 14, data: 0},
    result: {id: ItemID.dustGold, data: 0, count: 2},
    dop: {id: ItemID.crystalCinnabar, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 2},
    dop: {id: ItemID.dustGold, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 2},
    dop: {id: ItemID.dustIron, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 2},
    dop: {id: ItemID.dustLead, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreLead, data: 0},
    result: {id: ItemID.dustLead, data: 0, count: 2},
    dop: {id: ItemID.dustSilver, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 2},
    dop: {id: ItemID.dustIron, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 2},
    dop: {id: ItemID.dustPlatinum, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.orePlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 2},
    dop: {id: ItemID.dustIridium, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreMithril, data: 0},
    result: {id: ItemID.dustMithril, data: 0, count: 2},
    dop: {id: ItemID.dustGold, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreIridium, data: 0},
    result: {id: ItemID.dustIridium, data: 0, count: 2},
    dop: {id: ItemID.dustPlatinum, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 16, data: 0},
    result: {id: 263, data: 0, count: 3},
    dop: {id: ItemID.dustCoal, data: 0, count: 1, chance: 0.25},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 21, data: 0},
    result: {id: 351, data: 4, count: 10},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.2},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 73, data: 0},
    result: {id: 331, data: 0, count: 6},
    dop: {id: ItemID.crystalCinnabar, data: 0, count: 1, chance: 0.25},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 56, data: 0},
    result: {id: 264, data: 0, count: 2},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 129, data: 0},
    result: {id: 388, data: 0, count: 2},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 153, data: 0},
    result: {id: 406, data: 0, count: 3},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.sandOil, data: 0},
    result: {id: ItemID.crystalCrudeOil, data: 0, count: 3},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreDestabilizedRedstone, data: 0},
    result: {id: ItemID.crystalRedstone, data: 0, count: 3},
    dop: {id: ItemID.crystalCinnabar, data: 0, count: 1, chance: 0.5},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreNetherrackEnergized, data: 0},
    result: {id: ItemID.crystalGlowstone, data: 0, count: 3},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.3},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: BlockID.oreEndStoneResonant, data: 0},
    result: {id: ItemID.crystalEnder, data: 0, count: 3},
    energy: 4000
});

// FLOWERS

PulverizerRecipes.add({
    input: {id: 37, data: 0},
    result: {id: 351, data: 11, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 0},
    result: {id: 351, data: 1, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 1},
    result: {id: 351, data: 12, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 2},
    result: {id: 351, data: 13, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 3},
    result: {id: 351, data: 7, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 4},
    result: {id: 351, data: 1, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 5},
    result: {id: 351, data: 14, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 6},
    result: {id: 351, data: 7, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 7},
    result: {id: 351, data: 9, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 38, data: 8},
    result: {id: 351, data: 7, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 175, data: 0},
    result: {id: 351, data: 11, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 175, data: 1},
    result: {id: 351, data: 13, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 175, data: 4},
    result: {id: 351, data: 1, count: 4},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: 175, data: 5},
    result: {id: 351, data: 9, count: 4},
    energy: 2000
});

// RECYCLING

PulverizerRecipes.add({
    input: {id: 82, data: 0},
    result: {id: 337, data: 0, count: 4},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 159, data: -1},
    result: {id: 337, data: 0, count: 4},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 45, data: 0},
    result: {id: 336, data: 0, count: 4},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 44, data: 4},
    result: {id: 336, data: 0, count: 2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 108, data: 0},
    result: {id: 336, data: 0, count: 3},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 390, data: 0},
    result: {id: 336, data: 0, count: 3},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 374, data: 0},
    result: {id: 12, data: 0, count: 1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 20, data: 0},
    result: {id: 12, data: 0, count: 1},
    energy: 4000
});

PulverizerRecipes.add({
    input: {id: 112, data: 0},
    result: {id: 405, data: 0, count: 4},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 44, data: 7},
    result: {id: 405, data: 0, count: 2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 114, data: 0},
    result: {id: 405, data: 0, count: 3},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 155, data: -1},
    result: {id: 406, data: 0, count: 4},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 44, data: 6},
    result: {id: 406, data: 0, count: 2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 156, data: 0},
    result: {id: 406, data: 0, count: 3},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 44, data: 1},
    result: {id: 12, data: 0, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 128, data: 0},
    result: {id: 12, data: 0, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 182, data: 0},
    result: {id: 12, data: 1, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 163, data: 0},
    result: {id: 12, data: 1, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

PulverizerRecipes.add({
    input: {id: 35, data: -1},
    result: {id: 287, data: 0, count: 4},
    energy: 3000
});

// INGOTS

PulverizerRecipes.add({
    input: {id: ItemID.ingotCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotLead, data: 0},
    result: {id: ItemID.dustLead, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotPlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotIridium, data: 0},
    result: {id: ItemID.dustIridium, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotMithril, data: 0},
    result: {id: ItemID.dustMithril, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotSteel, data: 0},
    result: {id: ItemID.dustSteel, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotElectrum, data: 0},
    result: {id: ItemID.dustElectrum, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotInvar, data: 0},
    result: {id: ItemID.dustInvar, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotBronze, data: 0},
    result: {id: ItemID.dustBronze, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotConstantan, data: 0},
    result: {id: ItemID.dustConstantan, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotSignalum, data: 0},
    result: {id: ItemID.dustSignalum, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotLumium, data: 0},
    result: {id: ItemID.dustLumium, data: 0, count: 1},
    energy: 2000
});

PulverizerRecipes.add({
    input: {id: ItemID.ingotEnderium, data: 0},
    result: {id: ItemID.dustEnderium, data: 0, count: 1},
    energy: 2000
});




// file: blocks/machines/crucible/crucible.js

IDRegistry.genBlockID("thermalMachineCrucible");
Block.createBlockWithRotation("thermalMachineCrucible", [
    {
        name: "Magma Crucible",
        texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_crucible", 0], ["thermal_machine", 2]],
        inCreative: true
    }
]);

// Callback.addCallback("PostLoaded", function () {
//     Recipes.addShaped({id: BlockID.thermalMachineCrucible, count: 1, data: 0}, [
//         " x ",
//         "b#b",
//         "cac"
//     ], ['#', BlockID.frameMachine, -1, 'x', 33, -1, 'b', 318, -1, 'a', ItemID.coilReception, -1, 'c', ItemID.gearCopper, -1]);
// });




// file: blocks/machines/crucible/tile.js

MachineRegistry.define(BlockID.thermalMachineCrucible, MachineRegistry.TileEntity({
    defaultValues: {
        progress: 0,
        progressMax: 0,
        basePower: 20
    },

    init: function () {
        this.liquidStorage.setLimit(null, 10);
    },

    click: function () {
        this.data._refreshUI = true;
    },

    tick: function () {
        let slot = this.container.getSlot("slotSource");
        let isCreative = this.data.tier === 5;
        let power = 0;

        if (this.data.progressMax) {
            if (!slot.id) {
                this.data.progress = 0;
                this.data.progressMax = 0;
                return
            }

            if (this.data.progress >= this.data.progressMax) {
                let recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                let fluid = this.liquidStorage.getLiquidStored();
                if ((!fluid || fluid === recipe.fluid) && this.liquidStorage.getAmount(fluid) + recipe.fluidAmount <= 10) {
                    this.liquidStorage.addLiquid(recipe.fluid, recipe.fluidAmount);

                    this.data.progress = 0;
                    this.data.progressMax = 0;

                    slot.count--;
                    this.container.validateSlot("slotSource");
                    this.refreshModel();
                }
            } else {
                if (isCreative) {
                    power = this.data.basePower;
                } else {
                    power = MachineRegistry.calcEnergy(this.data.basePower, this.data.energy);
                    this.data.energy -= power;
                }

                this.data.progress += power;
            }
        } else if (slot.id) {
            let recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
            if (recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 1000;
                this.refreshModel();
            }
        }

        this.liquidStorage.updateUiScale("fluidScale", this.liquidStorage.getLiquidStored());

        MachineRegistry.updateEnergyBar(this, isCreative);
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("speedScale", power / this.data.basePower);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        let stored = this.liquidStorage.getLiquidStored();

        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_crucible" + (stored ? "_" + stored : ""), 0], ["thermal_machine", 2], ["thermal_machine", 2]]);
    },

    getGuiScreen: function () {
        return crucibleUI;
    }
}));

Block.registerPlaceFunction(BlockID.thermalMachineCrucible, MachineRegistry.placeFunc(true));
Block.registerDropFunction(BlockID.thermalMachineCrucible, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachineCrucible, MachineRegistry.nameOverrideFunc);




// file: blocks/machines/crucible/gui.js

const crucibleUI = MachineRegistry.MachineUI({
    tabIcon: "icons.machines.crucible",
    recipesShower: "te:magma_crucible",

    drawing: [
        {type: "background", color: Color.rgb(149, 134, 129)},
        {type: "text", text: "Magma Crucible", x: 370, y: 70, font: {size: 25, color: Color.WHITE, shadow: 0.6}},
        {type: "bitmap", x: 550, y: 172, bitmap: "bars.machine.fluid_empty", scale: 4},
        {type: "bitmap", x: 466, y: 205, bitmap: "bars.machine.flame_empty", scale: 4.5},
        {type: "bitmap", x: 370, y: 100, bitmap: "bars.rf_empty", scale: 5},
        {type: "bitmap", x: 662, y: 90, bitmap: "bars.fluid_1", scale: 4}
    ],

    elements: {
        //@formatter:off
        "progressScale": {type: "scale", x: 550, y: 172, direction: 0, bitmap: "bars.machine.fluid_full", scale: 4},
        "energyScale": {type: "scale", x: 370, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5},
        "speedScale": {type: "scale", x: 466, y: 205, direction: 1, bitmap: "bars.machine.flame_full", scale: 4.5},

        "slotSource": {type: "slot", x: 461, y: 122, size: 70},
        "fluidScale": {type: "scale", x: 667, y: 94, direction: 1, bitmap: "bars.fluid_0", scale: 4},
        //@formatter:on
    }
});




// file: blocks/machines/crucible/recipes.js

MagmaCrucibleRecipes.add({
    id: 4,
    data: 0,
    fluid: "lava",
    fluidAmount: 1,
    energy: 300000
});

MagmaCrucibleRecipes.add({
    id: 1,
    data: 0,
    fluid: "lava",
    fluidAmount: 1,
    energy: 300000
});

MagmaCrucibleRecipes.add({
    id: 1,
    data: 5,
    fluid: "lava",
    fluidAmount: 1,
    energy: 300000
});

MagmaCrucibleRecipes.add({
    id: 1,
    data: 6,
    fluid: "lava",
    fluidAmount: 1,
    energy: 300000
});

MagmaCrucibleRecipes.add({
    id: 49,
    data: 0,
    fluid: "lava",
    fluidAmount: 1,
    energy: 300000
});

MagmaCrucibleRecipes.add({
    id: 87,
    data: 0,
    fluid: "lava",
    fluidAmount: 1,
    energy: 60000
});




// file: blocks/machines/furnace/furnace.js

IDRegistry.genBlockID("thermalMachineFurnace");
Block.createBlockWithRotation("thermalMachineFurnace", [
    {
        name: "Redstone Furnace",
        texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_furnace", 0], ["thermal_machine", 2], ["thermal_machine", 2]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalMachineFurnace, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.frameMachine, -1, 'x', 45, -1, 'a', 331, -1, "c", ItemID.gearCopper, -1, 'b', ItemID.coilReception, -1]);
});




// file: blocks/machines/furnace/tile.js

MachineRegistry.define(BlockID.thermalMachineFurnace, MachineRegistry.TileEntity({
    defaultValues: {
        progress: 0,
        progressMax: 0,
        basePower: 20
    },

    click: function () {
        this.data._refreshUI = true;
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let isCreative = this.data.tier === 5;
        let power = 0;

        if (this.data.progressMax) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.data.progressMax = 0;
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let result = Recipes.getFurnaceRecipeResult(slotSource.id, "iron");
                if (ContainerHelper.putInSlot(result, this.container.getSlot("slotResult"))) {
                    slotSource.count -= 1;
                    this.data.progress = 0;
                    this.data.progressMax = 0;
                    this.container.validateSlot("slotSource");
                    this.refreshModel();
                }
            } else {
                if (isCreative) {
                    power += this.data.basePower;
                } else {
                    power = MachineRegistry.calcEnergy(this.data.basePower, this.data.energy);
                    this.data.energy -= power;
                }

                this.data.progress += power;
            }
        } else if (slotSource.id && Recipes.getFurnaceRecipeResult(slotSource.id, "iron")) {
            this.data.progress = 1;
            this.data.progressMax = 2000;
            this.refreshModel();
        }

        MachineRegistry.updateEnergyBar(this, isCreative);
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("speedScale", power / this.data.basePower);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_furnace" + (this.data.progressMax > 0 ? "_active" : ""), 0], ["thermal_machine", 2], ["thermal_machine", 2]]);
    },

    getGuiScreen: function () {
        return furnaceUI;
    }
}));

Block.registerPlaceFunction(BlockID.thermalMachineFurnace, MachineRegistry.placeFunc(true));
Block.registerDropFunction(BlockID.thermalMachineFurnace, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachineFurnace, MachineRegistry.nameOverrideFunc);




// file: blocks/machines/furnace/gui.js

const furnaceUI = MachineRegistry.MachineUI({
    tabIcon: "icons.machines.furnace",

    drawing: [
        {type: "background", color: Color.rgb(149, 134, 129)},
        {type: "text", text: "Red Furnace", x: 370, y: 70, font: {size: 25, color: Color.WHITE, shadow: 0.6}},
        {type: "bitmap", x: 550, y: 172, bitmap: "bars.machine.def_empty", scale: 4},
        {type: "bitmap", x: 466, y: 205, bitmap: "bars.machine.furnace.speed_empty", scale: 4.5},
        {type: "bitmap", x: 370, y: 100, bitmap: "bars.rf_empty", scale: 5}
],

    elements: {
        "progressScale": {type: "scale", x: 550, y: 172, direction: 0, bitmap: "bars.machine.def_full", scale: 4},
        "energyScale": {type: "scale", x: 370, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5},
        "speedScale": {type: "scale", x: 466, y: 205, direction: 1, bitmap: "bars.machine.furnace.speed_full", scale: 4.5},

        "slotSource": {type: "slot", x: 461, y: 122, size: 70},
        "slotResult": {type: "slot", x: 657, y: 168, size: 70}
    }
});




// file: blocks/machines/energyCell/energyCell.js

IDRegistry.genBlockID("thermalEnergyCell");
Block.createBlock("thermalEnergyCell", [
    {
        name: "Energy Cell",
        texture: [["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    // Recipes.addShaped({id: BlockID.thermalMachinePulverizer, count: 1, data: 0}, [
    //     " x ",
    //     "b#b",
    //     "cac"
    // ], ['#', BlockID.frameMachine, -1, 'x', 33, -1, 'b', 318, -1, 'a', ItemID.coilReception, -1, 'c', ItemID.gearCopper, -1]);
});




// file: blocks/machines/energyCell/tile.js

MachineRegistry.define(BlockID.thermalEnergyCell, MachineRegistry.TileEntity({
    defaultValues: {
        transferIn: 1000,
        transferOut: 1000,
        heartIndex: 0,
        // refreshUIFlag: false
    },
    energyByTier: [2000000, 8000000, 18000000, 32000000, 50000000, 100],
    transferByTier: [1000, 4000, 9000, 16000, 25000, 25000],

    tick: function () {
        let window = energyCellUI.getWindowForTab(6);
        let isCreative = this.data.tier >= 5;

        if (this.container.isOpened()) {
            let content = window.getContent();
            content.elements["textLeft"].text = this.data.transferIn + "";
            content.elements["textRight"].text = this.data.transferOut + "";
            content.elements["textEnergy"].text = parseInt(this.data.energy) + "/" + this.getEnergyStorage() + "RF (" + parseInt(this.data.energy / this.getEnergyStorage() * 100) + "%)";
            content.elements["textEnergy"].x = (1000 - UIHelper.getFontWidth(this.container.getElement("textEnergy"))) / 2;

            if (this.data.transferIn >= 10000)
                content.elements["textLeft"].x = 342;
            else if (this.data.transferIn < 1000)
                content.elements["textLeft"].x = 367;
            else
                content.elements["textLeft"].x = 352;

            if (this.data.transferOut >= 10000)
                content.elements["textRight"].x = 562;
            else if (this.data.transferOut < 1000)
                content.elements["textRight"].x = 587;
            else
                content.elements["textRight"].x = 572;
        }

        let index = isCreative ? 9 : this.data.energy / this.getEnergyStorage() * 8;
        if (this.data.heartIndex !== index) {
            this.data.heartIndex = index;
            this.refreshModel();
        }

        if (isCreative) {
            this.data.energy = this.getEnergyStorage();
            this.container.setScale("energyScale", 1);
        } else this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    },

    energyTick: function (type, src) {
        let tier = this.data.tier;
        let transfer = this.transferByTier[tier];

        if (tier < 5) {
            this.data.energy += src.storage(Math.min(transfer, this.getEnergyStorage() - this.data.energy),
                Math.min(transfer, this.data.energy));
        } else this.data.energy += src.storage(transfer, transfer);
    },

    installUpgrade: function (tier) {
        if (tier < 1 || tier > 5)
            return false;

        let prevTransfer = this.transferByTier[this.data.tier];
        let transfer = this.transferByTier[tier];

        if (this.data.transferIn === prevTransfer)
            this.data.transferIn = transfer;

        if (this.data.transferOut === prevTransfer)
            this.data.transferOut = transfer;

        this.data.tier = tier;
        this.refreshModel();
        return true;
    },

    refreshModel: function () {
        ModelHelper.mapEnergyCell(this.x, this.y, this.z, BlockID.thermalEnergyCell, this.data.tier, this.data.heartIndex);
    },

    getEnergyStorage: function () {
        return this.energyByTier[this.data.tier];
    },

    getGuiScreen: function () {
        return energyCellUI;
    }
}));




// file: blocks/machines/energyCell/gui.js

const energyCellUI = MachineRegistry.MachineUI({
    tabIcon: "icons.machines.energy_cell",
    inventoryDisabled: true,
    configDisabled: true,

    drawing: [
        {type: "background", color: Color.rgb(149, 134, 129)},
        {type: "bitmap", x: 472, y: 100, bitmap: "bars.rf_empty", scale: 5},
        {type: "bitmap", x: 472 - 25 - 20 * 5, y: 100, bitmap: "ui.energyCell.input", scale: 5},
        {type: "bitmap", x: 472 + 25 + 14 * 5, y: 100, bitmap: "ui.energyCell.output", scale: 5},
    ],

    elements: {
        "energyScale": {type: "scale", x: 472, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5},

        "btnPlusLeft": {
            type: "button", x: 460 - 16 * 4, y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.plus",
            bitmap2: "buttons.plus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferIn = Math.min(tileEntity.data.transferIn + 100,
                        tileEntity.transferByTier[tileEntity.data.tier]);
                }
            }
        },
        "btnMinusLeft": {
            type: "button",
            x: 455 - 16 * 4 * 2,
            y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.minus",
            bitmap2: "buttons.minus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferIn = Math.max(tileEntity.data.transferIn - 100, 0);
                }
            }
        },
        "textLeft": {type: "text", text: "25000", x: 472 - 130, y: 100 + 42 * 5 - 16 * 4 - 40, font: FONT_WHITE_30},

        "btnPlusRight": {
            type: "button",
            x: 490 + 16 * 4,
            y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.plus",
            bitmap2: "buttons.plus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferOut = Math.min(tileEntity.data.transferOut + 100,
                        tileEntity.transferByTier[tileEntity.data.tier]);
                }
            }
        },
        "btnMinusRight": {
            type: "button",
            x: 495 + 16 * 4 * 2,
            y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.minus",
            bitmap2: "buttons.minus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferOut = Math.max(tileEntity.data.transferOut - 100, 0);
                }
            }
        },
        "textRight": {
            type: "text",
            text: "25000",
            x: 472 + 20 + 14 * 5,
            y: 100 + 42 * 5 - 16 * 4 - 40,
            font: FONT_WHITE_30
        },

        "textEnergy": {type: "text", text: "0/0 RF", x: 0, y: 320, font: FONT_WHITE_30}
    }
});




// file: blocks/ores.js

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 1);
Block.setDestroyTime(BlockID.oreCopper, 3);
Block.setDestroyLevel("oreCopper", 1);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone", 1);
Block.setDestroyTime(BlockID.oreTin, 3);
Block.setDestroyLevel("oreTin", 1);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 2);
Block.setDestroyTime(BlockID.oreSilver, 3);
Block.setDestroyLevel("oreSilver", 2);

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead Ore", texture: [["ore_lead", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreLead, "stone", 2);
Block.setDestroyTime(BlockID.oreLead, 3);
Block.setDestroyLevel("oreLead", 2);

IDRegistry.genBlockID("oreAluminum");
Block.createBlock("oreAluminum", [
    {name: "Aluminum Ore", texture: [["ore_aluminum", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreAluminum, "stone", 1);
Block.setDestroyTime(BlockID.oreAluminum, 3);
Block.setDestroyLevel("oreAluminum", 1);

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
    {name: "Nickel Ore", texture: [["ore_nickel", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreNickel, "stone", 2);
Block.setDestroyTime(BlockID.oreNickel, 3);
Block.setDestroyLevel("oreNickel", 2);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum Ore", texture: [["ore_platinum", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.orePlatinum, "stone", 3);
Block.setDestroyTime(BlockID.orePlatinum, 3);
Block.setDestroyLevel("orePlatinum", 3);

IDRegistry.genBlockID("oreIridium");
Block.createBlock("oreIridium", [
    {name: "Iridium Ore", texture: [["ore_iridium", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreIridium, "stone", 3);
Block.setDestroyTime(BlockID.oreIridium, 3);
Block.setDestroyLevel("oreIridium", 3);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril Ore", texture: [["ore_mithril", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreMithril, "stone", 3);
Block.setDestroyTime(BlockID.oreMithril, 3);
Block.setDestroyLevel("oreMithril", 3);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    //Mithril и Iridium не генерируются в мире
    let ores = ["copper", "tin", "silver", "lead", "aluminum", "nickel", "platinum"];
    let config = ThermalConfig.gen;

    for (let i in ores) {
        let ore = ores[i];
        let gen = config[ore];

        if (gen.enabled) {
            generateOre(BlockID["ore" + ore.charAt(0).toUpperCase() + ore.substr(1)],
                chunkX,
                chunkZ,
                gen.inChunk,
                gen.size,
                gen.minY,
                gen.maxY);
        }
    }
});





// file: blocks/fluid_ores.js

IDRegistry.genBlockID("sandOil");
Block.createBlock("sandOil", [
    {name: "Oil Sand", texture: [["ore_oil_sand", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.sandOil, "dirt", 0);
Block.setDestroyTime(BlockID.sandOil, 0.5);
Block.setDestroyLevel("sandOil", 0);

IDRegistry.genBlockID("oreDestabilizedRedstone");
Block.createBlock("oreDestabilizedRedstone", [
    {name: "Destabilized Redstone Ore", texture: [["ore_fluid_redstone", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreDestabilizedRedstone, "stone", 1);
Block.setDestroyTime(BlockID.oreDestabilizedRedstone, 5);
Block.setDestroyLevel("oreDestabilizedRedstone", 1);

IDRegistry.genBlockID("oreNetherrackEnergized");
Block.createBlock("oreNetherrackEnergized", [
    {name: "Energized Netherrack", texture: [["ore_fluid_glowstone", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreNetherrackEnergized, "stone", 1);
Block.setDestroyTime(BlockID.oreNetherrackEnergized, 5);
Block.setDestroyLevel("oreNetherrackEnergized", 1);

IDRegistry.genBlockID("oreEndStoneResonant");
Block.createBlock("oreEndStoneResonant", [
    {name: "Resonant End Stone", texture: [["ore_fluid_ender", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreEndStoneResonant, "stone", 1);
Block.setDestroyTime(BlockID.oreEndStoneResonant, 5);
Block.setDestroyLevel("oreEndStoneResonant", 1);

Block.registerDropFunction("sandOil", function () {
    let extra = Player.getCarriedItem().extra;
    return [[ItemID.crystalCrudeOil, 1 + randomInt(0, (extra ? extra.getEnchantLevel(18) : 0) + 1), 0]];
});

Block.registerDropFunction("oreDestabilizedRedstone", function (coords, id, data, level) {
    if (level > 0) {
        let extra = Player.getCarriedItem().extra;
        return [[ItemID.crystalRedstone, 1 + randomInt(0, (extra ? extra.getEnchantLevel(18) : 0) + 1), 0]];
    }

    return [];
});

Block.registerDropFunction("oreNetherrackEnergized", function (coords, id, data, level) {
    if (level > 0) {
        let extra = Player.getCarriedItem().extra;
        return [[ItemID.crystalGlowstone, 1 + randomInt(0, (extra ? extra.getEnchantLevel(18) : 0) + 1), 0]];
    }

    return [];
});

Block.registerDropFunction("oreEndStoneResonant", function (coords, id, data, level) {
    if (level > 0) {
        let extra = Player.getCarriedItem().extra;
        return [[ItemID.crystalEnder, 1 + randomInt(0, (extra ? extra.getEnchantLevel(18) : 0) + 1), 0]];
    }

    return [];
});

if (ThermalConfig.gen.oilSand.enabled) {
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
        if (Math.random() <= ThermalConfig.gen.oilSand.chance) {
            generateSandOre(BlockID.sandOil, chunkX, chunkZ, ThermalConfig.gen.oilSand.size);
        }
    });
}

if (ThermalConfig.gen.destabilizedRedstone.enabled) {
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
        if (Math.random() <= ThermalConfig.gen.destabilizedRedstone.chance) {
            let config = ThermalConfig.gen.destabilizedRedstone;

            generateOre(BlockID.oreDestabilizedRedstone,
                chunkX,
                chunkZ,
                config.inChunk,
                config.size,
                config.minY,
                config.maxY);
        }
    });
}

if (ThermalConfig.gen.resonantEnd.enabled) {
    Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
        if (Math.random() <= ThermalConfig.gen.resonantEnd.chance) {
            let config = ThermalConfig.gen.resonantEnd;

            generateOre(BlockID.oreEndStoneResonant,
                chunkX, chunkZ,
                config.inChunk,
                config.size,
                config.minY,
                config.maxY);
        }
    });
}




// file: blocks/parts.js

IDRegistry.genBlockID("frameMachine");
Block.createBlock("frameMachine", [
    {name: "Machine Frame", texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.frameMachine, "stone", 1);
Block.setDestroyTime(BlockID.frameMachine, 1);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.frameMachine, count: 1, data: 0}, [
        "fgf",
        "gbg",
        "fgf"
    ], ['f', 265, -1, 'g', 20, -1, 'b', ItemID.gearTin, -1]);
});




// file: blocks/strongbox/strongbox.js

IDRegistry.genBlockID("thermalStrongbox");
Block.createBlockWithRotation("thermalStrongbox", [
    {
        name: "Strongbox",
        texture: [["strongbox_top", 0], ["strongbox_top", 0], ["strongbox_side", 0], ["strongbox_side", 0], ["strongbox_side", 0], ["strongbox_side", 0]],
        inCreative: true
    }
]);

Block.setBlockShape(BlockID.thermalStrongbox, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 15 / 16, z: 15 / 16});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalStrongbox, count: 1, data: 0}, [
        " i ",
        "i#i",
        " i "
    ], ['#', 54, -1, 'i', ItemID.ingotTin, -1]);
});




// file: blocks/strongbox/gui.js

const StrongBoxUI = [];

{
    const SLOTS_AMOUNT = [
        18,
        36,
        54,
        72,
        90
    ];
    const slotSize = 75;
    const slotsInRow = 8;

    for (let i = 0; i <= 5; i++) {
        let elements = {};
        let slotsAmount = SLOTS_AMOUNT[i];

        if (i === 5) {
            elements["slot"] = {
                type: "slot",
                size: 70,
                x: 650,
                y: 110,

                isValid: function (id, count, data, container) {
                    container.getParent().data.item = {
                        id: id,
                        data: data
                    };

                    return true;
                }
            };

            elements["btnClear"] = {
                type: "button",
                bitmap: "buttons.clear",
                bitmap2: "buttons.clear_pressed",
                scale: 73 / 26,
                x: 650,
                y: 185,
                clicker: {
                    onClick: function (container) {
                        soundClick.play();
                        container.getParent().data.item = {
                            id: 0,
                            data: 0
                        };
                        container.clearSlot("slot")
                    }
                }
            };
        } else {
            for (let j = 0; j < slotsAmount; j++) {
                elements["slot" + j] = {
                    type: "slot",
                    size: 70,
                    x: 370 + j % slotsInRow * slotSize,
                    y: 100 + Math.floor(j / slotsInRow) * slotSize,
                    isValid: function (id) {
                        return !BackpackRegistry.isBackpack(id) && id !== BlockID.thermalStrongbox
                    }
                };
            }
        }

        StrongBoxUI[i] = MachineRegistry.MachineUI({
            tabIcon: "icons.storage.strongbox_" + i,
            augmentsDisabled: true,
            configDisabled: true,
            redstoneDisabled: true,

            drawing: [
                {type: "background", color: Color.rgb(149, 134, 129)},
                {type: "text", text: "Strongbox", x: 370, y: 70, font: {size: 25, color: Color.WHITE, shadow: 0.6}}
            ],

            elements: elements
        });

        if (i < 5) {
            let window = StrongBoxUI[i].getWindowForTab(6);
            window.getLocation().scrollY = (100 + Math.floor(slotsAmount / slotsInRow) * slotSize) * (window.getLocation().width / 1000);
        }
    }
}




// file: blocks/strongbox/tile.js

MachineRegistry.define(BlockID.thermalStrongbox, MachineRegistry.TileEntity({
    defaultValues: {
        item: {
            id: 0,
            data: 0
        }
    },

    tick: function () {
        if (this.data.tier === 5) {
            let item = this.data.item;
            if (item.id)
                this.container.setSlot("slot", item.id, Item.getMaxStack(item.id), item.data);
        }
    },

    installUpgrade: function (tier) {
        if (tier === 5) {
            for (let i in this.container.slots)
                this.container.clearSlot(i);
        }

        MachineRegistry.installUpgradeFunc(tier, this);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapStrongbox(this.x, this.y, this.z, block.id, block.data, this.data.tier);
    },

    getGuiScreen: function () {
        return StrongBoxUI[this.data.tier];
    }
}, true));

Block.registerPlaceFunction(BlockID.thermalStrongbox, MachineRegistry.placeFunc(true));
Block.registerDropFunction(BlockID.thermalStrongbox, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalStrongbox, function (item, name) {
    let extra = Player.getCarriedItem().extra;

    if (extra) {
        let tier = JSON.parse(extra.getString("data")).tier;
        let slots = JSON.parse(extra.getString("slots"));
        let result = name + "\n" + MinecraftColor.YELLOW + "Tier: " + MinecraftColor.AQUA + TIERS_NAME[tier] + MinecraftColor.YELLOW;
        let amount = 5;

        for (let i in slots) {
            let slot = slots[i];
            if (slot.id && slot.count > 0) {
                result += "\n" + Item.getName(slot.id, slot.data);

                if (--amount <= 0)
                    break;
            }
        }

        if (amount === 5)
            return result + "\nEmpty";

        if (amount <= 0)
            result += "\nAnd more...";

        return result;
    }

    return name + MinecraftColor.YELLOW + "\nEmpty";
});




// file: items/crystals.js

IDRegistry.genItemID("crystalCrudeOil");
Item.createItem("crystalCrudeOil", "Bitumen", {name: "crystal_crude_oil", meta: 0}, {});

IDRegistry.genItemID("crystalRedstone");
Item.createItem("crystalRedstone", "Destabilized Clathrate", {name: "crystal_redstone", meta: 0}, {});

IDRegistry.genItemID("crystalGlowstone");
Item.createItem("crystalGlowstone", "Energized Clathrate", {name: "crystal_glowstone", meta: 0}, {});

IDRegistry.genItemID("crystalEnder");
Item.createItem("crystalEnder", "Resonant Clathrate", {name: "crystal_ender", meta: 0}, {});

IDRegistry.genItemID("crystalCinnabar");
Item.createItem("crystalCinnabar", "Cinnabar", {name: "crystal_cinnabar", meta: 0}, {});




// file: items/dusts.js

IDRegistry.genItemID("dustIron");
Item.createItem("dustIron", "Pulverized Iron", {name: "dust_iron", meta: 0}, {});

IDRegistry.genItemID("dustGold");
Item.createItem("dustGold", "Pulverized Gold", {name: "dust_gold", meta: 0}, {});

IDRegistry.genItemID("dustCopper");
Item.createItem("dustCopper", "Pulverized Copper", {name: "dust_copper", meta: 0}, {});

IDRegistry.genItemID("dustTin");
Item.createItem("dustTin", "Pulverized Tin", {name: "dust_tin", meta: 0}, {});

IDRegistry.genItemID("dustSilver");
Item.createItem("dustSilver", "Pulverized Silver", {name: "dust_silver", meta: 0}, {});

IDRegistry.genItemID("dustLead");
Item.createItem("dustLead", "Pulverized Lead", {name: "dust_lead", meta: 0}, {});

IDRegistry.genItemID("dustAluminum");
Item.createItem("dustAluminum", "Pulverized Aluminum", {name: "dust_aluminum", meta: 0}, {});

IDRegistry.genItemID("dustNickel");
Item.createItem("dustNickel", "Pulverized Nickel", {name: "dust_nickel", meta: 0}, {});

IDRegistry.genItemID("dustPlatinum");
Item.createItem("dustPlatinum", "Pulverized Platinum", {name: "dust_platinum", meta: 0}, {});

IDRegistry.genItemID("dustIridium");
Item.createItem("dustIridium", "Pulverized Iridium", {name: "dust_iridium", meta: 0}, {});

IDRegistry.genItemID("dustMithril");
Item.createItem("dustMithril", "Pulverized Mithril", {name: "dust_mithril", meta: 0}, {});

/* СПЛАВЫ */
IDRegistry.genItemID("dustSteel");
Item.createItem("dustSteel", "Steel Blend", {name: "dust_steel", meta: 0}, {});

IDRegistry.genItemID("dustElectrum");
Item.createItem("dustElectrum", "Electrum Blend", {name: "dust_electrum", meta: 0}, {});

IDRegistry.genItemID("dustInvar");
Item.createItem("dustInvar", "Invar Blend", {name: "dust_invar", meta: 0}, {});

IDRegistry.genItemID("dustBronze");
Item.createItem("dustBronze", "Bronze Blend", {name: "dust_bronze", meta: 0}, {});

IDRegistry.genItemID("dustConstantan");
Item.createItem("dustConstantan", "Constantan Blend", {name: "dust_constantan", meta: 0}, {});

IDRegistry.genItemID("dustSignalum");
Item.createItem("dustSignalum", "Signalum Blend", {name: "dust_signalum", meta: 0}, {});

IDRegistry.genItemID("dustLumium");
Item.createItem("dustLumium", "Lumium Blend", {name: "dust_lumium", meta: 0}, {});

IDRegistry.genItemID("dustEnderium");
Item.createItem("dustEnderium", "Enderium Blend", {name: "dust_enderium", meta: 0}, {});


IDRegistry.genItemID("dustSulfur");
Item.createItem("dustSulfur", "Sulfur", {name: "dust_sulfur", meta: 0}, {});

IDRegistry.genItemID("dustCoal");
Item.createItem("dustCoal", "Pulverized Coal", {name: "dust_coal", meta: 0}, {});

IDRegistry.genItemID("dustCharcoal");
Item.createItem("dustCharcoal", "Pulverized Charcoal", {name: "dust_charcoal", meta: 0}, {});

IDRegistry.genItemID("dustNiter");
Item.createItem("dustNiter", "Niter", {name: "dust_niter", meta: 0}, {});

IDRegistry.genItemID("dustObsidian");
Item.createItem("dustObsidian", "Pulverized Obsidian", {name: "dust_obsidian", meta: 0}, {});

IDRegistry.genItemID("dustSaw");
Item.createItem("dustSaw", "Saw", {name: "dust_wood", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShapeless({id: ItemID.dustElectrum, count: 2}, [{id: ItemID.dustGold, data: 0}, {id: ItemID.dustSilver, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustInvar, count: 3}, [{id: ItemID.dustIron, data: 0}, {id: ItemID.dustIron, data: 0}, {id: ItemID.dustNickel, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustBronze, count: 4}, [{id: ItemID.dustCopper, data: 0}, {id: ItemID.dustCopper, data: 0}, {id: ItemID.dustCopper, data: 0}, {id: ItemID.dustTin, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustConstantan, count: 2}, [{id: ItemID.dustCopper, data: 0}, {id: ItemID.dustNickel, data: 0}]);
});




// file: items/ingots.js

IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper", meta: 0}, {});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin", meta: 0}, {});

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver", meta: 0}, {});

IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead", "Lead Ingot", {name: "ingot_lead", meta: 0}, {});

IDRegistry.genItemID("ingotAluminum");
Item.createItem("ingotAluminum", "Aluminum Ingot", {name: "ingot_aluminum", meta: 0}, {});

IDRegistry.genItemID("ingotNickel");
Item.createItem("ingotNickel", "Nickel Ingot", {name: "ingot_nickel", meta: 0}, {});

IDRegistry.genItemID("ingotPlatinum");
Item.createItem("ingotPlatinum", "Platinum Ingot", {name: "ingot_platinum", meta: 0}, {});

IDRegistry.genItemID("ingotIridium");
Item.createItem("ingotIridium", "Iridium Ingot", {name: "ingot_iridium", meta: 0}, {});

IDRegistry.genItemID("ingotMithril");
Item.createItem("ingotMithril", "Mithril Ingot", {name: "ingot_mithril", meta: 0}, {});

/* СПЛАВЫ */

IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Steel Ingot", {name: "ingot_steel", meta: 0}, {});

IDRegistry.genItemID("ingotElectrum");
Item.createItem("ingotElectrum", "Electrum Ingot", {name: "ingot_electrum", meta: 0}, {});

IDRegistry.genItemID("ingotInvar");
Item.createItem("ingotInvar", "Invar Ingot", {name: "ingot_invar", meta: 0}, {});

IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "Bronze Ingot", {name: "ingot_bronze", meta: 0}, {});

IDRegistry.genItemID("ingotConstantan");
Item.createItem("ingotConstantan", "Constantan Ingot", {name: "ingot_constantan", meta: 0}, {});

IDRegistry.genItemID("ingotSignalum");
Item.createItem("ingotSignalum", "Signalum Ingot", {name: "ingot_signalum", meta: 0}, {});

IDRegistry.genItemID("ingotLumium");
Item.createItem("ingotLumium", "Lumium Ingot", {name: "ingot_lumium", meta: 0}, {});

IDRegistry.genItemID("ingotEnderium");
Item.createItem("ingotEnderium", "Enderium Ingot", {name: "ingot_enderium", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.dustIron, 265, 0);
    Recipes.addFurnace(ItemID.dustGold, 266, 0);
    Recipes.addFurnace(ItemID.dustCopper, ItemID.ingotCopper, 0);
    Recipes.addFurnace(ItemID.dustTin, ItemID.ingotTin, 0);
    Recipes.addFurnace(ItemID.dustSilver, ItemID.ingotSilver, 0);
    Recipes.addFurnace(ItemID.dustLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(ItemID.dustAluminum, ItemID.ingotAluminum, 0);
    Recipes.addFurnace(ItemID.dustNickel, ItemID.ingotNickel, 0);
    Recipes.addFurnace(ItemID.dustPlatinum, ItemID.ingotPlatinum, 0);
    Recipes.addFurnace(ItemID.dustIridium, ItemID.ingotIridium, 0);
    Recipes.addFurnace(ItemID.dustMithril, ItemID.ingotMithril, 0);
    Recipes.addFurnace(ItemID.dustElectrum, ItemID.ingotElectrum, 0);
    Recipes.addFurnace(ItemID.dustInvar, ItemID.ingotInvar, 0);
    Recipes.addFurnace(ItemID.dustBronze, ItemID.ingotBronze, 0);
    Recipes.addFurnace(ItemID.dustConstantan, ItemID.ingotConstantan, 0);
});




// file: items/nuggets.js

IDRegistry.genItemID("nuggetDiamond");
Item.createItem("nuggetDiamond", "Diamond Nugget", {name: "nugget_diamond", meta: 0}, {});

IDRegistry.genItemID("nuggetEmerald");
Item.createItem("nuggetEmerald", "Emerald Nugget", {name: "nugget_emerald", meta: 0}, {});

IDRegistry.genItemID("nuggetCopper");
Item.createItem("nuggetCopper", "Copper Nugget", {name: "nugget_copper", meta: 0}, {});

IDRegistry.genItemID("nuggetTin");
Item.createItem("nuggetTin", "Tin Nugget", {name: "nugget_tin", meta: 0}, {});

IDRegistry.genItemID("nuggetSilver");
Item.createItem("nuggetSilver", "Silver Nugget", {name: "nugget_silver", meta: 0}, {});

IDRegistry.genItemID("nuggetLead");
Item.createItem("nuggetLead", "Lead Nugget", {name: "nugget_lead", meta: 0}, {});

IDRegistry.genItemID("nuggetAluminum");
Item.createItem("nuggetAluminum", "Aluminum Nugget", {name: "nugget_aluminum", meta: 0}, {});

IDRegistry.genItemID("nuggetNickel");
Item.createItem("nuggetNickel", "Nickel Nugget", {name: "nugget_nickel", meta: 0}, {});

IDRegistry.genItemID("nuggetPlatinum");
Item.createItem("nuggetPlatinum", "Platinum Nugget", {name: "nugget_platinum", meta: 0}, {});

IDRegistry.genItemID("nuggetIridium");
Item.createItem("nuggetIridium", "Iridium Nugget", {name: "nugget_iridium", meta: 0}, {});

IDRegistry.genItemID("nuggetMithril");
Item.createItem("nuggetMithril", "Mithril Nugget", {name: "nugget_mithril", meta: 0}, {});

/* СПЛАВЫ */

IDRegistry.genItemID("nuggetSteel");
Item.createItem("nuggetSteel", "Steel Nugget", {name: "nugget_steel", meta: 0}, {});

IDRegistry.genItemID("nuggetElectrum");
Item.createItem("nuggetElectrum", "Electrum Nugget", {name: "nugget_electrum", meta: 0}, {});

IDRegistry.genItemID("nuggetInvar");
Item.createItem("nuggetInvar", "Invar Nugget", {name: "nugget_invar", meta: 0}, {});

IDRegistry.genItemID("nuggetBronze");
Item.createItem("nuggetBronze", "Bronze Nugget", {name: "nugget_bronze", meta: 0}, {});

IDRegistry.genItemID("nuggetConstantan");
Item.createItem("nuggetConstantan", "Constantan Nugget", {name: "nugget_constantan", meta: 0}, {});

IDRegistry.genItemID("nuggetSignalum");
Item.createItem("nuggetSignalum", "Signalum Nugget", {name: "nugget_signalum", meta: 0}, {});

IDRegistry.genItemID("nuggetLumium");
Item.createItem("nuggetLumium", "Lumium Nugget", {name: "nugget_lumium", meta: 0}, {});

IDRegistry.genItemID("nuggetEnderium");
Item.createItem("nuggetEnderium", "Enderium Nugget", {name: "nugget_enderium", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {
    RecipeHelper.addIngotRecipes(264, ItemID.nuggetDiamond);
    RecipeHelper.addIngotRecipes(388, ItemID.nuggetEmerald);
    RecipeHelper.addIngotRecipes(ItemID.ingotCopper, ItemID.nuggetCopper);
    RecipeHelper.addIngotRecipes(ItemID.ingotTin, ItemID.nuggetTin);
    RecipeHelper.addIngotRecipes(ItemID.ingotSilver, ItemID.nuggetSilver);
    RecipeHelper.addIngotRecipes(ItemID.ingotLead, ItemID.nuggetLead);
    RecipeHelper.addIngotRecipes(ItemID.ingotAluminum, ItemID.nuggetAluminum);
    RecipeHelper.addIngotRecipes(ItemID.ingotNickel, ItemID.nuggetNickel);
    RecipeHelper.addIngotRecipes(ItemID.ingotPlatinum, ItemID.nuggetPlatinum);
    RecipeHelper.addIngotRecipes(ItemID.ingotIridium, ItemID.nuggetIridium);
    RecipeHelper.addIngotRecipes(ItemID.ingotMithril, ItemID.nuggetMithril);
    RecipeHelper.addIngotRecipes(ItemID.ingotSteel, ItemID.nuggetSteel);
    RecipeHelper.addIngotRecipes(ItemID.ingotElectrum, ItemID.nuggetElectrum);
    RecipeHelper.addIngotRecipes(ItemID.ingotInvar, ItemID.nuggetInvar);
    RecipeHelper.addIngotRecipes(ItemID.ingotBronze, ItemID.nuggetBronze);
    RecipeHelper.addIngotRecipes(ItemID.ingotConstantan, ItemID.nuggetConstantan);
    RecipeHelper.addIngotRecipes(ItemID.ingotSignalum, ItemID.nuggetSignalum);
    RecipeHelper.addIngotRecipes(ItemID.ingotLumium, ItemID.nuggetLumium);
    RecipeHelper.addIngotRecipes(ItemID.ingotEnderium, ItemID.nuggetEnderium);
});




// file: items/plates.js

IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron", meta: 0}, {});

IDRegistry.genItemID("plateGold");
Item.createItem("plateGold", "Gold Plate", {name: "plate_gold", meta: 0}, {});

IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper", "Copper Plate", {name: "plate_copper", meta: 0}, {});

IDRegistry.genItemID("plateTin");
Item.createItem("plateTin", "Tin Plate", {name: "plate_tin", meta: 0}, {});

IDRegistry.genItemID("plateSilver");
Item.createItem("plateSilver", "Silver Plate", {name: "plate_silver", meta: 0}, {});

IDRegistry.genItemID("plateLead");
Item.createItem("plateLead", "Lead Plate", {name: "plate_lead", meta: 0}, {});

IDRegistry.genItemID("plateAluminum");
Item.createItem("plateAluminum", "Aluminum Plate", {name: "plate_aluminum", meta: 0}, {});

IDRegistry.genItemID("plateNickel");
Item.createItem("plateNickel", "Nickel Plate", {name: "plate_nickel", meta: 0}, {});

IDRegistry.genItemID("platePlatinum");
Item.createItem("platePlatinum", "Platinum Plate", {name: "plate_platinum", meta: 0}, {});

IDRegistry.genItemID("plateIridium");
Item.createItem("plateIridium", "Iridium Plate", {name: "plate_iridium", meta: 0}, {});

IDRegistry.genItemID("plateMithril");
Item.createItem("plateMithril", "Mithril Plate", {name: "plate_mithril", meta: 0}, {});

/* СПЛАВЫ */

IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel", "Steel Plate", {name: "plate_steel", meta: 0}, {});

IDRegistry.genItemID("plateElectrum");
Item.createItem("plateElectrum", "Electrum Plate", {name: "plate_electrum", meta: 0}, {});

IDRegistry.genItemID("plateInvar");
Item.createItem("plateInvar", "Invar Plate", {name: "plate_invar", meta: 0}, {});

IDRegistry.genItemID("plateBronze");
Item.createItem("plateBronze", "Bronze Plate", {name: "plate_bronze", meta: 0}, {});

IDRegistry.genItemID("plateConstantan");
Item.createItem("plateConstantan", "Constantan Plate", {name: "plate_constantan", meta: 0}, {});

IDRegistry.genItemID("plateSignalum");
Item.createItem("plateSignalum", "Signalum Plate", {name: "plate_signalum", meta: 0}, {});

IDRegistry.genItemID("plateLumium");
Item.createItem("plateLumium", "Lumium Plate", {name: "plate_lumium", meta: 0}, {});

IDRegistry.genItemID("plateEnderium");
Item.createItem("plateEnderium", "Enderium Plate", {name: "plate_enderium", meta: 0}, {});




// file: items/gears.js

IDRegistry.genItemID("gearIron");
Item.createItem("gearIron", "Iron Gear", {name: "gear_iron", meta: 0}, {});

IDRegistry.genItemID("gearGold");
Item.createItem("gearGold", "Gold Gear", {name: "gear_gold", meta: 0}, {});

IDRegistry.genItemID("gearCopper");
Item.createItem("gearCopper", "Copper Gear", {name: "gear_copper", meta: 0}, {});

IDRegistry.genItemID("gearTin");
Item.createItem("gearTin", "Tin Gear", {name: "gear_tin", meta: 0}, {});

IDRegistry.genItemID("gearSilver");
Item.createItem("gearSilver", "Silver Gear", {name: "gear_silver", meta: 0}, {});

IDRegistry.genItemID("gearLead");
Item.createItem("gearLead", "Lead Gear", {name: "gear_lead", meta: 0}, {});

IDRegistry.genItemID("gearAluminum");
Item.createItem("gearAluminum", "Aluminum Gear", {name: "gear_aluminum", meta: 0}, {});

IDRegistry.genItemID("gearNickel");
Item.createItem("gearNickel", "Nickel Gear", {name: "gear_nickel", meta: 0}, {});

IDRegistry.genItemID("gearPlatinum");
Item.createItem("gearPlatinum", "Platinum Gear", {name: "gear_platinum", meta: 0}, {});

IDRegistry.genItemID("gearIridium");
Item.createItem("gearIridium", "Iridium Gear", {name: "gear_iridium", meta: 0}, {});

IDRegistry.genItemID("gearMithril");
Item.createItem("gearMithril", "Mithril Gear", {name: "gear_mithril", meta: 0}, {});

/* СПЛАВЫ */

IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel", "Steel Gear", {name: "gear_steel", meta: 0}, {});

IDRegistry.genItemID("gearElectrum");
Item.createItem("gearElectrum", "Electrum Gear", {name: "gear_electrum", meta: 0}, {});

IDRegistry.genItemID("gearInvar");
Item.createItem("gearInvar", "Invar Gear", {name: "gear_invar", meta: 0}, {});

IDRegistry.genItemID("gearBronze");
Item.createItem("gearBronze", "Bronze Gear", {name: "gear_bronze", meta: 0}, {});

IDRegistry.genItemID("gearConstantan");
Item.createItem("gearConstantan", "Constantan Gear", {name: "gear_constantan", meta: 0}, {});

IDRegistry.genItemID("gearSignalum");
Item.createItem("gearSignalum", "Signalum Gear", {name: "gear_signalum", meta: 0}, {});

IDRegistry.genItemID("gearLumium");
Item.createItem("gearLumium", "Lumium Gear", {name: "gear_lumium", meta: 0}, {});

IDRegistry.genItemID("gearEnderium");
Item.createItem("gearEnderium", "Enderium Gear", {name: "gear_enderium", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {
    RecipeHelper.addGearRecipes(265, ItemID.gearIron);
    RecipeHelper.addGearRecipes(266, ItemID.gearGold);
    RecipeHelper.addGearRecipes(ItemID.ingotCopper, ItemID.gearCopper);
    RecipeHelper.addGearRecipes(ItemID.ingotTin, ItemID.gearTin);
    RecipeHelper.addGearRecipes(ItemID.ingotSilver, ItemID.gearSilver);
    RecipeHelper.addGearRecipes(ItemID.ingotLead, ItemID.gearLead);
    RecipeHelper.addGearRecipes(ItemID.ingotAluminum, ItemID.gearAluminum);
    RecipeHelper.addGearRecipes(ItemID.ingotNickel, ItemID.gearNickel);
    RecipeHelper.addGearRecipes(ItemID.ingotPlatinum, ItemID.gearPlatinum);
    RecipeHelper.addGearRecipes(ItemID.ingotIridium, ItemID.gearIridium);
    RecipeHelper.addGearRecipes(ItemID.ingotMithril, ItemID.gearMithril);
    RecipeHelper.addGearRecipes(ItemID.ingotSteel, ItemID.gearSteel);
    RecipeHelper.addGearRecipes(ItemID.ingotElectrum, ItemID.gearElectrum);
    RecipeHelper.addGearRecipes(ItemID.ingotInvar, ItemID.gearInvar);
    RecipeHelper.addGearRecipes(ItemID.ingotBronze, ItemID.gearBronze);
    RecipeHelper.addGearRecipes(ItemID.ingotConstantan, ItemID.gearConstantan);
    RecipeHelper.addGearRecipes(ItemID.ingotSignalum, ItemID.gearSignalum);
    RecipeHelper.addGearRecipes(ItemID.ingotLumium, ItemID.gearLumium);
    RecipeHelper.addGearRecipes(ItemID.ingotEnderium, ItemID.gearElectrum);
});




// file: items/coins.js

IDRegistry.genItemID("coinIron");
Item.createItem("coinIron", "Iron Coin", {name: "coin_iron", meta: 0}, {});

IDRegistry.genItemID("coinGold");
Item.createItem("coinGold", "Gold Coin", {name: "coin_gold", meta: 0}, {});

IDRegistry.genItemID("coinCopper");
Item.createItem("coinCopper", "Copper Coin", {name: "coin_copper", meta: 0}, {});

IDRegistry.genItemID("coinTin");
Item.createItem("coinTin", "Tin Coin", {name: "coin_tin", meta: 0}, {});

IDRegistry.genItemID("coinSilver");
Item.createItem("coinSilver", "Silver Coin", {name: "coin_silver", meta: 0}, {});

IDRegistry.genItemID("coinLead");
Item.createItem("coinLead", "Lead Coin", {name: "coin_lead", meta: 0}, {});

IDRegistry.genItemID("coinAluminum");
Item.createItem("coinAluminum", "Aluminum Coin", {name: "coin_aluminum", meta: 0}, {});

IDRegistry.genItemID("coinNickel");
Item.createItem("coinNickel", "Nickel Coin", {name: "coin_nickel", meta: 0}, {});

IDRegistry.genItemID("coinPlatinum");
Item.createItem("coinPlatinum", "Platinum Coin", {name: "coin_platinum", meta: 0}, {});

IDRegistry.genItemID("coinIridium");
Item.createItem("coinIridium", "Iridium Coin", {name: "coin_iridium", meta: 0}, {});

IDRegistry.genItemID("coinMithril");
Item.createItem("coinMithril", "Mithril Coin", {name: "coin_mithril", meta: 0}, {});

/* СПЛАВЫ */

IDRegistry.genItemID("coinSteel");
Item.createItem("coinSteel", "Steel Coin", {name: "coin_steel", meta: 0}, {});

IDRegistry.genItemID("coinElectrum");
Item.createItem("coinElectrum", "Electrum Coin", {name: "coin_electrum", meta: 0}, {});

IDRegistry.genItemID("coinInvar");
Item.createItem("coinInvar", "Invar Coin", {name: "coin_invar", meta: 0}, {});

IDRegistry.genItemID("coinBronze");
Item.createItem("coinBronze", "Bronze Coin", {name: "coin_bronze", meta: 0}, {});

IDRegistry.genItemID("coinConstantan");
Item.createItem("coinConstantan", "Constantan Coin", {name: "coin_constantan", meta: 0}, {});

IDRegistry.genItemID("coinSignalum");
Item.createItem("coinSignalum", "Signalum Coin", {name: "coin_signalum", meta: 0}, {});

IDRegistry.genItemID("coinLumium");
Item.createItem("coinLumium", "Lumium Coin", {name: "coin_lumium", meta: 0}, {});

IDRegistry.genItemID("coinEnderium");
Item.createItem("coinEnderium", "Enderium Coin", {name: "coin_enderium", meta: 0}, {});




// file: items/tools.js

ToolAPI.addToolMaterial("copper", {level: 1, durability: 175, efficiency: 4, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("tin", {level: 1, durability: 150, efficiency: 4.5, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("silver", {level: 1, durability: 75, efficiency: 6, damage: 1, enchantability: 25});
ToolAPI.addToolMaterial("lead", {level: 1, durability: 100, efficiency: 5, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("aluminum", {level: 1, durability: 225, efficiency: 10, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("nickel", {level: 2, durability: 300, efficiency: 6.5, damage: 2.5, enchantability: 18});
ToolAPI.addToolMaterial("platinum", {level: 4, durability: 1400, efficiency: 9, damage: 3.5, enchantability: 16});
ToolAPI.addToolMaterial("steel", {level: 2, durability: 400, efficiency: 6.5, damage: 2.5, enchantability: 10});
ToolAPI.addToolMaterial("electrum", {level: 0, durability: 100, efficiency: 14, damage: 0.5, enchantability: 30});
ToolAPI.addToolMaterial("invar", {level: 2, durability: 425, efficiency: 6.5, damage: 2.5, enchantability: 12});
ToolAPI.addToolMaterial("bronze", {level: 2, durability: 325, efficiency: 6, damage: 2, enchantability: 10});
ToolAPI.addToolMaterial("constantan", {level: 2, durability: 275, efficiency: 6, damage: 6, enchantability: 12});

MaterialRegistry.addToolSet("copper", "copper", ItemID["ingotCopper"]);
MaterialRegistry.addToolSet("tin", "tin", ItemID["ingotTin"]);
MaterialRegistry.addToolSet("silver", "silver", ItemID["ingotSilver"]);
MaterialRegistry.addToolSet("lead", "lead", ItemID["ingotLead"]);
MaterialRegistry.addToolSet("aluminum", "aluminum", ItemID["ingotAluminum"]);
MaterialRegistry.addToolSet("nickel", "nickel", ItemID["ingotNickel"]);
MaterialRegistry.addToolSet("platinum", "platinum", ItemID["ingotPlatinum"]);
MaterialRegistry.addToolSet("steel", "steel", ItemID["ingotSteel"]);
MaterialRegistry.addToolSet("electrum", "electrum", ItemID["ingotElectrum"]);
MaterialRegistry.addToolSet("invar", "invar", ItemID["ingotInvar"]);
MaterialRegistry.addToolSet("bronze", "bronze", ItemID["ingotBronze"]);
MaterialRegistry.addToolSet("constantan", "constantan", ItemID["ingotBronze"]);

MaterialRegistry.addToolSet("wood", "wood", 5, true);
MaterialRegistry.addToolSet("stone", "stone", 4, true);
MaterialRegistry.addToolSet("iron", "iron", 265, true);
MaterialRegistry.addToolSet("gold", "golden", 266, true);
MaterialRegistry.addToolSet("diamond", "diamond", 264, true);




// file: items/armors.js

MaterialRegistry.addArmorSet("copper", 10, [1, 3, 3, 1], "ingotCopper");
MaterialRegistry.addArmorSet("tin", 8, [1, 3, 4, 1], "ingotTin");
MaterialRegistry.addArmorSet("silver", 8, [2, 4, 4, 1], "ingotSilver");
MaterialRegistry.addArmorSet("lead", 12, [2, 4, 5, 3], "ingotLead");
MaterialRegistry.addArmorSet("aluminum", 12, [1, 3, 4, 2], "ingotAluminum");
MaterialRegistry.addArmorSet("nickel", 15, [2, 5, 5, 2], "ingotNickel");
MaterialRegistry.addArmorSet("platinum", 35, [3, 6, 8, 3], "ingotPlatinum");
MaterialRegistry.addArmorSet("steel", 22, [2, 5, 7, 2], "ingotSteel");
MaterialRegistry.addArmorSet("electrum", 8, [2, 4, 4, 2], "ingotElectrum");
MaterialRegistry.addArmorSet("invar", 21, [2, 5, 7, 2], "ingotInvar");
MaterialRegistry.addArmorSet("bronze", 18, [2, 6, 6, 2], "ingotBronze");
MaterialRegistry.addArmorSet("constantan", 13, [2, 4, 4, 2], "ingotConstantan");




// file: items/parts.js

IDRegistry.genItemID("servoRedstone");
Item.createItem("servoRedstone", "Redstone Servo", {name: "servo_redstone", meta: 0}, {});

IDRegistry.genItemID("coilReception");
Item.createItem("coilReception", "Reception Coil", {name: "coil_reception", meta: 0}, {});

IDRegistry.genItemID("coilTransmission");
Item.createItem("coilTransmission", "Transmission Coil", {name: "coil_transmission", meta: 0}, {});

IDRegistry.genItemID("coilConductance");
Item.createItem("coilConductance", "Conductance Coil", {name: "coil_conductance", meta: 0}, {});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.servoRedstone, count: 1, data: 0}, [
        "f",
        "s",
        "f",
    ], ['f', 331, -1, 's', 265, -1]);

    Recipes.addShaped({id: ItemID.coilReception, count: 1, data: 0}, [
        "  f",
        " s ",
        "f  ",
    ], ['f', 331, -1, 's', 266, -1]);

    Recipes.addShaped({id: ItemID.coilTransmission, count: 1, data: 0}, [
        "  f",
        " s ",
        "f  ",
    ], ['f', 331, -1, 's', ItemID.ingotSilver, -1]);

    Recipes.addShaped({id: ItemID.coilConductance, count: 1, data: 0}, [
        "f  ",
        " s ",
        "  f",
    ], ['f', 331, -1, 's', ItemID.ingotElectrum, -1]);
});




// file: items/upgrades.js

IDRegistry.genItemID("upgradeKitHardened");
Item.createItem("upgradeKitHardened", "Hardened Upgrade Kit", {name: "upgrade_kit", meta: 0}, {});

IDRegistry.genItemID("upgradeKitReinforced");
Item.createItem("upgradeKitReinforced", "Reinforced Upgrade Kit", {name: "upgrade_kit", meta: 1}, {});

IDRegistry.genItemID("upgradeKitSignalum");
Item.createItem("upgradeKitSignalum", "Signalum Upgrade Kit", {name: "upgrade_kit", meta: 2}, {});

IDRegistry.genItemID("upgradeKitResonant");
Item.createItem("upgradeKitResonant", "Resonant Upgrade Kit", {name: "upgrade_kit", meta: 3}, {});

IDRegistry.genItemID("upgradeKitCreative");
Item.createItem("upgradeKitCreative", "Creative Upgrade Kit", {name: "upgrade_kit", meta: 4}, {});

let tierByItem = {};
tierByItem[ItemID.upgradeKitHardened] = 1;
tierByItem[ItemID.upgradeKitReinforced] = 2;
tierByItem[ItemID.upgradeKitSignalum] = 3;
tierByItem[ItemID.upgradeKitResonant] = 4;
tierByItem[ItemID.upgradeKitCreative] = 5;

Callback.addCallback("ItemUse", function (coords, item) {
    let tier = tierByItem[item.id];

    if (tier > 0) {
        let tile = World.getTileEntity(coords.x, coords.y, coords.z);
        if (!tile || !tile.installUpgrade || (tier < 5 && tile.data.tier !== tier - 1))
            return;

        if (tile.installUpgrade(tier))
            Player.decreaseCarriedItem(1);
    }
});




// file: items/satchel.js

const isValidItemForSatchel = function (id) {
    return !BackpackRegistry.isBackpack(id) && id !== BlockID.thermalStrongbox
};

IDRegistry.genItemID("satchelBasic");
Item.createItem("satchelBasic", "Basic Satchel", {name: "satchel", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.satchelBasic, {
    slots: 9,
    isValidItem: isValidItemForSatchel
});

IDRegistry.genItemID("satchelHardened");
Item.createItem("satchelHardened", "Hardened Satchel", {name: "satchel", meta: 1}, {stack: 1});

BackpackRegistry.register(ItemID.satchelHardened, {
    slots: 18,
    inRow: 9,
    isValidItem: isValidItemForSatchel
});

IDRegistry.genItemID("satchelReinforced");
Item.createItem("satchelReinforced", "Reinforced Satchel", {name: "satchel", meta: 2}, {stack: 1});

BackpackRegistry.register(ItemID.satchelReinforced, {
    slots: 27,
    inRow: 9,
    isValidItem: isValidItemForSatchel
});

IDRegistry.genItemID("satchelSignalum");
Item.createItem("satchelSignalum", "Signalum Satchel", {name: "satchel", meta: 3}, {stack: 1});

BackpackRegistry.register(ItemID.satchelSignalum, {
    slots: 36,
    inRow: 9,
    isValidItem: isValidItemForSatchel
});

IDRegistry.genItemID("satchelResonant");
Item.createItem("satchelResonant", "Resonant Satchel", {name: "satchel", meta: 4}, {stack: 1});

BackpackRegistry.register(ItemID.satchelResonant, {
    slots: 45,
    inRow: 9,
    isValidItem: isValidItemForSatchel
});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.satchelBasic, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotTin, 0, '2', 334, 0, '3', 35, -1]);

    Recipes.addShaped({id: ItemID.satchelHardened, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotInvar, 0, '2', ItemID.nuggetTin, 0, '3', ItemID.satchelBasic, -1]);

    Recipes.addShaped({id: ItemID.satchelReinforced, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotElectrum, 0, '2', ItemID.nuggetInvar, 0, '3', ItemID.satchelHardened, -1]);

    Recipes.addShaped({id: ItemID.satchelSignalum, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotSignalum, 0, '2', ItemID.nuggetElectrum, 0, '3', ItemID.satchelReinforced, -1]);

    Recipes.addShaped({id: ItemID.satchelResonant, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotEnderium, 0, '2', ItemID.nuggetSignalum, 0, '3', ItemID.satchelSignalum, -1]);
});




