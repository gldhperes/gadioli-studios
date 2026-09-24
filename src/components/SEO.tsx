import { Helmet } from 'react-helmet-async';

import { SITE_CONFIG } from '../config/site';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    noindex?: boolean;
}

export default function SEO({
    title = SITE_CONFIG.defaultTitle,
    description = SITE_CONFIG.defaultDescription,
    canonical,
    image,
    type = 'website',
    noindex = false,
}: SEOProps) {
    const canonicalUrl = canonical
        ? `${SITE_CONFIG.url}${canonical}`
        : undefined;

    const imageUrl = image
        ? image.startsWith('http')
            ? image
            : `${SITE_CONFIG.url}${image}`
        : undefined;

    return (
        <Helmet>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            {noindex && (
                <meta
                    name="robots"
                    content="noindex, follow"
                />
            )}

            {canonicalUrl && (
                <link
                    rel="canonical"
                    href={canonicalUrl}
                />
            )}

            {/* Open Graph */}

            <meta
                property="og:type"
                content={type}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:site_name"
                content={SITE_CONFIG.name}
            />

            <meta
                property="og:locale"
                content={SITE_CONFIG.locale}
            />

            {canonicalUrl && (
                <meta
                    property="og:url"
                    content={canonicalUrl}
                />
            )}

            {imageUrl && (
                <meta
                    property="og:image"
                    content={imageUrl}
                />
            )}

            {/* Twitter / X */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            {imageUrl && (
                <meta
                    name="twitter:image"
                    content={imageUrl}
                />
            )}
        </Helmet>
    );
}