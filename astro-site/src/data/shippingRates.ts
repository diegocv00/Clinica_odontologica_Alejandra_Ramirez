export interface ShippingRate {
    id: string;
    name: string;
    price: number;
}

export const SHIPPING_RATES: ShippingRate[] = [
    {
        id: 'local',
        name: 'Local (Bucaramanga, Piedecuesta, Floridablanca, Girón)',
        price: 8000,
    },
    {
        id: 'nacional',
        name: 'Nacional (Bogotá, Medellín, Cali, etc.)',
        price: 16000,
    },
    {
        id: 'especial',
        name: 'Trayectos Especiales (San Andrés, Leticia, etc.)',
        price: 25000,
    }
];

export const DEPARTMENTS = [
    "Amazonas",
    "Antioquia",
    "Arauca",
    "Atlántico",
    "Bogotá D.C.",
    "Bolívar",
    "Boyacá",
    "Caldas",
    "Caquetá",
    "Casanare",
    "Cauca",
    "Cesar",
    "Chocó",
    "Córdoba",
    "Cundinamarca",
    "Guainía",
    "Guaviare",
    "Huila",
    "La Guajira",
    "Magdalena",
    "Meta",
    "Nariño",
    "Norte de Santander",
    "Putumayo",
    "Quindío",
    "Risaralda",
    "San Andrés y Providencia",
    "Santander",
    "Sucre",
    "Tolima",
    "Valle del Cauca",
    "Vaupés",
    "Vichada"
];

export const CITIES = [
    // Santander (Local)
    { label: 'Bucaramanga', value: 'local', department: 'Santander' },
    { label: 'Piedecuesta', value: 'local', department: 'Santander' },
    { label: 'Floridablanca', value: 'local', department: 'Santander' },
    { label: 'Girón', value: 'local', department: 'Santander' },
    { label: 'Barrancabermeja', value: 'local', department: 'Santander' },
    { label: 'San Gil', value: 'local', department: 'Santander' },
    { label: 'Socorro', value: 'local', department: 'Santander' },
    { label: 'Vélez', value: 'local', department: 'Santander' },

    // Antioquia
    { label: 'Medellín', value: 'nacional', department: 'Antioquia' },
    { label: 'Bello', value: 'nacional', department: 'Antioquia' },
    { label: 'Itagüí', value: 'nacional', department: 'Antioquia' },
    { label: 'Envigado', value: 'nacional', department: 'Antioquia' },
    { label: 'Apartadó', value: 'nacional', department: 'Antioquia' },
    { label: 'Rionegro', value: 'nacional', department: 'Antioquia' },
    { label: 'Turbo', value: 'nacional', department: 'Antioquia' },
    { label: 'Caucasia', value: 'nacional', department: 'Antioquia' },

    // Bogotá
    { label: 'Bogotá D.C.', value: 'nacional', department: 'Bogotá D.C.' },

    // Valle del Cauca
    { label: 'Cali', value: 'nacional', department: 'Valle del Cauca' },
    { label: 'Buenaventura', value: 'nacional', department: 'Valle del Cauca' },
    { label: 'Palmira', value: 'nacional', department: 'Valle del Cauca' },
    { label: 'Tuluá', value: 'nacional', department: 'Valle del Cauca' },
    { label: 'Buga', value: 'nacional', department: 'Valle del Cauca' },
    { label: 'Cartago', value: 'nacional', department: 'Valle del Cauca' },

    // Atlántico
    { label: 'Barranquilla', value: 'nacional', department: 'Atlántico' },
    { label: 'Soledad', value: 'nacional', department: 'Atlántico' },
    { label: 'Malambo', value: 'nacional', department: 'Atlántico' },
    { label: 'Sabanalarga', value: 'nacional', department: 'Atlántico' },

    // Bolívar
    { label: 'Cartagena', value: 'nacional', department: 'Bolívar' },
    { label: 'Magangué', value: 'nacional', department: 'Bolívar' },
    { label: 'Turbaco', value: 'nacional', department: 'Bolívar' },
    { label: 'El Carmen de Bolívar', value: 'nacional', department: 'Bolívar' },

    // Boyacá
    { label: 'Tunja', value: 'nacional', department: 'Boyacá' },
    { label: 'Duitama', value: 'nacional', department: 'Boyacá' },
    { label: 'Sogamoso', value: 'nacional', department: 'Boyacá' },
    { label: 'Chiquinquirá', value: 'nacional', department: 'Boyacá' },

    // Caldas
    { label: 'Manizales', value: 'nacional', department: 'Caldas' },
    { label: 'La Dorada', value: 'nacional', department: 'Caldas' },
    { label: 'Chinchiná', value: 'nacional', department: 'Caldas' },

    // Cauca
    { label: 'Popayán', value: 'nacional', department: 'Cauca' },
    { label: 'Santander de Quilichao', value: 'nacional', department: 'Cauca' },

    // Cesar
    { label: 'Valledupar', value: 'nacional', department: 'Cesar' },
    { label: 'Aguachica', value: 'nacional', department: 'Cesar' },

    // Córdoba
    { label: 'Montería', value: 'nacional', department: 'Córdoba' },
    { label: 'Lorica', value: 'nacional', department: 'Córdoba' },
    { label: 'Sahagún', value: 'nacional', department: 'Córdoba' },

    // Cundinamarca
    { label: 'Soacha', value: 'nacional', department: 'Cundinamarca' },
    { label: 'Fusagasugá', value: 'nacional', department: 'Cundinamarca' },
    { label: 'Facatativá', value: 'nacional', department: 'Cundinamarca' },
    { label: 'Zipaquirá', value: 'nacional', department: 'Cundinamarca' },
    { label: 'Chía', value: 'nacional', department: 'Cundinamarca' },
    { label: 'Girardot', value: 'nacional', department: 'Cundinamarca' },
    { label: 'Mosquera', value: 'nacional', department: 'Cundinamarca' },

    // Huila
    { label: 'Neiva', value: 'nacional', department: 'Huila' },
    { label: 'Pitalito', value: 'nacional', department: 'Huila' },

    // La Guajira
    { label: 'Riohacha', value: 'nacional', department: 'La Guajira' },
    { label: 'Maicao', value: 'nacional', department: 'La Guajira' },

    // Magdalena
    { label: 'Santa Marta', value: 'nacional', department: 'Magdalena' },
    { label: 'Ciénaga', value: 'nacional', department: 'Magdalena' },

    // Meta
    { label: 'Villavicencio', value: 'nacional', department: 'Meta' },
    { label: 'Acacías', value: 'nacional', department: 'Meta' },

    // Nariño
    { label: 'Pasto', value: 'nacional', department: 'Nariño' },
    { label: 'Tumaco', value: 'nacional', department: 'Nariño' },
    { label: 'Ipiales', value: 'nacional', department: 'Nariño' },

    // Norte de Santander
    { label: 'Cúcuta', value: 'nacional', department: 'Norte de Santander' },
    { label: 'Ocaña', value: 'nacional', department: 'Norte de Santander' },
    { label: 'Villa del Rosario', value: 'nacional', department: 'Norte de Santander' },
    { label: 'Pamplona', value: 'nacional', department: 'Norte de Santander' },

    // Quindío
    { label: 'Armenia', value: 'nacional', department: 'Quindío' },
    { label: 'Calarcá', value: 'nacional', department: 'Quindío' },

    // Risaralda
    { label: 'Pereira', value: 'nacional', department: 'Risaralda' },
    { label: 'Dosquebradas', value: 'nacional', department: 'Risaralda' },
    { label: 'Santa Rosa de Cabal', value: 'nacional', department: 'Risaralda' },

    // Sucre
    { label: 'Sincelejo', value: 'nacional', department: 'Sucre' },
    { label: 'Corozal', value: 'nacional', department: 'Sucre' },

    // Tolima
    { label: 'Ibagué', value: 'nacional', department: 'Tolima' },
    { label: 'Espinal', value: 'nacional', department: 'Tolima' },

    // San Andrés (Especial)
    { label: 'San Andrés', value: 'especial', department: 'San Andrés y Providencia' },

    // Amazonas (Especial)
    { label: 'Leticia', value: 'especial', department: 'Amazonas' },

    // Arauca
    { label: 'Arauca', value: 'nacional', department: 'Arauca' },

    // Casanare
    { label: 'Yopal', value: 'nacional', department: 'Casanare' },

    // Caquetá
    { label: 'Florencia', value: 'nacional', department: 'Caquetá' },

    // Chocó
    { label: 'Quibdó', value: 'nacional', department: 'Chocó' },

    // Putumayo
    { label: 'Mocoa', value: 'nacional', department: 'Putumayo' },

    // Guainía, Guaviare, Vaupés, Vichada (Especiales / Nacionales depending on carrier, usually expensive/special)
    // Treating as national for now unless specified otherwise, but often these are special. 
    // Given the initial rules, only San Andres/Leticia were special. I'll stick to national for others to avoid confusion, 
    // or maybe 'especial' is safer for remote areas. Let's stick to 'nacional' for simplicity unless it's an island/amazon deep.
    { label: 'Inírida', value: 'especial', department: 'Guainía' },
    { label: 'San José del Guaviare', value: 'nacional', department: 'Guaviare' },
    { label: 'Mitú', value: 'especial', department: 'Vaupés' },
    { label: 'Puerto Carreño', value: 'especial', department: 'Vichada' }
];
