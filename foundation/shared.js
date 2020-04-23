ModAPI.registerAPI("ThermalFoundationAPI", {
    MaterialRegistry: MaterialRegistry,
    RecipeHelper: RecipeHelper,
    ThermalConfig: ThermalConfig,
    randomInt: randomInt,
    generateOre: generateOre,
    generateSandOre: generateSandOre,

    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("API shared with name ThermalFoundationAPI", "API");