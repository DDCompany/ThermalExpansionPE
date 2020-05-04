IDRegistry.genBlockID("thermalMachineSawmill");
Block.createBlockWithRotation("thermalMachineSawmill", [
    {
        name: "Sawmill",
        texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_sawmill", 0], ["thermal_machine", 2], ["thermal_machine", 2]],
        inCreative: true
    }
]);
Item.addCreativeGroup("thermal_expansion_machines", Translation.translate("Machines"), [
    BlockID.thermalMachineSawmill
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalMachineSawmill, count: 1, data: 0}, [
        " x ",
        "b#b",
        "cac"
    ], ['#', BlockID.frameMachine, -1, 'x', ItemID.bladeSaw, -1, 'b', VanillaBlockID.planks, -1, 'a', ItemID.coilReception, -1, 'c', ItemID.gearCopper, -1]);
});