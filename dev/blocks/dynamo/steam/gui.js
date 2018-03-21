const dynamoSteamGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Steam Dynamo"
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
        {type: "bitmap", x: 340, y: 60, bitmap: "dynamo_steam", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 510, y: 95, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "steamScale": {type: "scale", x: 343, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},
        "waterScale": {type: "scale", x: 653, y: 63, direction: 1, bitmap: "fluid_scale", scale: 3.2},
        "fuelScale": {type: "scale", x: 580, y: 155, direction: 1, bitmap: "fire_scale", scale: 3.2},

        "slotFuel": {type: "slot", x: 426, y: 143},

        "slotWaterContainer": {type: "slot", x: 720, y: 70},
        "slotWaterContainerEmpty": {type: "slot", x: 720, y: 185}
    }
});