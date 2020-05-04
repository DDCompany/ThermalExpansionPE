MachineRegistry.define(BlockID.thermalMachineSawmill, StandardMachineTile({
    manager: sawmillManager,

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapMachine(this.x, this.y, this.z, block.id, block.data, this.data.tier,
            [
                ["thermal_machine", 0],
                ["thermal_machine", 1],
                ["thermal_machine", 2],
                ["thermal_machine_sawmill" + (this.data.progress > 0 ? "_active" : ""), 0],
                ["thermal_machine", 2],
                ["thermal_machine", 2]
            ]);
    },

    getGuiScreen: function () {
        return sawmillUI;
    }
}));

Block.registerDropFunction(BlockID.thermalMachineSawmill, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalMachineSawmill, MachineRegistry.nameOverrideFunc);