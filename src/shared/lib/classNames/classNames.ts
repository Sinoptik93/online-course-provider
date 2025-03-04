type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string => {
    return [
        cls,
        ...additional,
        ...Object
            .entries(mods)
            .filter(([, value]) => value)
            .map(([classname]) => classname),
    ].join(' ');
};
