export default interface IModel {
  id?: string;
  slug: string;
  image_url: string;
  name: string;
  category: string;
  description: string;
  price: string;
  isMain?: boolean;

  customization?: string;
  delivery_time?: string;
  after_purchase?: string;
}