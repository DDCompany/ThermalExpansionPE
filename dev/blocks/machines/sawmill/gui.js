const guiSawmill = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Sawmill"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 441, y: 165, bitmap: "scale_speed_sawmill_0", scale: 3.2}
    ],

    elements: {
        "progressScale": {
            type: "scale",
            x: 530,
            y: 146,
            direction: 0,
            value: 0.5,
            bitmap: "pulverizer_bar_scale",
            scale: 3.2
        },
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "speedScale": {type: "scale", x: 441, y: 165, direction: 1, bitmap: "scale_speed_sawmill_1", scale: 3.2},
        "btnRecipes": {type: "button", x: 930, y: 60, bitmap: "btn_recipes", scale: 3.2, clicker: {
            onClick: function(){
                GuideAPI.openGuide("guideSawmillRecipes");
            },
        }},

        "slotSource": {type: "slot", x: 441, y: 102},
        "slotResult": {type: "slot", x: 625, y: 102},
        "slotResultDop": {type: "slot", x: 625, y: 165}
    }
});