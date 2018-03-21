IDRegistry.genItemID("redstoneReceptionCoil");
Item.createItem("redstoneReceptionCoil", "Redstone Reception Coil", {name: "redstoneReceptionCoil", meta: 0}, {stack: 1});

IDRegistry.genItemID("redstoneTransmissionCoil");
Item.createItem("redstoneTransmissionCoil", "Redstone Transmission Coil", {name: "redstoneTransmissionCoil", meta: 0}, {stack: 1});
            
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.redstoneReceptionCoil, count: 1, data: 0}, [
        "  1",
        " 2 ",
        "1  "
    ], ['1', 331, 0, '2', 266, 0]);

    Recipes.addShaped({id: ItemID.redstoneTransmissionCoil, count: 1, data: 0}, [
        "  1",
        " 2 ",
        "1  "
    ], ['1', 331, 0, '2', ItemID.ingotSilver, 0]);
});