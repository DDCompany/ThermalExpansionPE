IDRegistry.genItemID("gearAluminum");
Item.createItem("gearAluminum", "Aluminum gear", {name:"gear_aluminum",meta:0}, {});

IDRegistry.genItemID("gearBronze");
Item.createItem("gearBronze", "Bronze gear", {name:"gear_bronze",meta:0}, {});

IDRegistry.genItemID("gearConstantan");
Item.createItem("gearConstantan", "Constantan gear", {name:"gear_constantan",meta:0}, {});

IDRegistry.genItemID("gearCopper");
Item.createItem("gearCopper", "Copper gear", {name:"gear_copper",meta:0}, {});

IDRegistry.genItemID("gearElectrum");
Item.createItem("gearElectrum", "Electrum gear", {name:"gear_electrum",meta:0}, {});

IDRegistry.genItemID("gearEnderium");
Item.createItem("gearEnderium", "Enderium gear", {name:"gear_enderium",meta:0}, {});

IDRegistry.genItemID("gearGold");
Item.createItem("gearGold", "Gold gear", {name:"gear_gold",meta:0}, {});

IDRegistry.genItemID("gearInvar");
Item.createItem("gearInvar", "Invar gear", {name:"gear_invar",meta:0}, {});

IDRegistry.genItemID("gearIridium");
Item.createItem("gearIridium", "Iridium gear", {name:"gear_iridium",meta:0}, {});

IDRegistry.genItemID("gearIron");
Item.createItem("gearIron", "Iron gear", {name:"gear_iron",meta:0}, {});

IDRegistry.genItemID("gearLead");
Item.createItem("gearLead", "Lead gear", {name:"gear_lead",meta:0}, {});

IDRegistry.genItemID("gearLumium");
Item.createItem("gearLumium", "Lumium gear", {name:"gear_lumium",meta:0}, {});

IDRegistry.genItemID("gearMithril");
Item.createItem("gearMithril", "Mithril gear", {name:"gear_mithril",meta:0}, {});

IDRegistry.genItemID("gearNickel");
Item.createItem("gearNickel", "Nickel gear", {name:"gear_nickel",meta:0}, {});

IDRegistry.genItemID("gearPlatinum");
Item.createItem("gearPlatinum", "Platinum gear", {name:"gear_platinum",meta:0}, {});

IDRegistry.genItemID("gearSignalum");
Item.createItem("gearSignalum", "Signalum gear", {name:"gear_signalum",meta:0}, {});

IDRegistry.genItemID("gearSilver");
Item.createItem("gearSilver", "Silver gear", {name:"gear_silver",meta:0}, {});

IDRegistry.genItemID("gearSteel");
Item.createItem("gearSteel", "Steel gear", {name:"gear_steel",meta:0}, {});

IDRegistry.genItemID("gearTin");
Item.createItem("gearTin", "Tin gear", {name:"gear_tin",meta:0}, {});

Callback.addCallback("PostLoaded", function(){

    Recipes.addShaped({id: ItemID.gearAluminum, count: 1, data: 0}, [
        " f ",
        "fdf",
        " f "
    ], ['f', ItemID.ingotAluminum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearBronze, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotBronze, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearConstantan, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotConstantan, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearCopper, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotCopper, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearElectrum, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotElectrum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearEnderium, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotEnderium, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearGold, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', 266, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearInvar, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotInvar, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearIridium, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotIridium, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearIron, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', 265, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearLead, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotLead, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearLumium, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotLumium, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearMithril, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotMithril, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearNickel, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotNickel, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearPlatinum, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotPlatinum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearSignalum, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotSignalum, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearSilver, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotSilver, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearSteel, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotSteel, 0, 'd', 265, 0]);

    Recipes.addShaped({id: ItemID.gearTin, count: 1, data: 0}, [
            " f ",
            "fdf",
            " f "
        ], ['f', ItemID.ingotTin, 0, 'd', 265, 0]);

});