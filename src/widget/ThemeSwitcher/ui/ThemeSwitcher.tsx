import {Theme, useTheme} from "shared/config/theme";
import {Button, ThemeButton} from "shared/ui/Button";
import {classNames as cls} from "shared/lib/classNames";
import IconThemeLight from "shared/assets/icons/icon-theme-light.svg"
import IconThemeDark from "shared/assets/icons/icon-theme-dark.svg"

import styles from "./ThemeSwitcher.module.scss";


interface ThemeSwitcherProps {
    classNames?: string;
}

const ThemeSwitcher = ({classNames}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (

        <Button
            theme={ThemeButton.CLEAR}
            className={cls(styles.themeSwitcher, {}, [classNames])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.LIGHT
                    ? <IconThemeLight/>
                    : <IconThemeDark/>
            }
        </Button>
    );
};

export {ThemeSwitcher};
