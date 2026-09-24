import type IModel from "../interfaces/IModel";
import categoriesData from "./categories";

const price = 10;

const { Categories } = categoriesData;

const createSlug = (value: string) => {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

const models: IModel[] = Categories.flatMap((category) =>
    category.images.map((image) => {
        const slug = createSlug(image.name);

        return {
            id: slug,

            slug,

            image_url: image.image,

            name: image.name,

            category: category.name,

            description: `${image.name}, modelo de convite personalizado para ${category.name.toLowerCase()}.`,

            price,

            isMain: image.isMain,

            seo: {
                title: `${image.name} | Gadioli Studio`,
                description: `${image.name}, modelo de convite personalizado para ${category.name.toLowerCase()}. Escolha seu modelo e personalize seu convite com o Gadioli Studio.`,
            },
        };
    })
);

export default models;