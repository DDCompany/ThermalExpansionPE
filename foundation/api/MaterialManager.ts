ToolType.thermalSickle = {
    blockTypes: ["fibre", "plant", "cobweb"],
};

Callback.addCallback("DestroyBlock", function (coords) {
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

class MaterialRegistry {
    static sickles: number[] = [];

    static addArmorSet(name: string, armor: number[], durabilityModifier?: number, ingotName?: string) {
        let nameUp = name.charAt(0).toUpperCase() + name.substr(1);

        IDRegistry.genItemID("helmet" + nameUp);
        Item.createArmorItem("helmet" + nameUp, nameUp + " Helmet", {name: "helmet_" + name}, {
            type: "helmet",
            armor: armor[0],
            durability: durabilityModifier * 11,
            texture: "armor/" + name + "_1.png"
        });
        Item.addCreativeGroup("helmets", Translation.translate("Helmets"), [ItemID["helmet" + nameUp]]);

        IDRegistry.genItemID("chestplate" + nameUp);
        Item.createArmorItem("chestplate" + nameUp, nameUp + " Chestplate", {name: "chestplate_" + name}, {
            type: "chestplate",
            armor: armor[1],
            durability: durabilityModifier * 16,
            texture: "armor/" + name + "_1.png"
        });
        Item.addCreativeGroup("chestplates", Translation.translate("Chesplates"), [ItemID["chestplate" + nameUp]]);

        IDRegistry.genItemID("leggings" + nameUp);
        Item.createArmorItem("leggings" + nameUp, nameUp + " Leggings", {name: "leggings_" + name}, {
            type: "leggings",
            armor: armor[2],
            durability: durabilityModifier * 15,
            texture: "armor/" + name + "_2.png"
        });
        Item.addCreativeGroup("leggings", Translation.translate("Leggings"), [ItemID["leggings" + nameUp]]);

        IDRegistry.genItemID("boots" + nameUp);
        Item.createArmorItem("boots" + nameUp, nameUp + " Boots", {name: "boots_" + name}, {
            type: "boots",
            armor: armor[2],
            durability: durabilityModifier * 13,
            texture: "armor/" + name + "_1.png"
        });
        Item.addCreativeGroup("boots", Translation.translate("Boots"), [ItemID["boots" + nameUp]]);

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
    }

    static addToolSet(name: string, material: string, ingotId: number, isVanilla?: boolean) {
        let nameUp = name.charAt(0).toUpperCase() + name.substr(1);

        if (!isVanilla) {
            IDRegistry.genItemID(name + "Sword");
            Item.createItem(name + "Sword", nameUp + " Sword", {name: "sword_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Sword"], material, ToolType.sword);
            Item.addCreativeGroup("swords", Translation.translate("Swords"), [ItemID[name + "Sword"]]);

            IDRegistry.genItemID(name + "Pickaxe");
            Item.createItem(name + "Pickaxe", nameUp + " Pickaxe", {name: "pickaxe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Pickaxe"], material, ToolType.pickaxe);
            Item.addCreativeGroup("pickaxes", Translation.translate("Pickaxes"), [ItemID[name + "Pickaxe"]]);

            IDRegistry.genItemID(name + "Shovel");
            Item.createItem(name + "Shovel", nameUp + " Shovel", {name: "shovel_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Shovel"], material, ToolType.shovel);
            Item.addCreativeGroup("shovels", Translation.translate("Shovels"), [ItemID[name + "Shovel"]]);

            IDRegistry.genItemID(name + "Axe");
            Item.createItem(name + "Axe", nameUp + " Axe", {name: "axe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Axe"], material, ToolType.axe);
            Item.addCreativeGroup("axes", Translation.translate("Axes"), [ItemID[name + "Axe"]]);

            IDRegistry.genItemID(name + "Hoe");
            Item.createItem(name + "Hoe", nameUp + " Hoe", {name: "hoe_" + name, meta: 0}, {stack: 1});
            ToolAPI.setTool(ItemID[name + "Hoe"], material, ToolType.axe);
            Item.addCreativeGroup("hoes", Translation.translate("Hoes"), [ItemID[name + "Hoe"]]);
        }

        IDRegistry.genItemID(name + "Sickle");
        Item.createItem(name + "Sickle", nameUp + " Sickle", {name: "sickle_" + name, meta: 0}, {stack: 1});
        ToolAPI.setTool(ItemID[name + "Sickle"], material, ToolType.thermalSickle);
        this.sickles.push(ItemID[name + "Sickle"]);
        Item.addCreativeGroup("sickles", Translation.translate("Sickles"), [ItemID[name + "Sickle"]]);

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
    }

    static isSickle(id: number) {
        return this.sickles.indexOf(id) > -1;
    }
}