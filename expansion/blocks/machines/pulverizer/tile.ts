MachineRegistry.define(BlockID.thermalMachinePulverizer, MachineTileEntity<IMachineBaseTile>({
    defaultValues: {
        progress: 0,
        progressMax: 0,
        basePower: 20
    },

    click: function () {
        this.data._refreshUI = true;
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let isCreative = this.data.tier === 5;
        let power = 0;

        if (this.data.progressMax) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.data.progressMax = 0;
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
                let slotResultDop = this.container.getSlot("slotResultDop");
                if (ContainerHelper.canPutInSlot(recipe.dop, slotResultDop) &&
                    ContainerHelper.putInSlot(recipe.result, this.container.getSlot("slotResult"))) {

                    let dop = recipe.dop;
                    if (dop && (!dop.chance || Math.random() < dop.chance)) {
                        slotResultDop.id = dop.id;
                        slotResultDop.data = dop.data || 0;
                        slotResultDop.count += dop.count || 1;
                    }

                    slotSource.count -= 1;
                    this.data.progress = 0;
                    this.data.progressMax = 0;
                    this.container.validateSlot("slotSource");
                    this.refreshModel();
                }
            } else {
                if (isCreative) {
                    power += this.data.basePower;
                } else {
                    power = MachineRegistry.calcEnergy(this.data.basePower, this.data.energy);
                    this.data.energy -= power;
                }

                this.data.progress += power;
            }
        } else if (slotSource.id) {
            let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);

            if (recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 2000;
                this.refreshModel();
            }
        }

        MachineRegistry.updateEnergyBar(this, isCreative);
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("speedScale", power / this.data.basePower);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_pulverizer" + (this.data.progressMax > 0 ? "_active" : ""), 0], ["thermal_machine", 2], ["thermal_machine", 2]]);
    },

    getGuiScreen: function () {
        return pulverizerUI;
    }
}));

Block.registerPlaceFunction(BlockID.thermalMachinePulverizer, MachineRegistry.placeFunc(true));
Block.registerDropFunction(BlockID.thermalMachinePulverizer, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachinePulverizer, MachineRegistry.nameOverrideFunc);