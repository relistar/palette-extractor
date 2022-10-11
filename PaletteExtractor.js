class Pixel {
    #red
    #green
    #blue
    #alpha

    constructor(red, green, blue, alpha) {
        this.#red = red
        this.#green = green
        this.#blue = blue
        this.#alpha = alpha
    }


    get red() {
        return this.#red
    }

    set red(value) {
        this.#red = value
    }

    get green() {
        return this.#green
    }

    set green(value) {
        this.#green = value
    }

    get blue() {
        return this.#blue
    }

    set blue(value) {
        this.#blue = value
    }

    get alpha() {
        return this.#alpha
    }

    set alpha(value) {
        this.#alpha = value
    }
}

class PaletteExtractor {
    #image
    #pixels
    #nonTransparentPixels
    #palette

    constructor() {
        this.#pixels = []
        this.#nonTransparentPixels = []
    }

    createPalette = () => {
        const data = this.#image.data

        this.#pixels = this.#extractPixels(data)
        this.#nonTransparentPixels = this.#removePixelsWithAlpha(this.#pixels)

    }

    #extractPixels = (data) => {
        const result = []

        let currentIndex = 0

        while (currentIndex < data.length) {
            const red = data[ currentIndex ]
            const green = data[ ++currentIndex ]
            const blue = data[ ++currentIndex ]
            const alpha = data[ ++currentIndex ] >> 1

            const pixel = new Pixel(red, green, blue, alpha)

            result.push(pixel)
        }

        return result
    }

    #removePixelsWithAlpha = (pixels) => {
        return pixels.filter(pixel => !pixel.alpha)
    }

    hasTransparentPixels = () => {
        return this.#image.amountOfPixels > this.#nonTransparentPixels.length
    }

    get nonTransparentPixels() {
        return this.#nonTransparentPixels
    }

    get pixels() {
        return this.#pixels
    }

    get palette() {
        return this.#palette
    }

    set image(image) {
        this.#image = image
    }
}

export default PaletteExtractor