IDRegistry.genBlockID("redFurnace");
Block.createBlockWithRotation("redFurnace", [
    {
        name: "Red Furnace",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_furnace", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.redFurnace, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.redstoneReceptionCoil, 0]);
});