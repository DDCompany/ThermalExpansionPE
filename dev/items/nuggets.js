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