import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * [Guide](https://react.i18next.com/latest/using-with-hooks#configure-i18next)
 */
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV,
        ns: ['common', 'main', 'about'],

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
