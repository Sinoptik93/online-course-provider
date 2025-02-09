import {ButtonHTMLAttributes} from "react";
import {classNames as cls} from "shared/lib/classNames";
import {ThemeButton} from "../types";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    theme?: ThemeButton;
}

const Button = (props: ButtonProps) => {
    const {
        classNames,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={cls(styles.button, {}, [classNames, theme])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export {Button};
