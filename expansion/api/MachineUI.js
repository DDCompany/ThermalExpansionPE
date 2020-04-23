MachineRegistry.MachineUI = function (obj) {
    let ui = UI.TabbedWindow({
        location: obj.location || {
            x: 0,
            y: 0
        }
    });


    let tabIndex = 7;

    ui.setTab(6, {
        icon: {
            type: "image",
            x: -30,
            y: -30,
            width: 60,
            height: 60,
            bitmap: obj.tabIcon || "icons.nope"
        }
    }, obj);

    let recipesShower = obj.recipesShower;
    if (recipesShower) {
        ui.setTab(1, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.recipes"
            }
        }, {
            drawing: [
                {type: "background", color: Color.rgb(149, 134, 129)}
            ],
            elements: {
                "__frame": {
                    type: "frame",
                    x: 80,
                    y: 0, //
                    width: 835,
                    height: 55,
                    bitmap: "default_frame_bg_dark",
                    scale: 2
                },
                "__offsetIndex": {
                    type: "text",
                    text: "",
                    x: 70,
                    y: 0, //
                    font: FONT_WHITE_30
                },
                "__btnPrevious": {
                    type: "button",
                    x: 0,
                    y: 0, //
                    scale: 65 / 26,
                    bitmap: "buttons.previous_page",
                    bitmap2: "buttons.previous_page_pressed",
                    clicker: {
                        onClick: function () {
                            soundClick.play();
                            RecipesManager.offset =
                                RecipesManager.showers[recipesShower].previousOffset(RecipesManager.offset);
                            RecipesManager.drawOn(recipesShower, ui.getWindowForTab(1));
                        }
                    }
                },
                "__btnNext": {
                    type: "button",
                    x: 930,
                    y: 0, //
                    scale: 65 / 26,
                    bitmap: "buttons.next_page",
                    bitmap2: "buttons.next_page_pressed",
                    clicker: {
                        onClick: function () {
                            soundClick.play();
                            RecipesManager.offset =
                                RecipesManager.showers[recipesShower].nextOffset(RecipesManager.offset);
                            RecipesManager.drawOn(recipesShower, ui.getWindowForTab(1));
                        }
                    }
                }
            }
        });

        ui.setTabEventListener(1, {
            onOpen: function (window) {
                RecipesManager.drawOn(recipesShower, window);
            },

            onClose: function () {
                RecipesManager.offset = 0;
            }
        });
    }

    if (!obj.augmentsDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.augments"
            }
        }, {});
        tabIndex++;
    }

    if (!obj.configDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.config"
            }
        }, {});
        tabIndex++;
    }

    if (!obj.redstoneDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.redstone"
            }
        }, {});
    }

    if (!obj.inventoryDisabled) {
        let inventory = new UI.Window({
            location: {
                x: 120,
                y: 35,
                width: 250,
                height: UI.getScreenHeight() - 70,
                scrollY: 562
            },

            drawing: [],
            elements: {}
        });
        inventory.setDynamic(false);
        inventory.setInventoryNeeded(true);

        let x = 0;
        let y = 0;
        let slotSize = 250;

        for (let i = 0; i < 36; i++) {
            inventory.getContent().elements["__invSlot" + i] = {
                type: "invSlot",
                x: x,
                y: y,
                size: 251,
                index: i + 9
            };

            x += slotSize;
            if (x >= slotSize * 4) {
                x = 0;
                y += slotSize;
            }
        }

        ui.setTabEventListener(6, {
            onOpen: function () {
                MachineRegistry.invContainer.openAs(inventory);
            },

            onClose: function () {
                MachineRegistry.invContainer.close();
            }
        });
    }

    return ui;
};