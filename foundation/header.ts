/*
     _____ _                               _ _____                     _       _   _             ____  _____
    |_   _| |__   ___ _ __ _ __ ___   __ _| |  ___|__  _   _ _ __   __| | __ _| |_(_) ___  _ __ |  _ \| ____|
      | | | '_ \ / _ \ '__| '_ ` _ \ / _` | | |_ / _ \| | | | '_ \ / _` |/ _` | __| |/ _ \| '_ \| |_) |  _|
      | | | | | |  __/ |  | | | | | | (_| | |  _| (_) | |_| | | | | (_| | (_| | |_| | (_) | | | |  __/| |___
      |_| |_| |_|\___|_|  |_| |_| |_|\__,_|_|_|  \___/ \__,_|_| |_|\__,_|\__,_|\__|_|\___/|_| |_|_|   |_____|


     All ideas and textures belong to the original author - https://teamcofh.com/
     Port by DDCompany (https://vk.com/id331953744)
 */
IMPORT("ToolType");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateOre(blockId, chunkX, chunkZ, inChunk, size, minY, maxY) {
    for (let i = 0; i < inChunk; i++) {
        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, minY, maxY);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, blockId, 0, size);
    }
}

function generateSandOre(blockId, chunkX, chunkZ, size) {
    switch (World.getBiome(chunkX, chunkZ)) {
        case 2:
        case 17:
        case 130:
            break;
        default:
            return;
    }
    let coords: any = GenerationUtils.randomXZ(chunkX, chunkZ);
    coords = GenerationUtils.findHighSurface(coords.x, coords.z) as Vector;

    GenerationUtils.generateOre(coords.x, coords.y, coords.z, blockId, 0, size, true);
}

enum Tier {
    BASIC,
    HARDENED,
    REINFORCED,
    SIGNALUM,
    RESONANT,
    CREATIVE
}

interface IItem {
    id: number,
    count: number,
    /**
     * @default 0
     */
    data?: number
}

interface IChanceItem extends IItem {
    /**
     * @default 1
     */
    chance?: number
}