interface IViewerRecipe {
    input: ItemInstance[];
    output: ItemInstance[];

    [key: string]: any;
}

abstract class RecipesManager<T> {
    protected recipes: T[];
    private readonly uid: string;
    private shower: any;

    protected constructor(uid: string) {
        if (showers[uid]) {
            Logger.Log("Recipes manager uid is not unique ('" + uid + "')", "ERROR");
        }

        this.uid = uid;
        this.recipes = [];
    }

    abstract add(recipe: T);

    abstract getRecipe(id: number, data: number, count: number): T | null;

    abstract getRecipesByResult(id: number, data: number): T[];

    abstract getRecipesByInput(id: number, data: number, count: number): T[];

    setShower(blockId: string, description: any) {
        if (!description.getList) {
            description.getList = (id: number, data: number, isUsage: boolean) => {
                if (isUsage) {
                    if (id === BlockID[blockId]) {
                        return this.makeForRecipeViewer(this.recipes);
                    }

                    return this.makeForRecipeViewer(this.getRecipesByInput(id, data, -1));
                } else {
                    return this.makeForRecipeViewer(this.getRecipesByResult(id, data));
                }
            };
        }

        this.shower = description;
        showers[this.uid] = this.shower;
    }

    makeForRecipeViewer(recipe: T[]): IViewerRecipe[] {
        return [];
    }

    getRecipes(): T[] {
        return this.recipes;
    }
}