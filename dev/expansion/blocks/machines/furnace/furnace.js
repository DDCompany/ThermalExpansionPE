IDRegistry.genBlockID("thermalMachineFurnace");
Block.createBlockWithRotation("thermalMachineFurnace", [
    {
        name: "Redstone Furnace",
        texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_furnace", 0], ["thermal_machine", 2], ["thermal_machine", 2]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalMachineFurnace, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.frameMachine, -1, 'x', 45, -1, 'a', 331, -1, "c", ItemID.gearCopper, -1, 'b', ItemID.coilReception, -1]);
});