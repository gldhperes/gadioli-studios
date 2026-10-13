import type IModel from "../interfaces/IModel";
import categoriesData from "../data/categories";
import { getProductContent } from "../data/productContent";

const { Categories } = categoriesData;

const createSlug = (value: string) => {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

const models: IModel[] = Categories.flatMap((category: any) =>
    category.images.map((image: any) => {
        const slug = createSlug(image.name);

        return {
            id: slug,

            slug,

            image_url: image.image,

            name: image.name,

            category: category.name,

            description: getProductContent(category.name, image.name).description,

            longDescription: getProductContent(category.name, image.name).longDescription,

            price: category.price,

            isMain: image.isMain,

            seo: {
                title: `${image.name} | Gadioli Studio`,
                description: getProductContent(category.name, image.name).description,
            },
        };
    })
);

export default models;
