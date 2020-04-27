IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 1, true);
Block.setDestroyTime(BlockID.oreCopper, 2.5);
Block.setDestroyLevel("oreCopper", 1);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone", 1, true);
Block.setDestroyTime(BlockID.oreTin, 2.5);
Block.setDestroyLevel("oreTin", 1);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilver, 2.5);
Block.setDestroyLevel("oreSilver", 2);

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead Ore", texture: [["ore_lead", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreLead, "stone", 2, true);
Block.setDestroyTime(BlockID.oreLead, 2.5);
Block.setDestroyLevel("oreLead", 2);

IDRegistry.genBlockID("oreAluminum");
Block.createBlock("oreAluminum", [
    {name: "Aluminum Ore", texture: [["ore_aluminum", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreAluminum, "stone", 1, true);
Block.setDestroyTime(BlockID.oreAluminum, 2.5);
Block.setDestroyLevel("oreAluminum", 1);

IDRegistry.genBlockID("oreNickel");
Block.createBlock("oreNickel", [
    {name: "Nickel Ore", texture: [["ore_nickel", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreNickel, "stone", 2, true);
Block.setDestroyTime(BlockID.oreNickel, 2.5);
Block.setDestroyLevel("oreNickel", 2);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum Ore", texture: [["ore_platinum", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.orePlatinum, "stone", 3, true);
Block.setDestroyTime(BlockID.orePlatinum, 2.5);
Block.setDestroyLevel("orePlatinum", 3);

IDRegistry.genBlockID("oreIridium");
Block.createBlock("oreIridium", [
    {name: "Iridium Ore", texture: [["ore_iridium", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreIridium, "stone", 3, true);
Block.setDestroyTime(BlockID.oreIridium, 2.5);
Block.setDestroyLevel("oreIridium", 3);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril Ore", texture: [["ore_mithril", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreMithril, "stone", 3, true);
Block.setDestroyTime(BlockID.oreMithril, 2.5);
Block.setDestroyLevel("oreMithril", 3);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    //Mithril и Iridium не генерируются в мире
    let ores = ["copper", "tin", "silver", "lead", "aluminum", "nickel", "platinum"];
    let config = ThermalConfig.gen;

    for (let i in ores) {
        let ore = ores[i];
        let gen = config[ore];

        if (gen.enabled) {
            generateOre(BlockID["ore" + ore.charAt(0).toUpperCase() + ore.substr(1)],
                chunkX,
                chunkZ,
                gen.inChunk,
                gen.size,
                gen.minY,
                gen.maxY);
        }
    }
});