pulverizerManager.add({
    input: {id: 263},
    result: {id: ItemID.dustCoal, data: 0, count: 1},
    second: {id: ItemID.dustSulfur, data: 0, chance: 0.15},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 263, data: 1},
    result: {id: ItemID.dustCharcoal, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 49, data: 0},
    result: {id: ItemID.dustObsidian, data: 0, count: 4},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 4, data: 0},
    result: {id: 12, data: 0, count: 1},
    second: {id: 13, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 1, data: 0},
    result: {id: 13, data: 0, count: 1},
    second: {id: 12, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 87, data: 0},
    result: {id: 13, data: 0, count: 1},
    second: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 13, data: 0},
    result: {id: 318, data: 0, count: 1},
    second: {id: 12, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 24, data: -1},
    result: {id: 12, data: 0, count: 2},
    second: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.4},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 352, data: 0},
    result: {id: 351, data: 15, count: 6},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 89, data: 0},
    result: {id: 348, data: 0, count: 4},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 409, data: 0},
    result: {id: 422, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 369, data: 0},
    result: {id: 377, data: 0, count: 4},
    second: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.5},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 17, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 8},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 162, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 8},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 5, data: -1},
    result: {id: ItemID.dustSaw, data: 0, count: 2},
    energy: 1000
});

// ORES

pulverizerManager.add({
    input: {id: 15, data: 0},
    result: {id: ItemID.dustIron, data: 0, count: 2},
    second: {id: ItemID.dustNickel, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 14, data: 0},
    result: {id: ItemID.dustGold, data: 0, count: 2},
    second: {id: ItemID.crystalCinnabar, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 2},
    second: {id: ItemID.dustGold, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 2},
    second: {id: ItemID.dustIron, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 2},
    second: {id: ItemID.dustLead, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreLead, data: 0},
    result: {id: ItemID.dustLead, data: 0, count: 2},
    second: {id: ItemID.dustSilver, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 2},
    second: {id: ItemID.dustIron, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 2},
    second: {id: ItemID.dustPlatinum, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.orePlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 2},
    second: {id: ItemID.dustIridium, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreMithril, data: 0},
    result: {id: ItemID.dustMithril, data: 0, count: 2},
    second: {id: ItemID.dustGold, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreIridium, data: 0},
    result: {id: ItemID.dustIridium, data: 0, count: 2},
    second: {id: ItemID.dustPlatinum, data: 0, count: 1, chance: 0.1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 16, data: 0},
    result: {id: 263, data: 0, count: 3},
    second: {id: ItemID.dustCoal, data: 0, count: 1, chance: 0.25},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 21, data: 0},
    result: {id: 351, data: 4, count: 10},
    second: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.2},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 73, data: 0},
    result: {id: 331, data: 0, count: 6},
    second: {id: ItemID.crystalCinnabar, data: 0, count: 1, chance: 0.25},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 56, data: 0},
    result: {id: 264, data: 0, count: 2},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 129, data: 0},
    result: {id: 388, data: 0, count: 2},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 153, data: 0},
    result: {id: 406, data: 0, count: 3},
    second: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.15},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.sandOil, data: 0},
    result: {id: ItemID.crystalCrudeOil, data: 0, count: 3},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreDestabilizedRedstone, data: 0},
    result: {id: ItemID.crystalRedstone, data: 0, count: 3},
    second: {id: ItemID.crystalCinnabar, data: 0, count: 1, chance: 0.5},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreNetherrackEnergized, data: 0},
    result: {id: ItemID.crystalGlowstone, data: 0, count: 3},
    second: {id: ItemID.dustSulfur, data: 0, count: 1, chance: 0.3},
    energy: 4000
});

pulverizerManager.add({
    input: {id: BlockID.oreEndStoneResonant, data: 0},
    result: {id: ItemID.crystalEnder, data: 0, count: 3},
    energy: 4000
});

// FLOWERS

pulverizerManager.add({
    input: {id: 37, data: 0},
    result: {id: 351, data: 11, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 0},
    result: {id: 351, data: 1, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 1},
    result: {id: 351, data: 12, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 2},
    result: {id: 351, data: 13, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 3},
    result: {id: 351, data: 7, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 4},
    result: {id: 351, data: 1, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 5},
    result: {id: 351, data: 14, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 6},
    result: {id: 351, data: 7, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 7},
    result: {id: 351, data: 9, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 38, data: 8},
    result: {id: 351, data: 7, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 175, data: 0},
    result: {id: 351, data: 11, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 175, data: 1},
    result: {id: 351, data: 13, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 175, data: 4},
    result: {id: 351, data: 1, count: 4},
    energy: 2000
});

pulverizerManager.add({
    input: {id: 175, data: 5},
    result: {id: 351, data: 9, count: 4},
    energy: 2000
});

// RECYCLING

pulverizerManager.add({
    input: {id: 82, data: 0},
    result: {id: 337, data: 0, count: 4},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 159, data: -1},
    result: {id: 337, data: 0, count: 4},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 45, data: 0},
    result: {id: 336, data: 0, count: 4},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 44, data: 4},
    result: {id: 336, data: 0, count: 2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 108, data: 0},
    result: {id: 336, data: 0, count: 3},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 390, data: 0},
    result: {id: 336, data: 0, count: 3},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 374, data: 0},
    result: {id: 12, data: 0, count: 1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 20, data: 0},
    result: {id: 12, data: 0, count: 1},
    energy: 4000
});

pulverizerManager.add({
    input: {id: 112, data: 0},
    result: {id: 405, data: 0, count: 4},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 44, data: 7},
    result: {id: 405, data: 0, count: 2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 114, data: 0},
    result: {id: 405, data: 0, count: 3},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 155, data: -1},
    result: {id: 406, data: 0, count: 4},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 44, data: 6},
    result: {id: 406, data: 0, count: 2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 156, data: 0},
    result: {id: 406, data: 0, count: 3},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 44, data: 1},
    result: {id: 12, data: 0, count: 2},
    second: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 128, data: 0},
    result: {id: 12, data: 0, count: 2},
    second: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 182, data: 0},
    result: {id: 12, data: 1, count: 2},
    second: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 163, data: 0},
    result: {id: 12, data: 1, count: 2},
    second: {id: ItemID.dustNiter, data: 0, count: 1, chance: 0.2},
    energy: 3000
});

pulverizerManager.add({
    input: {id: 35, data: -1},
    result: {id: 287, data: 0, count: 4},
    energy: 3000
});

// INGOTS

pulverizerManager.add({
    input: {id: ItemID.ingotCopper, data: 0},
    result: {id: ItemID.dustCopper, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotTin, data: 0},
    result: {id: ItemID.dustTin, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotSilver, data: 0},
    result: {id: ItemID.dustSilver, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotLead, data: 0},
    result: {id: ItemID.dustLead, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotAluminum, data: 0},
    result: {id: ItemID.dustAluminum, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotNickel, data: 0},
    result: {id: ItemID.dustNickel, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotPlatinum, data: 0},
    result: {id: ItemID.dustPlatinum, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotIridium, data: 0},
    result: {id: ItemID.dustIridium, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotMithril, data: 0},
    result: {id: ItemID.dustMithril, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotSteel, data: 0},
    result: {id: ItemID.dustSteel, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotElectrum, data: 0},
    result: {id: ItemID.dustElectrum, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotInvar, data: 0},
    result: {id: ItemID.dustInvar, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotBronze, data: 0},
    result: {id: ItemID.dustBronze, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotConstantan, data: 0},
    result: {id: ItemID.dustConstantan, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotSignalum, data: 0},
    result: {id: ItemID.dustSignalum, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotLumium, data: 0},
    result: {id: ItemID.dustLumium, data: 0, count: 1},
    energy: 2000
});

pulverizerManager.add({
    input: {id: ItemID.ingotEnderium, data: 0},
    result: {id: ItemID.dustEnderium, data: 0, count: 1},
    energy: 2000
});