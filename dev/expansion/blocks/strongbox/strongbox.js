IDRegistry.genBlockID("thermalStrongbox");
Block.createBlockWithRotation("thermalStrongbox", [
    {
        name: "Strongbox",
        texture: [["strongbox_top", 0], ["strongbox_top", 0], ["strongbox_side", 0], ["strongbox_side", 0], ["strongbox_side", 0], ["strongbox_side", 0]],
        inCreative: true
    }
]);

Block.setBlockShape(BlockID.thermalStrongbox, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 15 / 16, z: 15 / 16});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalStrongbox, count: 1, data: 0}, [
        " i ",
        "i#i",
        " i "
    ], ['#', 54, -1, 'i', ItemID.ingotTin, -1]);
});