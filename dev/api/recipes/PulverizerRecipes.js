const PulverizerRecipes = {
    recipes: {},

    add: function (obj) {
        if (!obj)
            return;

        let input = obj.input;
        if (!input || !input.id)
            return;

        input.data = input.data || 0;

        this.recipes[input.id + ":" + input.data] = obj;
    },

    getResult: function (id, data) {
        if (!id)
            return null;

        return this.recipes[id + ":" + data] || this.recipes[id + ":-1"];
    }

};