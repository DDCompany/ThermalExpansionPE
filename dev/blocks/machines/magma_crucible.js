IDRegistry.genBlockID("MagmaCrucible");
Block.createBlockWithRotation("MagmaCrucible", [
    {
        name: "Magma Tigel",
        texture: [["machine_bottomm", 0], ["machine_topp", 0], ["machine_sside", 0], ["machine_face_crucible", 0], ["machine_sside", 0], ["machine_sside", 0]],
        inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.MagmaCrucible, count: 1, data: 0}, [
        " a ",
        "x#x",
        "cbc"
    ], ['#', BlockID.MachineFrameBasic, 0, 'x', 45, 0, 'a', 331, 0, "c", ItemID.gearCopper, 0, 'b', ItemID.RedstoneReceptionCoil, 0]);
});

var guiMagmaCrucible = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Magma Crucible"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
            {type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
            {type: "bitmap", x: 350, y: 100, bitmap: "rf_scale", scale: 3.2},
            {type: "bitmap", x: 640, y: 80, bitmap: "fluid_scale", scale: 3.2}
        ],

        elements: {
            "progressScale": {type: "scale", x: 530, y: 146, direction: 0, bitmap: "furnace_bar_scale", scale: 3.2},
            "energyScale": {type: "scale", x: 350, y: 100, direction: 1, bitmap: "rf_scale_full", scale: 3.2},
            "liquidScale": {type: "scale", x: 643, y: 83, direction: 1, bitmap: "fluid_scale", scale: 3.2},

            "slotSource": {type: "slot", x: 441, y: 142}
        }
});

MachineRegistry.register(BlockID.MagmaCrucible, {

    ENERGY_CONSUME: 20,

    defaultValues: {
        progress: 0, 
        progressMax: 0
    },

    getGuiScreen: function () {
        return guiMagmaCrucible;
    },

    init: function () {
        this.liquidStorage.setLimit(null, 10);
    },

	 tick: function () {
    	var slot = this.container.getSlot("slotSource");
        if(this.data.progress){
        	
            if(!slot.id) {
            	this.data.progress = 0;
                return
            }
        	if(this.data.energy >= this.ENERGY_CONSUME){
        	    this.data.energy -= this.ENERGY_CONSUME;
            }else {
            	return
            }
			if(slot.id > 0){
            this.data.progress++;
			 Music.playSound('crucible.ogg');
            if(this.data.progress >= this.data.progressMax){
            	var recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                var fluid = this.liquidStorage.getLiquidStored();
                 if(!fluid || (fluid == recipe.fluid && this.liquidStorage.getAmount(fluid) + recipe.fluidAmount <= 10)){
                 	this.liquidStorage.addLiquid(recipe.fluid, recipe.fluidAmount);
            	     
					 this.data.progress = 0;
					 
                     slot.count--;
                     this.container.validateAll();
				    } 
                 }
             } 
        }else{
            
            if(slot.id > 0){
            	var recipe = MagmaCrucibleRecipes.get(slot.id, slot.data);
                if(recipe) {
                    this.data.progress = 1;
                    this.data.progressMax = recipe.time;
                }
            }
        }
        
        this.liquidStorage.updateUiScale("liquidScale", this.liquidStorage.getLiquidStored());
        this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    },

    getEnergyStorage: function () {
        return 15000;
    }
});