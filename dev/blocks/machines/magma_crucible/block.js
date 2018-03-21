IDRegistry.genBlockID("magmaCrucible");
Block.createBlockWithRotation("magmaCrucible", [
    {
        name: "Magma Crucible",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_crucible", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.magmaCrucible, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.redstoneReceptionCoil, 0]);
});