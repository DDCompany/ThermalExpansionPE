const energyCellUI = MachineUI({
    tabIcon: "icons.machines.energy_cell",
    inventoryDisabled: true,
    configDisabled: true,

    drawing: [
        {type: "background", color: Color.rgb(149, 134, 129)},
        {type: "bitmap", x: 472, y: 100, bitmap: "bars.rf_empty", scale: 5},
        {type: "bitmap", x: 472 - 25 - 20 * 5, y: 100, bitmap: "ui.energyCell.input", scale: 5},
        {type: "bitmap", x: 472 + 25 + 14 * 5, y: 100, bitmap: "ui.energyCell.output", scale: 5},
    ],

    elements: {
        "energyScale": {type: "scale", x: 472, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5},

        "btnPlusLeft": {
            type: "button", x: 460 - 16 * 4, y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.plus",
            bitmap2: "buttons.plus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferIn = Math.min(tileEntity.data.transferIn + 100,
                        tileEntity.transferByTier[tileEntity.data.tier]);
                }
            }
        },
        "btnMinusLeft": {
            type: "button",
            x: 455 - 16 * 4 * 2,
            y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.minus",
            bitmap2: "buttons.minus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferIn = Math.max(tileEntity.data.transferIn - 100, 0);
                }
            }
        },
        "textLeft": {type: "text", text: "25000", x: 472 - 130, y: 100 + 42 * 5 - 16 * 4 - 40, font: FONT_WHITE_30},

        "btnPlusRight": {
            type: "button",
            x: 490 + 16 * 4,
            y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.plus",
            bitmap2: "buttons.plus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferOut = Math.min(tileEntity.data.transferOut + 100,
                        tileEntity.transferByTier[tileEntity.data.tier]);
                }
            }
        },
        "btnMinusRight": {
            type: "button",
            x: 495 + 16 * 4 * 2,
            y: 100 + (42 * 5 - 16 * 4),
            scale: 4,
            bitmap: "buttons.minus",
            bitmap2: "buttons.minus_pressed",
            clicker: {
                onClick: function (position, container, tileEntity) {
                    soundClick.play();
                    tileEntity.data.transferOut = Math.max(tileEntity.data.transferOut - 100, 0);
                }
            }
        },
        "textRight": {
            type: "text",
            text: "25000",
            x: 472 + 20 + 14 * 5,
            y: 100 + 42 * 5 - 16 * 4 - 40,
            font: FONT_WHITE_30
        },

        "textEnergy": {type: "text", text: "0/0 RF", x: 0, y: 320, font: FONT_WHITE_30}
    }
});