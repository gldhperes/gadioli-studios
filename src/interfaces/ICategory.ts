import type { LucideIcon } from 'lucide-react';
import type IImage from './IImage';

export default interface ICategory {
    name: string;
    images: IImage[];
    icon: LucideIcon;
    bg?: string;
}