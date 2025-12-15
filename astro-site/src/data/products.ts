
export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    amountInCents: number;
}

export const products: Product[] = [
    {
        id: 'sku-001',
        name: 'Kit de Blanqueamiento',
        description: 'Sistema profesional para blanquear tus dientes desde la comodidad de tu casa.',
        price: '$120.000 COP',
        image: '/images/products/whitening-kit.png',
        amountInCents: 12000000
    },
    {
        id: 'sku-002',
        name: 'Cepillo Eléctrico Pro',
        description: 'Tecnología sónica para una limpieza profunda y protección de encías.',
        price: '$220.000 COP',
        image: '/images/products/electric-toothbrush.png',
        amountInCents: 22000000
    },
    {
        id: 'sku-003',
        name: 'Irrigador Bucal',
        description: 'Complemento ideal para tu higiene, eliminando residuos donde el cepillo no llega.',
        price: '$180.000 COP',
        image: '/images/products/water-flosser.png',
        amountInCents: 18000000
    }
];
