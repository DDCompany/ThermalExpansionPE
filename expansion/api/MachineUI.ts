import WindowLocationParams = UI.WindowLocationParams;

interface IMachineUI {
    tabIcon?: string
    augmentsDisabled?: boolean
    configDisabled?: boolean
    redstoneDisabled?: boolean
    inventoryDisabled?: boolean
    recipesShower?: any
    location?: WindowLocationParams

    [key: string]: any;
}

function MachineUI(description: IMachineUI): UI.TabbedWindow {
    let ui = new UI.TabbedWindow({
        location: description.location || {
            x: 0,
            y: 0
        }
    });
    let dummyContent = {
        drawing: [
            {type: "background", color: COLOR_BG},
            {type: "text", text: Translation.translate("Coming soon..."), x: 500, y: 60, font: FONT_GREY_CENTERED}
        ]
    };

    let tabIndex = 7;
    description.drawing = [...[{type: "background", color: COLOR_BG}], ...(description.drawing ?? [])];

    ui.setTab(6, {
        icon: {
            type: "image",
            x: -30,
            y: -30,
            width: 60,
            height: 60,
            bitmap: description.tabIcon || "icons.nope"
        }
    }, description);

    let recipesShower = description.recipesShower;
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
                {type: "background", color: COLOR_BG}
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
                    font: FONT_GREY
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

    if (!description.augmentsDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.augments"
            }
        }, dummyContent);
        tabIndex++;
    }

    if (!description.configDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.config"
            }
        }, dummyContent);
        tabIndex++;
    }

    if (!description.redstoneDisabled) {
        ui.setTab(tabIndex, {
            icon: {
                type: "image",
                x: -30,
                y: -30,
                width: 60,
                height: 60,
                bitmap: "icons.redstone"
            }
        }, dummyContent);
    }

    if (!description.inventoryDisabled) {
        ui.setTabEventListener(6, {
            onOpen: function () {
                MachineRegistry.invContainer.openAs(MachineRegistry.invWindow);
            },

            onClose: function () {
                MachineRegistry.invContainer.close();
            }
        });
    }

    return ui;
}