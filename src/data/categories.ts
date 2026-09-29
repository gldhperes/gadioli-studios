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
        price: 10,
        bg: "#EBE5DD",
    },

    {
        name: CategoriesNames.Aniversarios,
        images: ImagesAniversario,
        icon: Cake,
        price: 10,
        bg: "#F4E7EB",
    },

    {
        name: CategoriesNames.Casamentos,
        images: ImagesCasamento,
        icon: Sparkles,
        price: 10,
        bg: "#E1EBF0",
    },

    {
        name: CategoriesNames.Flyer,
        images: ImagesFlyer,
        icon: Sparkles,
        price: 15,
        bg: "#E8E5DD",
    },

    {
        name: CategoriesNames.Infantil,
        images: ImagesInfantil,
        icon: Sparkles,
        price: 10,
        bg: "#E5E8EB",
    },

    {
        name: CategoriesNames.Times,
        images: ImagesTimeDeFutebol,
        icon: Trophy,
        price: 10,
        bg: "#F0EBE5",
    },

    {
        name: CategoriesNames.Hamburgueria,
        images: ImagesHamburgueria,
        icon: Trophy,
        price: 15,
        bg: "#EBE5DD",
    },

];

export default {
    Categories,
    CategoriesNames,
};