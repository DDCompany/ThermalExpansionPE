ToolAPI.addToolMaterial("copper", {level: 1, durability: 175, efficiency: 4, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("tin", {level: 1, durability: 150, efficiency: 4.5, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("silver", {level: 1, durability: 75, efficiency: 6, damage: 1, enchantability: 25});
ToolAPI.addToolMaterial("lead", {level: 1, durability: 100, efficiency: 5, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("aluminum", {level: 1, durability: 225, efficiency: 10, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("nickel", {level: 2, durability: 300, efficiency: 6.5, damage: 2.5, enchantability: 18});
ToolAPI.addToolMaterial("platinum", {level: 4, durability: 1400, efficiency: 9, damage: 3.5, enchantability: 16});
ToolAPI.addToolMaterial("steel", {level: 2, durability: 400, efficiency: 6.5, damage: 2.5, enchantability: 10});
ToolAPI.addToolMaterial("electrum", {level: 0, durability: 100, efficiency: 14, damage: 0.5, enchantability: 30});
ToolAPI.addToolMaterial("invar", {level: 2, durability: 425, efficiency: 6.5, damage: 2.5, enchantability: 12});
ToolAPI.addToolMaterial("bronze", {level: 2, durability: 325, efficiency: 6, damage: 2, enchantability: 10});
ToolAPI.addToolMaterial("constantan", {level: 2, durability: 275, efficiency: 6, damage: 6, enchantability: 12});

MaterialRegistry.addToolSet("copper", "copper", ItemID["ingotCopper"]);
MaterialRegistry.addToolSet("tin", "tin", ItemID["ingotTin"]);
MaterialRegistry.addToolSet("silver", "silver", ItemID["ingotSilver"]);
MaterialRegistry.addToolSet("lead", "lead", ItemID["ingotLead"]);
MaterialRegistry.addToolSet("aluminum", "aluminum", ItemID["ingotAluminum"]);
MaterialRegistry.addToolSet("nickel", "nickel", ItemID["ingotNickel"]);
MaterialRegistry.addToolSet("platinum", "platinum", ItemID["ingotPlatinum"]);
MaterialRegistry.addToolSet("steel", "steel", ItemID["ingotSteel"]);
MaterialRegistry.addToolSet("electrum", "electrum", ItemID["ingotElectrum"]);
MaterialRegistry.addToolSet("invar", "invar", ItemID["ingotInvar"]);
MaterialRegistry.addToolSet("bronze", "bronze", ItemID["ingotBronze"]);
MaterialRegistry.addToolSet("constantan", "constantan", ItemID["ingotBronze"]);

MaterialRegistry.addToolSet("wood", "wood", 5, true);
MaterialRegistry.addToolSet("stone", "stone", 4, true);
MaterialRegistry.addToolSet("iron", "iron", 265, true);
MaterialRegistry.addToolSet("gold", "golden", 266, true);
MaterialRegistry.addToolSet("diamond", "diamond", 264, true);