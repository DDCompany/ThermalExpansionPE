const MagmaticManager = {
    fuels: {},

    addFuel: function (liquid, energy) {
        this.fuels[liquid] = energy;
    },

    getEnergyFor100mb: function (liquid) {
        return this.fuels[liquid] || 0;
    },

    loadFrom: function (path) {
        let content = FileTools.ReadText(path);

        if (content) {
            let parsed = JSON.parse(content).fuels;

            if (!parsed) {
                Logger.Log("Error loading file " + path, "ERROR");
                return;
            }

            for (let index in parsed) {
                let fuel = parsed[index];

                if (!fuel.liquid)
                    continue;

                this.addFuel(fuel.liquid, fuel.energy || 1000);
            }

            return;
        }

        Logger.Log("Error loading file " + path, "ERROR");
    }
};

MagmaticManager.loadFrom(__dir__ + "json/default/magmatic_engine.json");
