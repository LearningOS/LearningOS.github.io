// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
export declare type SafeAny = any;
export declare type SafeArray = SafeAny[];
export declare type SafeObject = { [key: string | number]: SafeAny };
export declare type SafeTimer = ReturnType<typeof setTimeout | typeof setInterval>;