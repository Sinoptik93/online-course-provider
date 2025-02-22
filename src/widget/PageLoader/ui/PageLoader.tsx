import { classNames as cls } from 'shared/lib/classNames';
import Loader from 'shared/assets/animated/spinner.svg';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    classNames?: string;
}

const PageLoader = ({ classNames }: PageLoaderProps) => {
    return (
        <div className={cls(styles.pageLoader, {}, [classNames])}>
            <Loader />
        </div>
    );
};

export { PageLoader };
