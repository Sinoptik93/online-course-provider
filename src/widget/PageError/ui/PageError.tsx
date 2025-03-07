import { classNames as cls } from 'shared/lib/classNames';

import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface PageErrorProps {
    classNames?: string;
    error: {
        message: string;
    };
}

const PageError = ({ classNames }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={cls(styles.pageError, {}, [classNames])}>
            <p>{t('error.unexpected')}</p>
            <Button
                className={cls(styles.errorButton)}
                onClick={reloadPage}
            >
                {t('common:reloadPage')}
            </Button>
        </div>
    );
};

export { PageError };
