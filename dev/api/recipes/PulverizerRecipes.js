const PulverizerRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj) return;

        this.recipes[obj.input.id + ":" + obj.input.data] = obj;
    },

    getResult: function (id, data) {
        if(!id)
            return null;

        return this.recipes[id + ":" + data] || this.recipes[id + ":-1"];
    }

};