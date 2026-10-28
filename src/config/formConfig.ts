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
  customModelPlaceholder?: string;
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
        customModelPlaceholder:
          'Ex.: Gostaria de um flyer para um show de pagode, com fundo escuro, luzes coloridas, o nome do cantor em destaque e uma aparência moderna.',
      };

    case 'restaurantes':
    case 'hamburgueria':
    case 'pizzaria':
    case 'pastelaria':
      return {
        nameLabel: 'Nome do local',
        namePlaceholder: 'Ex: Restaurante Gadioli',
        locationLabel: 'Local',
        social: true,
        restaurante: true,
        customModelPlaceholder:
          'Ex.: Gostaria de um modelo de divulgação para meu restaurante, com fotos dos pratos, cores da marca, preços em destaque e um visual apetitoso e profissional.',
      };

    case '15 anos':
      return {
        nameLabel: 'Nome do(a) Aniversariante',
        namePlaceholder: 'Ex: Juliana',
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
        customModelPlaceholder:
          'Ex.: Gostaria de um convite de 15 anos com tons de rosa e dourado, brilho suave, flores e uma aparência sofisticada.',
      };

    case 'casamentos':
      return {
        nameLabel: 'Nome do Noivo e da Noiva',
        namePlaceholder: 'Ex: João e Maria',
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
        customModelPlaceholder:
          'Ex.: Gostaria de um convite de casamento elegante, com tons de bege e branco, flores delicadas, detalhes dourados e tipografia sofisticada.',
      };

    case 'cha de fraldas':
      return {
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
        customModelPlaceholder:
          'Ex.: Gostaria de um convite para chá de fraldas com ursinhos, nuvens, tons pastel e uma aparência delicada e acolhedora.',
      };
    case 'mesversario':
      return {
        event_time: true,
        event_date: true,
        locationLabel: 'Local',
        customModelPlaceholder:
          'Ex.: Gostaria de um convite para mesversario com ursinhos, nuvens, tons pastel e uma aparência delicada e acolhedora.',
      };

    case 'times de futebol':
      return {
        nameLabel: 'Nome do(a) Aniversariante',
        namePlaceholder: 'Ex: Maria, João, José',
        showAge: true,
        event_time: true,
        event_date: true,
        locationLabel: 'Local do evento',
        customModelPlaceholder:
          'Ex.: Gostaria de um convite com tema de futebol, inspirado no meu time favorito, com o escudo em destaque, as cores oficiais do clube e elementos como bolas, gramado e estádio. Quero um visual esportivo e personalizado para a ocasião.',
      };

    default:
      return {
        nameLabel: 'Nome do(a) Aniversariante',
        namePlaceholder: 'Ex: Maria, João, José',
        showAge: true,
        event_time: true,
        event_date: true,
        locationLabel: 'Local do evento',
        customModelPlaceholder:
          'Ex.: Gostaria de um convite de aniversário com tema safari, tons de verde e bege, ilustrações de animais e um estilo delicado e elegante.',
      };
  }
}