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
IMPORT("BackpackAPI");

const RF = EnergyTypeRegistry.assureEnergyType("RF", 1 / 4);
const Color = android.graphics.Color;
const POWER_SCALING = [100, 150, 200, 250, 300];
const nativeDropFunc = ModAPI.requireGlobal("Level.dropItem");
const getYaw = ModAPI.requireGlobal("Entity.getYaw");
const Canvas = android.graphics.Canvas;
const BufferedOutputStream = java.io.BufferedOutputStream;
const FileOutputStream = java.io.FileOutputStream;
const Bitmap = android.graphics.Bitmap;
const File = java.io.File;
const Paint = android.graphics.Paint;

let GuideAPI;
let GuideHelper;
let PageControllers;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomBool() {
    return Math.random() > 0.5;
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

ModAPI.addAPICallback("GuideAPI", function (api) {
    GuideAPI = api.GuideAPI;
    GuideHelper = api.GuideHelper;
    PageControllers = api.PageControllers;

    PageControllers["TE_TO_RECIPE_PAGE"] = function (params, elements, container, section) {
        let yp = 120;
        let xp = section === "left" ? 50 : 550;
        elements["oto_title_" + section] = {type: "text", x: xp, y: 40, text: params.title || "", font: {color: android.graphics.Color.BLACK, size: 20}};

        if(params.recipes){
            for(let key in params.recipes){
                let recipe = params.recipes[key];

                elements["slotInput_"+ key +"_" + section] = {type: "slot", x: xp, y: yp, size: 70, visual: true/*, bitmap: "slot_empty"*/, isTransparentBackground: true};
                let slot_input = container.getSlot("slotInput_"+ key +"_" + section);

                elements["oto_bar_" + key + "_" + section] = {type: "image", x: xp + 70, y: yp + 10, bitmap: params.bar_texture || "furnace_bar_guide", scale: 3.2};

                elements["slotOutput_"+ key +"_" + section] = {type: "slot", x: xp + 140, y: yp - 35, size: 70, visual: true/*, bitmap: "slot_empty"*/, isTransparentBackground: true};
                let slot_output = container.getSlot("slotOutput_"+ key +"_" + section);

                elements["slotOutput2_"+ key +"_" + section] = {type: "slot", x: xp + 140, y: yp + 35, size: 70, visual: true/*, bitmap: "slot_empty"*/, isTransparentBackground: true};
                let slot_output2 = container.getSlot("slotOutput2_"+ key +"_" + section);

                slot_input.id = recipe.input.id;
                slot_input.data = recipe.input.data || 0;
                slot_input.count = recipe.input.count || 1;

                slot_output.id = recipe.output.id;
                slot_output.data = recipe.output.data || 0;
                slot_output.count = recipe.output.count || 1;

                if(recipe.dop && recipe.dop.id){

                    slot_output2.id = recipe.dop.id || 0;
                    slot_output2.data = recipe.dop.data || 0;
                    slot_output2.count = recipe.dop.count || 1;

                    let chance = recipe.dop.chance * 100;

                    if(chance)
                        elements["to_chance_"+ key +"_" + section] = {type: "text", x: xp + 215, y: yp + 55, text: chance + "%", font: {color: android.graphics.Color.BLACK, size: 18}};
                }else {
                    slot_output2.id = 0;
                    slot_output2.data = 0;
                    slot_output2.count = 1;
                }

                yp += 150;
            }
        }
    };

});