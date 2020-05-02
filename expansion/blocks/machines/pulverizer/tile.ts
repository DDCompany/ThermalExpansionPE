MachineRegistry.define(BlockID.thermalMachinePulverizer, BaseMachineTile({
    start(this: IMachineBase<IMachineBaseTile>): boolean {
        let source = this.container.getSlot("slotSource");
        if (!source.id) {
            return false;
        }

        let recipe = PulverizerRecipes.getResult(source.id, source.data);
        if (recipe && ContainerHelper.canPutInSlot(recipe.result, this.container.getSlot("slotResult"))) {
            let second = recipe.second;
            if (second && !ContainerHelper.canPutInSlot(second, this.container.getSlot("slotSecond"))) {
                return false;
            }

            this.data.progress = 1;
            this.data.progressMax = recipe.energy || 2000;
            return true;
        }

        return false;
    },

    finish(this: IMachineBase<IMachineBaseTile>) {
        let source = this.container.getSlot("slotSource");
        let recipe = PulverizerRecipes.getResult(source.id, source.data);

        ContainerHelper.putInSlot(recipe.result, this.container.getSlot("slotResult"));
        source.count--;
        this.container.validateSlot("slotSource");

        let second = recipe.second;
        if (second && (second.chance <= 0 || Math.random() < second.chance)) {
            ContainerHelper.putInSlot(second, this.container.getSlot("slotSecond"));
        }
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [
                ["thermal_machine", 0],
                ["thermal_machine", 1],
                ["thermal_machine", 2],
                ["thermal_machine_pulverizer" + (this.data.progress > 0 ? "_active" : ""), 0],
                ["thermal_machine", 2],
                ["thermal_machine", 2]
            ]);
    },

    getGuiScreen: function () {
        return pulverizerUI;
    }
}));

Block.registerDropFunction(BlockID.thermalMachinePulverizer, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachinePulverizer, MachineRegistry.nameOverrideFunc);