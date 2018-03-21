Saver.addSavesScope("SatchelScope",
    function read(scope) {
        SatchelRegistry.save = scope;
    },

    function save() {
        return SatchelRegistry.save;
    }
);

const SatchelRegistry = {
    save: {
        uniqueID: 0,
        containers: {}
    },
    prototypes: {},
    guis: {},

    onBackpackUse: function (item) {
        if (!this.save["containers"]) {
            this.save["containers"] = {};
        }
        if (typeof this.save.uniqueID === 'undefined') {
            this.save.uniqueID = 0;
        }

        if (item.data === 0 || !this.save["containers"]["b" + item.data]) {
            let u = ++this.save.uniqueID;
            this.save["containers"]["b" + u] = new UI.Container();
            Player.setCarriedItem(item.id, 1, u);
            item.data = u;
            this.onBackpackUse(item);
        } else {
            this.openedUI = this.save["containers"]["b" + item.data];
            this.openedUI.openAs(this.guis[this.prototypes[item.id].slots]);
            this.temp = true;
        }

    },

    register: function (arg) {

        IDRegistry.genItemID(arg.codeName);
        Item.createItem(arg.codeName, arg.name, {name: arg.texture[0], meta: arg.texture[1] || 0}, {stack: 1});

        if (!this.guis[arg.slots]) {
            let obj = new UI.StandartWindow({
                standart: {
                    header: {
                        text: {
                            text: Translation.translate("Backpack")
                        }
                    },
                    inventory: {
                        standart: true
                    },
                    background: {
                        standart: true
                    },
                    minHeight: 90 + (arg.slots / 10 * 61) + 70
                },
                drawing: [],
                elements: {}
            });

            let xp = 345;
            let yp = 60;

            for (let i = 1; i <= arg.slots; i++) {
                obj.content.elements["slot" + i] = {type: "slot", x: xp, y: yp};
                xp += 61;
                if (i % 10 === 0) {
                    xp = 345;
                    yp += 61;
                }
            }

            this.guis[arg.slots] = obj;
        }
        arg.id = ItemID[arg.codeName];
        Item.registerUseFunctionForID(arg.id, function (coords, item) {
            SatchelRegistry.openedBackpack = item.id;
            SatchelRegistry.onBackpackUse(item);
        });

        this.prototypes[arg.id] = arg;
    }
};