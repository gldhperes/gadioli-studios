import { useEffect, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useParams, useSearchParams, } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModelCard from '../components/ModelCard';

// SEO
import SEO from '../components/SEO';
import { SITE_CONFIG } from '../config/site';
import StructuredData from '../components/StructuredData';

// Data
import categoriesData from '../data/categories';
import models from '../data/models';
import { categorySlugs } from '../data/categorySlugs';

// Style
import styles from './Modelos.module.css';

export default function Modelos() {
    const { Categories, CategoriesNames } = categoriesData;

    const categoryNames = Object.values(CategoriesNames);

    const { categorySlug } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const categoryParam = searchParams.get('categoria');

    const categoryFromSlug = Object.entries(categorySlugs).find(
        ([, slug]) => slug === categorySlug
    )?.[0];

    const initialCategory = categoryFromSlug
        ? categoryFromSlug
        : categoryParam && categoryNames.includes(categoryParam)
            ? categoryParam
            : 'Todos';

    const [active, setActive] = useState(initialCategory);

    useEffect(() => {
        if (categoryFromSlug) {
            setActive(categoryFromSlug);
            return;
        }

        if (categoryParam && categoryNames.includes(categoryParam)) {
            setActive(categoryParam);
            return;
        }

        setActive('Todos');
    }, [categoryFromSlug, categoryParam]);

    const handleCategoryChange = (category: string) => {
        setActive(category);

        if (category === 'Todos') {
            setSearchParams({});
        } else {
            setSearchParams({
                categoria: category,
            });
        }
    };

    const filteredModels = active === 'Todos' ? models : models.filter((model) => model.category === active);

    const isCategoryPage = Boolean(categorySlug && categoryFromSlug);

    const pageTitle = isCategoryPage
        ? `Convites de ${categoryFromSlug} | Gadioli Studio`
        : 'Modelos de Convites | Gadioli Studio';

    const pageDescription = isCategoryPage
        ? `Encontre modelos de convites de ${categoryFromSlug?.toLowerCase()} personalizados. Escolha seu modelo e personalize os detalhes do seu evento com o Gadioli Studio.`
        : 'Explore modelos de convites personalizados para aniversários, casamentos, 15 anos, festas infantis, futebol e muito mais.';

    const canonical = isCategoryPage
        ? `/modelos/categoria/${categorySlug}`
        : '/modelos';

    const collectionStructuredData = isCategoryPage
        ? {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: pageTitle,
            description: pageDescription,
            url: `${SITE_CONFIG.url}${canonical}`,
        }
        : null;

    const breadcrumbStructuredData = isCategoryPage
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Início',
                    item: SITE_CONFIG.url,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Modelos',
                    item: `${SITE_CONFIG.url}/modelos`,
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: categoryFromSlug,
                    item: `${SITE_CONFIG.url}${canonical}`,
                },
            ],
        }
        : null;

    return (
        <div className={styles.wrapper}>
            <SEO
                title={pageTitle}
                description={pageDescription}
                canonical={canonical}
            />
            {collectionStructuredData && (<StructuredData data={collectionStructuredData} />)}
            {breadcrumbStructuredData && (<StructuredData data={breadcrumbStructuredData} />)}

            <Header />

            <main>

                {/* Introdução */}
                <section className={styles.intro}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>
                            Galeria de modelos
                        </span>

                        <h1 className={styles.title}>
                            {isCategoryPage
                                ? `Convites de ${categoryFromSlug}`
                                : 'Encontre o convite que combina com a sua celebração.'}
                        </h1>

                        <p className={styles.subtitle}>
                            {isCategoryPage
                                ? pageDescription
                                : 'Escolha uma categoria para descobrir modelos pensados para cada momento — todos personalizados manualmente pelo Gadioli Studio.'}
                        </p>
                    </div>
                </section>

                {/* Filtro de categorias */}
                <section className={styles.filterSection}>
                    <div className={styles.container}>
                        <div className={styles.filterBar}>

                            <span className={styles.filterLabel}>
                                <SlidersHorizontal size={16} />
                                Filtrar por categoria
                            </span>

                            <div className={styles.pills}>

                                {/* Todos */}
                                <button
                                    className={`${styles.pill} ${active === 'Todos'
                                        ? styles.pillActive
                                        : ''
                                        }`}
                                    onClick={() =>
                                        handleCategoryChange('Todos')
                                    }
                                >
                                    Todos
                                </button>

                                {/* Categorias */}
                                {categoryNames.map((cat) => {
                                    const category = Categories.find(
                                        (category) =>
                                            category.name === cat
                                    );

                                    return (
                                        <button
                                            key={cat}
                                            className={`${styles.pill} ${active === cat
                                                ? styles.pillActive
                                                : ''
                                                }`}
                                            style={{
                                                backgroundColor:
                                                    category?.bg,
                                            }}
                                            onClick={() =>
                                                handleCategoryChange(cat)
                                            }
                                        >
                                            {cat}
                                        </button>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid de modelos */}
                <section className={styles.gridSection}>
                    <div className={styles.container}>

                        {filteredModels.length === 0 ? (
                            <p className={styles.empty}>
                                Nenhum modelo encontrado nesta categoria ainda.
                            </p>
                        ) : (
                            <div className={styles.grid}>

                                {filteredModels.map((model) => (
                                    <ModelCard
                                        key={model.id || model.slug}
                                        model={model}
                                    />
                                ))}

                            </div>
                        )}

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}