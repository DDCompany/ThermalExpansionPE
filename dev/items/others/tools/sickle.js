ToolType.sickle = {
    blockTypes: ["plant"]
};

var sickle_destroy = false;
var sickles = [];
    Callback.addCallback("DestroyBlock", function(coords, block, player) {
        if (!sickle_destroy && sickles.indexOf(Player.getCarriedItem().id) > -1 && (block.id === 18 || block.id === 161 || (block.id === 31 && block.data === 1) )) {
            sickle_destroy = true;
            var used = 0;
            for (var xx = coords.x - 3; xx <= coords.x + 3; xx++) {
                for (var zz = coords.z - 3; zz <= coords.z + 3; zz++) {
                    if(World.getBlock(xx, coords.y, zz).id === block.id){
                        if(block.id === 18 || block.id === 161){
                            if(Math.random() <= 0.1) World.drop(xx, coords.y, zz, 260, 1);
                            if(Math.random() <= 0.3) World.drop(xx, coords.y, zz, 6, 1, block.id === 18 ? block.data : block.data + 3);
                        }else if(block.id === 31 && block.data === 1){
                            if(Math.random() <= 0.4) World.drop(xx, coords.y, zz, 295, 1);
                        }
                        World.setBlock(xx, coords.y, zz, 0);
                        used++;
                    }
                }
            }
            var item = Player.getCarriedItem();
            Player.setCarriedItem(item.id, 1, item.data + used);
        }
        sickle_destroy = false;
    }, 1);

IDRegistry.genItemID("sickleAluminum");
Item.createItem("sickleAluminum", "Aluminum sickle", {name: "sickle_aluminum", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleAluminum);

IDRegistry.genItemID("sickleBronze");
Item.createItem("sickleBronze", "Bronze sickle", {name: "sickle_bronze", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleBronze);

IDRegistry.genItemID("sickleConstantan");
Item.createItem("sickleConstantan", "Constantan sickle", {name: "sickle_constantan", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleConstantan);

IDRegistry.genItemID("sickleCopper");
Item.createItem("sickleCopper", "Copper sickle", {name: "sickle_copper", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleCopper);

IDRegistry.genItemID("sickleElectrum");
Item.createItem("sickleElectrum", "Electrum sickle", {name: "sickle_electrum", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleElectrum);

IDRegistry.genItemID("sickleInvar");
Item.createItem("sickleInvar", "Invar sickle", {name: "sickle_invar", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleInvar);

IDRegistry.genItemID("sickleLead");
Item.createItem("sickleLead", "Lead sickle", {name: "sickle_lead", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleLead);

IDRegistry.genItemID("sickleNickel");
Item.createItem("sickleNickel", "Nickel sickle", {name: "sickle_nickel", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleNickel);

IDRegistry.genItemID("sicklePlatinum");
Item.createItem("sicklePlatinum", "Platinum sickle", {name: "sickle_platinum", meta: 0}, {stack: 1});
sickles.push(ItemID.sicklePlatinum);

IDRegistry.genItemID("sickleSilver");
Item.createItem("sickleSilver", "Silver sickle", {name: "sickle_silver", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleSilver);

IDRegistry.genItemID("sickleSteel");
Item.createItem("sickleSteel", "Steel sickle", {name: "sickle_steel", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleSteel);

IDRegistry.genItemID("sickleTin");
Item.createItem("sickleTin", "Tin sickle", {name: "sickle_tin", meta: 0}, {stack: 1});
sickles.push(ItemID.sickleTin);

ToolAPI.setTool(ItemID.sickleAluminum, "aluminum", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleBronze, "bronze", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleConstantan, "constantan", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleCopper, "copper", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleElectrum, "electrum", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleInvar, "invar", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleLead, "lead", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleNickel, "nickel", ToolType.sickle);
ToolAPI.setTool(ItemID.sicklePlatinum, "platinum", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleSilver, "silver", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleSteel, "steel", ToolType.sickle);
ToolAPI.setTool(ItemID.sickleTin, "tin", ToolType.sickle);