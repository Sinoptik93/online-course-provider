import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('title', { ns: 'about' })}
        </div>
    );
};

export default AboutPage;
