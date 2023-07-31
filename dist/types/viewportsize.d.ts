import { ViewportSizeConfig } from './interfaces/viewportsize.config';
import { Device } from './models/device.model';
import { DefaultDevice } from './types/default-device.type';
export declare class ViewportSize {
    private _config?;
    private static readonly _defaultConfig;
    constructor(_config?: ViewportSizeConfig | undefined);
    private static getDeviceByConfig;
    getDevice(type: string | DefaultDevice): Device;
    static getDevice(type: DefaultDevice): Device;
}
