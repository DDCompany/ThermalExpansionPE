class MachineRegistry {
    static invContainer: UI.Container = new UI.Container();

    static define(id: number, tile: any) {
        RF_WIRE_GROUP.add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, tile);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    }

    static updateEnergyBar(tile: any, isCreative: boolean) {
        if (tile.data._refreshUI) {
            let content = tile.container.getGuiScreen();
            if (content && (content = content.getWindowForTab(6).getContent())) {
                content.elements["energyScale"].bitmap = isCreative ? "bars.rf_creative" : "bars.rf_full";
                tile.data._refreshUI = false;
            }
        }

        tile.container.setScale("energyScale", isCreative ? 1 : tile.data.energy / tile.getEnergyStorage());
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
        if (MachineRegistry.installUpgradeFunc(tier, tile)) {
            tile.data.basePower = 20 * POWER_SCALING[tier] / 100;
            return true;
        }

        return false;
    }

    static placeFunc(rotatable: boolean): (coords: Callback.ItemUseCoordinates, item: ItemInstance) => void {
        return function (coords, item) {
            Game.prevent();
            let x = coords.relative.x;
            let y = coords.relative.y;
            let z = coords.relative.z;
            if (GenerationUtils.isTransparentBlock(World.getBlockID(x, y, z))) {
                let data = item.data;

                if (rotatable) {
                    //Скопировано из CoreEngine
                    let c;
                    for (c = Math.floor((getYaw(Player.get()) - 45) / 90); 0 > c;)
                        c += 4;
                    for (; 3 < c;)
                        c -= 4;
                    c = {
                        0: 2,
                        1: 0,
                        2: 3,
                        3: 1
                    }[c];
                    data = 4 * Math.floor(item.data / 4) + c;
                }

                World.setBlock(x, y, z, item.id, data);
                let tile = World.addTileEntity(x, y, z) as any;
                if (item.extra) {
                    tile.data = JSON.parse((item.extra as ItemExtra).getString("data"));
                    tile.container.slots = JSON.parse((item.extra as ItemExtra).getString("slots"));
                }
            }
        };
    }

    static nameOverrideFunc(item: ItemInstance, name: string): string {
        let extra = Player.getCarriedItem().extra;

        if (extra) {
            return name + "\n§7Configured";
        }
        return name;
    }
}