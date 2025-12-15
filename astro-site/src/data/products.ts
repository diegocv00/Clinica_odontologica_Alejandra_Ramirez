
import type { ImageMetadata } from 'astro';
import whiteningKit from '../assets/images/products/whitening-kit.png';
import electricToothbrush from '../assets/images/products/electric-toothbrush.png';
import waterFlosser from '../assets/images/products/water-flosser.png';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: ImageMetadata;
    amountInCents: number;
}

export const products: Product[] = [
    {
        id: 'sku-001',
        name: 'Kit de Blanqueamiento',
        description: 'Sistema profesional para blanquear tus dientes desde la comodidad de tu casa.',
        price: '$120.000 COP',
        image: whiteningKit,
        amountInCents: 12000000
    },
    {
        id: 'sku-002',
        name: 'Cepillo Eléctrico Pro',
        description: 'Tecnología sónica para una limpieza profunda y protección de encías.',
        price: '$220.000 COP',
        image: electricToothbrush,
        amountInCents: 22000000
    },
    {
        id: 'sku-003',
        name: 'Irrigador Bucal',
        description: 'Complemento ideal para tu higiene, eliminando residuos donde el cepillo no llega.',
        price: '$180.000 COP',
        image: waterFlosser,
        amountInCents: 18000000
    }
];
