class TextureBakery {
    static RES_CRUCIBLE: string = "/res/terrain-atlas/expansion/machines/crucible/thermal_machine_crucible_";
    static OVERLAY_CRUCIBLE: android.graphics.Bitmap = FileTools.ReadImage(__dir__ + "/overlays/crucible.png");

    static bakeAll() {
        let crucibleRecipes = MagmaCrucibleRecipes.recipes;
        for (let recipe of crucibleRecipes) {
            this.bakeForMagmaCrucible(recipe.fluid);
        }
    }

    static bakeForMagmaCrucible(liquid) {
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
}

Callback.addCallback("PostLoaded", function () {
    TextureBakery.bakeAll();
});