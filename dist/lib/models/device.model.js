/**
 * Device
 */
var Device = /** @class */ (function () {
    function Device(_name, _ratio, _width, _height) {
        this._name = _name;
        this._ratio = _ratio;
        this._width = _width;
        this._height = _height;
    }
    Object.defineProperty(Device.prototype, "name", {
        /**
         * Device name
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "ratio", {
        /**
         * Aspect ratio
         */
        get: function () {
            return this._ratio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "width", {
        /**
         * Device width
         */
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "height", {
        /**
         * Device height
         */
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Device;
}());
export { Device };
//# sourceMappingURL=device.model.js.map