/*

  _______ _                               _ ______                            _             _____  ______
 |__   __| |                             | |  ____|                          (_)           |  __ \|  ____|
    | |  | |__   ___ _ __ _ __ ___   __ _| | |__  __  ___ __   __ _ _ __  ___ _  ___  _ __ | |__) | |__
    | |  | '_ \ / _ \ '__| '_ ` _ \ / _` | |  __| \ \/ / '_ \ / _` | '_ \/ __| |/ _ \| '_ \|  ___/|  __|
    | |  | | | |  __/ |  | | | | | | (_| | | |____ >  <| |_) | (_| | | | \__ \ | (_) | | | | |    | |____
    |_|  |_| |_|\___|_|  |_| |_| |_|\__,_|_|______/_/\_\ .__/ \__,_|_| |_|___/_|\___/|_| |_|_|    |______|
                                                       | |
                                                       |_|
     by Dmitriy Medvedev(https://vk.com/id331953744)
 */
importLib("ToolType", "*");
importLib("energylib", "*");
importLib("SoundAPI", "*");
IMPORT("BackpackAPI");

const nativeDropFunc = ModAPI.requireGlobal("Level.dropItem");
const getYaw = ModAPI.requireGlobal("Entity.getYaw");
const UIUtils = java.lang.Class.forName("zhekasmirnov.launcher.utils.UIUtils", true, UI.getContext().getClass().getClassLoader()).newInstance();

const MinecraftColor = Native.Color;
const Color = android.graphics.Color;
const Canvas = android.graphics.Canvas;
const BufferedOutputStream = java.io.BufferedOutputStream;
const FileOutputStream = java.io.FileOutputStream;
const Bitmap = android.graphics.Bitmap;
const File = java.io.File;
const Paint = android.graphics.Paint;

const RF = EnergyTypeRegistry.assureEnergyType("RF", 1 / 4);
const POWER_SCALING = [100, 150, 200, 250, 300, 300];
const TIERS_NAME = ["Basic", "Hardened", "Reinforced", "Signalum", "Resonant", "Creative"];
const FONT_WHITE_30 = {size: 30, color: Color.WHITE};
const RF_WIRE_GROUP = ICRender.getGroup("rf-wire");

const soundClick = new Sound("click.ogg");
soundClick.setInPlayer();

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
    let coords = GenerationUtils.randomXZ(chunkX, chunkZ);
    coords = GenerationUtils.findHighSurface(coords.x, coords.z);

    GenerationUtils.generateOre(coords.x, coords.y, coords.z, blockId, 0, size, true);
}