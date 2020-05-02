IDRegistry.genItemID("crystalCrudeOil");
Item.createItem("crystalCrudeOil", "Bitumen", {name: "crystal_crude_oil", meta: 0}, {});

IDRegistry.genItemID("crystalRedstone");
Item.createItem("crystalRedstone", "Destabilized Clathrate", {name: "crystal_redstone", meta: 0}, {});

IDRegistry.genItemID("crystalGlowstone");
Item.createItem("crystalGlowstone", "Energized Clathrate", {name: "crystal_glowstone", meta: 0}, {});

IDRegistry.genItemID("crystalEnder");
Item.createItem("crystalEnder", "Resonant Clathrate", {name: "crystal_ender", meta: 0}, {});

IDRegistry.genItemID("crystalCinnabar");
Item.createItem("crystalCinnabar", "Cinnabar", {name: "crystal_cinnabar", meta: 0}, {});

{
    const ids = [];
    for (let id = ItemID.crystalCrudeOil; id <= ItemID.crystalCinnabar; id++) {
        ids.push(id);
    }

    Item.addCreativeGroup("crystals", Translation.translate("Crystals"), ids);
}