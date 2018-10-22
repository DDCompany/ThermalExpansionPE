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