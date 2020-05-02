IDRegistry.genItemID("dustIron");
Item.createItem("dustIron", "Pulverized Iron", {name: "dust_iron", meta: 0}, {});

IDRegistry.genItemID("dustGold");
Item.createItem("dustGold", "Pulverized Gold", {name: "dust_gold", meta: 0}, {});

IDRegistry.genItemID("dustCopper");
Item.createItem("dustCopper", "Pulverized Copper", {name: "dust_copper", meta: 0}, {});

IDRegistry.genItemID("dustTin");
Item.createItem("dustTin", "Pulverized Tin", {name: "dust_tin", meta: 0}, {});

IDRegistry.genItemID("dustSilver");
Item.createItem("dustSilver", "Pulverized Silver", {name: "dust_silver", meta: 0}, {});

IDRegistry.genItemID("dustLead");
Item.createItem("dustLead", "Pulverized Lead", {name: "dust_lead", meta: 0}, {});

IDRegistry.genItemID("dustAluminum");
Item.createItem("dustAluminum", "Pulverized Aluminum", {name: "dust_aluminum", meta: 0}, {});

IDRegistry.genItemID("dustNickel");
Item.createItem("dustNickel", "Pulverized Nickel", {name: "dust_nickel", meta: 0}, {});

IDRegistry.genItemID("dustPlatinum");
Item.createItem("dustPlatinum", "Pulverized Platinum", {name: "dust_platinum", meta: 0}, {});

IDRegistry.genItemID("dustIridium");
Item.createItem("dustIridium", "Pulverized Iridium", {name: "dust_iridium", meta: 0}, {});

IDRegistry.genItemID("dustMithril");
Item.createItem("dustMithril", "Pulverized Mithril", {name: "dust_mithril", meta: 0}, {});

/* СПЛАВЫ */
IDRegistry.genItemID("dustSteel");
Item.createItem("dustSteel", "Steel Blend", {name: "dust_steel", meta: 0}, {});

IDRegistry.genItemID("dustElectrum");
Item.createItem("dustElectrum", "Electrum Blend", {name: "dust_electrum", meta: 0}, {});

IDRegistry.genItemID("dustInvar");
Item.createItem("dustInvar", "Invar Blend", {name: "dust_invar", meta: 0}, {});

IDRegistry.genItemID("dustBronze");
Item.createItem("dustBronze", "Bronze Blend", {name: "dust_bronze", meta: 0}, {});

IDRegistry.genItemID("dustConstantan");
Item.createItem("dustConstantan", "Constantan Blend", {name: "dust_constantan", meta: 0}, {});

IDRegistry.genItemID("dustSignalum");
Item.createItem("dustSignalum", "Signalum Blend", {name: "dust_signalum", meta: 0}, {});

IDRegistry.genItemID("dustLumium");
Item.createItem("dustLumium", "Lumium Blend", {name: "dust_lumium", meta: 0}, {});

IDRegistry.genItemID("dustEnderium");
Item.createItem("dustEnderium", "Enderium Blend", {name: "dust_enderium", meta: 0}, {});


IDRegistry.genItemID("dustSulfur");
Item.createItem("dustSulfur", "Sulfur", {name: "dust_sulfur", meta: 0}, {});

IDRegistry.genItemID("dustCoal");
Item.createItem("dustCoal", "Pulverized Coal", {name: "dust_coal", meta: 0}, {});

IDRegistry.genItemID("dustCharcoal");
Item.createItem("dustCharcoal", "Pulverized Charcoal", {name: "dust_charcoal", meta: 0}, {});

IDRegistry.genItemID("dustNiter");
Item.createItem("dustNiter", "Niter", {name: "dust_niter", meta: 0}, {});

IDRegistry.genItemID("dustObsidian");
Item.createItem("dustObsidian", "Pulverized Obsidian", {name: "dust_obsidian", meta: 0}, {});

IDRegistry.genItemID("dustSaw");
Item.createItem("dustSaw", "Saw", {name: "dust_wood", meta: 0}, {});

{
    const ids = [];
    for (let id = ItemID.dustIron; id <= ItemID.dustSaw; id++) {
        ids.push(id);
    }

    Item.addCreativeGroup("dusts", Translation.translate("Dusts"), ids);
}

Callback.addCallback("PostLoaded", function () {
    Recipes.addShapeless({id: ItemID.dustElectrum, count: 2}, [{id: ItemID.dustGold, data: 0}, {
        id: ItemID.dustSilver,
        data: 0
    }]);
    Recipes.addShapeless({id: ItemID.dustInvar, count: 3}, [{id: ItemID.dustIron, data: 0}, {
        id: ItemID.dustIron,
        data: 0
    }, {id: ItemID.dustNickel, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustBronze, count: 4}, [{id: ItemID.dustCopper, data: 0}, {
        id: ItemID.dustCopper,
        data: 0
    }, {id: ItemID.dustCopper, data: 0}, {id: ItemID.dustTin, data: 0}]);
    Recipes.addShapeless({id: ItemID.dustConstantan, count: 2}, [{
        id: ItemID.dustCopper,
        data: 0
    }, {id: ItemID.dustNickel, data: 0}]);
});