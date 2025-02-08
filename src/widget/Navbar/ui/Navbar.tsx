import {useTheme} from "shared/config/theme";
import {routePaths} from "shared/config/route";
import {AppLink} from "shared/ui/AppLink";
import {classNames as cls} from "shared/lib/classNames";

import styles from "./Navbar.module.scss";
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";


interface NavbarProps {
    classNames?: string;
}

const Navbar = ({classNames}: NavbarProps) => {
    const {toggleTheme} = useTheme();

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

                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
        </div>
    );
};

export {Navbar};
