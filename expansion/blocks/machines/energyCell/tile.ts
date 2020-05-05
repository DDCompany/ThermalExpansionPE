interface ICellTile extends IMachineData {
    transferIn: number,
    transferOut: number,
    heartIndex: number
}

MachineRegistry.define(BlockID.thermalEnergyCell, MachineTileEntity<ICellTile>({
    defaultValues: {
        transferIn: 1000,
        transferOut: 1000,
        heartIndex: 0
    },
    energyByTier: [2000000, 8000000, 18000000, 32000000, 50000000, 100],
    transferByTier: [1000, 4000, 9000, 16000, 25000, 25000],

    tick: function () {
        let isCreative = this.data.tier >= 5;

        if (this.container.isOpened()) {
            let window = energyCellUI.getWindowForTab(6);
            let content = window.getContent();
            content.elements["textLeft"].text = this.data.transferIn + "";
            content.elements["textRight"].text = this.data.transferOut + "";
            content.elements["textEnergy"].text = `${parseInt(this.data.energy)}/${this.getEnergyStorage()}RF (${Math.floor(this.data.energy / this.getEnergyStorage() * 100)}%)`;
        }

        let index = isCreative ? 9 : Math.round(this.data.energy / this.getEnergyStorage() * 8);
        if (this.data.heartIndex !== index) {
            this.data.heartIndex = index;
            this.refreshModel();
        }

        if (isCreative) {
            this.data.energy = this.getEnergyStorage();
            this.container.setScale("energyScale", 1);
        } else this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    },

    energyTick: function (type, src) {
        let tier = this.data.tier;
        let transfer = this.data.transferOut;

        if (tier < 5) {
            let out = Math.min(transfer, this.data.energy);
            if (out > 0) {
                this.data.energy += src.add(out) - out;
            }
        } else src.add(transfer);
    },

    energyReceive: function (type, amount) {
        const add = Math.min(this.data.transferIn, this.getEnergyStorage() - this.data.energy, amount);
        this.data.energy += add;
        return add;
    },

    canReceiveEnergy: function () {
        return true;
    },

    isEnergySource: function () {
        return true;
    },

    installUpgrade: function (tier) {
        if (tier < 1 || tier > 5)
            return false;

        let prevTransfer = this.transferByTier[this.data.tier];
        let transfer = this.transferByTier[tier];

        if (this.data.transferIn === prevTransfer)
            this.data.transferIn = transfer;

        if (this.data.transferOut === prevTransfer)
            this.data.transferOut = transfer;

        this.data.tier = tier;
        this.refreshModel();
        return true;
    },

    refreshModel: function () {
        ModelHelper.mapEnergyCell(this.x, this.y, this.z, BlockID.thermalEnergyCell, this.data.tier, this.data.heartIndex);
    },

    getEnergyStorage: function () {
        return this.energyByTier[this.data.tier];
    },

    getGuiScreen: function () {
        return energyCellUI;
    }
}));