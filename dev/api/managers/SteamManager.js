const SteamManager = {
    fuels: {},

    addFuel: function (id, data, energy) {
        this.fuels[id + ":" + data] = energy;
    },

    getEnergy: function (id, data) {
        return this.fuels[id + ":" + data] || Recipes.getFuelBurnDuration(id, data) * 10;
    }

};

SteamManager.addFuel(263, 0, 32000);
SteamManager.addFuel(263, 1, 24000);