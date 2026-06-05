import {
  MockClient,
  MockSupply,
  MockUser,
  Sample,
  SampleStatus,
  StatusFilter,
} from './samples.types';

export const SAMPLE_STATUSES: SampleStatus[] = [
  'Creada',
  'Enviada a Vendedor',
  'Recibida por Vendedor',
  'Entregada a Cliente',
  'En Seguimiento',
  'Rechazada',
];

export const STATUS_FILTERS: StatusFilter[] = ['Todos los estados', ...SAMPLE_STATUSES];

export const MOCK_CLIENTS: MockClient[] = [
  {
    id: 'client-1',
    name: 'ALPI ASOCIACION CIVIL',
    locality: 'CIUDAD DE BUENO',
    address: 'Solís 385, CABA',
    phone: '+54 11 4381-1200',
  },
  {
    id: 'client-2',
    name: 'ASE - ASOC. CIVIL C.A.B.A.',
    locality: 'C.A.B.A.',
    address: 'Av. Belgrano 1820, CABA',
    phone: '+54 11 4378-2240',
  },
  {
    id: 'client-3',
    name: 'HOSP. MUN. SAN JOSE - MUN. CAMPANA',
    locality: 'CAMPANA',
    address: 'Alberdi 576, Campana',
    phone: '+54 3489 40-7200',
  },
  {
    id: 'client-4',
    name: 'MUNIC. C. DE PATAGONES - HOSP. L',
    locality: 'CARMEN DE PATAGONES',
    address: 'Dr. Baraja 740, Carmen de Patagones',
    phone: '+54 2920 46-2100',
  },
  {
    id: 'client-5',
    name: 'HOSP. REG. ESPANOL DE BAHIA BLANCA',
    locality: 'BAHIA BLANCA',
    address: 'Estomba 571, Bahía Blanca',
    phone: '+54 291 459-5555',
  },
  {
    id: 'client-6',
    name: 'CLINICA DELTA S.A.',
    locality: 'CAMPANA',
    address: 'Rawson 327, Campana',
    phone: '+54 3489 42-3100',
  },
  {
    id: 'client-7',
    name: 'CLINICA VIEDMA S.A.',
    locality: 'VIEDMA',
    address: '25 de Mayo 174, Viedma',
    phone: '+54 2920 42-1800',
  },
  {
    id: 'client-8',
    name: 'HOSP. P. DR. RAUL MATERA - SERI',
    locality: 'BAHIA BLANCA',
    address: 'Lainez 2401, Bahía Blanca',
    phone: '+54 291 481-1510',
  },
  {
    id: 'client-9',
    name: 'ASOC. HOSP. ITALIANO REG. DEL SUR',
    locality: 'BAHIA BLANCA',
    address: 'Necochea 675, Bahía Blanca',
    phone: '+54 291 458-3100',
  },
  {
    id: 'client-10',
    name: 'SANATORIO AUSTRAL S.R.L',
    locality: 'VIEDMA',
    address: 'Álvaro Barros 1150, Viedma',
    phone: '+54 2920 43-5500',
  },
];

export const MOCK_SUPPLIES: MockSupply[] = [
  {
    id: 'supply-1',
    name: 'AGUJA ESPINAL N 18',
    brand: 'PREFIX',
    description: 'Aguja estéril para procedimientos de anestesia espinal.',
  },
  {
    id: 'supply-2',
    name: 'BARBIJO / MASCARA KN95 ALTA EFICACIA',
    brand: 'MEDISPO',
    description: 'Máscara de protección respiratoria de alta eficiencia.',
  },
  {
    id: 'supply-3',
    name: 'BOLSAS COLECTORAS DE ORINA X 2 LTS.',
    brand: 'STANDAR BAG',
    description: 'Bolsa colectora graduada con capacidad de dos litros.',
  },
  {
    id: 'supply-4',
    name: 'CAMISOLIN AISL PREMIUM 30GR C/PUN',
    brand: 'MEDISPO',
    description: 'Camisolín de aislamiento descartable con puños ajustables.',
  },
  {
    id: 'supply-5',
    name: 'CANULA NASAL K27 ADULTO',
    brand: 'INTRATUB',
    description: 'Cánula nasal para administración de oxígeno en adultos.',
  },
  {
    id: 'supply-6',
    name: 'CATETER VENOSO CENTRAL 1 LUMEN 14G X 20 CM',
    brand: 'INTRA',
    description: 'Catéter venoso central de un lumen para acceso vascular.',
  },
  {
    id: 'supply-7',
    name: 'GUANTES EXAMEN LATEX',
    brand: 'ON E GLOVES',
    description: 'Guantes de examen de látex descartables no estériles.',
  },
  {
    id: 'supply-8',
    name: 'JERINGA 10 ML C/AGUJA 40/8',
    brand: 'CONTINENTAL',
    description: 'Jeringa descartable de 10 ml con aguja incluida.',
  },
  {
    id: 'supply-9',
    name: 'LLAVE DE 3 VIAS PREMIUM QUALITY',
    brand: 'HARSORIA',
    description: 'Llave de tres vías para administración y conexión de fluidos.',
  },
  {
    id: 'supply-10',
    name: 'MASCARA DE OXIGENO CON RESERVORIO ADULTOS',
    brand: 'INTRATUB',
    description: 'Máscara de oxígeno para adulto con bolsa reservorio.',
  },
  {
    id: 'supply-11',
    name: 'Guias V 14 Continental',
    brand: 'CONTINENTAL',
    description: 'Guía vascular calibre 14 para procedimientos clínicos.',
  },
  {
    id: 'supply-12',
    name: 'Guias con Regulador',
    brand: 'PREFIX',
    description: 'Guía médica con sistema regulador integrado.',
  },
  {
    id: 'supply-13',
    name: 'Guias con medidor volumetrico',
    brand: 'MEDISPO',
    description: 'Guía con cámara y medición volumétrica para infusión.',
  },
  {
    id: 'supply-14',
    name: 'Tiras reactivas',
    brand: 'CONTINENTAL',
    description: 'Tiras para controles rápidos de parámetros clínicos.',
  },
];

export const MOCK_CLIENT_SUPPLY_IDS: Record<string, string[]> = {
  'client-1': ['supply-1', 'supply-7', 'supply-8', 'supply-11', 'supply-12'],
  'client-2': ['supply-2', 'supply-4', 'supply-9'],
  'client-3': ['supply-3', 'supply-5', 'supply-10', 'supply-13'],
  'client-4': ['supply-1', 'supply-6', 'supply-8'],
  'client-5': ['supply-2', 'supply-7', 'supply-10', 'supply-14'],
  'client-6': ['supply-4', 'supply-9', 'supply-12'],
  'client-7': ['supply-3', 'supply-5', 'supply-11'],
  'client-8': ['supply-6', 'supply-8', 'supply-13'],
  'client-9': ['supply-1', 'supply-7', 'supply-9', 'supply-14'],
  'client-10': ['supply-2', 'supply-5', 'supply-10', 'supply-12'],
};

export const MOCK_USERS: MockUser[] = [
  { id: 'user-admin', name: 'Admin', role: 'Admin' },
  { id: 'user-arnaldo', name: 'Arnaldo Parra', role: 'Jefe de Ventas' },
  { id: 'user-manuel', name: 'Manuel Albizu', role: 'Team Leader' },
  { id: 'user-ignacio', name: 'Ignacio Prevostini', role: 'Team Leader' },
  { id: 'user-pablo', name: 'Pablo Lagoria (V)', role: 'Vendedor', isSeller: true },
  { id: 'user-cristian', name: 'Cristian Bohn (V)', role: 'Vendedor', isSeller: true },
  { id: 'user-nicolas', name: 'Nicolas Boschetto (V)', role: 'Vendedor', isSeller: true },
  { id: 'user-sur', name: 'Sur (V)', role: 'Vendedor', isSeller: true },
  { id: 'user-coord-cristian', name: 'Cristian Molina', role: 'Coordinador' },
  { id: 'user-subcoord', name: 'Subcoordinacion', role: 'Subcoordinacion' },
];

export const MOCK_SAMPLES: Sample[] = [
  {
    id: 'sample-1',
    clientId: 'client-1',
    supplyId: 'supply-11',
    sellerId: 'user-nicolas',
    coordinatorId: 'user-arnaldo',
    status: 'Creada',
    nextFollowUp: null,
    updatedAt: '03/06/2026',
    history: [
      {
        id: 'movement-1',
        author: 'Arnaldo Parra',
        authorRole: 'Jefe de Ventas',
        to: 'Creada',
        note: 'Muestra creada.',
        date: '03/06/2026, 10:17',
      },
    ],
  },
  {
    id: 'sample-2',
    clientId: 'client-2',
    supplyId: 'supply-9',
    sellerId: 'user-nicolas',
    coordinatorId: 'user-ignacio',
    status: 'Creada',
    nextFollowUp: null,
    updatedAt: '01/06/2026',
    history: [
      {
        id: 'movement-2',
        author: 'Ignacio Prevostini',
        authorRole: 'Team Leader',
        to: 'Creada',
        note: 'Ingreso inicial.',
        date: '01/06/2026, 09:40',
      },
    ],
  },
  {
    id: 'sample-3',
    clientId: 'client-1',
    supplyId: 'supply-12',
    sellerId: 'user-nicolas',
    coordinatorId: 'user-arnaldo',
    status: 'Creada',
    nextFollowUp: null,
    updatedAt: '04/06/2026',
    history: [
      {
        id: 'movement-3',
        author: 'Arnaldo Parra',
        authorRole: 'Jefe de Ventas',
        to: 'Creada',
        note: 'Muestra creada.',
        date: '04/06/2026, 11:25',
      },
    ],
  },
];
