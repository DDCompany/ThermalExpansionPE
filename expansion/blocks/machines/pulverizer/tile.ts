MachineRegistry.define(BlockID.thermalMachinePulverizer, MachineTileEntity<IMachineBaseTile>({
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
                let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);
                let slotSecond = this.container.getSlot("slotSecond");
                if (ContainerHelper.canPutInSlot(recipe.second, slotSecond) &&
                    ContainerHelper.putInSlot(recipe.result, this.container.getSlot("slotResult"))) {

                    let second = recipe.second;
                    if (second && (!second.chance || Math.random() < second.chance)) {
                        slotSecond.id = second.id;
                        slotSecond.data = second.data || 0;
                        slotSecond.count += second.count || 1;
                    }

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
        } else if (slotSource.id) {
            let recipe = PulverizerRecipes.getResult(slotSource.id, slotSource.data);

            if (recipe) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 2000;
                this.refreshModel();
            }
        }

        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
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

Block.registerDropFunction(BlockID.thermalMachinePulverizer, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachinePulverizer, MachineRegistry.nameOverrideFunc);