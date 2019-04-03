const RecipesManager = {
    showers: {},
    offset: 0,

    addShower: function (uid, desc) {
        if (!uid) {
            Logger.Log("Recipes Shower UID Not Valid ('" + uid + "')", "ERROR");
            return;
        }

        if (!desc) {
            Logger.Log("Recipes Shower Description Object Not Valid", "ERROR");
            return;
        }

        if (this.showers[uid]) {
            Logger.Log("Recipes Shower UID Must Be Unique ('" + uid + "')", "ERROR");
            return;
        }

        desc.draw = desc.draw || function (offset) {
            return offset;
        };

        desc.nextOffset = desc.nextOffset || function (current) {
            if (current + 1 >= this.getPages())
                return 0;

            return current + 1;
        };

        desc.previousOffset = desc.previousOffset || function (current) {
            if (current - 1 < 0)
                return this.getPages() - 1;

            return current - 1;
        };

        desc.getPages = desc.getPages || function () {
            return 0;
        };

        this.showers[uid] = desc;
    },

    basicShower: function (desc) {
        desc.draw = function (offset, elements, container, window) {
            let index = offset * 6;
            this.drawColumn(index, elements, container, 60, window);
            this.drawColumn(index + 3, elements, container, 530, window);
        };

        desc.drawColumn = function (offset, elements, container, xPos, window) {
            for (let i = 0; i < 3; i++) {
                let recipeId = offset + i;
                let recipe = desc.getRecipe(recipeId);

                if (!recipe)
                    return;

                let yPos = 60 + 170 * i;

                elements["_slotIn" + recipeId] = {
                    type: "slot",
                    x: xPos,
                    y: yPos,
                    size: 70,
                    visual: true
                };

                elements["speedScale" + recipeId] = {
                    type: "scale",
                    x: xPos + 2,
                    y: yPos + 85,
                    direction: 1,
                    value: 1,
                    bitmap: desc.getSpeedScaleBitmap ? desc.getSpeedScaleBitmap() : null,
                    scale: 4.5
                };

                elements["scale" + recipeId] = {
                    type: "scale",
                    x: xPos + 89,
                    y: yPos + 50,
                    direction: 0,
                    value: 1,
                    bitmap: desc.getProgressScaleBitmap ? desc.getProgressScaleBitmap() : null,
                    scale: 4
                };

                desc.drawResult(window, elements, container, recipe, recipeId, xPos, yPos);
            }
        };

        return desc;
    },

    drawOn: function (uid, window) {
        try {
            let elements = window.getContent().elements;
            let container = window.getContainer();
            let shower = this.showers[uid];

            if (!shower) {
                Logger.Log("Recipes Shower Not Founded (" + uid + ")", "ERROR");
                return;
            }

            let blackList = {
                "__frame": true,
                "__offsetIndex": true,
                "__btnPrevious": true,
                "__btnNext": true
            };

            for (let i in elements) {
                if (!blackList[i])
                    elements[i] = null;
            }

            let windowHeight = window.getLocation().getWindowHeight();

            elements["__offsetIndex"].text = this.offset + 1 + "/" + shower.getPages();
            elements["__offsetIndex"].y = windowHeight - 55;
            elements["__offsetIndex"].x = (1000 - UIHelper.getFontWidth(container.getElement("__offsetIndex"))) / 2;

            elements["__frame"].y = windowHeight - 65;
            elements["__btnPrevious"].y = windowHeight - 70;
            elements["__btnNext"].y = windowHeight - 70;

            shower.draw(this.offset, elements, container, window);
        } catch (e) {
            alert(e.message);
            alert(e.stack);
        }
    }
};