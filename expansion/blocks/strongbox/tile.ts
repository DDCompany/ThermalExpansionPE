MachineRegistry.define(BlockID.thermalStrongbox, MachineTileEntity({
    defaultValues: {
        item: {
            id: 0,
            data: 0
        }
    },

    tick: function () {
        if (this.data.tier === 5) {
            let item = this.data.item;
            if (item.id)
                this.container.setSlot("slot", item.id, Item.getMaxStack(item.id), item.data);
        }
    },

    installUpgrade: function (tier) {
        if (tier === 5) {
            for (let i in this.container.slots)
                this.container.clearSlot(i);
        }

        return MachineRegistry.installUpgradeFunc(tier, this);
    },

    refreshModel: function () {
        let block = World.getBlock(this.x, this.y, this.z);
        ModelHelper.mapStrongbox(this.x, this.y, this.z, block.id, block.data, this.data.tier);
    },

    getGuiScreen: function () {
        return StrongboxUI[this.data.tier];
    }
}, true));

Block.registerDropFunction(BlockID.thermalStrongbox, function () {
    return [];
});
Item.registerNameOverrideFunction(BlockID.thermalStrongbox, function (item, name) {
    let extra = Player.getCarriedItem().extra as ItemExtra;

    if (extra) {
        let tier = JSON.parse(extra.getString("data")).tier;
        let slots = JSON.parse(extra.getString("slots"));
        let result = name + "\n" + MinecraftColor.YELLOW + "Tier: " + MinecraftColor.AQUA + TIERS_NAME[tier] + MinecraftColor.YELLOW;
        let amount = 5;

        for (let i in slots) {
            let slot = slots[i];
            if (slot.id && slot.count > 0) {
                result += "\n" + Item.getName(slot.id, slot.data);

                if (--amount <= 0)
                    break;
            }
        }

        if (amount === 5)
            return result + "\nEmpty";

        if (amount <= 0)
            result += "\nAnd more...";

        return result;
    }

    return name + MinecraftColor.YELLOW + "\nEmpty";
});