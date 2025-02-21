import { useTranslation } from 'react-i18next';
import { classNames as cls } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    classNames?: string;
}

const LangSwitcher = ({ classNames }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={cls(styles.langSwitcher, {}, [classNames])}>

            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
            >
                {t('button.translate')}
            </Button>
        </div>
    );
};

export { LangSwitcher };
