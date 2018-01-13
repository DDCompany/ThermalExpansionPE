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