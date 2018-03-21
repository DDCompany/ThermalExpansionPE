MachineRegistry.register(BlockID.redFurnace, {

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
        let slotSource = this.container.getSlot("slotSource");
        let slotResult = this.container.getSlot("slotResult");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                return;
            }

            if (this.data.energy < this.ENERGY_CONSUME) return;

            this.data.energy -= this.ENERGY_CONSUME;

            if (this.data.progress >= this.PROGRESS_MAX) {
                let result = Recipes.getFurnaceRecipeResult(slotSource.id, "iron");
                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + 1 <= Item.getMaxStack(slotResult.id))) {
                    slotResult.count = !slotResult.id ? 1 : slotResult.count + 1;
                    slotResult.id = result.id;
                    slotResult.data = result.data;

                    slotSource.count -= 1;
                    this.data.progress = 0;
                }
            } else {
                this.data.progress++;
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