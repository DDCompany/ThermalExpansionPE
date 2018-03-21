const dynamoMagmaticGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Magmatic Dynamo"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 500, y: 90, bitmap: "rf_scale", scale: 3.2},
        {type: "bitmap", x: 340, y: 60, bitmap: "fluid_scale_short_b", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 500, y: 90, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "lavaScale": {type: "scale", x: 343, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},

        "slot1": {type: "slot", x: 420, y: 60},
        "slot2": {type: "slot", x: 420, y: 199}
    }
});