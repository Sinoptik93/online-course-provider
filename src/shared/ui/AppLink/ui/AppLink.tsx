import {Link, LinkProps} from "react-router-dom";
import {classNames as cls} from "shared/lib/classNames";

import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    classNames?: string;
    theme?: AppLinkTheme;
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        classNames,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={cls(styles.appLink, {}, [classNames, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export {AppLink};
