MachineRegistry.TileEntity = function (obj, isNoPowerMachine) {
    if (!obj.defaultValues)
        obj.defaultValues = {};

    obj.defaultValues.tier = 0;

    if (!obj.installUpgrade) {
        if (isNoPowerMachine) {
            obj.installUpgrade = function (tier) {
                return MachineRegistry.installUpgradeFunc(tier, this);
            };
        } else {
            obj.installUpgrade = function (tier) {
                return MachineRegistry.installUpgradeForPoweredFunc(tier, this);
            };
        }
    }

    if (!isNoPowerMachine) {
        obj.defaultValues.energy = 0;

        if (!obj.energyTick) {
            obj.energyTick = function (type, src) {
                if (this.data.tier < 5)
                    this.data.energy += src.get(Math.min(this.data.basePower * 4, this.getEnergyStorage() - this.data.energy));
            };
        }

        if (!obj.getEnergyStorage) {
            obj.getEnergyStorage = function () {
                return this.data.basePower * 1000;
            }
        }
    }

    if (!obj.refreshModel) {
        obj.refreshModel = function () {
        };
    }

    if (!obj.destroyBlock) {
        obj.destroyBlock = function (coords) {
            let extra = new ItemExtraData();
            extra.putString("data", JSON.stringify(this.data));
            extra.putString("slots", JSON.stringify(this.container.slots));

            let slots = this.container.slots;
            for (let i in slots)
                this.container.clearSlot(i);

            nativeDropFunc(coords.x, coords.y, coords.z, 0, World.getBlockID(coords.x, coords.y, coords.z), 1, 0, extra);
        };
    }

    obj.___created = obj.created;
    obj.created = function () {
        if (this.___created)
            this.___created();

        this.refreshModel();
    };

    obj.___init = obj.init;
    obj.init = function () {
        if (this.___init)
            this.___init();

        this.refreshModel();
    };

    return obj;
};