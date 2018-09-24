const MagmaticManager = {
    fuels: {},

    addFuel: function (liquid, energy) {
        this.fuels[liquid] = energy;
    },

    getEnergyFor100mb: function (liquid) {
        return this.fuels[liquid] || 0;
    }

};

MagmaticManager.addFuel("lava", 18000);