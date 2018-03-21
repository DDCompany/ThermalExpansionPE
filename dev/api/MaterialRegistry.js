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
