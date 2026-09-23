import type IModel from "../interfaces/IModel";
import categoriesData from "./categories";

const price = "10,00";

const { Categories } = categoriesData;

const models: IModel[] = Categories.flatMap((category, categoryIndex) =>
    category.images.map((image, imageIndex) => {
        const modelNumber = imageIndex + 1;

        return {
            id: `${categoryIndex + 1}-${modelNumber}`,

            slug: `${category.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")}-${modelNumber}`,

            image_url: image.image,

            name: image.name,

            category: category.name,

            description: `Modelo de convite para ${category.name.toLowerCase()}.`,

            price: price,

            isMain: image.isMain,
        };
    })
);

export default models;