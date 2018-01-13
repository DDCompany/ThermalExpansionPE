IDRegistry.genBlockID("RedFurnace");
Block.createBlockWithRotation("RedFurnace", [
    {
        name: "Red Furnace",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_furnace", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.RedFurnace, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.MachineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.RedstoneReceptionCoil, 0]);
});

var guiRedFurnace = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Red Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },

    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2}
    ],

    elements: {
        "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},

        "slotSource": {type: "slot", x: 441, y: 142},
        "slotResult": {type: "slot", x: 625, y: 142}
    }
});
MachineRegistry.register(BlockID.RedFurnace, {

    ENERGY_CONSUME: 20,
    PROGRESS_MAX: 150,

    defaultValues: {
        progress: 0
    },

    getGuiScreen: function () {
        return guiRedFurnace;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult"]};
    },

    tick: function () {
        var slotSource = this.container.getSlot("slotSource");
        var slotResult = this.container.getSlot("slotResult");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_MAX) {
                var result = Recipes.getFurnaceRecipeResult(slotSource.id, "iron");
                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + 1 <= Item.getMaxStack(slotResult.id))) {
                    slotResult.count = !slotResult.id ? 1 : slotResult.count + 1;
                    slotResult.id = result.id;
                    slotResult.data = result.data;
					
					Music.playSound('furnace.ogg');
					
                    slotSource.count -= 1;
                    this.data.progress = 0;
                }
            } else {
                this.data.progress++;
				
				Music.playSound('furnace.ogg');
            }
        } else if (slotSource.id && Recipes.getFurnaceRecipeResult(slotSource.id, "iron")) {
            this.data.progress = 1;
        }

        this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});