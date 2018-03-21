IDRegistry.genBlockID("sawmill");
Block.createBlockWithRotation("sawmill", [
    {
        name: "Sawmill",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_sawmill", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.sawmill, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 5, 0, 'a', 258, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.redstoneReceptionCoil, 0]);
});