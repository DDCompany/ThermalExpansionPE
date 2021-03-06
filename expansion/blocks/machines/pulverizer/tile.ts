MachineRegistry.define(BlockID.thermalMachinePulverizer, StandardMachineTile({
    manager: pulverizerManager,

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