import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModelCard from '../components/ModelCard';

// Data
import categoriesData from '../data/categories';
import models from '../data/models';

// Style
import styles from './Modelos.module.css';

export default function Modelos() {
    const { Categories, CategoriesNames } = categoriesData;

    const categoryNames = Object.values(CategoriesNames);

    const [searchParams, setSearchParams] = useSearchParams();

    const categoryParam = searchParams.get('categoria');

    const initialCategory =
        categoryParam && categoryNames.includes(categoryParam)
            ? categoryParam
            : 'Todos';

    const [active, setActive] = useState(initialCategory);

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

    const filteredModels =
        active === 'Todos'
            ? models
            : models.filter((model) => model.category === active);

    return (
        <div className={styles.wrapper}>
            <Header />

            <main>

                {/* Introdução */}
                <section className={styles.intro}>
                    <div className={styles.container}>
                        <span className={styles.eyebrow}>
                            Galeria de modelos
                        </span>

                        <h1 className={styles.title}>
                            Encontre o convite que combina com a sua celebração.
                        </h1>

                        <p className={styles.subtitle}>
                            Escolha uma categoria para descobrir modelos pensados
                            para cada momento — todos personalizados manualmente
                            pelo Gadioli Studio.
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
                                    className={`${styles.pill} ${
                                        active === 'Todos'
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
                                            className={`${styles.pill} ${
                                                active === cat
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