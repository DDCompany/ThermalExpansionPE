MachineRegistry.define(BlockID.thermalMachineFurnace, MachineTileEntity<IMachineBaseTile>({
    defaultValues: {
        progress: 0,
        progressMax: 0,
        basePower: 20
    },

    tick: function () {
        let slotSource = this.container.getSlot("slotSource");
        let power = 0;

        if (this.data.progressMax) {
            if (!slotSource.id) {
                this.data.progress = 0;
                this.data.progressMax = 0;
                return;
            }

            if (this.data.progress >= this.data.progressMax) {
                let result = Recipes.getFurnaceRecipeResult(slotSource.id, 0, "iron");
                if (ContainerHelper.putInSlot(result, this.container.getSlot("slotResult"))) {
                    slotSource.count -= 1;
                    this.data.progress = 0;
                    this.data.progressMax = 0;
                    this.container.validateSlot("slotSource");
                    this.refreshModel();
                }
            } else {
                power = MachineRegistry.calcEnergy(this.data.basePower, this.data.energy);
                this.data.energy -= power;
                this.data.progress += power;
            }
        } else if (slotSource.id && Recipes.getFurnaceRecipeResult(slotSource.id, 0, "iron")) {
            this.data.progress = 1;
            this.data.progressMax = 2000;
            this.refreshModel();
        }

        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("speedScale", power / this.data.basePower);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [["thermal_machine", 0], ["thermal_machine", 1], ["thermal_machine", 2], ["thermal_machine_furnace" + (this.data.progressMax > 0 ? "_active" : ""), 0], ["thermal_machine", 2], ["thermal_machine", 2]]);
    },

    getGuiScreen: function () {
        return furnaceUI;
    }
}));

Block.registerPlaceFunction(BlockID.thermalMachineFurnace, MachineRegistry.placeFunc(true));
Block.registerDropFunction(BlockID.thermalMachineFurnace, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachineFurnace, MachineRegistry.nameOverrideFunc);