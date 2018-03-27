IDRegistry.genItemID("satchelBasic");
Item.createItem("satchelBasic", "Basic Satchel", {name: "satchel", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.satchelBasic, {
    slots: 9,
    inRow: 9
});

IDRegistry.genItemID("satchelHardened");
Item.createItem("satchelHardened", "Hardened Satchel", {name: "satchel", meta: 1}, {stack: 1});

BackpackRegistry.register(ItemID.satchelHardened, {
    slots: 18,
    inRow: 9
});

IDRegistry.genItemID("satchelReinforced");
Item.createItem("satchelReinforced", "Reinforced Satchel", {name: "satchel", meta: 2}, {stack: 1});

BackpackRegistry.register(ItemID.satchelReinforced, {
    slots: 27,
    inRow: 9
});

IDRegistry.genItemID("satchelSignalum");
Item.createItem("satchelSignalum", "Signalum Satchel", {name: "satchel", meta: 3}, {stack: 1});

BackpackRegistry.register(ItemID.satchelSignalum, {
    slots: 36,
    inRow: 9
});

IDRegistry.genItemID("satchelResonant");
Item.createItem("satchelResonant", "Resonant Satchel", {name: "satchel", meta: 4}, {stack: 1});

BackpackRegistry.register(ItemID.satchelResonant, {
    slots: 45,
    inRow: 9
});


Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.satchelBasic, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotTin, 0, '2', 334, 0, '3', 35, -1]);

    Recipes.addShaped({id: ItemID.satchelHardened, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotInvar, 0, '2', ItemID.nuggetTin, 0, '3', ItemID.satchelBasic, -1]);

    Recipes.addShaped({id: ItemID.satchelReinforced, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotElectrum, 0, '2', ItemID.nuggetInvar, 0, '3', ItemID.satchelHardened, -1]);

    Recipes.addShaped({id: ItemID.satchelSignalum, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotSignalum, 0, '2', ItemID.nuggetElectrum, 0, '3', ItemID.satchelReinforced, -1]);

    Recipes.addShaped({id: ItemID.satchelResonant, count: 1, data: 0}, [
        "020",
        "131",
        "202"
    ], ['1', ItemID.ingotEnderium, 0, '2', ItemID.nuggetSignalum, 0, '3', ItemID.satchelSignalum, -1]);
});