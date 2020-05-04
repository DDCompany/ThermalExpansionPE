ModAPI.addAPICallback("RecipeViewer", function (api: any) {
    const RecipeViewer = api.Core;

    for (let uid in showers) {
        let shower = showers[uid];
        let icon = shower?.contents?.icon;
        if (typeof icon === "string") {
            shower.contents.icon = BlockID[icon];
        }

        RecipeViewer.registerRecipeType(uid, shower);
    }

    Logger.Log("Recipe Viewer Integration Activated", "INFO");
});