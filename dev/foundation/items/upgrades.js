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

let tierByItem = {};
tierByItem[ItemID.upgradeKitHardened] = 1;
tierByItem[ItemID.upgradeKitReinforced] = 2;
tierByItem[ItemID.upgradeKitSignalum] = 3;
tierByItem[ItemID.upgradeKitResonant] = 4;
tierByItem[ItemID.upgradeKitCreative] = 5;

Callback.addCallback("ItemUse", function (coords, item) {
    let tier = tierByItem[item.id];

    if (tier > 0) {
        let tile = World.getTileEntity(coords.x, coords.y, coords.z);
        if (!tile || !tile.installUpgrade || (tier < 5 && tile.data.tier !== tier - 1))
            return;

        if (tile.installUpgrade(tier))
            Player.decreaseCarriedItem(1);
    }
});