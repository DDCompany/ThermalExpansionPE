interface IMagmaCrucibleRecipe {
    id: number,
    data: number,
    fluid: string,
    fluidAmount: number,
    /**
     * @default 1000
     */
    energy?: number
}

class MagmaCrucibleRecipes extends RecipesManager<IMagmaCrucibleRecipe> {
    constructor(uid: string, id: string) {
        super(uid);

        this.setShower(id, {
            contents: {
                icon: id,
                drawing: [
                    {type: "bitmap", x: 444, y: 162, bitmap: "bars.machine.fluid_full", scale: 6},
                    {type: "bitmap", x: 335, y: 225, bitmap: "bars.machine.flame_full", scale: 6},
                    {type: "bitmap", x: 204, y: 80, bitmap: "bars.rf_full", scale: 6},
                    {type: "bitmap", x: 586, y: 35, bitmap: "bars.fluid_1", scale: 6}
                ],
                elements: {
                    "scaleFluid": {type: "scale", x: 592, y: 41, bitmap: "bars.fluid_0", scale: 6, direction: 1},
                    "textEnergy": {type: "text", x: 240, y: 342, font: FONT_RECIPE_VIEWER},
                    "textFluidAmount": {type: "text", x: 586 + 9 * 6, y: 45 + 60 * 6, font: FONT_RECIPE_VIEWER},
                    "input0": {type: "slot", x: 325, y: 112, size: 100}
                }
            },

            onOpen: function (elements, data) {
                let scaleFluid = elements.get("scaleFluid");

                scaleFluid.onBindingUpdated("texture", LiquidRegistry.getLiquidUITexture(data.fluid, 16 * 6, 58 * 6));
                scaleFluid.onBindingUpdated("value", data.fluidAmount / 10);

                elements.get("textEnergy")
                    .onBindingUpdated("text", `${data.energy} RF`);
                elements.get("textFluidAmount")
                    .onBindingUpdated("text", `${data.fluidAmount * 1000} mB`);
            }
        });
    }

    add(recipe: IMagmaCrucibleRecipe) {
        this.recipes.push(recipe);
    }

    getRecipe(id: number, data: number, count: number = 1): IMagmaCrucibleRecipe | null {
        if (!id)
            return null;

        const item = {id: id, data: data};
        return this.recipes.find((recipe) => {
            return ContainerHelper.equals(item, {id: recipe.id, data: recipe.data});
        });
    }

    getRecipesByResult(id: number, data: number = 0): IMagmaCrucibleRecipe[] {
        return [];
    }

    getRecipesByInput(id: number, data: number = 0, count: number = 1): IMagmaCrucibleRecipe[] {
        if (!id)
            return [];

        let item = {id: id, data: data};
        return this.recipes.filter((recipe) => {
            return ContainerHelper.equals(item, {id: recipe.id, data: recipe.data});
        });
    }

    makeForRecipeViewer(recipes: IMagmaCrucibleRecipe[]): IViewerRecipe[] {
        return recipes.map((recipe) => {
            return {
                input: [{
                    id: recipe.id,
                    data: recipe.data || 0,
                    count: 1
                }],
                output: [],
                energy: recipe.energy,
                fluid: recipe.fluid,
                fluidAmount: recipe.fluidAmount
            };
        });
    }
}

const crucibleManager = new MagmaCrucibleRecipes("te_crucible", "thermalMachineCrucible");