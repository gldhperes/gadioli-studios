import {
    Trophy,
    Cake,
    Sparkles,
} from 'lucide-react';

import {
    Images15Anos,
    ImagesAniversario,
    ImagesCasamento,
    ImagesFlyer,
    ImagesInfantil,
    ImagesTimeDeFutebol,
    ImagesHamburgueria,
} from "../assets/Images";

import type ICategory from '../interfaces/ICategory';

const CategoriesNames = {
    _15Anos: "15 Anos",
    Aniversarios: "Aniversários",
    Casamentos: "Casamentos",
    Flyer: "Flyer",
    Infantil: "Infantil",
    Times: "Times de Futebol",
    Hamburgueria: "Hamburgueria",
};

const Categories: ICategory[] = [
    {
        name: CategoriesNames._15Anos,
        images: Images15Anos,
        icon: Cake,
        bg: "#EBE5DD",
    },

    {
        name: CategoriesNames.Aniversarios,
        images: ImagesAniversario,
        icon: Cake,
        bg: "#F4E7EB",
    },

    {
        name: CategoriesNames.Casamentos,
        images: ImagesCasamento,
        icon: Sparkles,
        bg: "#E1EBF0",
    },

    {
        name: CategoriesNames.Flyer,
        images: ImagesFlyer,
        icon: Sparkles,
        bg: "#E8E5DD",
    },

    {
        name: CategoriesNames.Infantil,
        images: ImagesInfantil,
        icon: Sparkles,
        bg: "#E5E8EB",
    },

    {
        name: CategoriesNames.Times,
        images: ImagesTimeDeFutebol,
        icon: Trophy,
        bg: "#F0EBE5",
    },

    {
        name: CategoriesNames.Hamburgueria,
        images: ImagesHamburgueria,
        icon: Trophy,
        bg: "#EBE5DD",
    },

];

export default {
    Categories,
    CategoriesNames,
};