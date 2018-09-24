/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 45
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

const RF = EnergyTypeRegistry.assureEnergyType("RF", 1/4);

//TODO CRAFTING_TOOL_ITEM_MAX_DAMAGE
var CRAFTING_TOOL_ITEM_MAX_DAMAGE = 105;

let GuideAPI = null;
let GuideHelper = null;
let PageControllers = null;

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

ModAPI.addAPICallback("GuideAPI", function (api) {
    GuideAPI = api.GuideAPI;
    GuideHelper = api.GuideHelper;
    PageControllers = api.PageControllers;

    PageControllers["MAGMA_CRUCIBLE_RECIPE_PAGE"] = function (params, elements, container, section) {
        let yp = 80;
        let xp = section === "left" ? 50 : 550;
        elements["magma_crucible_title_" + section] = {type: "text", x: xp, y: 40, text: params.title || "", font: {color: android.graphics.Color.BLACK, size: 20}};

        if(params.recipes){
            for(let key in params.recipes) {
                let recipe = params.recipes[key];
                elements["slotInputCrucible_" + key + "_" + section] = {type: "slot", x: xp, y: yp, size: 70, visual: true};
                let slot_input = container.getSlot("slotInputCrucible_" + key + "_" + section);

                slot_input.id = recipe.id;
                slot_input.data = recipe.data || 0;
                slot_input.count = 1;

                elements["magma_crucible_bar_" + key + "_" + section] = {type: "image", x: xp + 70, y: yp + 10, bitmap: params.bar_texture || "te_bar_0", scale: 3.2};
                elements["magma_crucible_text_" + key + "_" + section] = {type: "text", text: recipe.fluid + "(" + (recipe.fluidAmount * 1000) + "mb)", x: xp + 150, y: yp + 20, font: {color: android.graphics.Color.BLACK}};
                yp+=80;
            }
        }
    };

    PageControllers["TE_TO_RECIPE_PAGE"] = function (params, elements, container, section) {
        let yp = 120;
        let xp = section === "left" ? 50 : 550;
        elements["oto_title_" + section] = {type: "text", x: xp, y: 40, text: params.title || "", font: {color: android.graphics.Color.BLACK, size: 20}};

        if(params.recipes){
            for(let key in params.recipes){
                let recipe = params.recipes[key];

                elements["slotInput_"+ key +"_" + section] = {type: "slot", x: xp, y: yp, size: 70, visual: true/*, bitmap: "slot_empty"*/, isTransparentBackground: true};
                let slot_input = container.getSlot("slotInput_"+ key +"_" + section);

                elements["oto_bar_" + key + "_" + section] = {type: "image", x: xp + 70, y: yp + 10, bitmap: params.bar_texture || "furnace_bar_guide", scale: 3.2};

                elements["slotOutput_"+ key +"_" + section] = {type: "slot", x: xp + 140, y: yp - 35, size: 70, visual: true/*, bitmap: "slot_empty"*/, isTransparentBackground: true};
                let slot_output = container.getSlot("slotOutput_"+ key +"_" + section);

                elements["slotOutput2_"+ key +"_" + section] = {type: "slot", x: xp + 140, y: yp + 35, size: 70, visual: true/*, bitmap: "slot_empty"*/, isTransparentBackground: true};
                let slot_output2 = container.getSlot("slotOutput2_"+ key +"_" + section);

                slot_input.id = recipe.input.id;
                slot_input.data = recipe.input.data || 0;
                slot_input.count = recipe.input.count || 1;

                slot_output.id = recipe.output.id;
                slot_output.data = recipe.output.data || 0;
                slot_output.count = recipe.output.count || 1;

                if(recipe.dop && recipe.dop.id){

                    slot_output2.id = recipe.dop.id || 0;
                    slot_output2.data = recipe.dop.data || 0;
                    slot_output2.count = recipe.dop.count || 1;

                    let chance = recipe.dop.chance * 100;

                    if(chance)
                        elements["to_chance_"+ key +"_" + section] = {type: "text", x: xp + 215, y: yp + 55, text: chance + "%", font: {color: android.graphics.Color.BLACK, size: 18}};
                }else {
                    slot_output2.id = 0;
                    slot_output2.data = 0;
                    slot_output2.count = 1;
                }

                yp += 150;
            }
        }
    };

});




// file: api/recipes/PulverizerRecipes.js

const PulverizerRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        if(!id)
            return null;

        return this.recipes[id + ":" + data] || this.recipes[id + ":-1"];
    }

};




// file: api/recipes/SawmillRecipes.js

const SawmillRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        return this.recipes[id + ":" + data];
    }

};






// file: api/recipes/MagmaCrucibleRecipes.js

const MagmaCrucibleRecipes = {
    recipes: {},

    add: function(recipe){
        this.recipes[recipe.id+":"+recipe.data] = recipe;
    },

    get: function(id, data){
        return this.recipes[id+":"+data] || this.recipes[id+":-1"]
    }

};




// file: api/recipes/guide.js

function initializeRecipeGuideFor(object, name, unique) {

    let pages = {"default": {}};
    let currentPage = "default";
    let currentSection = "left";
    let count = 0;

    for (let i in object.recipes) {
        let recipe = object.recipes[i];
        let input = recipe.input;
        let result = recipe.result;
        let dop = recipe.dop || {};
        let page = pages[currentPage];

        if(!page[currentSection]) {
            page[currentSection] = {
                controller: PageControllers.TE_TO_RECIPE_PAGE,
                title: name + " Recipes(Page " + (count / 3) + ")",
                recipes: []
            };
        }

        page[currentSection].recipes.push({
            input: {
                id: input.id,
                data: input.data < 0 || !input.data ? 0 : input.data,
                count: 1
            },

            output: {
                id: result.id,
                data: result.data < 0 || !result.data ? 0 : result.data,
                count: result.count || 1
            },

            dop: {
                id: dop.id,
                data: dop.data,
                count: dop.count,
                chance: dop.chance
            }
        });

        count++;

        if(count % 3 === 0){
            if(currentSection === "left"){
                currentSection = "right";
                continue;
            }

            let newPage = "page" + count;
            let oldPage = currentPage;

            page.nextLink = newPage;
            currentSection = "left";
            currentPage = newPage;

            pages[newPage] = {
                preLink: oldPage
            };
        }
    }

    GuideAPI.registerGuide(unique, {
        pages: pages
    });

}

function initializeMagmaCrucibleRecipesGuide() {
    let pages = {"default": {}};
    let currentPage = "default";
    let currentSection = "left";
    let count = 0;

    for (let i in MagmaCrucibleRecipes.recipes) {
        let recipe = MagmaCrucibleRecipes.recipes[i];
        let page = pages[currentPage];

        if(!page[currentSection]) {
            page[currentSection] = {
                controller: PageControllers.MAGMA_CRUCIBLE_RECIPE_PAGE,
                title: "Magma Crucible Recipes(Page " + (count / 6) + ")",
                recipes: []
            };
        }

        page[currentSection].recipes.push(recipe);

        count++;

        if(count % 6 === 0){
            if(currentSection === "left"){
                currentSection = "right";
                continue;
            }

            let newPage = "page" + count;
            let oldPage = currentPage;

            page.nextLink = newPage;
            currentSection = "left";
            currentPage = newPage;

            pages[newPage] = {
                preLink: oldPage
            };
        }
    }

    GuideAPI.registerGuide("guideMagmaCrucibleRecipes", {
        pages: pages
    });
}

Callback.addCallback("PreLoaded", function () {
    Callback.addCallback("PostLoaded", function () {
        if(GuideAPI) {

            initializeRecipeGuideFor(PulverizerRecipes, "Pulverizer", "guidePulverizerRecipes");
            initializeRecipeGuideFor(SawmillRecipes, "Sawmill", "guideSawmillRecipes");
            initializeMagmaCrucibleRecipesGuide();

        }
    });
});




// file: api/managers/SteamManager.js

const SteamManager = {
    fuels: {},

    addFuel: function (id, data, energy) {
        this.fuels[id + ":" + data] = energy;
    },

    getEnergy: function (id, data) {
        return this.fuels[id + ":" + data] || Recipes.getFuelBurnDuration(id, data) * 10;
    }

};

SteamManager.addFuel(263, 0, 32000);
SteamManager.addFuel(263, 1, 24000);




// file: api/managers/MagmaticManager.js

const MagmaticManager = {
    fuels: {},

    addFuel: function (liquid, energy) {
        this.fuels[liquid] = energy;
    },

    getEnergyFor100mb: function (liquid) {
        return this.fuels[liquid] || 0;
    }

};

MagmaticManager.addFuel("lava", 18000);




// file: api/MaterialRegistry.js

ToolType.sickle = {
    blockTypes: ["plant"]
};

var MaterialRegistry = {
    sickles: [],

    defineMaterial: function (vanilla, tools, name, armor, durabilityModifier) {

        IDRegistry.genItemID("dust" + name);
        Item.createItem("dust" + name, name + " dust", {name: "dust_" + name.toLowerCase(), meta: 0}, {});

        IDRegistry.genItemID("plate" + name);
        Item.createItem("plate" + name, name + " plate", {name: "plate_" + name.toLowerCase(), meta: 0}, {});

        IDRegistry.genItemID("gear" + name);
        Item.createItem("gear" + name, name + " gear", {name: "gear_" + name.toLowerCase(), meta: 0}, {});

        if(name !== "Gold"){
            IDRegistry.genItemID("nugget" + name);
            Item.createItem("nugget" + name, name + " nugget", {name: "nugget_" + name.toLowerCase(), meta: 0}, {});
        }

        if(!vanilla){
            IDRegistry.genItemID("ingot" + name);
            Item.createItem("ingot" + name, name + " ingot", {name: "ingot_" + name.toLowerCase(), meta: 0}, {});

            if(Config.glassEnabled) {
                IDRegistry.genBlockID("hardenedGlass" + name);
                Block.createBlock("hardenedGlass" + name, [
                    {name: name + " hardened glass", texture: [["glass_" + name.toLowerCase(), 0]], inCreative: true}
                ]);
            }

            if(Config.blockEnabled) {
                IDRegistry.genBlockID("block" + name);
                Block.createBlock("block" + name, [
                    {name: name + " block", texture: [["block_" + name.toLowerCase(), 0]], inCreative: true}
                ]);
            }
        }

        if(tools) {
            IDRegistry.genItemID("axe" + name);
            Item.createItem("axe" + name, name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("hoe" + name);
            Item.createItem("hoe" + name, name + " hoe", {name: "hoe_" + name.toLowerCase(), meta: 0}, {stack: 1});

                IDRegistry.genItemID("pickaxe" + name);
                Item.createItem("pickaxe" + name, name + " pickaxe", {
                    name: "pickaxe_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("shovel" + name);
                Item.createItem("shovel" + name, name + " shovel", {
                    name: "shovel_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("sword" + name);
                Item.createItem("sword" + name, name + " sword", {
                    name: "sword_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("sickle" + name);
                Item.createItem("sickle" + name, name + " sickle", {
                    name: "sickle_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("helmet" + name);
                Item.createArmorItem("helmet" + name, name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                    type: "helmet",
                    armor: armor[0],
                    durability: durabilityModifier * 11,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                IDRegistry.genItemID("chestplate" + name);
                Item.createArmorItem("chestplate" + name, name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                    type: "chestplate",
                    armor: armor[1],
                    durability: durabilityModifier * 16,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                IDRegistry.genItemID("leggings" + name);
                Item.createArmorItem("leggings" + name, name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                    type: "leggings",
                    armor: armor[2],
                    durability: durabilityModifier * 15,
                    texture: "armor/" + name.toLowerCase() + "_2.png"
                });

                IDRegistry.genItemID("boots" + name);
                Item.createArmorItem("boots" + name, name + " boots", {name: "boots_" + name.toLowerCase()}, {
                    type: "boots",
                    armor: armor[3],
                    durability: durabilityModifier * 13,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                ToolAPI.setTool(ItemID["axe" + name], name.toLowerCase(), ToolType.axe);
                ToolAPI.setTool(ItemID["hoe" + name], name.toLowerCase(), ToolType.hoe);
                ToolAPI.setTool(ItemID["pickaxe" + name], name.toLowerCase(), ToolType.pickaxe);
                ToolAPI.setTool(ItemID["shovel" + name], name.toLowerCase(), ToolType.shovel);
                ToolAPI.setTool(ItemID["sword" + name], name.toLowerCase(), ToolType.sword);
                ToolAPI.setTool(ItemID["sickle" + name], name.toLowerCase(), ToolType.sickle);
            }

        Callback.addCallback("PostLoaded", function () {

            if(ItemID["ingot" + name]){

                PulverizerRecipes.add({
                    input: {id: ItemID["ingot" + name], data: 0},
                    result: {id: ItemID["dust" + name], data: 0, count: 1},
                });

                addRecipeWithCraftingTool({id: ItemID["plate" + name], count: 1, data: 0}, [{
                    id: ItemID["ingot" + name],
                    data: 0
                }], ItemID.thermalHammer);

                Recipes.addShaped({id: ItemID["ingot" + name], count: 1, data: 0}, [
                    "aaa",
                    "aaa",
                    "aaa"
                ], ['a', ItemID["nugget" + name], 0]);

                if(Config.blockEnabled) {
                    Recipes.addShaped({id: BlockID["block" + name], count: 1, data: 0}, [
                        "aaa",
                        "aaa",
                        "aaa"
                    ], ['a', ItemID["ingot" + name], 0]);
                }

                if(tools) {
                    Recipes.addShaped({id: ItemID["sword" + name], count: 1, data: 0}, [
                        " a ",
                        " a ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["pickaxe" + name], count: 1, data: 0}, [
                        "aaa",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["shovel" + name], count: 1, data: 0}, [
                        " a ",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["axe" + name], count: 1, data: 0}, [
                        "aa ",
                        "as ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["hoe" + name], count: 1, data: 0}, [
                        "aa ",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["sickle" + name], count: 1, data: 0}, [
                        " a ",
                        "  a",
                        "sa "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["gear" + name], count: 1, data: 0}, [
                        " f ",
                        "fdf",
                        " f "
                    ], ['f', ItemID["ingot" + name], 0, 'd', 265, 0]);


                    Recipes.addShaped({id: ItemID["helmet" + name], count: 1, data: 0}, [
                        "aaa",
                        "a a",
                        "   "
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID["chestplate" + name], count: 1, data: 0}, [
                        "a a",
                        "aaa",
                        "aaa"
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID["leggings" + name], count: 1, data: 0}, [
                        "aaa",
                        "a a",
                        "a a"
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID["boots" + name], count: 1, data: 0}, [
                        "   ",
                        "a a",
                        "a a"
                    ], ['a', ItemID["ingot" + name], 0]);
                }

                Recipes.addFurnace(ItemID["dust" + name], ItemID["ingot" + name], 0);
            }
        });


    }

};




// file: api/ContainerHelper.js

var ContainerHelper = {
    /*
        Добавить жидкость в tile из slots.full и добавить пустой контейнер в slots.empty.
        ContainerHelper.fluidContainerEmpty(["water", "water"], tile, {full: "full", empty: "empty"});
     */
    fluidContainerEmpty: function (liquid, tile, slots) {
        let slotContainerFull = tile.container.getSlot(slots.full);
        let slotContainer = tile.container.getSlot(slots.empty);

        if (slotContainerFull && slotContainer && slotContainerFull.id) {
            let empty = LiquidRegistry.getEmptyItem(slotContainerFull.id, slotContainerFull.data);

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




// file: api/DynamoHelper.js

const DynamoHelper = {

    MIN_POWER: 8,
    MAX_POWER: 80,

    registerDynamo: function (unique, name, texture, tile) {

        Block.setPrototype(unique, {
            type: Block.TYPE_BASE,

            getVariations: function () {
                return [
                    {name: name, texture: [[texture, 1], [texture, 1], [texture, 0]], inCreative: true}
                ];
            }

        });

        tile.energyTick = function(type, src){
            let output = Math.min(this.getMaxEnergyProvide ? this.getMaxEnergyProvide() : 400, this.data.energy);
            this.data.energy += src.add(output) - output;
        };

        tile.isGenerator = function(){
            return true
        };
        Block.setBlockShape(BlockID[unique], {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.62, z: 0.999});
        MachineRegistry.register(BlockID[unique], tile);
    },

    mapAtCoords: function(x, y, z, id, texture, isActive, rotate){

        let render = new ICRender.Model();
        let model = BlockRenderer.createModel();

        if(rotate === 0){ //UP
            model.addBox(0, 0, 0, 1, 0.61, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 0]]);
            model.addBox(0.250, 0.62, 0.250, 0.746, 1, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 0]]);
        }else if(rotate === 1){ //DOWN
            model.addBox(0, 0.39, 0, 1, 1, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 2]]);
            model.addBox(0.250, 0, 0.250, 0.746, 0.62, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 3]]);
        }else if(rotate === 2){
            model.addBox(0, 0, 0, 0.625, 1, 1, [["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 1]]);
            model.addBox(0.625, 0.250, 0.250, 1, 0.7, 0.746, [["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 3){
            model.addBox(0.38, 0, 0, 1, 1, 1, [["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 1]]);
            model.addBox(0, 0.250, 0.250, 0.38, 0.7, 0.746, [["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 4){
            model.addBox(0, 0, 0.38, 1, 1, 1, [["dynamo_" + texture, 0], ["dynamo_" + texture, 0], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 4]]);
            model.addBox(0.250, 0.250, 0, 0.746, 0.7, 0.40, [["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 5]]);
        }else if(rotate === 5){
            model.addBox(0, 0, 0, 1, 1, 0.625, [["dynamo_" + texture, 2], ["dynamo_" + texture, 2], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 3]]);
            model.addBox(0.250, 0.250, 0.625, 0.746, 0.7, 1, [["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 4]]);
        }

        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * tile.getEnergyStorage() / 10;

        if (tile.data.energy < maxPowerLevel / 10) {
            return this.MAX_POWER;
        }
        if (tile.data.energy > maxPowerLevel) {
            return this.MIN_POWER;
        }

        return (tile.getEnergyStorage() - tile.data.energy) / (maxPowerLevel / basePower);
    }

};




// file: api/MachineRegistry.js

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
                this.data.energy += src.get(Math.min(this.getEnergyStorage() - this.data.energy, this.getMaxEnergyReceive ? this.getMaxEnergyReceive() : 200));
            };
        }


        ICRender.getGroup("rf-wire").add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, prototype);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * (basePower * 1000) / 10;
        let energy = tile.data.energy;
        if(energy > maxPowerLevel){
            return basePower;
        }
        if(energy < maxPowerLevel / 10){
            return Math.min(basePower / 10, energy);
        }

        return energy / (maxPowerLevel / basePower);
    }

};




// file: api/MaterialRegistry.js

ToolType.sickle = {
    blockTypes: ["plant"]
};

var MaterialRegistry = {
    sickles: [],

    defineMaterial: function (vanilla, tools, name, armor, durabilityModifier) {

        IDRegistry.genItemID("dust" + name);
        Item.createItem("dust" + name, name + " dust", {name: "dust_" + name.toLowerCase(), meta: 0}, {});

        IDRegistry.genItemID("plate" + name);
        Item.createItem("plate" + name, name + " plate", {name: "plate_" + name.toLowerCase(), meta: 0}, {});

        IDRegistry.genItemID("gear" + name);
        Item.createItem("gear" + name, name + " gear", {name: "gear_" + name.toLowerCase(), meta: 0}, {});

        if(name !== "Gold"){
            IDRegistry.genItemID("nugget" + name);
            Item.createItem("nugget" + name, name + " nugget", {name: "nugget_" + name.toLowerCase(), meta: 0}, {});
        }

        if(!vanilla){
            IDRegistry.genItemID("ingot" + name);
            Item.createItem("ingot" + name, name + " ingot", {name: "ingot_" + name.toLowerCase(), meta: 0}, {});

            if(Config.glassEnabled) {
                IDRegistry.genBlockID("hardenedGlass" + name);
                Block.createBlock("hardenedGlass" + name, [
                    {name: name + " hardened glass", texture: [["glass_" + name.toLowerCase(), 0]], inCreative: true}
                ]);
            }

            if(Config.blockEnabled) {
                IDRegistry.genBlockID("block" + name);
                Block.createBlock("block" + name, [
                    {name: name + " block", texture: [["block_" + name.toLowerCase(), 0]], inCreative: true}
                ]);
            }
        }

        if(tools) {
            IDRegistry.genItemID("axe" + name);
            Item.createItem("axe" + name, name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("hoe" + name);
            Item.createItem("hoe" + name, name + " hoe", {name: "hoe_" + name.toLowerCase(), meta: 0}, {stack: 1});

                IDRegistry.genItemID("pickaxe" + name);
                Item.createItem("pickaxe" + name, name + " pickaxe", {
                    name: "pickaxe_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("shovel" + name);
                Item.createItem("shovel" + name, name + " shovel", {
                    name: "shovel_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("sword" + name);
                Item.createItem("sword" + name, name + " sword", {
                    name: "sword_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("sickle" + name);
                Item.createItem("sickle" + name, name + " sickle", {
                    name: "sickle_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID("helmet" + name);
                Item.createArmorItem("helmet" + name, name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                    type: "helmet",
                    armor: armor[0],
                    durability: durabilityModifier * 11,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                IDRegistry.genItemID("chestplate" + name);
                Item.createArmorItem("chestplate" + name, name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                    type: "chestplate",
                    armor: armor[1],
                    durability: durabilityModifier * 16,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                IDRegistry.genItemID("leggings" + name);
                Item.createArmorItem("leggings" + name, name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                    type: "leggings",
                    armor: armor[2],
                    durability: durabilityModifier * 15,
                    texture: "armor/" + name.toLowerCase() + "_2.png"
                });

                IDRegistry.genItemID("boots" + name);
                Item.createArmorItem("boots" + name, name + " boots", {name: "boots_" + name.toLowerCase()}, {
                    type: "boots",
                    armor: armor[3],
                    durability: durabilityModifier * 13,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                ToolAPI.setTool(ItemID["axe" + name], name.toLowerCase(), ToolType.axe);
                ToolAPI.setTool(ItemID["hoe" + name], name.toLowerCase(), ToolType.hoe);
                ToolAPI.setTool(ItemID["pickaxe" + name], name.toLowerCase(), ToolType.pickaxe);
                ToolAPI.setTool(ItemID["shovel" + name], name.toLowerCase(), ToolType.shovel);
                ToolAPI.setTool(ItemID["sword" + name], name.toLowerCase(), ToolType.sword);
                ToolAPI.setTool(ItemID["sickle" + name], name.toLowerCase(), ToolType.sickle);
            }

        Callback.addCallback("PostLoaded", function () {

            if(ItemID["ingot" + name]){

                PulverizerRecipes.add({
                    input: {id: ItemID["ingot" + name], data: 0},
                    result: {id: ItemID["dust" + name], data: 0, count: 1},
                });

                addRecipeWithCraftingTool({id: ItemID["plate" + name], count: 1, data: 0}, [{
                    id: ItemID["ingot" + name],
                    data: 0
                }], ItemID.thermalHammer);

                Recipes.addShaped({id: ItemID["ingot" + name], count: 1, data: 0}, [
                    "aaa",
                    "aaa",
                    "aaa"
                ], ['a', ItemID["nugget" + name], 0]);

                if(Config.blockEnabled) {
                    Recipes.addShaped({id: BlockID["block" + name], count: 1, data: 0}, [
                        "aaa",
                        "aaa",
                        "aaa"
                    ], ['a', ItemID["ingot" + name], 0]);
                }

                if(tools) {
                    Recipes.addShaped({id: ItemID["sword" + name], count: 1, data: 0}, [
                        " a ",
                        " a ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["pickaxe" + name], count: 1, data: 0}, [
                        "aaa",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["shovel" + name], count: 1, data: 0}, [
                        " a ",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["axe" + name], count: 1, data: 0}, [
                        "aa ",
                        "as ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["hoe" + name], count: 1, data: 0}, [
                        "aa ",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["sickle" + name], count: 1, data: 0}, [
                        " a ",
                        "  a",
                        "sa "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID["gear" + name], count: 1, data: 0}, [
                        " f ",
                        "fdf",
                        " f "
                    ], ['f', ItemID["ingot" + name], 0, 'd', 265, 0]);


                    Recipes.addShaped({id: ItemID["helmet" + name], count: 1, data: 0}, [
                        "aaa",
                        "a a",
                        "   "
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID["chestplate" + name], count: 1, data: 0}, [
                        "a a",
                        "aaa",
                        "aaa"
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID["leggings" + name], count: 1, data: 0}, [
                        "aaa",
                        "a a",
                        "a a"
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID["boots" + name], count: 1, data: 0}, [
                        "   ",
                        "a a",
                        "a a"
                    ], ['a', ItemID["ingot" + name], 0]);
                }

                Recipes.addFurnace(ItemID["dust" + name], ItemID["ingot" + name], 0);
            }
        });


    }

};




// file: api/Config.js

var Config = {

    /* ----- ORE GEN ----- */
    genCopper: __config__.getBool("gen.copper"),
    genTin: __config__.getBool("gen.tin"),
    genLead: __config__.getBool("gen.lead"),
    genSilver: __config__.getBool("gen.silver"),
    genNickel: __config__.getBool("gen.nickel"),
    genPlatinum: __config__.getBool("gen.platinum"),

    /* ----- OTHER ----- */
    glassEnabled: __config__.getBool("glassEnabled"),
    blockEnabled: __config__.getBool("blockEnabled"),

};




// file: api/SatchelRegistry.js

Saver.addSavesScope("SatchelScope",
    function read(scope) {
        SatchelRegistry.save = scope;
    },

    function save() {
        return SatchelRegistry.save;
    }
);

const SatchelRegistry = {
    save: {
        uniqueID: 0,
        containers: {}
    },
    prototypes: {},
    guis: {},

    onBackpackUse: function (item) {
        if (!this.save["containers"]) {
            this.save["containers"] = {};
        }
        if (typeof this.save.uniqueID === 'undefined') {
            this.save.uniqueID = 0;
        }

        if (item.data === 0 || !this.save["containers"]["b" + item.data]) {
            let u = ++this.save.uniqueID;
            this.save["containers"]["b" + u] = new UI.Container();
            Player.setCarriedItem(item.id, 1, u);
            item.data = u;
            this.onBackpackUse(item);
        } else {
            this.openedUI = this.save["containers"]["b" + item.data];
            this.openedUI.openAs(this.guis[this.prototypes[item.id].slots]);
            this.temp = true;
        }

    },

    register: function (arg) {

        IDRegistry.genItemID(arg.codeName);
        Item.createItem(arg.codeName, arg.name, {name: arg.texture[0], meta: arg.texture[1] || 0}, {stack: 1});

        if (!this.guis[arg.slots]) {
            let obj = new UI.StandartWindow({
                standart: {
                    header: {
                        text: {
                            text: Translation.translate("Backpack")
                        }
                    },
                    inventory: {
                        standart: true
                    },
                    background: {
                        standart: true
                    },
                    minHeight: 90 + (arg.slots / 10 * 61) + 70
                },
                drawing: [],
                elements: {}
            });

            let xp = 345;
            let yp = 60;

            for (let i = 1; i <= arg.slots; i++) {
                obj.content.elements["slot" + i] = {type: "slot", x: xp, y: yp};
                xp += 61;
                if (i % 10 === 0) {
                    xp = 345;
                    yp += 61;
                }
            }

            this.guis[arg.slots] = obj;
        }
        arg.id = ItemID[arg.codeName];
        Item.registerUseFunctionForID(arg.id, function (coords, item) {
            SatchelRegistry.openedBackpack = item.id;
            SatchelRegistry.onBackpackUse(item);
        });

        this.prototypes[arg.id] = arg;
    }
};




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

MaterialRegistry.defineMaterial(false, true, "Copper", [1, 3, 3, 1], 6);
MaterialRegistry.defineMaterial(false, true, "Tin", [1, 3, 4, 1], 8);
MaterialRegistry.defineMaterial(false, true, "Silver", [2, 4, 4, 1], 11);
MaterialRegistry.defineMaterial(false, true, "Aluminum", [2, 4, 5, 3], 15);
MaterialRegistry.defineMaterial(false, true, "Lead", [1, 3, 4, 2], 12);
MaterialRegistry.defineMaterial(false, true, "Nickel", [2, 5, 5, 2], 15);
MaterialRegistry.defineMaterial(false, true, "Platinum", [3, 6, 8, 3], 40);
MaterialRegistry.defineMaterial(false, true, "Steel", [2, 5, 7, 2], 22);
MaterialRegistry.defineMaterial(false, true, "Electrum", [2, 4, 4, 2], 8);
MaterialRegistry.defineMaterial(false, true, "Invar", [2, 5, 7, 2], 21);
MaterialRegistry.defineMaterial(false, true, "Bronze", [2, 6, 6, 2], 18);
MaterialRegistry.defineMaterial(false, true, "Constantan", [2, 4, 4, 2], 13);
MaterialRegistry.defineMaterial(false, false, "Iridium", [2, 4, 4, 2], 13);
MaterialRegistry.defineMaterial(false, false, "Mithril", [2, 4, 4, 2], 13);
MaterialRegistry.defineMaterial(false, false, "Signalum");
MaterialRegistry.defineMaterial(false, false, "Enderium");

//Vanilla materials
MaterialRegistry.defineMaterial(true, false, "Iron");
MaterialRegistry.defineMaterial(true, false, "Gold");

IDRegistry.genItemID("thermalHammer");
Item.createItem("thermalHammer", "Crescent hammer", {name: "hammer", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.thermalHammer, CRAFTING_TOOL_ITEM_MAX_DAMAGE);

Callback.addCallback("PostLoaded", function () {

    PulverizerRecipes.add({
        input: {id: 265, data: 0},
        result: {id: ItemID.dustIron, data: 0, count: 1},
    });

    PulverizerRecipes.add({
        input: {id: 266, data: 0},
        result: {id: ItemID.dustGold, data: 0, count: 1},
    });

    addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{
        id: 265,
        data: 0
    }], ItemID.thermalHammer);

    addRecipeWithCraftingTool({id: ItemID.plateGold, count: 1, data: 0}, [{
        id: 266,
        data: 0
    }], ItemID.thermalHammer);

    Recipes.addShaped({id: ItemID.thermalHammer, count: 1, data: 0}, [
        "222",
        "212",
        "a1a"
    ], ['1', 280, 0, '2', 265, 0]);

    Recipes.addShapeless({id: ItemID.dustElectrum, count: 2, data: 0}, [{id: ItemID.dustGold, data: 0}, {id: ItemID.dustSilver, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustInvar, count: 3, data: 0}, [{id: ItemID.dustIron, data: 0}, {id: ItemID.dustIron, data: 0}, {id: ItemID.dustNickel, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustBronze, count: 4, data: 0}, [{id: ItemID.dustCopper, data: 0}, {id: ItemID.dustCopper, data: 0}, {id: ItemID.dustCopper, data: 0}, {id: ItemID.dustTin, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustConstantan, count: 2, data: 0}, [{id: ItemID.dustCopper, data: 0}, {id: ItemID.dustNickel, data: 0}]);

});




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
    ], ['a', 20, 0, '2', ItemID.gearTin, 0, '1', 265, 0]);
});




// file: blocks/ores.js

const BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3
}, "stone");

IDRegistry.genBlockID("oreIridium");
Block.createBlock("oreIridium", [
    {name: "Iridium ore", texture: [["ore_iridium", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead ore", texture: [["ore_lead", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril ore", texture: [["ore_mithril", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
    {name: "Nickel ore", texture: [["ore_nickel", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum ore", texture: [["ore_platinum", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver ore", texture: [["ore_silver", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin ore", texture: [["ore_tin", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper ore", texture: [["ore_copper", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreAluminum");
Block.createBlock("oreAluminum", [
    {name: "Aluminum ore", texture: [["ore_aluminum", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.oreAluminum, BlockID.oreLead, BlockID.oreMithil, BlockID.orePlatinum, BlockID.oreSilver, BlockID.oreTin, BlockID.oreCopper]);
ToolAPI.registerBlockDiggingLevel(BlockID.oreLead, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreMithil, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.orePlatinum, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreSilver, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTin, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreCopper, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreAluminum, 1);

Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
    Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
    Recipes.addFurnace(BlockID.oreLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(BlockID.oreAluminum, ItemID.ingotAluminum, 0);
    Recipes.addFurnace(BlockID.oreNickel, ItemID.ingotNickel, 0);
    Recipes.addFurnace(BlockID.orePlatinum, ItemID.ingotPlatinum, 0);
    Recipes.addFurnace(BlockID.oreIridium, ItemID.ingotIridium, 0);
    Recipes.addFurnace(BlockID.oreMithril, ItemID.ingotMithril, 0);

});

const OreGenerator = {
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate: function (x, y, z, maxCount) {
        if (World.getBlock(x, y, z).id === 1) {
            GenerationUtils.setLockedBlock(x, y, z);
            for (let i = 1; i < this.random(1, maxCount); i++) {
                GenerationUtils.setLockedBlock(x + this.random(-1, 1), y + this.random(-1, 1), z + this.random(-1, 1));
            }
        }
    }
};

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {

        if (Config.genCopper) {
            GenerationUtils.lockInBlock(BlockID.oreCopper, 0);
            for (let i = 0; i < 10; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 75);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genTin) {
            GenerationUtils.lockInBlock(BlockID.oreTin, 0);
            for (let i = 0; i < 8; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 55);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genLead) {
            GenerationUtils.lockInBlock(BlockID.oreLead, 0);
            for (let i = 0; i < 8; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
    

    if (Config.genSilver) {
        GenerationUtils.lockInBlock(BlockID.oreSilver, 0);
        for (let i = 0; i < 6; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 8);
        }
    }

    if (Config.genNickel) {
        GenerationUtils.lockInBlock(BlockID.oreNickel, 0);
        for (let i = 0; i < 3; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 20);
            OreGenerator.generate(coords.x, coords.y, coords.z, 4);
        }
    }

    if (Config.genPlatinum) {
        GenerationUtils.lockInBlock(BlockID.orePlatinum, 0);
        for (let i = 0; i < 8; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 1);
        }
    }


});




// file: blocks/duct/flux.js

function setupWireRender(id, groupName, width, preventSelfAdd) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);

    let boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ];

    let group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }

    for (let i in boxes) {
        let box = boxes[i];

        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);

        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }

    let modelOwn = BlockRenderer.createModel();
    modelOwn.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(modelOwn);
}

IDRegistry.genBlockID("fluxductLeadstone");
Block.createBlock("fluxductLeadstone", [
    {name: "Leadstone Fluxduct", texture: [["fluxduct_lead", 0]], inCreative: true}
]);

RF.registerWire(BlockID.fluxductLeadstone);

setupWireRender(BlockID.fluxductLeadstone, "rf-wire", 0.38);

Block.setBlockShape(BlockID.fluxductLeadstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.fluxductLeadstone, count: 6, data: 0}, [
        "111",
        "a2a",
        "111"
    ], ['1', 331, 0, 'a', ItemID.ingotLead, 0, '2', 20, 0]);
});




// file: blocks/dynamo/magmatic/common.js

DynamoHelper.registerDynamo("dynamoMagmatic", "Magmatic Dynamo", "dynamo_magmatic" , {
    defaultValues: {
        energy: 0,
        rotate: 0,
        isActive: false,
        fuelRF: 0
    },

    init: function () {
        this.liquidStorage.setLimit("lava", 4);
    },

    isGenerator: function() {
        return true;
    },

    tick: function () {

        if(!this.modelRefreshed){
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
            this.modelRefreshed = true;
        }

        if(World.getThreadTime() % 20 === 0){
            ContainerHelper.fluidContainerEmpty(["lava"], this, {full: "slot1", empty: "slot2"});
        }

        if(this.data.isActive){
            let energy = Math.min(this.data.fuelRF, DynamoHelper.calcEnergy(this, 40));
            this.data.energy = Math.min(this.data.energy + energy, this.getEnergyStorage());
            this.data.fuelRF -= energy;

            if(this.data.fuelRF <= 0){
                if(this.canStart())
                    this.processStart();
                else {
                    this.data.isActive = false;
                    DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
                }
            }
        }else if(World.getThreadTime() % 32 === 0 && this.canStart()){
            this.processStart();
            this.data.isActive = true;
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
        }

        this.liquidStorage.updateUiScale("lavaScale", "lava");
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    canStart: function () {
        return this.liquidStorage.getAmount("lava") >= 0.1;
    },

    processStart: function () {
        let stored = this.liquidStorage.getLiquidStored();
        this.data.fuelRF += MagmaticManager.getEnergyFor100mb(stored);
        this.liquidStorage.getLiquid(stored, 0.1);
    },

    getEnergyStorage: function () {
        return 10000;
    },

    getGuiScreen: function () {
        return dynamoMagmaticGUI;
    },

    onWrenched: function () {
        this.data.rotate++;
        if(this.data.rotate > 5)
            this.data.rotate = 0;

        DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
    }

});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.dynamoMagmatic, count: 1, data: 0}, [
        " 1 ",
        "323",
        "545"
    ], ['1', ItemID.redstoneTransmissionCoil, 0, '2', ItemID.gearInvar, 0, '3', 265, 0, "4", 331, 0, '5', ItemID.ingotInvar, 0]);
});




// file: blocks/dynamo/magmatic/gui.js

const dynamoMagmaticGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Magmatic Dynamo"
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
        {type: "bitmap", x: 500, y: 90, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 340, y: 60, bitmap: "fluid_scale_short_b", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 500, y: 90, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "lavaScale": {type: "scale", x: 343, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},

        "slot1": {type: "slot", x: 420, y: 60},
        "slot2": {type: "slot", x: 420, y: 199}
    }
});




// file: blocks/dynamo/steam/common.js

DynamoHelper.registerDynamo("dynamoSteam", "Steam Dynamo", "dynamo_steam", {

    defaultValues: {
        fuelMax: 0,
        fuelRF: 0,
        waterRF: 0,
        energy: 0,
        rotate: 0,
        isActive: false
    },

    init: function () {
        this.liquidStorage.setLimit("water", 10);
        this.liquidStorage.setLimit("steam", 4);
    },

    tick: function () {

        if(!this.modelRefreshed){
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
            this.modelRefreshed = true;
        }

        if (World.getThreadTime() % 20 === 0) {
            ContainerHelper.fluidContainerEmpty(["water"], this, {
                full: "slotWaterContainer",
                empty: "slotWaterContainerEmpty"
            });
        }

        if(this.data.isActive){
            let energy = Math.min(this.data.fuelRF, DynamoHelper.calcEnergy(this, 40));
            let energy2 = energy / 1000;

            if(this.liquidStorage.getAmount("steam") > 3){
                this.data.energy = Math.min(this.data.energy + energy, this.getEnergyStorage());
                this.liquidStorage.getLiquid("steam", energy2 / 2);
            }

            if(this.data.fuelRF){
                this.data.fuelRF -= energy;
                this.data.waterRF -= energy;
                this.liquidStorage.addLiquid("steam", energy2);
            }

            if(this.data.fuelRF <= 0 || this.data.waterRF <= 0){
                if(this.canStart())
                    this.processStart();
                else {
                    this.data.isActive = false;
                    DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
                }
            }
        }else if(World.getThreadTime() % 32 === 0 && this.canStart()){
            this.processStart();
            this.data.isActive = true;
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
        }

        this.liquidStorage.updateUiScale("steamScale", "steam");
        this.liquidStorage.updateUiScale("waterScale", "water");
        this.container.setScale("fuelScale", this.data.fuelRF / this.data.fuelMax);
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    canStart: function () {
        let slot = this.container.getSlot("slotFuel");
        let fuel = SteamManager.getEnergy(slot.id, slot.data);

        return this.liquidStorage.getAmount("steam") > 0.04 || (this.data.waterRF > 0 || this.liquidStorage.getAmount("water") > 0.2) && (this.data.fuelRF > 0 || fuel > 0);
    },

    processStart: function () {
        if(this.data.fuelRF <= 0){
            let slot = this.container.getSlot("slotFuel");
            this.data.fuelMax = this.data.fuelRF = SteamManager.getEnergy(slot.id, slot.data);
            slot.count--;
        }

        if(this.data.waterRF <= 0){
            this.data.waterRF += 40000;
            this.liquidStorage.getLiquid("water", 0.2);
        }
    },

    getEnergyStorage: function () {
        return 40000;
    },

    getGuiScreen: function () {
        return dynamoSteamGUI;
    },

    onWrenched: function () {
        this.data.rotate++;
        if(this.data.rotate > 5)
            this.data.rotate = 0;

        DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
    }

});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.dynamoSteam, count: 1, data: 0}, [
        " 1 ",
        "323",
        "545"
    ], ['1', ItemID.redstoneTransmissionCoil, 0, '2', ItemID.gearCopper, 0, '3', 265, 0, "4", 331, 0, '5', ItemID.ingotCopper, 0]);
});




// file: blocks/dynamo/steam/gui.js

const dynamoSteamGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Steam Dynamo"
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




// file: blocks/machines/pulverizer/block.js

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
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 33, 0, 'b', 318, 0, 'a', ItemID.redstoneReceptionCoil, 0, 'c', ItemID.gearCopper, 0]);
});
        




// file: blocks/machines/pulverizer/tile.js

MachineRegistry.register(BlockID.pulverizer, {

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
        let slotSource = this.container.getSlot("slotSource");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.container.setScale("speedScale", 0);
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let r = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
                let result = r.result;
                let dop = r.dop;

                let slotResult = this.container.getSlot("slotResult");
                let slotResultDop = this.container.getSlot("slotResultDop");

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                    if (!dop || (slotResultDop.id === 0 || (slotResultDop.id === dop.id && slotResultDop.data === dop.data && slotResultDop.count + dop.count <= Item.getMaxStack(slotResultDop.id)))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;

                        if (dop && (!dop.chance || Math.random() < dop.chance)) {
                            slotResultDop.count = !slotResultDop.id ? dop.count : slotResultDop.count + dop.count;
                            slotResultDop.id = dop.id;
                            slotResultDop.data = dop.data;
                        }

                        slotSource.count -= 1;
                        this.data.progress = 0;
                        this.container.setScale("speedScale", 0);
                    }
                }
            }else {
                let energy = MachineRegistry.calcEnergy(this, 20);
                this.data.energy -= energy;
                this.container.setScale("speedScale", energy / 20);

                this.data.progress += energy;
            }
        } else if (slotSource.id) {
            let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
            if(recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 10000;
            }
        }

        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 20000;
    }
});




// file: blocks/machines/pulverizer/gui.js

const guipulverizer = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Pulverizer"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 441, y: 165, bitmap: "scale_speed_pulverizer_0", scale: 3.2}
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
        "speedScale": {type: "scale", x: 441, y: 165, direction: 1, bitmap: "scale_speed_pulverizer_1", scale: 3.2},
        "btnRecipes": {type: "button", x: 930, y: 60, bitmap: "btn_recipes", scale: 3.2, clicker: {
            onClick: function(){
                GuideAPI.openGuide("guidePulverizerRecipes");
            },
        }},

        "slotSource": {type: "slot", x: 441, y: 102},
        "slotResult": {type: "slot", x: 625, y: 102},
        "slotResultDop": {type: "slot", x: 625, y: 165}
    }
});




// file: blocks/machines/pulverizer/recipes.js

PulverizerRecipes.add({
    input: {id: 263, data: 0},
    result: {id: ItemID.dustCoal, data: 0, count: 1},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15}
});

PulverizerRecipes.add({
    input: {id: 263, data: 1},
    result: {id: ItemID.dustCharcoal, data: 0, count: 1}
});

PulverizerRecipes.add({
    input: {id: 49, data: 0},
    result: {id: ItemID.dustObsidian, data: 0, count: 4}
});

PulverizerRecipes.add({
    input: {id: 4, data: 0},
    result: {id: 12, data: 0, count: 1},
    dop: {id: 13, data: 0, count: 1, chance: 0.15}
});

PulverizerRecipes.add({
    input: {id: 1, data: 0},
    result: {id: 13, data: 0, count: 1},
    dop: {id: 12, data: 0, count: 1, chance: 0.15}
});

PulverizerRecipes.add({
    input: {id: 87, data: 0},
    result: {id: 13, data: 0, count: 1},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15}
});

PulverizerRecipes.add({
    input: {id: 13, data: 0},
    result: {id: 318, data: 0, count: 1},
    dop: {id: 12, data: 0, count: 1, chance: 0.15}
});

PulverizerRecipes.add({
    input: {id: 24, data: -1},
    result: {id: 12, data: 0, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.4}
});

PulverizerRecipes.add({
    input: {id: 98, data: 0},
    result: {id: 98, data: 2, count: 1}
});


PulverizerRecipes.add({
    input: {id: 338, data: 0},
    result: {id: 353, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 352, data: 0},
    result: {id: 351, data: 15, count: 6}
});

PulverizerRecipes.add({
    input: {id: 89, data: 0},
    result: {id: 348, data: 0, count: 4}
});

PulverizerRecipes.add({
    input: {id: 369, data: 0},
    result: {id: 377, data: 0, count: 4},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.5}
});

PulverizerRecipes.add({
    input: {id: 17, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 8}
});

PulverizerRecipes.add({
    input: {id: 162, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 8}
});

PulverizerRecipes.add({
    input: {id: 5, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 15, data: 0},
    result: {id: ItemID.dustIron, data: 0, count: 2},
    dop: {id: ItemID.dustNickel, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: 14, data: 0},
    result: {id: ItemID.dustGold, data: 0, count: 2},
    dop: {id: ItemID.cinnabar, data: 0, count: 1, chance: 0.05}
});

PulverizerRecipes.add({
    input: {id: BlockID.oreCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 2},
    dop: {id: ItemID.dustGold, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: BlockID.oreTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 2},
    dop: {id: ItemID.dustIron, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: BlockID.oreSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 2},
    dop: {id: ItemID.dustLead, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: BlockID.oreAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 2},
    dop: {id: ItemID.dustIron, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: BlockID.oreNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 2},
    dop: {id: ItemID.dustPlatinum, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: BlockID.orePlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 2},
    dop: {id: ItemID.dustIridium, data: 0, count: 1, chance: 0.05}
});

PulverizerRecipes.add({
    input: {id: BlockID.oreIridium, data: 0},
    result: {id: ItemID.dustIridium, data: 0, count: 2},
    dop: {id: ItemID.dustPlatinum, data: 0, count: 1, chance: 0.1}
});

PulverizerRecipes.add({
    input: {id: 16, data: 0},
    result: {id: 263, data: 0, count: 3},
    dop: {id: ItemID.dustCoal, data: 0, count: 1, chance: 0.25}
});

PulverizerRecipes.add({
    input: {id: 21, data: 0},
    result: {id: 351, data: 4, count: 10},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.2}
});

PulverizerRecipes.add({
    input: {id: 73, data: 0},
    result: {id: 331, data: 0, count: 6},
    dop: {id: ItemID.cinnabar, data: 0, count: 1, chance: 0.25}
});

PulverizerRecipes.add({
    input: {id: 56, data: 0},
    result: {id: 264, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 129, data: 0},
    result: {id: 388, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 153, data: 0},
    result: {id: 406, data: 0, count: 3},
    dop: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15}
});


PulverizerRecipes.add({
    input: {id: 37, data: 0},
    result: {id: 351, data: 11, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 0},
    result: {id: 351, data: 1, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 1},
    result: {id: 351, data: 12, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 2},
    result: {id: 351, data: 13, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 3},
    result: {id: 351, data: 7, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 4},
    result: {id: 351, data: 1, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 5},
    result: {id: 351, data: 14, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 6},
    result: {id: 351, data: 7, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 7},
    result: {id: 351, data: 9, count: 4}
});

PulverizerRecipes.add({
    input: {id: 38, data: 8},
    result: {id: 351, data: 7, count: 4}
});

PulverizerRecipes.add({
    input: {id: 175, data: 0},
    result: {id: 351, data: 11, count: 4}
});

PulverizerRecipes.add({
    input: {id: 175, data: 1},
    result: {id: 351, data: 13, count: 4}
});

PulverizerRecipes.add({
    input: {id: 175, data: 4},
    result: {id: 351, data: 1, count: 4}
});

PulverizerRecipes.add({
    input: {id: 175, data: 5},
    result: {id: 351, data: 9, count: 4}
});

PulverizerRecipes.add({
    input: {id: 45, data: 0},
    result: {id: 336, data: 0, count: 4}
});

PulverizerRecipes.add({
    input: {id: 44, data: 4},
    result: {id: 336, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 108, data: 0},
    result: {id: 336, data: 0, count: 3}
});

PulverizerRecipes.add({
    input: {id: 390, data: 0},
    result: {id: 336, data: 0, count: 3}
});

PulverizerRecipes.add({
    input: {id: 374, data: 0},
    result: {id: 12, data: 0, count: 1}
});

PulverizerRecipes.add({
    input: {id: 112, data: 0},
    result: {id: 405, data: 0, count: 4}
});

PulverizerRecipes.add({
    input: {id: 44, data: 7},
    result: {id: 405, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 114, data: 0},
    result: {id: 405, data: 0, count: 3}
});

PulverizerRecipes.add({
    input: {id: 155, data: -1},
    result: {id: 406, data: 0, count: 4}
});

PulverizerRecipes.add({
    input: {id: 44, data: 6},
    result: {id: 405, data: 0, count: 2}
});

PulverizerRecipes.add({
    input: {id: 156, data: 0},
    result: {id: 405, data: 0, count: 3}
});

PulverizerRecipes.add({
    input: {id: 44, data: 1},
    result: {id: 12, data: 0, count: 1},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2}
});

PulverizerRecipes.add({
    input: {id: 128, data: 0},
    result: {id: 12, data: 0, count: 2},
    dop: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2}
});

PulverizerRecipes.add({
    input: {id: 35, data: -1},
    result: {id: 287, data: 0, count: 4}
});




// file: blocks/machines/red_furnace/block.js

IDRegistry.genBlockID("redFurnace");
Block.createBlockWithRotation("redFurnace", [
    {
        name: "Red Furnace",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_furnace", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.redFurnace, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.redstoneReceptionCoil, 0]);
});




// file: blocks/machines/red_furnace/tile.js

MachineRegistry.register(BlockID.redFurnace, {

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
        let slotSource = this.container.getSlot("slotSource");
        let slotResult = this.container.getSlot("slotResult");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_MAX) {
                let result = Recipes.getFurnaceRecipeResult(slotSource.id, "iron");
                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + 1 <= Item.getMaxStack(slotResult.id))) {
                    slotResult.count = !slotResult.id ? 1 : slotResult.count + 1;
                    slotResult.id = result.id;
                    slotResult.data = result.data;

                    slotSource.count -= 1;
                    this.data.progress = 0;
                }
            } else {
                this.data.progress++;
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




// file: blocks/machines/red_furnace/gui.js

const guiRedFurnace = new UI.StandartWindow({
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




// file: blocks/machines/magma_crucible/block.js

IDRegistry.genBlockID("magmaCrucible");
Block.createBlockWithRotation("magmaCrucible", [
    {
        name: "Magma Crucible",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_crucible", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.magmaCrucible, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.redstoneReceptionCoil, 0]);
});




// file: blocks/machines/magma_crucible/tile.js

MachineRegistry.register(BlockID.magmaCrucible, {

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
        let slot = this.container.getSlot("slotSource");

        ContainerHelper.fluidContainerEmpty(null, this, {full: "slotFilledContainer", empty: "slotContainer"});

        if(this.data.progress){

            if(!slot.id) {
                this.data.progress = 0;
                this.container.setScale("speedScale", 0);
                return
            }

            if(this.data.progress >= this.data.progressMax){
                let recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                let fluid = this.liquidStorage.getLiquidStored();
                if(!fluid || (fluid === recipe.fluid && this.liquidStorage.getAmount(fluid) + recipe.fluidAmount <= 10)){
                    this.liquidStorage.addLiquid(recipe.fluid, recipe.fluidAmount);
                    this.data.progress = 0;
                    slot.count--;
                    this.container.setScale("speedScale", 0);
                }
            }else {
                let energy = MachineRegistry.calcEnergy(this, 20);
                this.data.energy -= energy;
                this.container.setScale("speedScale", energy / 20);

                this.data.progress += energy;
            }

        }else{

            if(slot.id > 0){
                let recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                if(recipe) {
                    this.data.progress = 1;
                    this.data.progressMax = recipe.time || 100;
                }
            }
        }

        this.liquidStorage.updateUiScale("liquidScale", this.liquidStorage.getLiquidStored());
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});




// file: blocks/machines/magma_crucible/gui.js

const guiMagmaCrucible = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Magma Crucible"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 640, y: 80, bitmap: "fluid_scale_b", scale: 3.2},
        {type: "bitmap", x: 443, y: 165, bitmap: "fire_scale_bg", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "liquidScale": {type: "scale", x: 643, y: 80, direction: 1, bitmap: "fluid_scale", scale: 3.2},

        "speedScale": {type: "scale", x: 444, y: 168, direction: 1, bitmap: "fire_scale", scale: 3.2},

        "btnRecipes": {type: "button", x: 930, y: 60, bitmap: "btn_recipes", scale: 3.2, clicker: {
            onClick: function(){
                GuideAPI.openGuide("guideMagmaCrucibleRecipes");
            },
        }},

        "slotSource": {type: "slot", x: 441, y: 102},

        "slotContainer": {type: "slot", x: 700, y: 102},
        "slotFilledContainer": {type: "slot", x: 700, y: 168},
    }
});




// file: blocks/machines/magma_crucible/recipes.js

MagmaCrucibleRecipes.add({
    id: 4,
    data: 0,
    fluid: "lava",
    fluidAmount: 1
});

MagmaCrucibleRecipes.add({
    id: 1,
    data: 0,
    fluid: "lava",
    fluidAmount: 1
});

MagmaCrucibleRecipes.add({
    id: 1,
    data: 5,
    fluid: "lava",
    fluidAmount: 1
});

MagmaCrucibleRecipes.add({
    id: 1,
    data: 6,
    fluid: "lava",
    fluidAmount: 1
});

MagmaCrucibleRecipes.add({
    id: 49,
    data: 0,
    fluid: "lava",
    fluidAmount: 1
});

MagmaCrucibleRecipes.add({
    id: 87,
    data: 0,
    fluid: "lava",
    fluidAmount: 1
});





// file: blocks/machines/sawmill/block.js

IDRegistry.genBlockID("sawmill");
Block.createBlockWithRotation("sawmill", [
    {
        name: "Sawmill",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_sawmill", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.sawmill, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 5, 0, 'a', 258, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.redstoneReceptionCoil, 0]);
});




// file: blocks/machines/sawmill/tile.js

MachineRegistry.register(BlockID.sawmill, {

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guiSawmill;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult", "slotResultDop"]};
    },

    tick: function(){
        let slotSource = this.container.getSlot("slotSource");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.container.setScale("speedScale", 0);
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let r = SawmillRecipes.getResult(slotSource.id, slotSource.data);
                let result = r.result;
                let dop = r.dop;

                let slotResult = this.container.getSlot("slotResult");
                let slotResultDop = this.container.getSlot("slotResultDop");

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                    if (!r.dop || (slotResultDop.id === 0 || (slotResultDop.id === dop.id && slotResultDop.data === dop.data && slotResultDop.count + dop.count <= Item.getMaxStack(slotResultDop.id)))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;

                        if (dop && (!dop.chance || Math.random() < dop.chance)) {
                            slotResultDop.count = !slotResultDop.id ? dop.count : slotResultDop.count + dop.count;
                            slotResultDop.id = dop.id;
                            slotResultDop.data = dop.data;
                        }

                        slotSource.count -= 1;
                        this.data.progress = 0;
                        this.container.setScale("speedScale", 0);
                    }
                }
            } else {
                let energy = MachineRegistry.calcEnergy(this, 20);
                this.data.energy -= energy;
                this.container.setScale("speedScale", energy / 20);

                this.data.progress += energy;
            }
        } else if (slotSource.id) {
            let recipe = SawmillRecipes.getResult(slotSource.id, slotSource.data);
            if(recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 10000;
            }
        }

        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});




// file: blocks/machines/sawmill/gui.js

const guiSawmill = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Sawmill"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 441, y: 165, bitmap: "scale_speed_sawmill_0", scale: 3.2}
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
        "speedScale": {type: "scale", x: 441, y: 165, direction: 1, bitmap: "scale_speed_sawmill_1", scale: 3.2},
        "btnRecipes": {type: "button", x: 930, y: 60, bitmap: "btn_recipes", scale: 3.2, clicker: {
            onClick: function(){
                GuideAPI.openGuide("guideSawmillRecipes");
            },
        }},

        "slotSource": {type: "slot", x: 441, y: 102},
        "slotResult": {type: "slot", x: 625, y: 102},
        "slotResultDop": {type: "slot", x: 625, y: 165}
    }
});




// file: blocks/machines/sawmill/recipes.js

SawmillRecipes.add({
    input: {id: 17, data: 0},
    result: {id: 5, data: 0, count: 6},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 17, data: 1},
    result: {id: 5, data: 1, count: 6},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 17, data: 2},
    result: {id: 5, data: 2, count: 6},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 17, data: 3},
    result: {id: 5, data: 3, count: 6},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 162, data: 0},
    result: {id: 5, data: 4, count: 6},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 162, data: 1},
    result: {id: 5, data: 5, count: 6},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 25, data: 0},
    result: {id: 5, data: 0, count: 8},
    dop: {id: 331, data: 0, count: 1, chance: 0.25}
});
SawmillRecipes.add({
    input: {id: 355, data: 0},
    result: {id: 5, data: 0, count: 2},
    dop: {id: 35, data: 0, count: 2}
});
SawmillRecipes.add({
    input: {id: 47, data: 0},
    result: {id: 5, data: 0, count: 3},
    dop: {id: 340, data: 0, count: 3, chance: 0.25}
});
SawmillRecipes.add({
    input: {id: 58, data: 0},
    result: {id: 5, data: 0, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 323, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance:0.5}
});
SawmillRecipes.add({
    input: {id: 324, data: 0},
    result: {id: 5, data: 0, count: 1}, dop: {id: ItemID.dustSaw, data: 0, count: 1, chance:0.5}
});
SawmillRecipes.add({
    input: {id: 427, data: 0},
    result: {id: 5, data: 1, count: 1}, dop: {id: ItemID.dustSaw, data: 0, count: 1, chance:0.5}
});
SawmillRecipes.add({
    input: {id: 428, data: 0},
    result: {id: 5, data: 2, count: 1}, dop: {id: ItemID.dustSaw, data: 0, count: 1, chance:0.5}
});
SawmillRecipes.add({
    input: {id: 429, data: 0},
    result: {id: 5, data: 3, count: 1}, dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.5}
});
SawmillRecipes.add({
    input: {id: 430, data: 0},
    result: {id: 5, data: 4, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.5}
});
SawmillRecipes.add({
    input: {id: 431, data: 0},
    result: {id: 5, data: 5, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.5}
});

SawmillRecipes.add({
    input: {id: 72, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.5}
});
SawmillRecipes.add({
    input: {id: 96, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.75}
});
SawmillRecipes.add({
    input: {id: 333, data: 0},
    result: {id: 5, data: 0, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 1},
    result: {id: 5, data: 1, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 2},
    result: {id: 5, data: 2, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 3},
    result: {id: 5, data: 3, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 333, data: 4},
    result: {id: 5, data: 4, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});
SawmillRecipes.add({
    input: {id: 269, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.75}
});
SawmillRecipes.add({
    input: {id: 268, data: 0},
    result: {id: 5, data: 0, count: 2},
    dop: {id: ItemID.dustSaw, data: 0, count: 1, chance: 0.75}
});
SawmillRecipes.add({
    input: {id: 271, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 290, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 270, data: 0},
    result: {id: 5, data: 0, count: 1},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 54, data: 0},
    result: {id: 5, data: 0, count: 4},
    dop: {id: ItemID.dustSaw, data: 0, count: 1}
});

SawmillRecipes.add({
    input: {id: 103, data: 0},
    result: {id: 360, data: 0, count: 9}
});




// file: items/coils.js

IDRegistry.genItemID("redstoneReceptionCoil");
Item.createItem("redstoneReceptionCoil", "Redstone Reception Coil", {name: "redstoneReceptionCoil", meta: 0}, {stack: 1});

IDRegistry.genItemID("redstoneTransmissionCoil");
Item.createItem("redstoneTransmissionCoil", "Redstone Transmission Coil", {name: "redstoneTransmissionCoil", meta: 0}, {stack: 1});
            
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.redstoneReceptionCoil, count: 1, data: 0}, [
        "  1",
        " 2 ",
        "1  "
    ], ['1', 331, 0, '2', 266, 0]);

    Recipes.addShaped({id: ItemID.redstoneTransmissionCoil, count: 1, data: 0}, [
        "  1",
        " 2 ",
        "1  "
    ], ['1', 331, 0, '2', ItemID.ingotSilver, 0]);
});




// file: items/satchel.js

SatchelRegistry.register({
    texture: ["satchel", 0],
    codeName: "satchelBasic",
    name: "Basic Satchel",
    slots: 9
});

SatchelRegistry.register({
    texture: ["satchel", 1],
    codeName: "satchelHardened",
    name: "Hardened Satchel",
    slots: 18
});

SatchelRegistry.register({
    texture: ["satchel", 2],
    codeName: "satchelReinforced",
    name: "Reinforced Satchel",
    slots: 27
});

SatchelRegistry.register({
    texture: ["satchel", 3],
    codeName: "satchelSignalum",
    name: "Signalum Satchel",
    slots: 36
});

SatchelRegistry.register({
    texture: ["satchel", 4],
    codeName: "satchelResonant",
    name: "Resonant Satchel",
    slots: 45
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




// file: items/others.js

IDRegistry.genItemID("dustSaw");
Item.createItem("dustSaw", "Saw Dust", {name: "Sawdust", meta: 0});

IDRegistry.genItemID("cinnabar");
Item.createItem("cinnabar", "Cinnabar", {name: "cinnabar", meta: 0});

IDRegistry.genItemID("dustCoal");
Item.createItem("dustCoal", "Pulverized Coal", {name: "dustCoal", meta: 0});

IDRegistry.genItemID("dustSulfur");
Item.createItem("dustSulfur", "Sulfur", {name: "dustSulfur", meta: 0});

IDRegistry.genItemID("dustCharcoal");
Item.createItem("dustCharcoal", "Pulverized Charcoal", {name: "dustCharcoal", meta: 0});

IDRegistry.genItemID("dustObsidian");
Item.createItem("dustObsidian", "Pulverized Obsidian", {name: "dustObsidian", meta: 0});

IDRegistry.genItemID("dustNiter");
Item.createItem("dustNiter", "Niter", {name: "dustNiter", meta: 0});




// file: items/tools.js

IDRegistry.genItemID("thermalWrench");
Item.createItem("thermalWrench", " Wrench", {name: "wrench", meta: 0}, {stack: 1});

Item.registerUseFunction("thermalWrench", function (coords) {
    let tile = World.getTileEntity(coords.x, coords.y, coords.z, 35);

    if (tile && tile.onWrenched) {
        tile.onWrenched();
    }
});




// file: integration/ic.js

/* INDUSTRIAL CRAFT INTEGRATION FILE */

ModAPI.addAPICallback("ICore", function (api) {
    industrial_loaded = true;
});




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









// file: shared.js

ModAPI.registerAPI("ThermalExpansionAPI", {

    MagmaticManager: MagmaticManager,
    SteamManager: SteamManager,

    MagmaCrucibleRecipes: MagmaCrucibleRecipes,
    PulverizerRecipes: PulverizerRecipes,
    SawmillRecipes: SawmillRecipes,

    ContainerHelper: ContainerHelper,
    DynamoHelper: DynamoHelper,
    MachineRegistry: MachineRegistry,
    MaterialRegistry: MaterialRegistry,

    requireGlobal: function (command) {
        return eval(command);
    }

});
Logger.Log("ForestryAPI shared", "API");




