MachineRegistry.register(BlockID.sawmill, {

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guiSawmill;
    },

    getTransportSlots: function () {
        return {input: ["slotSource"], output: ["slotResult", "slotResultDop"]};
    },

    tick: function(){
        let slotSource = this.container.getSlot("slotSource");

        if (this.data.progress) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.container.setScale("speedScale", 0);
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let r = SawmillRecipes.getResult(slotSource.id, slotSource.data);
                let result = r.result;
                let dop = r.dop;

                let slotResult = this.container.getSlot("slotResult");
                let slotResultDop = this.container.getSlot("slotResultDop");

                if (slotResult.id === 0 || (slotResult.id === result.id && slotResult.data === result.data && slotResult.count + result.count <= Item.getMaxStack(slotResult.id))) {
                    if (!r.dop || (slotResultDop.id === 0 || (slotResultDop.id === dop.id && slotResultDop.data === dop.data && slotResultDop.count + dop.count <= Item.getMaxStack(slotResultDop.id)))) {
                        slotResult.count = !slotResult.id ? result.count : slotResult.count + result.count;
                        slotResult.id = result.id;
                        slotResult.data = result.data;

                        if (dop && (!dop.chance || Math.random() < dop.chance)) {
                            slotResultDop.count = !slotResultDop.id ? dop.count : slotResultDop.count + dop.count;
                            slotResultDop.id = dop.id;
                            slotResultDop.data = dop.data;
                        }

                        slotSource.count -= 1;
                        this.data.progress = 0;
                        this.container.setScale("speedScale", 0);
                    }
                }
            } else {
                let energy = MachineRegistry.calcEnergy(this, 20);
                this.data.energy -= energy;
                this.container.setScale("speedScale", energy / 20);

                this.data.progress += energy;
            }
        } else if (slotSource.id) {
            let recipe = SawmillRecipes.getResult(slotSource.id, slotSource.data);
            if(recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 10000;
            }
        }

        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});
