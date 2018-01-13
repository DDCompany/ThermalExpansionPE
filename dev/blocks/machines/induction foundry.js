IDRegistry.genBlockID("inductionFoundry");
Block.createBlockWithRotation("inductionFoundry", [
    {
        name: "Induction Foundry",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["induction_front", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.inductionFoundry, count: 1, data: 0}, [
        " x ",
        "b#b",
        "cac"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 325, 0, 'b', ItemID.ingotInvar, 0, 'a', ItemID.RedstoneReceptionCoil, 0, 'c', ItemID.gearInvar, 0]);
});

var guiinductionFoundry = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Induction Foundry"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 566, y: 168, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
		{type: "bitmap", x: 455, y: 196, bitmap: "fire_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {
            type: "scale",
            x: 566,
            y: 168,
            direction: 0,
            value: 0.5,
            bitmap: "pulverizer_bar_scale",
            scale: 3.2
        },
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource1": {type: "slot", x: 410, y: 131},
		"slotSource2": {type: "slot", x: 485, y: 131},
        "slotResult1": {type: "slot", x: 655, y: 130},
		"slotResult2": {type: "slot", x: 711, y: 130},
        "slotResultDop": {type: "slot", x: 655, y: 199}
    }
});

MachineRegistry.register(BlockID.inductionFoundry, {
     PROGRESS_TIME: 150,
    ENERGY_CONSUME: 20,

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guiinductionFoundry;
    },
	

    getEnergyStorage: function () {
        return 15000;
    }
});