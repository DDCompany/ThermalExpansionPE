var dynamoMagmaticGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Magmatic dynamo")
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
    {type: "bitmap", x: 501, y: 145, direction: 1, bitmap: "rf_scale", scale: 3.2},
	{type: "bitmap", x: 801, y: 125, direction: 2, bitmap: "fluid_scale_short", scale: 3.2}
    ],
    elements: {
        "rfScale": {type: "scale", x: 501, y: 145, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "liquidScale": {type: "scale", x: 801, y: 125, direction: 2, bitmap: "fluid_scale_short", scale: 3.2},
		"lavaScale": {type: "scale", x: 801, y: 125, direction: 1, bitmap: "fluid_scale_short", scale: 3.2},
        "slot1": {type: "slot", x: 651, y: 125},
        "slot2": {type: "slot", x: 651, y: 250}
    }
});
DynamoHelper.registerDynamo("dynamoMagmatic", "Magmatic dynamo", "dynamo_magmatic" , {
	 defaultValues: {
       energy: 0
    },
	
	init: function () {
      this.liquidStorage.setLimit("lava", 4);
    },
	
	isGenerator: function() {
		return true;
	},
	
  tick: function () {

        if(World.getThreadTime() % 20 === 0){
            ContainerHelper.fluidContainerEmpty(["lava"], this, {full: "slot1", empty: "slot2"});
        }

        if(this.liquidStorage.getAmount("lava", 0.0001) > 0){
            var energy = DynamoHelper.calcEnergy(this);
            this.data.energy += Math.min(this.getEnergyStorage() - this.data.energy, energy);
            this.liquidStorage.getLiquid("lava", (energy / 1000) / 1);
        }

        this.liquidStorage.updateUiScale("lavaScale", "lava");
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    getEnergyStorage: function () {
      return 10000;
    },
	  
    getGuiScreen: function () {
        return dynamoMagmaticGUI;
    }
	
});