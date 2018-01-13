var dynamoSteamGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Steam dynamo")
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 340, y: 60, bitmap: "dynamo_steam", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 510, y: 95, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "steamScale": {type: "scale", x: 343, y: 63, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},
        "waterScale": {type: "scale", x: 653, y: 63, direction: 1, bitmap: "fluid_scale", scale: 3.2},
        "fuelScale": {type: "scale", x: 580, y: 155, direction: 1, bitmap: "fire_scale", scale: 3.2},

        "slotFuel": {type: "slot", x: 426, y: 143},

        "slotWaterContainer": {type: "slot", x: 720, y: 70},
        "slotWaterContainerEmpty": {type: "slot", x: 720, y: 185}


    }
});

DynamoHelper.registerDynamo("dynamoSteam", "Steam dynamo", "dynamo_steam", {

    defaultValues: {
        fuelMax: 0,
        fuelCurrent: 0,
        energy: 0
    },

    init: function () {
        this.liquidStorage.setLimit("water", 10);
        this.liquidStorage.setLimit("steam", 4);
    },

    tick: function () {

        var slotFuel = this.container.getSlot("slotFuel");
        if (World.getThreadTime() % 20 === 0) {
            ContainerHelper.fluidContainerEmpty(["water"], this, {
                full: "slotWaterContainer",
                empty: "slotWaterContainerEmpty"
            });
        }


        if (this.data.fuelCurrent > 0) {
            var energy = DynamoHelper.calcEnergy(this);
            this.data.fuelCurrent -= energy;
            if (this.liquidStorage.getAmount("water") >= energy / 1000) {
                this.liquidStorage.getLiquid("water", energy / 1000);
                this.liquidStorage.addLiquid("steam", Math.min(energy / 1000, this.liquidStorage.getLimit("steam") - this.liquidStorage.getAmount("steam")));
            }
        } else if (slotFuel.id && this.liquidStorage.getAmount("steam") < this.liquidStorage.getLimit("steam")) {
            var energy_s = Recipes.getFuelBurnDuration(slotFuel.id, slotFuel.data);
            if (energy_s) {

                this.data.fuelMax = energy_s;
                this.data.fuelCurrent = energy_s;

                slotFuel.count--;
            }
        }

        if (this.liquidStorage.getAmount("steam") >= 3) {
            var energy = DynamoHelper.calcEnergy(this);
            this.data.energy += Math.min(this.getEnergyStorage() - this.data.energy, energy);
            this.liquidStorage.getLiquid("steam", (energy / 1000) / 2);
        }

        this.liquidStorage.updateUiScale("steamScale", "steam");
        this.liquidStorage.updateUiScale("waterScale", "water");
        this.container.setScale("fuelScale", this.data.fuelCurrent / this.data.fuelMax);
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
        return 10000;
    },

    getGuiScreen: function () {
        return dynamoSteamGUI;
    }

});