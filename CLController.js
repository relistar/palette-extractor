export class CLController {
    _extractor
    _view

    constructor(extractor, view) {
        this._extractor = extractor
        this._view = view
    }

    start(image) {
        this._extractor.image = image
        this._extractor.createPalette()
        this.#drawState()
    }

    #drawState = () => {
        const image = this._extractor.image
        const pixels = image.pixels
        const pixelGrid = image.pixelGrid
        const nonTransparentPixels = this._extractor.nonTransparentPixels
        const hasTransparentPixels = this._extractor.hasTransparentPixels

        this._view.drawHeader('image info')
        this._view.drawImageInfo(image)
        this._view.drawText(`Does the image have transparent background? - ${hasTransparentPixels ? 'Yes' : 'Not'}`)
        this._view.drawSeparator()

        this._view.drawHeader('pixels info')
        this._view.drawText('Pixels amount: '  + pixels.length)
        this._view.drawText('Non transparent pixels amount: '  + nonTransparentPixels.length)
        this._view.drawSeparator()

        this._view.drawHeader('pixel grid')

        console.log(pixelGrid[0].length)
        console.log(pixelGrid.length)
        this._view.drawPixelGrid(pixelGrid)

    }
}

export default CLController