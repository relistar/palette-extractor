import pe from 'image-pixels'
import PaletteExtractor from './PaletteExtractor.js'
import ImageMetadata from './ImageMetadata.js'
import CLView from './CLView.js'
import CLController from './CLController.js'

const filename = 'image.png'

pe(`./${filename}`).then(({data, width, height}) => {
    console.log(data)
    const image = new ImageMetadata(filename, data, width, height)

    const view = new CLView()
    const extractor = new PaletteExtractor()
    const controller = new CLController(extractor, view)

    controller.start(image)
})


