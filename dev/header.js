/*

  _______ _                               _ ______                            _             _____  ______
 |__   __| |                             | |  ____|                          (_)           |  __ \|  ____|
    | |  | |__   ___ _ __ _ __ ___   __ _| | |__  __  ___ __   __ _ _ __  ___ _  ___  _ __ | |__) | |__
    | |  | '_ \ / _ \ '__| '_ ` _ \ / _` | |  __| \ \/ / '_ \ / _` | '_ \/ __| |/ _ \| '_ \|  ___/|  __|
    | |  | | | |  __/ |  | | | | | | (_| | | |____ >  <| |_) | (_| | | | \__ \ | (_) | | | | |    | |____
    |_|  |_| |_|\___|_|  |_| |_| |_|\__,_|_|______/_/\_\ .__/ \__,_|_| |_|___/_|\___/|_| |_|_|    |______|
                                                       | |
                                                       |_|
     by Dmitriy Medvedev(https://vk.com/id331953744), Abdulla Nagmetdulla (http://vk.com/abdulla000n), Artyom Kaktysh(https://vk.com/artyom_kaktysh) and Denis Dzhugalik(https://vk.com/id235887284)
 */
importLib("ToolType", "*");
importLib("energylib", "*");

const RF = EnergyTypeRegistry.assureEnergyType("RF", 1/4);

//TODO CRAFTING_TOOL_ITEM_MAX_DAMAGE
var CRAFTING_TOOL_ITEM_MAX_DAMAGE = 105;

let GuideAPI = null;
let GuideHelper = null;
let PageControllers = null;

function addRecipeWithCraftingTool(result, data, tool) {
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == tool) {
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}

ModAPI.addAPICallback("GuideAPI", function (api) {
    GuideAPI = api.GuideAPI;
    GuideHelper = api.GuideHelper;
    PageControllers = api.PageControllers;

    PageControllers["MAGMA_CRUCIBLE_RECIPE_PAGE"] = function (params, elements, container, section) {
        let yp = 80;
        let xp = section === "left" ? 50 : 550;
        elements["magma_crucible_title_" + section] = {type: "text", x: xp, y: 40, text: params.title || "", font: {color: android.graphics.Color.BLACK, size: 20}};

        if(params.recipes){
            for(let key in params.recipes) {
                let recipe = params.recipes[key];
                elements["slotInputCrucible_" + key + "_" + section] = {type: "slot", x: xp, y: yp, size: 70, visual: true};
                let slot_input = container.getSlot("slotInputCrucible_" + key + "_" + section);

                slot_input.id = recipe.id;
                slot_input.data = recipe.data || 0;
                slot_input.count = 1;

                elements["magma_crucible_bar_" + key + "_" + section] = {type: "image", x: xp + 70, y: yp + 10, bitmap: params.bar_texture || "te_bar_0", scale: 3.2};
                elements["magma_crucible_text_" + key + "_" + section] = {type: "text", text: recipe.fluid + "(" + (recipe.fluidAmount * 1000) + "mb)", x: xp + 150, y: yp + 20, font: {color: android.graphics.Color.BLACK}};
                yp+=80;
            }
        }
    };

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