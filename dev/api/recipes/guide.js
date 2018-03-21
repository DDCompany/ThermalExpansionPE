function initializeRecipeGuideFor(object, name, unique) {

    let pages = {"default": {}};
    let currentPage = "default";
    let currentSection = "left";
    let count = 0;

    for (let i in object.recipes) {
        let recipe = object.recipes[i];
        let input = recipe.input;
        let result = recipe.result;
        let dop = recipe.dop || {};
        let page = pages[currentPage];

        if(!page[currentSection]) {
            page[currentSection] = {
                controller: PageControllers.TE_TO_RECIPE_PAGE,
                title: name + " Recipes(Page " + (count / 3) + ")",
                recipes: []
            };
        }

        page[currentSection].recipes.push({
            input: {
                id: input.id,
                data: input.data < 0 || !input.data ? 0 : input.data,
                count: 1
            },

            output: {
                id: result.id,
                data: result.data < 0 || !result.data ? 0 : result.data,
                count: result.count || 1
            },

            dop: {
                id: dop.id,
                data: dop.data,
                count: dop.count,
                chance: dop.chance
            }
        });

        count++;

        if(count % 3 === 0){
            if(currentSection === "left"){
                currentSection = "right";
                continue;
            }

            let newPage = "page" + count;
            let oldPage = currentPage;

            page.nextLink = newPage;
            currentSection = "left";
            currentPage = newPage;

            pages[newPage] = {
                preLink: oldPage
            };
        }
    }

    GuideAPI.registerGuide(unique, {
        pages: pages
    });

}

function initializeMagmaCrucibleRecipesGuide() {
    let pages = {"default": {}};
    let currentPage = "default";
    let currentSection = "left";
    let count = 0;

    for (let i in MagmaCrucibleRecipes.recipes) {
        let recipe = MagmaCrucibleRecipes.recipes[i];
        let page = pages[currentPage];

        if(!page[currentSection]) {
            page[currentSection] = {
                controller: PageControllers.MAGMA_CRUCIBLE_RECIPE_PAGE,
                title: "Magma Crucible Recipes(Page " + (count / 6) + ")",
                recipes: []
            };
        }

        page[currentSection].recipes.push(recipe);

        count++;

        if(count % 6 === 0){
            if(currentSection === "left"){
                currentSection = "right";
                continue;
            }

            let newPage = "page" + count;
            let oldPage = currentPage;

            page.nextLink = newPage;
            currentSection = "left";
            currentPage = newPage;

            pages[newPage] = {
                preLink: oldPage
            };
        }
    }

    GuideAPI.registerGuide("guideMagmaCrucibleRecipes", {
        pages: pages
    });
}

Callback.addCallback("PreLoaded", function () {
    Callback.addCallback("PostLoaded", function () {
        if(GuideAPI) {

            initializeRecipeGuideFor(PulverizerRecipes, "Pulverizer", "guidePulverizerRecipes");
            initializeRecipeGuideFor(SawmillRecipes, "Sawmill", "guideSawmillRecipes");
            initializeMagmaCrucibleRecipesGuide();

        }
    });
});