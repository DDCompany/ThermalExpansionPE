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