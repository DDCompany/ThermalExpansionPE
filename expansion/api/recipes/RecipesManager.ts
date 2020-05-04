interface IRecipeViewer {
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

    abstract getRecipe(id: number, data: number): T | null;

    abstract getRecipesByResult(id: number, data: number): T[];

    abstract getRecipesByInput(id: number, data: number): T[];

    setShower(blockId: number, description: any) {
        if (!description.getList) {
            description.getList = (id: number, data: number, isUsage: boolean) => {
                try {
                    if (isUsage) {
                        if (id === blockId) {
                            return this.makeForRecipeViewer(this.recipes);
                        }

                        return this.makeForRecipeViewer(this.getRecipesByInput(id, data));
                    } else {
                        return this.makeForRecipeViewer(this.getRecipesByResult(id, data));
                    }
                } catch (e) {
                    alert(e);
                }
            };
        }

        this.shower = description;
        showers[this.uid] = this.shower;
    }

    makeForRecipeViewer(recipe: T[]): IRecipeViewer[] {
        return [];
    }

    getRecipes(): T[] {
        return this.recipes;
    }
}