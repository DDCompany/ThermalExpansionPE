IDRegistry.genBlockID("machineFrameBasic");
Block.createBlock("machineFrameBasic", [
    {name: "Basic Machine Frame", texture: [["machineFrameBasic", 1], ["machineFrameBasic", 2], ["machineFrameBasic", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.machineFrameBasic, "stone", 1, true);
Block.setDestroyLevel("machineFrameBasic", 1);
Block.setDestroyTime(BlockID.machineFrameBasic, 4);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.machineFrameBasic, count: 1, data: 0}, [
        "1a1",
        "a2a",
        "1a1"
    ], ['a', 20, 0, '2', ItemID.gearTin, 0, '1', 265, 0]);
});