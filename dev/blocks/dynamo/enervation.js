DynamoHelper.registerDynamo("dynamoEnervation", "Enervation dynamo", "dynamo_enervation", {
   defaultValues: {
       energy: 0
    },
	isGenerator: function() {
		return true;
	},
    tick: function () {
        this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot"), Math.min(150, this.getEnergyStorage() - this.data.energy), 2);
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());
        this.container.validateAll();
    },
    getEnergyStorage: function () {
      return 10000;
    },
    getGuiScreen: function () {
        return new UI.StandartWindow({standart: {header: {text: {
        text: Translation.translate("Enervation dynamo")}},
        inventory: {standart: true},background: {standart: true}},
    drawing: [{type: "bitmap", x: 501, y: 145, direction: 1, bitmap: "rf_scale", scale: 3.2}],
    elements: {
        "rfScale": {type: "scale", x: 501, y: 145, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
        "slot": {type: "slot", x: 421, y: 185}}});
    }
});