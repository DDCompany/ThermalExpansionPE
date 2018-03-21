SatchelRegistry.register({
    texture: ["satchel", 0],
    codeName: "satchelBasic",
    name: "Basic Satchel",
    slots: 9
});

SatchelRegistry.register({
    texture: ["satchel", 1],
    codeName: "satchelHardened",
    name: "Hardened Satchel",
    slots: 18
});

SatchelRegistry.register({
    texture: ["satchel", 2],
    codeName: "satchelReinforced",
    name: "Reinforced Satchel",
    slots: 27
});

SatchelRegistry.register({
    texture: ["satchel", 3],
    codeName: "satchelSignalum",
    name: "Signalum Satchel",
    slots: 36
});

SatchelRegistry.register({
    texture: ["satchel", 4],
    codeName: "satchelResonant",
    name: "Resonant Satchel",
    slots: 45
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