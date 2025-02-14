import { useState } from 'react';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { classNames as cls } from 'shared/lib/classNames';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    'classNames'?: string;
}

const Sidebar = ({ classNames }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div className={cls(styles.sidebar, { [styles.collapsed]: collapsed }, [classNames])}>
            <button onClick={onToggle}>toggle</button>

            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export { Sidebar };
