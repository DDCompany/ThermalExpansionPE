class MachineRegistry {
    static machines: { [key: number]: boolean } = {};
    static invContainer: UI.Container = new UI.Container();

    static define(id: number, tile: any) {
        RF_WIRE_GROUP.add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, tile);
        EnergyTileRegistry.addEnergyTypeForId(id, RF);
        this.machines[id] = true;
    }

    static calcEnergy(basePower: number, energy: number) {
        let maxPowerLevel = 9 * basePower * 100;

        if (energy >= maxPowerLevel)
            return basePower;

        if (energy < basePower * 100)
            return Math.min(basePower / 10, energy);

        return energy / (maxPowerLevel / basePower);
    }

    static installUpgradeFunc(tier: Tier, tile: any): boolean {
        if (tier < Tier.BASIC || tier > Tier.CREATIVE)
            return false;

        tile.data.tier = tier;
        tile.refreshModel();
        return true;
    }

    static installUpgradeForPoweredFunc(tier: Tier, tile: any): boolean {
        if (tier < Tier.CREATIVE && MachineRegistry.installUpgradeFunc(tier, tile)) {
            tile.data.basePower = 20 * POWER_SCALING[tier] / 100;
            return true;
        }

        return false;
    }

    static isMachine(id: number): boolean {
        return this.machines[id] === true;
    }

    static nameOverrideFunc(item: ItemInstance, name: string): string {
        let extra = Player.getCarriedItem().extra;

        if (extra) {
            return name + "\n§7Configured";
        }
        return name;
    }
}

Callback.addCallback("ItemUse", function (coords, item) {
    let tile = World.getTileEntity(coords.relative.x, coords.relative.y, coords.relative.z) as any;
    if (tile && MachineRegistry.isMachine(tile.blockID) && tile.onMachinePlaced) {
        tile.onMachinePlaced(item);
    }
});