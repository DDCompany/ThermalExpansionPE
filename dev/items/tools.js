IDRegistry.genItemID("thermalWrench");
Item.createItem("thermalWrench", " Wrench", {name: "wrench", meta: 0}, {stack: 1});

Item.registerUseFunction("thermalWrench", function (coords) {
    var tile = World.getTileEntity(coords.x, coords.y, coords.z, 35);

    if (tile && tile.onWrenched) {
        tile.onWrenched();
    }
});