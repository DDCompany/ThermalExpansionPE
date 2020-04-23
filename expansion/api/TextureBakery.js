const TextureBakery = {
    RES_CRUCIBLE: "/res/terrain-atlas/expansion/machines/crucible/thermal_machine_crucible_",
    OVERLAY_CRUCIBLE: FileTools.ReadImage(__dir__ + "/overlays/crucible.png"),

    bake: function () {
        let crucibleRecipes = MagmaCrucibleRecipes.recipes;
        for (let i in crucibleRecipes) {
            let recipe = crucibleRecipes[i];
            this.bakeForMagmaCrucible(recipe.fluid);
        }
    },

    bakeForMagmaCrucible: function (liquid) {
        let file = new File(__dir__ + this.RES_CRUCIBLE + liquid + "_0.png");

        if (!file.exists()) {
            file.createNewFile();

            let bitmap = this.OVERLAY_CRUCIBLE.copy(this.OVERLAY_CRUCIBLE.getConfig(), true);
            let canvas = new Canvas(bitmap);
            canvas.drawBitmap(LiquidRegistry.getLiquidUIBitmap(liquid, 4, 8), 6, 4, new Paint(Paint.FILTER_BITMAP_FLAG));

            let os = new BufferedOutputStream(new FileOutputStream(file));
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, os);
            os.close();
        }
    }
};

Callback.addCallback("PostLoaded", function () {
    TextureBakery.bake();
});