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