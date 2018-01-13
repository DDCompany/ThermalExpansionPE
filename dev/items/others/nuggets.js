IDRegistry.genItemID("nuggetAluminum");
Item.createItem("nuggetAluminum", "Aluminum nugget", {name:"nugget_aluminum",meta:0}, {});

IDRegistry.genItemID("nuggetBronze");
Item.createItem("nuggetBronze", "Bronze nugget", {name:"nugget_bronze",meta:0}, {});

IDRegistry.genItemID("nuggetConstantan");
Item.createItem("nuggetConstantan", "Constantan nugget", {name:"nugget_constantan",meta:0}, {});

IDRegistry.genItemID("nuggetCopper");
Item.createItem("nuggetCopper", "Copper nugget", {name:"nugget_copper",meta:0}, {});

IDRegistry.genItemID("nuggetDiamond");
Item.createItem("nuggetDiamond", "Diamond nugget", {name:"nugget_diamond",meta:0}, {});

IDRegistry.genItemID("nuggetElectrum");
Item.createItem("nuggetElectrum", "Electrum nugget", {name:"nugget_electrum",meta:0}, {});

IDRegistry.genItemID("nuggetEnderium");
Item.createItem("nuggetEnderium", "Enderium nugget", {name:"nugget_enderium",meta:0}, {});

IDRegistry.genItemID("nuggetInvar");
Item.createItem("nuggetInvar", "Invar nugget", {name:"nugget_invar",meta:0}, {});

IDRegistry.genItemID("nuggetIridium");
Item.createItem("nuggetIridium", "Iridium nugget", {name:"nugget_iridium",meta:0}, {});

IDRegistry.genItemID("nuggetIron");
Item.createItem("nuggetIron", "Iron nugget", {name:"nugget_iron",meta:0}, {});

IDRegistry.genItemID("nuggetLead");
Item.createItem("nuggetLead", "Lead nugget", {name:"nugget_lead",meta:0}, {});

IDRegistry.genItemID("nuggetLumium");
Item.createItem("nuggetLumium", "Lumium nugget", {name:"nugget_lumium",meta:0}, {});

IDRegistry.genItemID("nuggetMithril");
Item.createItem("nuggetMithril", "Mithril nugget", {name:"nugget_mithril",meta:0}, {});

IDRegistry.genItemID("nuggetNickel");
Item.createItem("nuggetNickel", "Nickel nugget", {name:"nugget_nickel",meta:0}, {});

IDRegistry.genItemID("nuggetPlatinum");
Item.createItem("nuggetPlatinum", "Platinum nugget", {name:"nugget_platinum",meta:0}, {});

IDRegistry.genItemID("nuggetSignalum");
Item.createItem("nuggetSignalum", "Signalum nugget", {name:"nugget_signalum",meta:0}, {});

IDRegistry.genItemID("nuggetSilver");
Item.createItem("nuggetSilver", "Silver nugget", {name:"nugget_silver",meta:0}, {});

IDRegistry.genItemID("nuggetSteel");
Item.createItem("nuggetSteel", "Steel nugget", {name:"nugget_steel",meta:0}, {});

IDRegistry.genItemID("nuggetTin");
Item.createItem("nuggetTin", "Tin nugget", {name:"nugget_tin",meta:0}, {});

Callback.addCallback("PostLoaded", function(){

    Recipes.addShapeless({id: ItemID.nuggetAluminum, count: 9, data: 0}, [{id: ItemID.ingotAluminum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetBronze, count: 9, data: 0}, [{id: ItemID.ingotBronze, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetConstantan, count: 9, data: 0}, [{id: ItemID.ingotConstantan, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetCopper, count: 9, data: 0}, [{id: ItemID.ingotCopper, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetDiamond, count: 9, data: 0}, [{id: 264, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetElectrum, count: 9, data: 0}, [{id: ItemID.ingotElectrum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetEnderium, count: 9, data: 0}, [{id: ItemID.ingotEnderium, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetInvar, count: 9, data: 0}, [{id: ItemID.ingotInvar, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetIridium, count: 9, data: 0}, [{id: ItemID.ingotIridium, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetIron, count: 9, data: 0}, [{id: 264, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetLead, count: 9, data: 0}, [{id: ItemID.ingotLead, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetLumium, count: 9, data: 0}, [{id: ItemID.ingotLumium, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetMithril, count: 9, data: 0}, [{id: ItemID.ingotMithril, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetNickel, count: 9, data: 0}, [{id: ItemID.ingotNickel, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetPlatinum, count: 9, data: 0}, [{id: ItemID.ingotPlatinum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetSignalum, count: 9, data: 0}, [{id: ItemID.ingotSignalum, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetSilver, count: 9, data: 0}, [{id: ItemID.ingotSilver, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetSteel, count: 9, data: 0}, [{id: ItemID.ingotSteel, data: 0}]);
    Recipes.addShapeless({id: ItemID.nuggetTin, count: 9, data: 0}, [{id: ItemID.ingotTin, data: 0}]);

});