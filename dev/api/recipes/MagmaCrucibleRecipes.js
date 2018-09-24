const MagmaCrucibleRecipes = {
    recipes: {},

    add: function(recipe){
        this.recipes[recipe.id+":"+recipe.data] = recipe;
    },

    get: function(id, data){
        return this.recipes[id+":"+data] || this.recipes[id+":-1"]
    }

};