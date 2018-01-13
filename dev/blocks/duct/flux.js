function setupWireRender(id, groupName, width, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
}

IDRegistry.genBlockID("fluxductLeadstone");
Block.createBlock("fluxductLeadstone", [
    {name: "Leadstone Fluxduct", texture: [["fluxduct_lead", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductHardened");
Block.createBlock("fluxductHardened", [
    {name: "Hardened Fluxduct", texture: [["fluxduct_invar", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductRedstone");
Block.createBlock("fluxductRedstone", [
    {name: "Redstone Energy Fluxduct", texture: [["fluxduct_electrum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductSignalum");
Block.createBlock("fluxductSignalum", [
    {name: "Signalum Fluxduct", texture: [["fluxduct_signalum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("fluxductResonant");
Block.createBlock("fluxductResonant", [
    {name: "Resonant Fluxduct", texture: [["fluxduct_enderium", 0]], inCreative: true}
]);

RF.registerWire(BlockID.fluxductLeadstone);
RF.registerWire(BlockID.fluxductHardened);
RF.registerWire(BlockID.fluxductRedstone);
RF.registerWire(BlockID.fluxductSignalum);
RF.registerWire(BlockID.fluxductResonant);

setupWireRender(BlockID.fluxductLeadstone, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductHardened, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductRedstone, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductSignalum, "rf-wire", 0.38);
setupWireRender(BlockID.fluxductResonant, "rf-wire", 0.38);

Block.setBlockShape(BlockID.fluxductLeadstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductHardened, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductRedstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductSignalum, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});
Block.setBlockShape(BlockID.fluxductResonant, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});