import { DeviceConfig } from './interfaces/device.config';
import { ViewportSizeConfig } from './interfaces/viewportsize.config';
import { Device } from './models/device.model';
import { DefaultDevice } from './types/default-device.type';

export class ViewportSize {
    private static readonly _defaultConfig: ViewportSizeConfig = new Map([
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

    constructor(private _config?: ViewportSizeConfig) {}

    private static getDeviceByConfig(type: string, config: ViewportSizeConfig) {
        const defaultConfig = config.get(type) as DeviceConfig;
        return new Device(
            defaultConfig.name,
            defaultConfig.ratio,
            defaultConfig.width,
            defaultConfig.height
        );
    }

    public getDevice(type: string | DefaultDevice) {
        return ViewportSize.getDeviceByConfig(
            type,
            this._config || ViewportSize._defaultConfig
        );
    }

    public static getDevice(type: DefaultDevice) {
        return ViewportSize.getDeviceByConfig(
            type,
            ViewportSize._defaultConfig
        );
    }
}
