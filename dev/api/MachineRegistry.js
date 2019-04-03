const MachineRegistry = {
    container: new UI.Container(),

    define: function (id, tile) {
        ICRender.getGroup("rf-wire").add(id, -1);
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, tile);
        EnergyTileRegistry.addEnergyTypeForId(id, RF)
    },
    MachineUI: function (obj) {
        let ui = UI.TabbedWindow({
            location: {
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
                        clicker: {
                            onClick: function () {
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
                        clicker: {
                            onClick: function () {
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
                    MachineRegistry.container.openAs(inventory);
                },

                onClose: function () {
                    MachineRegistry.container.close();
                }
            });
        }

        return ui;
    },
    TileEntity: function (obj) {
        if (!obj.defaultValues)
            obj.defaultValues = {};

        obj.defaultValues.tier = 0;
        obj.defaultValues.energy = 0;

        if (!obj.installUpgrade) {
            obj.installUpgrade = this.installUpgradeFunc;
        }

        if (!obj.energyTick) {
            obj.energyTick = function (type, src) {
                this.data.energy += src.get(Math.min(this.data.basePower * 4, this.getEnergyStorage() - this.data.energy));
            };
        }

        if (!obj.getEnergyStorage) {
            obj.getEnergyStorage = function () {
                return this.data.basePower * 1000;
            }
        }

        if (!obj.refreshModel) {
            obj.refreshModel = function () {
            };
        }

        if (!obj.destroyBlock) {
            obj.destroyBlock = function (coords) {
                let extra = new ItemExtraData();
                extra.putString("data", JSON.stringify(this.data));
                extra.putString("slots", JSON.stringify(this.container.slots));

                let slots = this.container.slots;
                for (let i in slots)
                    this.container.clearSlot(i);

                nativeDropFunc(coords.x, coords.y, coords.z, 0, World.getBlockID(coords.x, coords.y, coords.z), 1, 0, extra);
            };
        }

        obj.___created = obj.created;
        obj.created = function () {
            if (this.___created)
                this.___created();

            this.refreshModel();
        };

        obj.___init = obj.init;
        obj.init = function () {
            if (this.___init)
                this.___init();

            this.refreshModel();
        };

        return obj;
    },

    calcEnergy: function (basePower, energy) {
        let maxPowerLevel = 9 * basePower * 100;

        if (energy >= maxPowerLevel)
            return basePower;

        if (energy < basePower * 100)
            return Math.min(basePower / 10, energy);

        return energy / (maxPowerLevel / basePower);
    },

    installUpgradeFunc: function (tier) {
        if (tier < 1 || tier > 5)
            return false;

        this.data.tier = tier;
        this.refreshModel();
        return true;
    },

    placeFunc: function (rotatable) {
        return function (coords, item) {
            Game.prevent();
            let x = coords.relative.x;
            let y = coords.relative.y;
            let z = coords.relative.z;
            if (GenerationUtils.isTransparentBlock(World.getBlockID(x, y, z))) {
                let data = item.data;

                if (rotatable) {
                    //Скопировано из CoreEngine
                    let c;
                    for (c = Math.floor((getYaw(Player.get()) - 45) / 90); 0 > c;)
                        c += 4;
                    for (; 3 < c;)
                        c -= 4;
                    c = {
                        0: 2,
                        1: 0,
                        2: 3,
                        3: 1
                    }[c];
                    data = 4 * parseInt(item.data / 4) + c;
                }

                World.setBlock(x, y, z, item.id, data);
                let tile = World.addTileEntity(x, y, z);
                if (item.extra) {
                    tile.data = JSON.parse(item.extra.getString("data"));
                    tile.container.slots = JSON.parse(item.extra.getString("slots"));
                }
            }
        };
    },

    nameOverrideFunc: function (item, name) {
        let extra = Player.getCarriedItem().extra;

        if (extra) {
            return name + "\n§7Configured";
        }
        return name;
    }
};