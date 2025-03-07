declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV: boolean;
