export class CLController {
    #extractor
    #view

    constructor(extractor, view) {
        this.#extractor = extractor
        this.#view = view
    }

    start(image) {
        this.#extractor.image = image
        this.#extractor.createPalette()

        const pixels = this.#extractor.pixels
        const nonTransparentPixels = this.#extractor.nonTransparentPixels
        const hasTransparentPixels = this.#extractor.hasTransparentPixels
        const palette = this.#extractor.palette

        this.#view.drawHeader('image info')
        this.#view.drawImageInfo(image)
        this.#view.drawText(`Does the image have transparent background? - ${hasTransparentPixels ? 'Yes' : 'Not'}`)
        this.#view.drawSeparator()

        this.#view.drawHeader('pixels')
        this.#view.drawPixels(pixels)
        this.#view.drawSeparator()

        this.#view.drawHeader('non transparent pixels')
        this.#view.drawPixels(nonTransparentPixels)
        this.#view.drawSeparator()

        this.#view.drawHeader('palette')
        this.#view.drawPalette(palette)
    }
}

export default CLController