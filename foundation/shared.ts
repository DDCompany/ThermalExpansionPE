interface IThermalFoundationShared {
    Tier: typeof Tier;
    MaterialRegistry: typeof MaterialRegistry;
    RecipeHelper: typeof RecipeHelper;
    ThermalConfig: typeof ThermalConfig;
    randomInt: typeof randomInt;
    generateSandOre: typeof generateSandOre;
    requireGlobal: (command: string) => any
}

ModAPI.registerAPI("ThermalFoundationAPI", {
    Tier: Tier,
    MaterialRegistry: MaterialRegistry,
    RecipeHelper: RecipeHelper,
    ThermalConfig: ThermalConfig,
    randomInt: randomInt,
    generateOre: generateOre,
    generateSandOre: generateSandOre,

    requireGlobal: function (command) {
        return eval(command);
    }
} as IThermalFoundationShared);
Logger.Log("API shared with name ThermalFoundationAPI", "API");