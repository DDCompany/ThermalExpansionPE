interface ICellTile extends IMachineTile {
    transferIn: number,
    transferOut: number,
    heartIndex: number
}

MachineRegistry.define(BlockID.thermalEnergyCell, MachineTileEntity<ICellTile>({
    defaultValues: {
        transferIn: 1000,
        transferOut: 1000,
        heartIndex: 0,
        // refreshUIFlag: false
    },
    energyByTier: [2000000, 8000000, 18000000, 32000000, 50000000, 100],
    transferByTier: [1000, 4000, 9000, 16000, 25000, 25000],

    tick: function () {
        let window = energyCellUI.getWindowForTab(6);
        let isCreative = this.data.tier >= 5;

        if (this.container.isOpened()) {
            let content = window.getContent();
            content.elements["textLeft"].text = this.data.transferIn + "";
            content.elements["textRight"].text = this.data.transferOut + "";
            content.elements["textEnergy"].text = parseInt(this.data.energy) + "/" + this.getEnergyStorage() + "RF (" + Math.floor(this.data.energy / this.getEnergyStorage() * 100) + "%)";
            content.elements["textEnergy"].x = (1000 - UIHelper.getFontWidth(this.container.getElement("textEnergy"))) / 2;

            if (this.data.transferIn >= 10000)
                content.elements["textLeft"].x = 342;
            else if (this.data.transferIn < 1000)
                content.elements["textLeft"].x = 367;
            else
                content.elements["textLeft"].x = 352;

            if (this.data.transferOut >= 10000)
                content.elements["textRight"].x = 562;
            else if (this.data.transferOut < 1000)
                content.elements["textRight"].x = 587;
            else
                content.elements["textRight"].x = 572;
        }

        let index = isCreative ? 9 : this.data.energy / this.getEnergyStorage() * 8;
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
        let transfer = this.transferByTier[tier];

        if (tier < 5) {
            this.data.energy += src.storage(Math.min(transfer, this.getEnergyStorage() - this.data.energy),
                Math.min(transfer, this.data.energy));
        } else this.data.energy += src.storage(transfer, transfer);
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