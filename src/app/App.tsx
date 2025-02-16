import {useTranslation} from "react-i18next";
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widget/Navbar';
import {Sidebar} from 'widget/Sidebar';
import {LangSwitcher} from "widget/LangSwitcher";
import {useTheme} from 'shared/config/theme';
import {classNames} from 'shared/lib/classNames';

import './styles/index.scss';


export const App = () => {
    const {theme} = useTheme();


    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>

            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};
