class MachineRegistry {
    static machines: { [key: number]: boolean } = {};
    static invContainer: UI.Container = new UI.Container();
    static invWindow: UI.Window;

    static init() {
        const WINDOW_PADDING = 30;
        const WINDOW_WIDTH = 250;
        const SLOT_SIZE = 250;

        const IN_ROW = Math.ceil(1000 / SLOT_SIZE);
        const ROWS = Math.ceil(36 / IN_ROW);

        this.invWindow = new UI.Window({
            location: {
                x: 120,
                y: WINDOW_PADDING,
                width: WINDOW_WIDTH,
                height: UI.getScreenHeight() - WINDOW_PADDING * 2
            },

            drawing: [],
            elements: {}
        });
        this.invWindow.getLocation().setScroll(0, this.invWindow.getLocation().windowToGlobal(ROWS * SLOT_SIZE));
        this.invWindow.setDynamic(false);
        this.invWindow.setInventoryNeeded(true);

        for (let i = 0; i < 36; i++) {
            this.invWindow.getContent().elements["__invSlot" + i] = {
                type: "invSlot",
                x: i % IN_ROW * SLOT_SIZE,
                y: Math.floor(i / IN_ROW) * SLOT_SIZE,
                size: SLOT_SIZE,
                index: i
            };
        }
    }

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

MachineRegistry.init();

Callback.addCallback("ItemUse", function (coords, item) {
    let tile = World.getTileEntity(coords.relative.x, coords.relative.y, coords.relative.z) as any;
    if (tile && MachineRegistry.isMachine(tile.blockID) && tile.onMachinePlaced) {
        tile.onMachinePlaced(item);
    }
});