const crucibleUI = MachineUI({
    tabIcon: "icons.machines.crucible",
    recipesShower: "te:magma_crucible",

    drawing: [
        {type: "text", text: "Magma Crucible", x: 370, y: 70, font: FONT_GREY},
        {type: "bitmap", x: 550, y: 172, bitmap: "bars.machine.fluid_empty", scale: 4},
        {type: "bitmap", x: 466, y: 205, bitmap: "bars.machine.flame_empty", scale: 4.5},
        {type: "bitmap", x: 370, y: 100, bitmap: "bars.rf_empty", scale: 5},
        {type: "bitmap", x: 662, y: 90, bitmap: "bars.fluid_1", scale: 4}
    ],

    elements: {
        //@formatter:off
        "progressScale": {type: "scale", x: 550, y: 172, direction: 0, bitmap: "bars.machine.fluid_full", scale: 4},
        "energyScale": {type: "scale", x: 370, y: 100, direction: 1, bitmap: "bars.rf_full", scale: 5},
        "speedScale": {type: "scale", x: 466, y: 205, direction: 1, bitmap: "bars.machine.flame_full", scale: 4.5},

        "slotSource": {type: "slot", x: 461, y: 122, size: 70},
        "fluidScale": {type: "scale", x: 666, y: 94, direction: 1, bitmap: "bars.fluid_0", scale: 4},
        //@formatter:on
    }
});