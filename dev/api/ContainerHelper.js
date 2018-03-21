var ContainerHelper = {
    /*
        Добавить жидкость в tile из slots.full и добавить пустой контейнер в slots.empty.
        ContainerHelper.fluidContainerEmpty(["water", "water"], tile, {full: "full", empty: "empty"});
     */
    fluidContainerEmpty: function (liquid, tile, slots) {
        let slotContainerFull = tile.container.getSlot(slots.full);
        let slotContainer = tile.container.getSlot(slots.empty);

        if (slotContainerFull && slotContainer && slotContainerFull.id) {
            let empty = LiquidRegistry.getEmptyItem(slotContainerFull.id, slotContainerFull.data);

            if (empty && (liquid === null || liquid.indexOf(empty.liquid)) > -1 && tile.liquidStorage.getAmount(empty.liquid) + 1 <= tile.liquidStorage.getLimit(empty.liquid)) {
                if (slotContainer.id === 0) {
                    tile.container.setSlot(slots.empty, empty.id, 1, empty.data);
                    tile.liquidStorage.addLiquid(empty.liquid, 1);
                    slotContainerFull.count--;
                    return true;
                } else if (slotContainer.id === empty.id && slotContainer.data === empty.data && slotContainer.count < Item.getMaxStack(slotContainer.id)) {
                    slotContainer.count++;
                    slotContainerFull.count--;
                    tile.liquidStorage.addLiquid(empty.liquid, 1);
                    return true;
                }
            }
        }

        return false;
    }

};