IDRegistry.genItemID("upgradeKitHardened");
Item.createItem("upgradeKitHardened", "Hardened Upgrade Kit", {name: "upgrade_kit", meta: 0}, {});

IDRegistry.genItemID("upgradeKitReinforced");
Item.createItem("upgradeKitReinforced", "Reinforced Upgrade Kit", {name: "upgrade_kit", meta: 1}, {});

IDRegistry.genItemID("upgradeKitSignalum");
Item.createItem("upgradeKitSignalum", "Signalum Upgrade Kit", {name: "upgrade_kit", meta: 2}, {});

IDRegistry.genItemID("upgradeKitResonant");
Item.createItem("upgradeKitResonant", "Resonant Upgrade Kit", {name: "upgrade_kit", meta: 3}, {});

IDRegistry.genItemID("upgradeKitCreative");
Item.createItem("upgradeKitCreative", "Creative Upgrade Kit", {name: "upgrade_kit", meta: 4}, {});

const tierByItem = {};
tierByItem[ItemID.upgradeKitHardened] = Tier.HARDENED;
tierByItem[ItemID.upgradeKitReinforced] = Tier.REINFORCED;
tierByItem[ItemID.upgradeKitSignalum] = Tier.SIGNALUM;
tierByItem[ItemID.upgradeKitResonant] = Tier.RESONANT;
tierByItem[ItemID.upgradeKitCreative] = Tier.CREATIVE;