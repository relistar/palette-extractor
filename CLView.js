import chalk from 'chalk'

export class CLView {
    static SEPARATOR = '-'
    static OUTPUT_BOX_WIDTH = 50

    drawHeader = (text, width = CLView.OUTPUT_BOX_WIDTH) => {
        const leftPaddingLength = (width - text.length) / 2
        const rightPaddingLength = width - text.length - leftPaddingLength

        const leftPadding = CLView.SEPARATOR.repeat(leftPaddingLength)
        const rightPadding = CLView.SEPARATOR.repeat(rightPaddingLength)

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

    drawSeparator = (length = CLView.OUTPUT_BOX_WIDTH) => {
        console.log(CLView.SEPARATOR.repeat(length))
    }

    drawPixelGrid = (grid) => {
        grid.forEach(row => {
            let rowOutput = ''
            row.forEach(({red, green, blue, alpha}) => {
                if(alpha) {
                    const color = chalk.rgb(red, green, blue).bold('\u25A0')
                    rowOutput += color
                }
            })
            console.log(rowOutput)
        })
    }

    drawPalette = (palette) => {
        console.log(palette)
    }
}

export default CLView