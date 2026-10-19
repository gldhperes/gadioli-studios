import CategoriesNames from '../data/categories.ts';

export interface FormConfig {
  nameLabel?: string;
  namePlaceholder?: string;
  event_time?: boolean;
  event_date?: boolean;
  locationLabel?: string;
  showPhotoNote?: boolean;
  social?: boolean;
  restaurante?: boolean;
  showAge?: boolean;
}

/**
 * Normaliza o texto para comparar categorias sem depender
 * de maiúsculas, acentos ou espaços extras.
 */
function normalizeCategory(category: string): string {
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

/**
 * Categorias disponíveis no catálogo.
 */
export const FORM_CATEGORIES = CategoriesNames;

/**
 * Retorna os campos correspondentes à categoria selecionada.
 */
export function getFormConfig(category: string): FormConfig {
  switch (normalizeCategory(category)) {
    case 'flyer':
      return {
        nameLabel: 'Nome do(a) cantor(a)',
        namePlaceholder: 'Ex: João, Maria, Banda XYZ',
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
        showPhotoNote: true,
      };

    case 'restaurantes':
    case 'hamburgueria':
      return {
        nameLabel: 'Nome do local',
        namePlaceholder: 'Ex: Restaurante Gadioli',
        locationLabel: 'Local',
        social: true,
        restaurante: true,
      };

    case 'casamentos':
      return {
        nameLabel: 'Nome do Noivo e da Noiva',
        namePlaceholder: 'Ex: João e Maria',
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
      };

    case 'cha de fraldas':
    case 'mesversario':
      return {
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
      };

    default:
      return {
        nameLabel: 'Nome do(a) Aniversariante',
        namePlaceholder: 'Ex: Maria, João, José',
        showAge: true,
        event_time: true,
        event_date: true,
        locationLabel: 'Local do evento',
      };
  }
}