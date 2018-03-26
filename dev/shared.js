ModAPI.registerAPI("ThermalExpansionAPI", {

    MagmaticManager: MagmaticManager,
    SteamManager: SteamManager,

    MagmaCrucibleRecipes: MagmaCrucibleRecipes,
    PulverizerRecipes: PulverizerRecipes,
    SawmillRecipes: SawmillRecipes,

    ContainerHelper: ContainerHelper,
    DynamoHelper: DynamoHelper,
    MachineRegistry: MachineRegistry,
    MaterialRegistry: MaterialRegistry,

    requireGlobal: function (command) {
        return eval(command);
    }

});
Logger.Log("ForestryAPI shared", "API");