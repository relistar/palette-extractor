export default class PaletteExtractor {
    _image
    _nonTransparentPixels
    _palette

    constructor() {
        this._nonTransparentPixels = []
    }

    createPalette = () => {
        this._nonTransparentPixels = this.#removePixelsWithAlpha(this._image.pixels)
    }

    #removePixelsWithAlpha = (pixels) => {
        return pixels.filter(pixel => pixel.alpha)
    }

    hasTransparentPixels = () => {
        return this._image.amountOfPixels > this._nonTransparentPixels.length
    }

    get nonTransparentPixels() {
        return this._nonTransparentPixels
    }

    get palette() {
        return this._palette
    }

    set image(image) {
        this._image = image
    }

    get image() {
        return this._image
    }
}