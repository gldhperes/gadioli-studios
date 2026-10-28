import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

// Utils
import { createSlug } from '../../util/createSlug';

// Data
import { ImageModeloPersonalizado } from '../../assets/Images.ts';
import { useReveal } from '../../hooks/useReveal';
import categoriesData from '../../data/categories';
import { getFormConfig } from '../../config/formConfig';

// Styles
import styles from './CustomModel.module.css';

const categories = categoriesData.Categories;
const categoryNames = categoriesData.CategoriesNames;

export default function CustomModel() {

    const ref = useReveal();

    const [selectedCategory, setSelectedCategory] = useState(
        categoryNames.Aniversarios
    );

    // Localiza os dados da categoria selecionada.
    const currentCategory = categories.find(
        (item) => item.name === selectedCategory
    );

    // Obtém os campos ilustrativos correspondentes.
    const formConfig = getFormConfig(selectedCategory);

    // Utiliza a primeira imagem da categoria como prévia.
    const previewImage = currentCategory?.images?.[0];

    const formFields = [
        {
            label: formConfig.nameLabel ?? 'Nome',
            visible: Boolean(formConfig.nameLabel),
            placeholder:
                formConfig.namePlaceholder ?? 'Digite o nome',
        },
        {
            label: 'Idade',
            visible: Boolean(formConfig.showAge),
            placeholder: 'Ex.: 25 anos',
        },
        {
            label: 'Data do evento',
            visible: Boolean(formConfig.event_date),
            placeholder: 'Selecione a data',
        },
        {
            label: 'Horário',
            visible: Boolean(formConfig.event_time),
            placeholder: 'Selecione o horário',
        },
        {
            label: formConfig.locationLabel ?? 'Local do evento',
            visible: Boolean(formConfig.locationLabel),
            placeholder: 'Informe o local',
        },
        {
            label: 'Descrição do modelo personalizado',
            visible: true,
            multiline: true,
            placeholder: formConfig.customModelPlaceholder,
        },
        {
            label: 'Rede social',
            visible: Boolean(formConfig.social),
            placeholder: '@seuperfil',
        },
    ].filter((field) => field.visible);

    return (
        <section
            id="modelo-customizado"
            className={styles.section}
        >
            <div className={styles.container}>
                <header
                    ref={ref}
                    className={`reveal ${styles.header}`}
                >
                    <span className={styles.eyebrow}>
                        Crie algo especial
                    </span>

                    <h2 className={styles.title}>
                        Modelo Personalizado
                    </h2>

                    <p className={styles.description}>
                        Escolha uma categoria e visualize um exemplo de
                        como será o formulário do seu pedido.
                    </p>
                </header>

                <div className={styles.content}>
                    {/* Imagem da categoria */}
                    <div className={styles.preview}>
                        {previewImage ? (
                            <img
                                src={ImageModeloPersonalizado[0].image}
                                alt={`Exemplo de convite: ${selectedCategory}`}
                                className={styles.previewImage}
                            />
                        ) : (
                            <div className={styles.imagePlaceholder}>
                                <span>Prévia do convite</span>
                            </div>
                        )}

                        <span className={styles.previewCaption}>
                            Categoria: {selectedCategory}
                        </span>
                    </div>

                    {/* Formulário demonstrativo */}
                    <div className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <h3 className={styles.formTitle}>
                                Personalize seu pedido
                            </h3>

                            <p className={styles.formDescription}>
                                Selecione uma categoria para visualizar os
                                campos disponíveis.
                            </p>
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="custom-model-category"
                                className={styles.label}
                            >
                                Categoria do modelo
                            </label>

                            <div className={styles.selectWrapper}>
                                <select
                                    id="custom-model-category"
                                    className={styles.input}
                                    value={selectedCategory}
                                    onChange={(event) =>
                                        setSelectedCategory(event.target.value)
                                    }
                                >
                                    {Object.values(categoryNames).map((name) => (
                                        <option key={name} value={name}>
                                            {name}
                                        </option>
                                    ))}
                                </select>

                                <ChevronDown
                                    size={18}
                                    className={styles.selectIcon}
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <div className={styles.formFields}>
                            {formFields.map((field) => (
                                <div
                                    key={field.label}
                                    className={styles.formGroup}
                                >
                                    <label className={styles.label}>
                                        {field.label}
                                    </label>

                                    {field.multiline ? (
                                        <textarea
                                            className={`${styles.input} ${styles.textarea}`}
                                            placeholder={field.placeholder}
                                            disabled
                                            readOnly
                                            tabIndex={-1}
                                            rows={4}
                                        />
                                    ) : (
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder={field.placeholder}
                                            disabled
                                            readOnly
                                            tabIndex={-1}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {formConfig.showPhotoNote && (
                            <p className={styles.helpText}>
                                Esta categoria pode incluir uma foto no material.
                            </p>
                        )}

                        <Link to={`/personalizados/${createSlug(selectedCategory)}`} className={styles.submitButton}>
                            Fazer modelo personalizado
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>

                    </div>
                </div>
            </div>
        </section >
    );
}