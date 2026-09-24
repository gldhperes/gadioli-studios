import categoriesData from './categories';

const { CategoriesNames } = categoriesData;

const createSlug = (value: string) => {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const categorySlugs: Record<string, string> = Object.values(
  CategoriesNames
).reduce((acc, category) => {
  acc[category] = createSlug(category);
  return acc;
}, {} as Record<string, string>);