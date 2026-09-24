import StructuredData from './StructuredData';
import { SITE_CONFIG } from '../config/site';

export default function SiteStructuredData() {
    const websiteStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.defaultDescription,
        inLanguage: 'pt-BR',
    };

    const organizationStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
    };

    return (
        <>
            <StructuredData data={websiteStructuredData} />
            <StructuredData data={organizationStructuredData} />
        </>
    );
}