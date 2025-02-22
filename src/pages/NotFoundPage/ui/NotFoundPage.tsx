import { useTranslation } from 'react-i18next';
import { classNames as cls } from 'shared/lib/classNames';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    classNames?: string;
}

const NotFoundPage = ({ classNames }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={cls(styles.notFoundPage, {}, [classNames])}>
            {t('notFound.title')}
        </div>
    );
};

export { NotFoundPage };
