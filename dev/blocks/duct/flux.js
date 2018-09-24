function setupWireRender(id, groupName, width, preventSelfAdd) {
    let render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);

    let boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ];

    let group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }

    for (let i in boxes) {
        let box = boxes[i];

        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);

        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }

    let modelOwn = BlockRenderer.createModel();
    modelOwn.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(modelOwn);
}

IDRegistry.genBlockID("fluxductLeadstone");
Block.createBlock("fluxductLeadstone", [
    {name: "Leadstone Fluxduct", texture: [["fluxduct_lead", 0]], inCreative: true}
]);

RF.registerWire(BlockID.fluxductLeadstone);

setupWireRender(BlockID.fluxductLeadstone, "rf-wire", 0.38);

Block.setBlockShape(BlockID.fluxductLeadstone, {x: 0.38, y: 0.38, z: 0.38}, {x: 0.81, y: 0.81, z: 0.81});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.fluxductLeadstone, count: 6, data: 0}, [
        "111",
        "a2a",
        "111"
    ], ['1', 331, 0, 'a', ItemID.ingotLead, 0, '2', 20, 0]);
});