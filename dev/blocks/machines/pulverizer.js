IDRegistry.genBlockID("pulverizer");
Block.createBlockWithRotation("pulverizer", [
    {
        name: "Pulverizer",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_pulverizer", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.pulverizer, count: 1, data: 0}, [
        " x ",
        "b#b",
        "cac"
    ], ['#', BlockID.machineFrameBasic, 0, 'x', 33, 0, 'b', 318, 0, 'a', ItemID.RedstoneReceptionCoil, 0, 'c', ItemID.gearCopper, 0]);
});

var guipulverizer = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Pulverizer"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "pulverizer_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
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

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotResult": {type: "slot", x: 625, y: 102},
        "slotResultDop": {type: "slot", x: 625, y: 165}
    }
});

MachineRegistry.register(BlockID.pulverizer, {

    PROGRESS_TIME: 150,
    ENERGY_CONSUME: 20,

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guipulverizer;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult", "slotResultDop"]};
    },

    tick: function () {
        var slotSource = this.container.getSlot("slotSource");
        var slotResult = this.container.getSlot("slotResult");
        var slotResultDop = this.container.getSlot("slotResultDop");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }
            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_TIME) {
                var r = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
                if (slotResult.id === 0 || (slotResult.id === r.result.id && slotResult.data === r.result.data && slotResult.count + r.result.count <= Item.getMaxStack(slotResult.id))) {
                    if (!r.dop || (slotResultDop.id === 0 || (slotResultDop.id === r.dop.id && slotResultDop.data === r.dop.data && slotResultDop.count + r.dop.count <= Item.getMaxStack(slotResultDop.id)))) {
                        slotResult.count = !slotResult.id ? r.result.count : slotResult.count + r.result.count;
                        slotResult.id = r.result.id;
                        slotResult.data = r.result.data;

                        if (r.dop && (!r.dop.chance || Math.random() < r.dop.chance)) {
                            slotResultDop.count = !slotResultDop.id ? r.dop.count : slotResultDop.count + r.dop.count;
                            slotResultDop.id = r.dop.id;
                            slotResultDop.data = r.dop.data;
                        }

                        slotSource.count -= 1;
                        this.data.progress = 0;
                    }
                }
            } else {
                this.data.progress++;
				
				Music.playSound('pulverizer.ogg');
            }
        } else if (slotSource.id && PulverizerRecipes.getResult(slotSource.id, slotSource.data)) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_TIME);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});
        