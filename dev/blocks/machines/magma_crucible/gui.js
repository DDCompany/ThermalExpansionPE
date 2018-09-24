const guiMagmaCrucible = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Magma Crucible"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 640, y: 80, bitmap: "fluid_scale_b", scale: 3.2},
        {type: "bitmap", x: 443, y: 165, bitmap: "fire_scale_bg", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "liquidScale": {type: "scale", x: 643, y: 80, direction: 1, bitmap: "fluid_scale", scale: 3.2},

        "speedScale": {type: "scale", x: 444, y: 168, direction: 1, bitmap: "fire_scale", scale: 3.2},

        "btnRecipes": {type: "button", x: 930, y: 60, bitmap: "btn_recipes", scale: 3.2, clicker: {
            onClick: function(){
                GuideAPI.openGuide("guideMagmaCrucibleRecipes");
            },
        }},

        "slotSource": {type: "slot", x: 441, y: 102},

        "slotContainer": {type: "slot", x: 700, y: 102},
        "slotFilledContainer": {type: "slot", x: 700, y: 168},
    }
});
