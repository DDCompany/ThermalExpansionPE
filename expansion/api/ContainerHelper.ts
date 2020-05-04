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

    static equals(item1, item2) {
        if (!item1 && !item2)
            return true;

        if (!item1 || !item2)
            return false;

        return item1.id === item2.id && (item1.data === item2.data || item1.data === -1 || item2.data === -1);
    }
}