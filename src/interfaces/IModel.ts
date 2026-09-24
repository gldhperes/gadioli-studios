export default interface IModel {
    id?: string;

    slug: string;

    image_url: string;

    name: string;

    category: string;

    description: string;

    price: number;

    isMain?: boolean;

    customization?: string;

    delivery_time?: string;

    after_purchase?: string;

    seo?: {
        title?: string;
        description?: string;
    };
}