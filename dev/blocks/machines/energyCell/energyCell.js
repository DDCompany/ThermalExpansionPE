IDRegistry.genBlockID("thermalEnergyCell");
Block.createBlock("thermalEnergyCell", [
    {
        name: "Energy Cell",
        texture: [["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0], ["energy_cell", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    // Recipes.addShaped({id: BlockID.thermalMachinePulverizer, count: 1, data: 0}, [
    //     " x ",
    //     "b#b",
    //     "cac"
    // ], ['#', BlockID.frameMachine, -1, 'x', 33, -1, 'b', 318, -1, 'a', ItemID.coilReception, -1, 'c', ItemID.gearCopper, -1]);
});