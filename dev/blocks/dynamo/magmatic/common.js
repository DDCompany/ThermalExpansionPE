DynamoHelper.registerDynamo("dynamoMagmatic", "Magmatic Dynamo", "dynamo_magmatic" , {
    defaultValues: {
        energy: 0,
        rotate: 0,
        isActive: false,
        fuelRF: 0
    },

    init: function () {
        this.liquidStorage.setLimit("lava", 4);
    },

    isGenerator: function() {
        return true;
    },

    tick: function () {

        if(!this.modelRefreshed){
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
            this.modelRefreshed = true;
        }

        if(World.getThreadTime() % 20 === 0){
            ContainerHelper.fluidContainerEmpty(["lava"], this, {full: "slot1", empty: "slot2"});
        }

        if(this.data.isActive){
            let energy = Math.min(this.data.fuelRF, DynamoHelper.calcEnergy(this, 40));
            this.data.energy = Math.min(this.data.energy + energy, this.getEnergyStorage());
            this.data.fuelRF -= energy;

            if(this.data.fuelRF <= 0){
                if(this.canStart())
                    this.processStart();
                else {
                    this.data.isActive = false;
                    DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
                }
            }
        }else if(World.getThreadTime() % 32 === 0 && this.canStart()){
            this.processStart();
            this.data.isActive = true;
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
        }

        this.liquidStorage.updateUiScale("lavaScale", "lava");
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    canStart: function () {
        return this.liquidStorage.getAmount("lava") >= 0.1;
    },

    processStart: function () {
        let stored = this.liquidStorage.getLiquidStored();
        this.data.fuelRF += MagmaticManager.getEnergyFor100mb(stored);
        this.liquidStorage.getLiquid(stored, 0.1);
    },

    getEnergyStorage: function () {
        return 10000;
    },

    getGuiScreen: function () {
        return dynamoMagmaticGUI;
    },

    onWrenched: function () {
        this.data.rotate++;
        if(this.data.rotate > 5)
            this.data.rotate = 0;

        DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoMagmatic"], "magmatic", this.data.isActive, this.data.rotate);
    }

});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.dynamoMagmatic, count: 1, data: 0}, [
        " 1 ",
        "323",
        "545"
    ], ['1', ItemID.redstoneTransmissionCoil, 0, '2', ItemID.gearInvar, 0, '3', 265, 0, "4", 331, 0, '5', ItemID.ingotInvar, 0]);
});