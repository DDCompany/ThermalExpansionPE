//log -> planks
sawmillManager.add({
    input: {id: VanillaBlockID.log},
    result: {id: VanillaBlockID.planks, data: 0, count: 6},
    second: {id: ItemID.dustSaw, data: 0, count: 1}
});

sawmillManager.add({
    input: {id: VanillaBlockID.log, data: 1},
    result: {id: VanillaBlockID.planks, data: 1, count: 6},
    second: {id: ItemID.dustSaw, data: 0, count: 1}
});
sawmillManager.add({
    input: {id: VanillaBlockID.log, data: 2},
    result: {id: VanillaBlockID.planks, data: 2, count: 6},
    second: {id: ItemID.dustSaw, data: 0, count: 1}
});

sawmillManager.add({
    input: {id: VanillaBlockID.log, data: 3},
    result: {id: VanillaBlockID.planks, data: 3, count: 6},
    second: {id: ItemID.dustSaw, data: 0, count: 1}
});
sawmillManager.add({
    input: {id: VanillaBlockID.log2},
    result: {id: VanillaBlockID.planks, data: 4, count: 6},
    second: {id: ItemID.dustSaw, data: 0, count: 1}
});
sawmillManager.add({
    input: {id: VanillaBlockID.log2, data: 1},
    result: {id: VanillaBlockID.planks, data: 5, count: 6},
    second: {id: ItemID.dustSaw, data: 0, count: 1}
});

//door -> planks
sawmillManager.add({
    input: {id: VanillaBlockID.wooden_door},
    result: {id: VanillaBlockID.planks, data: 0, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .5},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.spruce_door},
    result: {id: VanillaBlockID.planks, data: 1, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .5},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.birch_door},
    result: {id: VanillaBlockID.planks, data: 2, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .5},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.jungle_door},
    result: {id: VanillaBlockID.planks, data: 3, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .5},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.acacia_door},
    result: {id: VanillaBlockID.planks, data: 4, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .5},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.dark_oak_door},
    result: {id: VanillaBlockID.planks, data: 5, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .5},
    energy: 2000
});

//boat -> planks
sawmillManager.add({
    input: {id: VanillaItemID.boat},
    result: {id: VanillaBlockID.planks, data: 0, count: 4},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaItemID.boat, data: 1},
    result: {id: VanillaBlockID.planks, data: 1, count: 4},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaItemID.boat, data: 2},
    result: {id: VanillaBlockID.planks, data: 2, count: 4},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaItemID.boat, data: 3},
    result: {id: VanillaBlockID.planks, data: 3, count: 4},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaItemID.boat, data: 4},
    result: {id: VanillaBlockID.planks, data: 4, count: 4},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaItemID.boat, data: 5},
    result: {id: VanillaBlockID.planks, data: 5, count: 4},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});

//stairs -> planks
sawmillManager.add({
    input: {id: VanillaBlockID.oak_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 0, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.spruce_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 1, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.birch_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 2, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.birch_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 2, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.jungle_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 3, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.acacia_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 4, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});
sawmillManager.add({
    input: {id: VanillaBlockID.dark_oak_stairs, count: 2},
    result: {id: VanillaBlockID.planks, data: 5, count: 1},
    second: {id: ItemID.dustSaw, data: 0, count: 1, chance: .25},
    energy: 2000
});

sawmillManager.add({
    input: {id: VanillaItemID.saddle},
    result: {id: VanillaItemID.leather, data: 0, count: 3},
    energy: 1500
});

//leather armor -> leather
sawmillManager.add({
    input: {id: VanillaItemID.leather_helmet},
    result: {id: VanillaItemID.leather, data: 0, count: 2},
    energy: 1500
});
sawmillManager.add({
    input: {id: VanillaItemID.leather_chestplate},
    result: {id: VanillaItemID.leather, data: 0, count: 4},
    energy: 1500
});
sawmillManager.add({
    input: {id: VanillaItemID.leather_leggings},
    result: {id: VanillaItemID.leather, data: 0, count: 3},
    energy: 1500
});
sawmillManager.add({
    input: {id: VanillaItemID.leather_boots},
    result: {id: VanillaItemID.leather, data: 0, count: 2},
    energy: 1500
});