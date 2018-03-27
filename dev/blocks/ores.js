const BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3
}, "stone");

IDRegistry.genBlockID("oreIridium");
Block.createBlock("oreIridium", [
    {name: "Iridium ore", texture: [["ore_iridium", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead ore", texture: [["ore_lead", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril ore", texture: [["ore_mithril", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
    {name: "Nickel ore", texture: [["ore_nickel", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum ore", texture: [["ore_platinum", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver ore", texture: [["ore_silver", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin ore", texture: [["ore_tin", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper ore", texture: [["ore_copper", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("oreAluminum");
Block.createBlock("oreAluminum", [
    {name: "Aluminum ore", texture: [["ore_aluminum", 0]], inCreative: true}
], BLOCK_TYPE_STONE);

ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.oreAluminum, BlockID.oreLead, BlockID.oreMithil, BlockID.orePlatinum, BlockID.oreSilver, BlockID.oreTin, BlockID.oreCopper]);
ToolAPI.registerBlockDiggingLevel(BlockID.oreLead, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreMithil, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.orePlatinum, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreSilver, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTin, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreCopper, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreAluminum, 1);

Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
    Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
    Recipes.addFurnace(BlockID.oreLead, ItemID.ingotLead, 0);
    Recipes.addFurnace(BlockID.oreAluminum, ItemID.ingotAluminum, 0);
    Recipes.addFurnace(BlockID.oreNickel, ItemID.ingotNickel, 0);
    Recipes.addFurnace(BlockID.orePlatinum, ItemID.ingotPlatinum, 0);
    Recipes.addFurnace(BlockID.oreIridium, ItemID.ingotIridium, 0);
    Recipes.addFurnace(BlockID.oreMithril, ItemID.ingotMithril, 0);

});

function generateOre(blockId, veins, minY, maxY, amount, chunkX, chunkZ) {
    for (; veins > 0; veins--) {
        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, minY, maxY);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, blockId, 0, amount);
    }
}

if (ThermalConfig.genCopper) {
    Flags.addUniqueAction("oreGenCopper", function () {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            generateOre(BlockID.oreCopper, 10, 40, 75, 8, chunkX, chunkZ);
        });
    });
}

if (ThermalConfig.genTin) {
    Flags.addUniqueAction("oreGenTin", function () {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            generateOre(BlockID.oreTin, 8, 20, 55, 8, chunkX, chunkZ);
        });
    });
}

if (ThermalConfig.genLead) {
    Flags.addUniqueAction("oreGenLead", function () {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            generateOre(BlockID.oreLead, 8, 10, 35, 8, chunkX, chunkZ);
        });
    });
}

if (ThermalConfig.genSilver) {
    Flags.addUniqueAction("oreGenSilver", function () {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            generateOre(BlockID.oreSilver, 6, 5, 30, 8, chunkX, chunkZ);
        });
    });
}

if (ThermalConfig.genNickel) {
    Flags.addUniqueAction("oreGenNickel", function () {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            generateOre(BlockID.oreNickel, 3, 5, 30, 20, chunkX, chunkZ);
        });
    });
}

if (ThermalConfig.genPlatinum) {
    Flags.addUniqueAction("oreGenPlatinum", function () {
        Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
            generateOre(BlockID.orePlatinum, 8, 5, 30, 1, chunkX, chunkZ);
        });
    });
}
