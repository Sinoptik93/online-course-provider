import { routePaths } from 'shared/config/route';
import { AppLink } from 'shared/ui/AppLink';
import { classNames as cls } from 'shared/lib/classNames';
import { AppLinkTheme } from 'shared/ui/AppLink';

import styles from './Navbar.module.scss';
import {useTranslation} from "react-i18next";

interface NavbarProps {
    'classNames'?: string;
}

const Navbar = ({ classNames }: NavbarProps) => {
    const {t} = useTranslation()

    return (
        <div className={cls(styles.navbar, {}, [classNames])}>
            <div className={styles.controls}>
                <div className={styles.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={routePaths.main}
                    >
                        {t('main:title')}
                    </AppLink>

                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={routePaths.about}
                    >
                        {t('about:title')}
                    </AppLink>
                </div>

            </div>
        </div>
    );
};

export { Navbar };
