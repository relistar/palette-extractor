export default class Pixel {
    _red
    _green
    _blue
    _alpha

    constructor(red, green, blue, alpha) {
        this._red = red
        this._green = green
        this._blue = blue
        this._alpha = alpha
    }

    get red() {
        return this._red
    }

    set red(value) {
        this._red = value
    }

    get green() {
        return this._green
    }

    set green(value) {
        this._green = value
    }

    get blue() {
        return this._blue
    }

    set blue(value) {
        this._blue = value
    }

    get alpha() {
        return this._alpha
    }

    set alpha(value) {
        this._alpha = value
    }
}