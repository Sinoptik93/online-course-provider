import {ThemeSwitcher} from "widget/ThemeSwitcher";
import {routePaths} from "shared/config/route";
import {AppLink} from "shared/ui/AppLink";
import {classNames as cls} from "shared/lib/classNames";
import {AppLinkTheme} from "shared/ui/AppLink";

import styles from "./Navbar.module.scss";


interface NavbarProps {
    classNames?: string;
}

const Navbar = ({classNames}: NavbarProps) => {


    return (
        <div className={cls(styles.navbar, {}, [classNames])}>
            <div className={styles.controls}>
                <div className={styles.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={routePaths.main}
                    >
                        Главная
                    </AppLink>

                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={routePaths.about}
                    >
                        О сайте
                    </AppLink>
                </div>

                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export {Navbar};
