import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { LangSwitcher } from 'widget/LangSwitcher';
import { classNames as cls } from 'shared/lib/classNames';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    classNames?: string;
}

const Sidebar = ({ classNames }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div className={cls(styles.sidebar, { [styles.collapsed]: collapsed }, [classNames])}>
            <button onClick={onToggle}>{t('button.toggle')}</button>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher classNames={styles.lang} />
            </div>
        </div>
    );
};

export { Sidebar };
