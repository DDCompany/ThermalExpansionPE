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