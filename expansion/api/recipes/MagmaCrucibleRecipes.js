const MagmaCrucibleRecipes = {
    recipes: [],

    add: function (recipe) {
        this.recipes.push(recipe);
    },

    get: function (id, data) {
        if (!id)
            return null;

        for (let i in this.recipes) {
            let recipe = this.recipes[i];
            if (recipe.id === id && (recipe.data === -1 || recipe.data === data))
                return recipe;
        }
        return null;
    }
};

RecipesManager.addShower("te:magma_crucible", RecipesManager.basicShower({
    drawResult: function (window, elements, container, recipe, recipeId, xPos, yPos) {
        elements["textEnergy" + recipeId] = {
            type: "text",
            text: recipe.energy + " RF",
            x: xPos + 89,
            y: yPos + 118,
            font: FONT_WHITE_30
        };

        elements["textFluid" + recipeId] = {
            type: "text",
            text: LiquidRegistry.getLiquidName(recipe.fluid) + " (" + recipe.fluidAmount * 1000 + " mB)",
            x: xPos + 196,
            y: yPos + 75,
        };

        container.setSlot("_slotIn" + recipeId, recipe.id, recipe.count || 1, recipe.data || 0);
    },

    getProgressScaleBitmap: function () {
        return "bars.machine.fluid_full";
    },

    getSpeedScaleBitmap: function () {
        return "bars.machine.flame_full";
    },

    getRecipe: function (index) {
        return MagmaCrucibleRecipes.recipes[index];
    },

    getPages: function () {
        return Math.ceil(MagmaCrucibleRecipes.recipes.length / 6);
    }
}));