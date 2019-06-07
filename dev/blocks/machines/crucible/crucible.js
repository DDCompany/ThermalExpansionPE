IDRegistry.genBlockID("thermalMachineCrucible");
Block.createBlockWithRotation("thermalMachineCrucible", [
    {
        name: "Magma Crucible",
        texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_crucible", 0], ["thermal_machine", 2]],
        inCreative: true
    }
]);

// Callback.addCallback("PostLoaded", function () {
//     Recipes.addShaped({id: BlockID.thermalMachineCrucible, count: 1, data: 0}, [
//         " x ",
//         "b#b",
//         "cac"
//     ], ['#', BlockID.frameMachine, -1, 'x', 33, -1, 'b', 318, -1, 'a', ItemID.coilReception, -1, 'c', ItemID.gearCopper, -1]);
// });