const ModelHelper = {
    cache: {},

    mapEnergyCell: function (x, y, z, id, tier, heartIndex) {
        let key = id + ":" + ":" + tier + ":" + heartIndex;
        let render = this.cache[key];
        if (!render) {
            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            model.addBox(0, 0, 0, 1, 1, 1, "energy_cell", tier);
            model.addBox(0, 0, 0, 1, 1, 1, "cell_meter", heartIndex);

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    mapMachine: function (x, y, z, id, data, tier, textures) {
        let key = id + ":" + data + ":" + tier + ":" + textures[3];
        let render = this.cache[key];
        if (!render) {
            let textures2 = [
                [textures[0], textures[1], textures[2], textures[3], textures[4], textures[5]],
                [textures[0], textures[1], textures[3], textures[2], textures[5], textures[4]],
                [textures[0], textures[1], textures[5], textures[4], textures[2], textures[3]],
                [textures[0], textures[1], textures[4], textures[5], textures[3], textures[2]]
            ];

            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            if (tier > 0)
                model.addBox(0, 0, 0, 1, 1, 1, "tier_border", tier);

            model.addBox(0, 0, 0, 1, 1, 1, textures2[data]);

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, data, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    }
};