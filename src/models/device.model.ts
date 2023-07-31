/**
 * Device
 */
export class Device {
    constructor(
        private _name: string,
        private _ratio: string,
        private _width: number,
        private _height: number
    ) {}

    /**
     * Device name
     */
    get name() {
        return this._name;
    }

    /**
     * Aspect ratio
     */
    get ratio() {
        return this._ratio;
    }

    /**
     * Device width
     */
    get width() {
        return this._width;
    }

    /**
     * Device height
     */
    get height() {
        return this._height;
    }
}
