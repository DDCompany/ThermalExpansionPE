var SteamManager = {
    fuels: {},

    addFuel: function (id, data, energy) {
        this.fuels[id + ":" + data] = energy;
    },

    getEnergy: function (id, data) {
        return this.fuels[id + ":" + data];
    }

};

SteamManager.addFuel(263, 0, 32000);