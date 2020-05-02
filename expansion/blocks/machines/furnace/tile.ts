MachineRegistry.define(BlockID.thermalMachineFurnace, BaseMachineTile({
    start(this: IMachineBase<IMachineBaseTile>): boolean {
        let source = this.container.getSlot("slotSource");
        if (!source.id) {
            return false;
        }

        let result = Recipes.getFurnaceRecipeResult(source.id, source.data, "iron");
        if (result && ContainerHelper.canPutInSlot(result, this.container.getSlot("slotResult"))) {
            this.data.progress = 1;
            this.data.progressMax = 2000;
            return true;
        }

        return false;
    },

    finish(this: IMachineBase<IMachineBaseTile>) {
        let source = this.container.getSlot("slotSource");
        let result = Recipes.getFurnaceRecipeResult(source.id, source.data, "iron");
        if (ContainerHelper.putInSlot(result, this.container.getSlot("slotResult"))) {
            source.count--;
            this.container.validateSlot("slotSource");
        }
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [
                ["thermal_machine", 0],
                ["thermal_machine", 1],
                ["thermal_machine", 2],
                ["thermal_machine_furnace" + (this.data.progress > 0 ? "_active" : ""), 0],
                ["thermal_machine", 2],
                ["thermal_machine", 2]
            ]);
    },

    getGuiScreen: function () {
        return furnaceUI;
    }
}));

Block.registerDropFunction(BlockID.thermalMachineFurnace, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachineFurnace, MachineRegistry.nameOverrideFunc);