var MachineRegistry = {
    machines: {},

    register: function (id, prototype) {
        this.machines[id] = prototype;

        if (prototype.defaultValues) {
            prototype.defaultValues.energy = 0;
        } else {
            prototype.defaultValues = {
                energy: 0
            };
        }

        if (!prototype.getEnergyStorage) {
            prototype.getEnergyStorage = function () {
                return 0;
            }
        }

        if (!prototype.energyTick) {
            prototype.energyTick = function (type, src) {
                this.data.energy += src.get(Math.min(this.getEnergyStorage() - this.data.energy, this.getMaxEnergyReceive ? this.getMaxEnergyReceive() : 200));
            };
        }


        ICRender.getGroup("rf-wire").add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, prototype);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * (basePower * 1000) / 10;
        let energy = tile.data.energy;
        if(energy > maxPowerLevel){
            return basePower;
        }
        if(energy < maxPowerLevel / 10){
            return Math.min(basePower / 10, energy);
        }

        return energy / (maxPowerLevel / basePower);
    }

};