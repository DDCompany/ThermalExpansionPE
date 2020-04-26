class ContainerHelper {
    static canPutInSlot(item: ItemInstance | IItem, slot: UI.Slot): boolean {
        if (!slot.id)
            return true;

        item.count = item.count || 1;

        return slot.id === item.id && slot.data === item.data && Item.getMaxStack(slot.id) - slot.count >= item.count;
    }

    static putInSlot(item: ItemInstance | IItem, slot: UI.Slot): boolean {
        if (!this.canPutInSlot(item, slot))
            return false;

        slot.id = item.id;
        slot.data = item.data || 0;
        slot.count += item.count || 1;
        return true;
    }
}