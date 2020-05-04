interface IMachineStandard extends IMachineBase<IMachineBaseTile> {
    manager: StandardRecipesManager
}

function StandardMachineTile(description: IMachineStandard) {
    if (!description.start) {
        description.start = function (this: IMachineBase<IMachineBaseTile>): boolean {
            let source = this.container.getSlot("slotSource");
            if (!source.id) {
                return false;
            }

            let recipe = this.manager.getRecipe(source.id, source.data, source.count);
            if (recipe && ContainerHelper.canPutInSlot(recipe.result, this.container.getSlot("slotResult"))) {
                let second = recipe.second;
                if (second && !ContainerHelper.canPutInSlot(second, this.container.getSlot("slotSecond"))) {
                    return false;
                }

                this.data.progress = 1;
                this.data.progressMax = recipe.energy;
                return true;
            }

            return false;
        };
    }

    if (!description.finish) {
        description.finish = function (this: IMachineBase<IMachineBaseTile>) {
            let source = this.container.getSlot("slotSource");
            let recipe = this.manager.getRecipe(source.id, source.data, source.count);

            ContainerHelper.putInSlot(recipe.result, this.container.getSlot("slotResult"));
            source.count -= recipe.input.count;
            this.container.validateSlot("slotSource");

            let second = recipe.second;
            if (second && (second.chance <= 0 || Math.random() < second.chance)) {
                ContainerHelper.putInSlot(second, this.container.getSlot("slotSecond"));
            }
        };
    }

    return BaseMachineTile(description);
}