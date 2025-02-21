import { Link, LinkProps } from 'react-router-dom';
import { classNames as cls } from 'shared/lib/classNames';
import { AppLinkTheme } from '../types';

import styles from './AppLink.module.scss';

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

export { AppLink };
