const DynamoHelper = {

    MIN_POWER: 8,
    MAX_POWER: 80,

    registerDynamo: function (unique, name, texture, tile) {

        Block.setPrototype(unique, {
            type: Block.TYPE_BASE,

            getVariations: function () {
                return [
                    {name: name, texture: [[texture, 1], [texture, 1], [texture, 0]], inCreative: true}
                ];
            }

        });

        tile.energyTick = function(type, src){
            let output = Math.min(this.getMaxEnergyProvide ? this.getMaxEnergyProvide() : 400, this.data.energy);
            this.data.energy += src.add(output) - output;
        };

        tile.isGenerator = function(){
            return true
        };
        Block.setBlockShape(BlockID[unique], {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.62, z: 0.999});
        MachineRegistry.register(BlockID[unique], tile);
    },

    mapAtCoords: function(x, y, z, id, texture, isActive, rotate){

        let render = new ICRender.Model();
        let model = BlockRenderer.createModel();

        if(rotate === 0){ //UP
            model.addBox(0, 0, 0, 1, 0.61, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 0]]);
            model.addBox(0.250, 0.62, 0.250, 0.746, 1, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 0]]);
        }else if(rotate === 1){ //DOWN
            model.addBox(0, 0.39, 0, 1, 1, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 2]]);
            model.addBox(0.250, 0, 0.250, 0.746, 0.62, 0.746, [["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 3]]);
        }else if(rotate === 2){
            model.addBox(0, 0, 0, 0.625, 1, 1, [["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 1]]);
            model.addBox(0.625, 0.250, 0.250, 1, 0.7, 0.746, [["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 4], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 3){
            model.addBox(0.38, 0, 0, 1, 1, 1, [["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 1]]);
            model.addBox(0, 0.250, 0.250, 0.38, 0.7, 0.746, [["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 5], ["dynamo_coil_" + isActive, 1]]);
        }else if(rotate === 4){
            model.addBox(0, 0, 0.38, 1, 1, 1, [["dynamo_" + texture, 0], ["dynamo_" + texture, 0], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 4]]);
            model.addBox(0.250, 0.250, 0, 0.746, 0.7, 0.40, [["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 0], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 5]]);
        }else if(rotate === 5){
            model.addBox(0, 0, 0, 1, 1, 0.625, [["dynamo_" + texture, 2], ["dynamo_" + texture, 2], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 3]]);
            model.addBox(0.250, 0.250, 0.625, 0.746, 0.7, 1, [["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 3], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 1], ["dynamo_coil_" + isActive, 4]]);
        }

        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    calcEnergy: function (tile, basePower) {
        let maxPowerLevel = 9 * tile.getEnergyStorage() / 10;

        if (tile.data.energy < maxPowerLevel / 10) {
            return this.MAX_POWER;
        }
        if (tile.data.energy > maxPowerLevel) {
            return this.MIN_POWER;
        }

        return (tile.getEnergyStorage() - tile.data.energy) / (maxPowerLevel / basePower);
    }

};