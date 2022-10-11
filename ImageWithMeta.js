import Pixel from './Pixel.js';

export default class ImageWithMeta {
    _name
    _data
    _width
    _height
    _pixels

    constructor(name, data, width = 0, height= 0) {
        this._name = name
        this._data = data
        this._width = width
        this._height = height
        this._pixels = this.#extractPixels()
        this._pixelGrid = this.#extractPixelGrid()
    }

    #extractPixels = () => {
        const result = []

        let currentIndex = 0

        while (currentIndex < this._data.length) {
            const red = this._data[ currentIndex ]
            const green = this._data[ ++currentIndex ]
            const blue = this._data[ ++currentIndex ]
            const alpha = this._data[ ++currentIndex ] >> 1

            const pixel = new Pixel(red, green, blue, alpha)

            result.push(pixel)
        }

        return result
    }

    #extractPixelGrid() {
        const result = []

        let count = 0

        for(let i = 0; i < this._height; i ++) {
            const row = []
            for(let j = 0; j < this._width; j ++) {
                row.push(this._pixels[count])
                count ++
            }
            result.push(row)
        }

        return result
    }

    get amountOfPixels() {
        return this._width * this._height
    }

    get extension() {
        return this._name.split('.').pop()
    }

    get name() {
        return this._name
    }

    get pixels() {
        return this._pixels
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    get pixelGrid() {
        return this._pixelGrid
    }

}