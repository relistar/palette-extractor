export class ImageMetadata {
    #name
    #data
    #width
    #height

    constructor(name, data, width = 0, height= 0) {
        this.#name = name
        this.#data = data
        this.#width = width
        this.#height = height
    }

    get amountOfPixels() {
        return this.#width * this.#height
    }

    get extension() {
        return this.#name.split('.').pop()
    }

    get name() {
        return this.#name
    }

    get data() {
        return this.#name
    }

    get width() {
        return this.#width
    }

    get height() {
        return this.#height
    }
}

export default ImageMetadata