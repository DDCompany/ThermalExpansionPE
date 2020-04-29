interface IMachineTile {
    tier?: Tier,
    energy?: number,

    [key: string]: any
}

interface IMachineBaseTile extends IMachineTile {
    progress: number,
    progressMax: number,
    basePower: number
}

interface IMachineTileEntity<T> {
    defaultValues: T
    data?: T

    installUpgrade?: (tier: Tier) => boolean

    energyTick?: (type: any, src: any) => void

    getEnergyStorage?: () => number

    refreshModel?: () => void

    [key: string]: any
}

function MachineTileEntity<T extends IMachineTile>(prototype: IMachineTileEntity<T>, isNoPowerMachine: boolean = false): IMachineTileEntity<T> {
    // @ts-ignore
    prototype.defaultValues = prototype.defaultValues ?? {};
    prototype.defaultValues.tier = 0;

    if (!prototype.click) {
        prototype.click = foundationAPI.installUpgradeFunc;
    }

    if (!prototype.installUpgrade) {
        if (isNoPowerMachine) {
            prototype.installUpgrade = function (tier) {
                return MachineRegistry.installUpgradeFunc(tier, this);
            };
        } else {
            prototype.installUpgrade = function (tier) {
                return MachineRegistry.installUpgradeForPoweredFunc(tier, this);
            };
        }
    }

    if (!isNoPowerMachine) {
        prototype.defaultValues.energy = 0;

        if (!prototype.energyReceive) {
            prototype.energyReceive = function (type, amount) {
                if (this.data.tier < 5) {
                    const add = Math.min(this.data.basePower * 4, this.getEnergyStorage() - this.data.energy, amount);
                    this.data.energy += add;
                    return add;
                }

                return 0;
            };
        }

        if (!prototype.getEnergyStorage) {
            prototype.getEnergyStorage = function () {
                return this.data.basePower * 1000;
            }
        }
    }

    if (!prototype.onMachinePlaced) {
        prototype.onMachinePlaced = function (item: ItemInstance) {
            let extra = item.extra as ItemExtra;
            if (extra) {
                this.data = JSON.parse(extra.getString("data"));
                this.container.slots = JSON.parse(extra.getString("slots"));
            }
        }
    }

    if (!prototype.refreshModel) {
        prototype.refreshModel = function () {
        };
    }

    if (!prototype.destroyBlock) {
        prototype.destroyBlock = function (coords) {
            let extra = new ItemExtraData();
            extra.putString("data", JSON.stringify(this.data));
            extra.putString("slots", JSON.stringify(this.container.slots));

            let slots = this.container.slots;
            for (let i in slots)
                this.container.clearSlot(i);

            nativeDropFunc(coords.x, coords.y, coords.z, 0, World.getBlockID(coords.x, coords.y, coords.z), 1, 0, extra);
        };
    }

    prototype.___created = prototype.created;
    prototype.created = function () {
        if (this.___created)
            this.___created();

        this.refreshModel();
    };

    prototype.___init = prototype.init;
    prototype.init = function () {
        if (this.___init)
            this.___init();

        this.refreshModel();
    };

    return prototype;
}