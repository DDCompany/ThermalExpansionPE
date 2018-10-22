IDRegistry.genBlockID("frameMachine");
Block.createBlock("frameMachine", [
    {name: "Machine Frame", texture: [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.frameMachine, "stone", 1);
Block.setDestroyTime(BlockID.frameMachine, 1);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.frameMachine, count: 1, data: 0}, [
        "fgf",
        "gbg",
        "fgf"
    ], ['f', 265, -1, 'g', 20, -1, 'b', ItemID.gearTin, -1]);
});