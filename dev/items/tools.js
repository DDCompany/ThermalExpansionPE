IDRegistry.genItemID("thermalWrench");
Item.createItem("thermalWrench", " Wrench", {name: "wrench", meta: 0}, {stack: 1});

Item.registerUseFunction("thermalWrench", function (coords, item, block) {
    let tile = World.getTileEntity(coords.x, coords.y, coords.z);

    if (block.id === BlockID.machineFrameBasic && Entity.getSneaking(Player.get())) {
        World.setBlock(coords.x, coords.y, coords.z, 0);
        World.drop(coords.x, coords.y, coords.z, BlockID.machineFrameBasic, 1, 0);
        return;
    }

    if (tile && tile.onWrenched) {
        tile.onWrenched();
    }

});