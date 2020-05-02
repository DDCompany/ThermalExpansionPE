IDRegistry.genItemID("servoRedstone");
Item.createItem("servoRedstone", "Redstone Servo", {name: "servo_redstone", meta: 0}, {});

IDRegistry.genItemID("coilReception");
Item.createItem("coilReception", "Reception Coil", {name: "coil_reception", meta: 0}, {});

IDRegistry.genItemID("coilTransmission");
Item.createItem("coilTransmission", "Transmission Coil", {name: "coil_transmission", meta: 0}, {});

IDRegistry.genItemID("coilConductance");
Item.createItem("coilConductance", "Conductance Coil", {name: "coil_conductance", meta: 0}, {});

Item.addCreativeGroup("coils", Translation.translate("Coils"), [
    ItemID.coilReception,
    ItemID.coilTransmission,
    ItemID.coilConductance,
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.servoRedstone, count: 1, data: 0}, [
        "f",
        "s",
        "f",
    ], ['f', 331, -1, 's', 265, -1]);

    Recipes.addShaped({id: ItemID.coilReception, count: 1, data: 0}, [
        "  f",
        " s ",
        "f  ",
    ], ['f', 331, -1, 's', 266, -1]);

    Recipes.addShaped({id: ItemID.coilTransmission, count: 1, data: 0}, [
        "  f",
        " s ",
        "f  ",
    ], ['f', 331, -1, 's', ItemID.ingotSilver, -1]);

    Recipes.addShaped({id: ItemID.coilConductance, count: 1, data: 0}, [
        "f  ",
        " s ",
        "  f",
    ], ['f', 331, -1, 's', ItemID.ingotElectrum, -1]);
});