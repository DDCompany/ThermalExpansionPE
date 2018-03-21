DynamoHelper.registerDynamo("dynamoSteam", "Steam Dynamo", "dynamo_steam", {

    defaultValues: {
        fuelMax: 0,
        fuelRF: 0,
        waterRF: 0,
        energy: 0,
        rotate: 0,
        isActive: false
    },

    init: function () {
        this.liquidStorage.setLimit("water", 10);
        this.liquidStorage.setLimit("steam", 4);
    },

    tick: function () {

        if(!this.modelRefreshed){
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
            this.modelRefreshed = true;
        }

        if (World.getThreadTime() % 20 === 0) {
            ContainerHelper.fluidContainerEmpty(["water"], this, {
                full: "slotWaterContainer",
                empty: "slotWaterContainerEmpty"
            });
        }

        if(this.data.isActive){
            let energy = Math.min(this.data.fuelRF, DynamoHelper.calcEnergy(this, 40));
            let energy2 = energy / 1000;

            if(this.liquidStorage.getAmount("steam") > 3){
                this.data.energy = Math.min(this.data.energy + energy, this.getEnergyStorage());
                this.liquidStorage.getLiquid("steam", energy2 / 2);
            }

            if(this.data.fuelRF){
                this.data.fuelRF -= energy;
                this.data.waterRF -= energy;
                this.liquidStorage.addLiquid("steam", energy2);
            }

            if(this.data.fuelRF <= 0 || this.data.waterRF <= 0){
                if(this.canStart())
                    this.processStart();
                else {
                    this.data.isActive = false;
                    DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
                }
            }
        }else if(World.getThreadTime() % 32 === 0 && this.canStart()){
            this.processStart();
            this.data.isActive = true;
            DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
        }

        this.liquidStorage.updateUiScale("steamScale", "steam");
        this.liquidStorage.updateUiScale("waterScale", "water");
        this.container.setScale("fuelScale", this.data.fuelRF / this.data.fuelMax);
        this.container.setScale("rfScale", this.data.energy / this.getEnergyStorage());

        this.container.validateAll();
    },

    canStart: function () {
        let slot = this.container.getSlot("slotFuel");
        let fuel = SteamManager.getEnergy(slot.id, slot.data);

        return this.liquidStorage.getAmount("steam") > 0.04 || (this.data.waterRF > 0 || this.liquidStorage.getAmount("water") > 0.2) && (this.data.fuelRF > 0 || fuel > 0);
    },

    processStart: function () {
        if(this.data.fuelRF <= 0){
            let slot = this.container.getSlot("slotFuel");
            this.data.fuelMax = this.data.fuelRF = SteamManager.getEnergy(slot.id, slot.data);
            slot.count--;
        }

        if(this.data.waterRF <= 0){
            this.data.waterRF += 40000;
            this.liquidStorage.getLiquid("water", 0.2);
        }
    },

    getEnergyStorage: function () {
        return 40000;
    },

    getGuiScreen: function () {
        return dynamoSteamGUI;
    },

    onWrenched: function () {
        this.data.rotate++;
        if(this.data.rotate > 5)
            this.data.rotate = 0;

        DynamoHelper.mapAtCoords(this.x, this.y, this.z, BlockID["dynamoSteam"], "steam", this.data.isActive, this.data.rotate);
    }

});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.dynamoSteam, count: 1, data: 0}, [
        " 1 ",
        "323",
        "545"
    ], ['1', ItemID.redstoneTransmissionCoil, 0, '2', ItemID.gearCopper, 0, '3', 265, 0, "4", 331, 0, '5', ItemID.ingotCopper, 0]);
});