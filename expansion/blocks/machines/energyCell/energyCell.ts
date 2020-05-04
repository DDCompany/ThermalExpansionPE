IDRegistry.genBlockID("thermalEnergyCell");
Block.createBlock("thermalEnergyCell", [
    {
        name: "Energy Cell",
        texture: [["energy_cell", 6]],
        inCreative: true
    }
]);
Item.addCreativeGroup("thermal_expansion_machines", Translation.translate("Machines"), [
    BlockID.thermalEnergyCell
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.thermalEnergyCell, count: 1, data: 0}, [
        "igi",
        "glg",
        "igi"
    ], ['i', VanillaItemID.iron_ingot, -1, 'g', VanillaBlockID.glass, -1, 'l', ItemID.gearLead, -1]);
});