IDRegistry.genBlockID("thermalStrongbox");
Block.createBlockWithRotation("thermalStrongbox", [
    {
        name: "Strongbox",
        texture: [["strongbox_top", 0], ["strongbox_top", 0], ["strongbox_side", 0], ["strongbox_side", 0], ["strongbox_side", 0], ["strongbox_side", 0]],
        inCreative: true
    }
]);

Block.setBlockShape(BlockID.thermalStrongbox, {x: 1 / 16 + .0001, y: 0, z: 1 / 16 + .0001}, {
    x: 15 / 16 - .001,
    y: 15 / 16 - .0001,
    z: 15 / 16 - .0001
});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalStrongbox, count: 1, data: 0}, [
        " i ",
        "i#i",
        " i "
    ], ['#', 54, -1, 'i', ItemID.ingotTin, -1]);
});