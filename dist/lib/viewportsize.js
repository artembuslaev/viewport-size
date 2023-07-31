import { Device } from './models/device.model';
import { DefaultDevice } from './types/default-device.type';
export var ViewportSize = /** @class */ (function () {
    function ViewportSize(_config) {
        this._config = _config;
    }
    ViewportSize.getDeviceByConfig = function (type, config) {
        var defaultConfig = config.get(type);
        return new Device(defaultConfig.name, defaultConfig.ratio, defaultConfig.width, defaultConfig.height);
    };
    ViewportSize.prototype.getDevice = function (type) {
        return ViewportSize.getDeviceByConfig(type, this._config || ViewportSize._defaultConfig);
    };
    ViewportSize.getDevice = function (type) {
        return ViewportSize.getDeviceByConfig(type, ViewportSize._defaultConfig);
    };
    ViewportSize._defaultConfig = new Map([
        [
            DefaultDevice.IPHONE_13_PRO,
            {
                name: 'Iphone 13 pro',
                width: 390,
                height: 844,
                ratio: '19.5:9',
            },
        ],
        [
            DefaultDevice.IPHONE_11,
            {
                name: 'Iphone 11',
                width: 414,
                height: 896,
                ratio: '19.5:9',
            },
        ],
    ]);
    return ViewportSize;
}());
//# sourceMappingURL=viewportsize.js.map