ModAPI.addAPICallback("RecipeViewer", function (api: any) {
    const RecipeViewer = api.Core;

    for (let uid in showers) {
        RecipeViewer.registerRecipeType(uid, showers[uid]);
    }

    Logger.Log("Recipe Viewer Integration Activated", "INFO");
});