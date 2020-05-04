import WindowLocationParams = UI.WindowLocationParams;

interface IMachineUI {
    tabIcon?: string
    augmentsDisabled?: boolean
    configDisabled?: boolean
    redstoneDisabled?: boolean
    inventoryDisabled?: boolean
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