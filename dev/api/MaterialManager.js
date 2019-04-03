ToolType.thermalSickle = {
    blockTypes: ["fibre", "plant", "cobweb"],
};

Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (!MaterialRegistry.isSickle(Player.getCarriedItem().id))
        return;

    if (Entity.getSneaking(Player.get()))
        return;

    let radius = 3;
    let uses = 0;

    for (let xx = coords.x - radius; xx <= coords.x + radius; xx++) {
        for (let zz = coords.z - radius; zz <= coords.z + radius; zz++) {
            let material = ToolAPI.getBlockMaterial(World.getBlockID(xx, coords.y, zz));
            if (material && ToolType.thermalSickle.blockTypes.indexOf(material.name) > -1) {
                World.destroyBlock(xx, coords.y, zz, true);
                uses++;
            }
        }
    }

    ToolAPI.breakCarriedTool(uses);
});

const MaterialRegistry = {
    sickles: [],

    addArmorSet: function (name, armor, durabilityModifier, ingotName) {
        let nameUp = name.charAt(0).toUpperCase() + name.substr(1);

        IDRegistry.genItemID("helmet" + nameUp);
        Item.createArmorItem("helmet" + nameUp, nameUp + " Helmet", {name: "helmet_" + name}, {
            type: "helmet",
            armor: armor[0],
            durability: durabilityModifier * 11,
            texture: "armor/" + name + "_1.png"
        });

        IDRegistry.genItemID("chestplate" + nameUp);
        Item.createArmorItem("chestplate" + nameUp, nameUp + " Chestplate", {name: "chestplate_" + name}, {
            type: "chestplate",
            armor: armor[1],
            durability: durabilityModifier * 16,
            texture: "armor/" + name + "_1.png"
        });

        IDRegistry.genItemID("leggings" + nameUp);
        Item.createArmorItem("leggings" + nameUp, nameUp + " Leggings", {name: "leggings_" + name}, {
            type: "leggings",
            armor: armor[2],
            durability: durabilityModifier * 15,
            texture: "armor/" + name + "_2.png"
        });

        IDRegistry.genItemID("boots" + nameUp);
        Item.createArmorItem("boots" + nameUp, nameUp + " Boots", {name: "boots_" + name}, {
            type: "boots",
            armor: armor[2],
            durability: durabilityModifier * 13,
            texture: "armor/" + name + "_1.png"
        });

        if (ingotName) {
            Recipes.addShaped({id: ItemID["helmet" + nameUp], count: 1, data: 0}, [
                "fff",
                "f f"
            ], ['f', ItemID[ingotName], -1]);

            Recipes.addShaped({id: ItemID["chestplate" + nameUp], count: 1, data: 0}, [
                "f f",
                "fff",
                "fff",
            ], ['f', ItemID[ingotName], -1]);

            Recipes.addShaped({id: ItemID["leggings" + nameUp], count: 1, data: 0}, [
                "fff",
                "f f",
                "f f",
            ], ['f', ItemID[ingotName], -1]);

            Recipes.addShaped({id: ItemID["boots" + nameUp], count: 1, data: 0}, [
                "f f",
                "f f",
            ], ['f', ItemID[ingotName], -1]);
        }
    },
    addToolSet: function (name, material, ingotId, isVanilla) {
        let nameUp = name.charAt(0).toUpperCase() + name.substr(1);

        if (!isVanilla) {
            IDRegistry.genItemID(name + "Sword");
            Item.createItem(name + "Sword", nameUp + " Sword", {name: "sword_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Sword"], material, ToolType.sword);

            IDRegistry.genItemID(name + "Pickaxe");
            Item.createItem(name + "Pickaxe", nameUp + " Pickaxe", {name: "pickaxe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Pickaxe"], material, ToolType.pickaxe);

            IDRegistry.genItemID(name + "Shovel");
            Item.createItem(name + "Shovel", nameUp + " Shovel", {name: "shovel_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Shovel"], material, ToolType.shovel);

            IDRegistry.genItemID(name + "Axe");
            Item.createItem(name + "Axe", nameUp + " Axe", {name: "axe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Axe"], material, ToolType.axe);

            IDRegistry.genItemID(name + "Hoe");
            Item.createItem(name + "Hoe", nameUp + " Hoe", {name: "hoe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Hoe"], material, ToolType.axe);
        }

        IDRegistry.genItemID(name + "Sickle");
        Item.createItem(name + "Sickle", nameUp + " Sickle", {name: "sickle_" + name, meta: 0}, {stack: 1});
        ToolAPI.setTool(ItemID[name + "Sickle"], material, ToolType.thermalSickle);
        this.sickles.push(ItemID[name + "Sickle"]);

        Callback.addCallback("PostLoaded", function () {
            if (!isVanilla) {
                Recipes.addShaped({id: ItemID[name + "Sword"], count: 1, data: 0}, [
                    "f",
                    "f",
                    "s",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Pickaxe"], count: 1, data: 0}, [
                    "fff",
                    " s ",
                    " s ",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Shovel"], count: 1, data: 0}, [
                    "f",
                    "s",
                    "s",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Axe"], count: 1, data: 0}, [
                    "ff ",
                    "fs ",
                    " s ",
                ], ['f', ingotId, -1, 's', 280, -1]);

                Recipes.addShaped({id: ItemID[name + "Hoe"], count: 1, data: 0}, [
                    "ff",
                    " s",
                    " s",
                ], ['f', ingotId, -1, 's', 280, -1]);
            }

            Recipes.addShaped({id: ItemID[name + "Sickle"], count: 1, data: 0}, [
                " f ",
                "  f",
                "sf ",
            ], ['f', ingotId, -1, 's', 280, -1]);
        });
    },

    isSickle: function (id) {
        return this.sickles.indexOf(id) > -1;
    }
};