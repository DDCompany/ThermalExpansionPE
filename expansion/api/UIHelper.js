const UIHelper = {
    getFont: function (element) {
        let fontField = element.getClass().getDeclaredField("font");
        fontField.setAccessible(true);
        return fontField.get(element);
    },

    getFontWidth: function(element) {
      return this.getFont(element).getTextWidth(element.description.text, 1);
    }
};