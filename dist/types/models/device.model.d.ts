/**
 * Device
 */
export declare class Device {
    private _name;
    private _ratio;
    private _width;
    private _height;
    constructor(_name: string, _ratio: string, _width: number, _height: number);
    /**
     * Device name
     */
    get name(): string;
    /**
     * Aspect ratio
     */
    get ratio(): string;
    /**
     * Device width
     */
    get width(): number;
    /**
     * Device height
     */
    get height(): number;
}
