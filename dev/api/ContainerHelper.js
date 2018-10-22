const ContainerHelper = {
    canPutInSlot: function (item, slot) {
        if (!slot.id)
            return true;

        item.count = item.count || 1;

        if (slot.id === item.id && slot.data === item.data && Item.getMaxStack(slot.is) - slot.count >= item.count)
            return true;
    },

    putInSlot: function (item, slot) {
        if (!this.canPutInSlot(item, slot))
            return false;

        slot.id = item.id;
        slot.data = item.data || 0;
        slot.count += item.count || 1;
        return true;
    }
};