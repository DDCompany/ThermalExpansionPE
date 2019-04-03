const PulverizerRecipes = {
    recipes: [],

    add: function (obj) {
        if (!obj)
            return;

        let input = obj.input;
        if (!input || !input.id)
            return;

        input.data = input.data || 0;

        this.recipes.push(obj);
    },

    getResult: function (id, data) {
        if (!id)
            return null;

        for (let i in this.recipes) {
            let recipe = this.recipes[i].input;
            if (recipe.id === id && (recipe.data === -1 || recipe.data === data))
                return recipe;
        }
        return null;
    }
};

RecipesManager.addShower("te:pulverizer", RecipesManager.basicShower({
    drawResult: function (window, elements, container, recipe, recipeId, xPos, yPos) {
        elements["textEnergy" + recipeId] = {
            type: "text",
            text: recipe.energy + " RF",
            x: xPos + 89,
            y: yPos + 118,
            font: FONT_WHITE_30
        };

        elements["_slotOut" + recipeId] = {
            type: "slot",
            x: xPos + 196,
            y: yPos + 46,
            size: 70,
            visual: true
        };

        elements["_slotSpecial" + recipeId] = {
            type: "slot",
            x: xPos + 279,
            y: yPos + 46,
            size: 70,
            visual: true
        };

        let special = recipe.dop || {id: 0, data: 0, count: 1, chance: 0};
        if (special.chance) {
            elements["textChance" + recipeId] = {
                type: "text",
                text: special.chance * 100 + "%",
                x: xPos + 354,
                y: yPos + 60,
                font: FONT_WHITE_30
            };

            container.setSlot("_slotSpecial" + recipeId, special.id, special.count || 1, special.data || 0);
        }

        container.setSlot("_slotIn" + recipeId, recipe.input.id, recipe.input.count || 1, recipe.input.data || 0);
        container.setSlot("_slotOut" + recipeId, recipe.result.id, recipe.result.count || 1, recipe.result.data || 0);
    },

    getProgressScaleBitmap: function () {
        return "bars.machine.def_empty";
    },

    getSpeedScaleBitmap: function () {
        return "bars.machine.pulverizer.speed_full";
    },

    getRecipe: function (index) {
        return PulverizerRecipes.recipes[index];
    },

    getPages: function () {
        return Math.ceil(PulverizerRecipes.recipes.length / 6);
    }
}));