const MachineRegistry = {
    invContainer: new UI.Container(),

    define: function (id, tile) {
        RF_WIRE_GROUP.add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, tile);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },

    updateEnergyBar: function (tile, isCreative) {
        if (tile.data._refreshUI) {
            let content = tile.container.getGuiScreen();
            if (content && (content = content.getWindowForTab(6).getContent())) {
                content.elements["energyScale"].bitmap = isCreative ? "bars.rf_creative" : "bars.rf_full";
                tile.data._refreshUI = false;
            }
        }

        tile.container.setScale("energyScale", isCreative ? 1 : tile.data.energy / tile.getEnergyStorage());
    },

    calcEnergy: function (basePower, energy) {
        let maxPowerLevel = 9 * basePower * 100;

        if (energy >= maxPowerLevel)
            return basePower;

        if (energy < basePower * 100)
            return Math.min(basePower / 10, energy);

        return energy / (maxPowerLevel / basePower);
    },

    installUpgradeFunc: function (tier, tile) {
        if (tier < 1 || tier > 5)
            return false;

        tile.data.tier = tier;
        tile.refreshModel();
        return true;
    },

    installUpgradeForPoweredFunc: function (tier, tile) {
        if (MachineRegistry.installUpgradeFunc(tier, tile)) {
            tile.data.basePower = 20 * POWER_SCALING[tier] / 100;
            return true;
        }

        return false;
    },

    placeFunc: function (rotatable) {
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
                    data = 4 * parseInt(item.data / 4) + c;
                }

                World.setBlock(x, y, z, item.id, data);
                let tile = World.addTileEntity(x, y, z);
                if (item.extra) {
                    tile.data = JSON.parse(item.extra.getString("data"));
                    tile.container.slots = JSON.parse(item.extra.getString("slots"));
                }
            }
        };
    },

    nameOverrideFunc: function (item, name) {
        let extra = Player.getCarriedItem().extra;

        if (extra) {
            return name + "\n§7Configured";
        }
        return name;
    }
};