const ModelHelper = {
    cache: {},

    getByData: function (data, textures) {
        switch (data) {
            case 0:
                return [textures[0], textures[1], textures[2], textures[3], textures[4], textures[5]];
            case 1:
                return [textures[0], textures[1], textures[3], textures[2], textures[5], textures[4]];
            case 2:
                return [textures[0], textures[1], textures[5], textures[4], textures[2], textures[3]];
            case 3:
                return [textures[0], textures[1], textures[4], textures[5], textures[3], textures[2]];
        }

        return textures;
    },

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
            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            if (tier > 0)
                model.addBox(0, 0, 0, 1, 1, 1, "tier_border", tier);

            model.addBox(0, 0, 0, 1, 1, 1, this.getByData(data, textures));

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, data, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    },

    mapStrongbox: function (x, y, z, id, data, tier) {
        let key = id + ":" + data + ":" + tier;
        let render = this.cache[key];
        if (!render) {
            let textures = [
                ["strongbox_top", tier], ["strongbox_top", tier], ["strongbox_side", tier],
                ["strongbox_side", tier], ["strongbox_side", tier], ["strongbox_side", tier]
            ];

            render = new ICRender.Model();
            let model = BlockRenderer.createModel();

            model.addBox(1 / 16, 0, 1 / 16, 15 / 16, 15 / 16, 15 / 16, this.getByData(data, textures));

            switch (data) {
                case 0:
                    model.addBox(0.43, 0.45, 0.93, 0.55, 0.7, 1, 42, 0);
                    break;
                case 1:
                    model.addBox(0.44, 0.45, 0, 0.57, 0.7, 0.07, 42, 0);
                    break;
                case 2:
                    model.addBox(0.93, 0.45, 0.45, 1, 0.7, 0.55, 42, 0);
                    break;
                case 3:
                    model.addBox(0, 0.45, 0.44, 0.07, 0.7, 0.55, 42, 0);
            }

            render.addEntry(model);
            this.cache[key] = render;
        }
        BlockRenderer.enableCoordMapping(id, data, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
    }
};