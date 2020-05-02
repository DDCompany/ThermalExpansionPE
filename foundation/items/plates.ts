IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron", meta: 0}, {});

IDRegistry.genItemID("plateGold");
Item.createItem("plateGold", "Gold Plate", {name: "plate_gold", meta: 0}, {});

IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper", "Copper Plate", {name: "plate_copper", meta: 0}, {});

IDRegistry.genItemID("plateTin");
Item.createItem("plateTin", "Tin Plate", {name: "plate_tin", meta: 0}, {});

IDRegistry.genItemID("plateSilver");
Item.createItem("plateSilver", "Silver Plate", {name: "plate_silver", meta: 0}, {});

IDRegistry.genItemID("plateLead");
Item.createItem("plateLead", "Lead Plate", {name: "plate_lead", meta: 0}, {});

IDRegistry.genItemID("plateAluminum");
Item.createItem("plateAluminum", "Aluminum Plate", {name: "plate_aluminum", meta: 0}, {});

IDRegistry.genItemID("plateNickel");
Item.createItem("plateNickel", "Nickel Plate", {name: "plate_nickel", meta: 0}, {});

IDRegistry.genItemID("platePlatinum");
Item.createItem("platePlatinum", "Platinum Plate", {name: "plate_platinum", meta: 0}, {});

IDRegistry.genItemID("plateIridium");
Item.createItem("plateIridium", "Iridium Plate", {name: "plate_iridium", meta: 0}, {});

IDRegistry.genItemID("plateMithril");
Item.createItem("plateMithril", "Mithril Plate", {name: "plate_mithril", meta: 0}, {});

/* СПЛАВЫ */

IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel", "Steel Plate", {name: "plate_steel", meta: 0}, {});

IDRegistry.genItemID("plateElectrum");
Item.createItem("plateElectrum", "Electrum Plate", {name: "plate_electrum", meta: 0}, {});

IDRegistry.genItemID("plateInvar");
Item.createItem("plateInvar", "Invar Plate", {name: "plate_invar", meta: 0}, {});

IDRegistry.genItemID("plateBronze");
Item.createItem("plateBronze", "Bronze Plate", {name: "plate_bronze", meta: 0}, {});

IDRegistry.genItemID("plateConstantan");
Item.createItem("plateConstantan", "Constantan Plate", {name: "plate_constantan", meta: 0}, {});

IDRegistry.genItemID("plateSignalum");
Item.createItem("plateSignalum", "Signalum Plate", {name: "plate_signalum", meta: 0}, {});

IDRegistry.genItemID("plateLumium");
Item.createItem("plateLumium", "Lumium Plate", {name: "plate_lumium", meta: 0}, {});

IDRegistry.genItemID("plateEnderium");
Item.createItem("plateEnderium", "Enderium Plate", {name: "plate_enderium", meta: 0}, {});

{
    const ids = [];
    for (let id = ItemID.plateIron; id <= ItemID.plateEnderium; id++) {
        ids.push(id);
    }

    Item.addCreativeGroup("plates", Translation.translate("Plates"), ids);
}