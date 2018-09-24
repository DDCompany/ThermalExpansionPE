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