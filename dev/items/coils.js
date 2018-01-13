IDRegistry.genItemID("RedstoneReceptionCoil");
            Item.createItem("RedstoneReceptionCoil", "Redstone Reception Coil", {
                name: "RedstoneReceptionCoil",
                meta: 0
            }, {stack: 1});
            
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.RedstoneReceptionCoil, count: 1, data: 0}, [
                "aa1",
                "a2a",
                "1aa"
            ], ['1', 331, 0, '2', 266, 0]);
});