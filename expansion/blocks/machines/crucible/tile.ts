MachineRegistry.define(BlockID.thermalMachineCrucible, BaseMachineTile({
    init: function () {
        this.liquidStorage.setLimit(null, 10);
    },

    start(this: IMachineBaseTile<IMachineBaseData>): boolean {
        let source = this.container.getSlot("slotSource");
        if (!source.id) {
            return false;
        }

        let recipe = crucibleManager.getRecipe(source.id, source.data, source.count);
        if (recipe) {
            let fluid = this.liquidStorage.getLiquidStored();
            if (!fluid || (fluid === recipe.fluid && this.liquidStorage.getAmount(fluid) + recipe.fluidAmount <= 10)) {
                this.data.progress = 1;
                this.data.progressMax = recipe.energy || 1000;
                return true;
            }
        }

        return false;
    },

    finish(this: IMachineBaseTile<IMachineBaseData>) {
        let source = this.container.getSlot("slotSource");
        let recipe = crucibleManager.getRecipe(source.id, source.data, source.count);

        this.liquidStorage.addLiquid(recipe.fluid, recipe.fluidAmount);
        source.count--;
        this.container.validateSlot("slotSource");
    },

    postTick(this: IMachineBaseTile<IMachineBaseData>) {
        this.liquidStorage.updateUiScale("fluidScale", this.liquidStorage.getLiquidStored());
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        let stored = this.liquidStorage.getLiquidStored();

        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [
                ["thermal_machine", 0],
                ["thermal_machine", 1],
                ["thermal_machine", 2],
                ["thermal_machine_crucible" + (stored ? "_" + stored : ""), 0],
                ["thermal_machine", 2],
                ["thermal_machine", 2]
            ]);
    },

    getGuiScreen: function () {
        return crucibleUI;
    }
}));

Block.registerDropFunction(BlockID.thermalMachineCrucible, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachineCrucible, MachineRegistry.nameOverrideFunc);