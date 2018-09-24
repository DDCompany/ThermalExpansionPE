IDRegistry.genBlockID("pulverizer");
Block.createBlockWithRotation("pulverizer", [
    {
        name: "Pulverizer",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_pulverizer", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.pulverizer, count: 1, data: 0}, [
        " x ",
        "b#b",
        "cac"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 33, 0, 'b', 318, 0, 'a', ItemID.redstoneReceptionCoil, 0, 'c', ItemID.gearCopper, 0]);
});
        