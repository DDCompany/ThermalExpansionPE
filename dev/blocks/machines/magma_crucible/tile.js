MachineRegistry.register(BlockID.magmaCrucible, {

    defaultValues: {
        progress: 0,
        progressMax: 0
    },

    getGuiScreen: function () {
        return guiMagmaCrucible;
    },

    init: function () {
        this.liquidStorage.setLimit(null, 10);
    },

    tick: function () {
        let slot = this.container.getSlot("slotSource");

        ContainerHelper.fluidContainerEmpty(null, this, {full: "slotFilledContainer", empty: "slotContainer"});

        if(this.data.progress){

            if(!slot.id) {
                this.data.progress = 0;
                this.container.setScale("speedScale", 0);
                return
            }

            if(this.data.progress >= this.data.progressMax){
                let recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                let fluid = this.liquidStorage.getLiquidStored();
                if(!fluid || (fluid === recipe.fluid && this.liquidStorage.getAmount(fluid) + recipe.fluidAmount <= 10)){
                    this.liquidStorage.addLiquid(recipe.fluid, recipe.fluidAmount);
                    this.data.progress = 0;
                    slot.count--;
                    this.container.setScale("speedScale", 0);
                }
            }else {
                let energy = MachineRegistry.calcEnergy(this, 20);
                this.data.energy -= energy;
                this.container.setScale("speedScale", energy / 20);

                this.data.progress += energy;
            }

        }else{

            if(slot.id > 0){
                let recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                if(recipe) {
                    this.data.progress = 1;
                    this.data.progressMax = recipe.time || 100;
                }
            }
        }

        this.liquidStorage.updateUiScale("liquidScale", this.liquidStorage.getLiquidStored());
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 15000;
    }
});