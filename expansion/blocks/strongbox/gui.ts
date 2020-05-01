const StrongboxUI = [];

{
    const SLOTS_AMOUNT = [
        18,
        36,
        54,
        72,
        90
    ];
    const slotSize = 75;
    const slotsInRow = 8;

    for (let i = 0; i <= 5; i++) {
        let elements = {};
        let slotsAmount = SLOTS_AMOUNT[i];

        if (i === 5) {
            elements["slot"] = {
                type: "slot",
                size: 70,
                x: 650,
                y: 110,

                isValid: function (id, count, data, container) {
                    container.getParent().data.item = {
                        id: id,
                        data: data
                    };

                    return true;
                }
            };

            elements["btnClear"] = {
                type: "button",
                bitmap: "buttons.clear",
                bitmap2: "buttons.clear_pressed",
                scale: 73 / 26,
                x: 650,
                y: 185,
                clicker: {
                    onClick: function (container) {
                        soundClick.play();
                        container.getParent().data.item = {
                            id: 0,
                            data: 0
                        };
                        container.clearSlot("slot")
                    }
                }
            };
        } else {
            for (let j = 0; j < slotsAmount; j++) {
                elements["slot" + j] = {
                    type: "slot",
                    size: 70,
                    x: 370 + j % slotsInRow * slotSize,
                    y: 100 + Math.floor(j / slotsInRow) * slotSize,
                    isValid: function (id) {
                        // @ts-ignore
                        return !BackpackRegistry.isBackpack(id) && id !== BlockID.thermalStrongbox
                    }
                };
            }
        }

        StrongboxUI[i] = MachineUI({
            tabIcon: "icons.storage.strongbox_" + i,
            augmentsDisabled: true,
            configDisabled: true,
            redstoneDisabled: true,

            drawing: [
                {type: "text", text: "Strongbox", x: 370, y: 70, font: FONT_GREY}
            ],

            elements: elements
        });

        if (i < 5) {
            let window = StrongboxUI[i].getWindowForTab(6);
            window.getLocation().scrollY = (100 + Math.floor(slotsAmount / slotsInRow) * slotSize) * (window.getLocation().width / 1000);
        }
    }
}