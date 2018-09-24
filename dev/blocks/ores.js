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

const OreGenerator = {
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate: function (x, y, z, maxCount) {
        if (World.getBlock(x, y, z).id === 1) {
            GenerationUtils.setLockedBlock(x, y, z);
            for (let i = 1; i < this.random(1, maxCount); i++) {
                GenerationUtils.setLockedBlock(x + this.random(-1, 1), y + this.random(-1, 1), z + this.random(-1, 1));
            }
        }
    }
};

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {

        if (Config.genCopper) {
            GenerationUtils.lockInBlock(BlockID.oreCopper, 0);
            for (let i = 0; i < 10; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 75);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genTin) {
            GenerationUtils.lockInBlock(BlockID.oreTin, 0);
            for (let i = 0; i < 8; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 55);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }

        if (Config.genLead) {
            GenerationUtils.lockInBlock(BlockID.oreLead, 0);
            for (let i = 0; i < 8; i++) {
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
    

    if (Config.genSilver) {
        GenerationUtils.lockInBlock(BlockID.oreSilver, 0);
        for (let i = 0; i < 6; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 8);
        }
    }

    if (Config.genNickel) {
        GenerationUtils.lockInBlock(BlockID.oreNickel, 0);
        for (let i = 0; i < 3; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 20);
            OreGenerator.generate(coords.x, coords.y, coords.z, 4);
        }
    }

    if (Config.genPlatinum) {
        GenerationUtils.lockInBlock(BlockID.orePlatinum, 0);
        for (let i = 0; i < 8; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 1);
        }
    }


});
