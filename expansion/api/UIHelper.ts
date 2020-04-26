class UIHelper {
    static getFont(element): UI.Font {
        let fontField = element.getClass().getDeclaredField("font");
        fontField.setAccessible(true);
        return fontField.get(element);
    }

    static getFontWidth(element): number {
        return this.getFont(element).getTextWidth(element.description.text, 1);
    }
}