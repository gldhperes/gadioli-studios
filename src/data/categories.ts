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
    ImagePizzaria,
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
    Pizzaria: "Pizzaria",
};

const BGs = [
    "#EBE5DD", // 0
    "#F4E7EB", // 1
    "#E1EBF0", // 2
    "#E8E5DD", // 3
    "#E5E8EB", // 4
    "#F0EBE5", // 5
]

const Categories: ICategory[] = [
    {
        name: CategoriesNames._15Anos,
        images: Images15Anos,
        icon: Cake,
        price: 10,
        bg: BGs[0],
    },

    {
        name: CategoriesNames.Aniversarios,
        images: ImagesAniversario,
        icon: Cake,
        price: 10,
        bg: BGs[1]
    },

    {
        name: CategoriesNames.Casamentos,
        images: ImagesCasamento,
        icon: Sparkles,
        price: 10,
        bg: BGs[2]
    },

    {
        name: CategoriesNames.Flyer,
        images: ImagesFlyer,
        icon: Sparkles,
        price: 15,
        bg: BGs[3]
    },

    {
        name: CategoriesNames.Infantil,
        images: ImagesInfantil,
        icon: Sparkles,
        price: 10,
        bg: BGs[4]
    },

    {
        name: CategoriesNames.Times,
        images: ImagesTimeDeFutebol,
        icon: Trophy,
        price: 10,
        bg: BGs[5]
    },

    {
        name: CategoriesNames.Hamburgueria,
        images: ImagesHamburgueria,
        icon: Trophy,
        price: 15,
        bg: BGs[0]
    },

    {
        name: CategoriesNames.Pizzaria,
        images: ImagePizzaria,
        icon: Trophy,
        price: 15,
        bg: BGs[1]
    },



];

export default {
    Categories,
    CategoriesNames,
};