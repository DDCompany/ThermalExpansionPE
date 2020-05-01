/*

  _______ _                               _ ______                            _             _____  ______
 |__   __| |                             | |  ____|                          (_)           |  __ \|  ____|
    | |  | |__   ___ _ __ _ __ ___   __ _| | |__  __  ___ __   __ _ _ __  ___ _  ___  _ __ | |__) | |__
    | |  | '_ \ / _ \ '__| '_ ` _ \ / _` | |  __| \ \/ / '_ \ / _` | '_ \/ __| |/ _ \| '_ \|  ___/|  __|
    | |  | | | |  __/ |  | | | | | | (_| | | |____ >  <| |_) | (_| | | | \__ \ | (_) | | | | |    | |____
    |_|  |_| |_|\___|_|  |_| |_| |_|\__,_|_|______/_/\_\ .__/ \__,_|_| |_|___/_|\___/|_| |_|_|    |______|
                                                       | |
                                                       |_|

     All ideas and textures belong to the original author - https://teamcofh.com/
     Port by DDCompany (https://vk.com/id331953744)
 */
IMPORT("EnergyNet");
IMPORT("SoundAPI");
IMPORT("BackpackAPI");

const MinecraftColor = Native.Color;
const Color = android.graphics.Color;
const Canvas = android.graphics.Canvas;
const BufferedOutputStream = java.io.BufferedOutputStream;
const FileOutputStream = java.io.FileOutputStream;
const Bitmap = android.graphics.Bitmap;
const File = java.io.File;
const Paint = android.graphics.Paint;

// @ts-ignore
const RF = EnergyTypeRegistry.assureEnergyType("RF", 1 / 4);
const COLOR_BG = Color.parseColor("#c5c5c5");
const COLOR_GREY = Color.rgb(77, 77, 77);
const POWER_SCALING = [100, 150, 200, 250, 300, 300];
const TIERS_NAME = ["Basic", "Hardened", "Reinforced", "Signalum", "Resonant", "Creative"];
const FONT_GREY = {size: 25, color: COLOR_GREY};
const FONT_GREY_CENTERED = {size: 25, color: COLOR_GREY, align: 1};
// @ts-ignore
const RF_WIRE_GROUP = ICRender.getGroup("rf-wire");

// @ts-ignore
const soundClick = new Sound("click.ogg");
soundClick.setInPlayer();

const foundationAPI = ModAPI.requireAPI("ThermalFoundationAPI") as IThermalFoundationShared;
// @ts-ignore
const Tier = foundationAPI.Tier;