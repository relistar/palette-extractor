import chalk from 'chalk'

export class CLView {
    #SEPARATOR = '-'
    #OUTPUT_BOX_WIDTH = 50

    drawHeader = (text, width = this.#OUTPUT_BOX_WIDTH) => {
        const leftPaddingLength = (width - text.length) / 2
        const rightPaddingLength = width - text.length - leftPaddingLength

        const leftPadding = this.#SEPARATOR.repeat(leftPaddingLength)
        const rightPadding = this.#SEPARATOR.repeat(rightPaddingLength)

        const output = `${leftPadding}${text.toUpperCase()}${rightPadding}`

        console.log(output)
    }

    drawImageInfo = (image) => {
        console.log(`${image.name} is ${image.width}x${image.height} ${image.extension.toUpperCase()} file`)

        console.log(`Amount of pixels: ${image.amountOfPixels}`)
    }

    drawText = (text) => {
        console.log(text)
    }

    drawSeparator = (length = this.#OUTPUT_BOX_WIDTH) => {
        console.log(this.#SEPARATOR.repeat(length))
    }

    drawPixels = (pixels) => {
        pixels.forEach(({r, g, b, a}) => {
            const color = chalk.rgb(r, g, b).bold('\u25A0')
            const output = `${color} and ALPHA: ${a}`
            console.log(output)
        })
    }

    drawPalette = (palette) => {
        console.log(palette)
    }
}

export default CLView