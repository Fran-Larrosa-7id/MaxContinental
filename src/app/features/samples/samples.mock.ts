import { MockClient, MockSupply, MockUser, Sample, SampleStatus, StatusFilter } from './samples.types';

export const SAMPLE_STATUSES: SampleStatus[] = [
  'Creada',
  'Enviada a Vendedor',
  'Recibida por Vendedor',
  'Entregada a Cliente',
  'En Seguimiento',
  'Rechazada'
];

export const STATUS_FILTERS: StatusFilter[] = ['Todos los estados', ...SAMPLE_STATUSES];

export const MOCK_CLIENTS: MockClient[] = [
  { id: 'client-1', name: 'ALPI ASOCIACION CIVIL', locality: 'CIUDAD DE BUENO' },
  { id: 'client-2', name: 'ASE - ASOC. CIVIL C.A.B.A.', locality: 'C.A.B.A.' },
  { id: 'client-3', name: 'HOSP. MUN. SAN JOSE - MUN. CAMPANA', locality: 'CAMPANA' },
  { id: 'client-4', name: 'MUNIC. C. DE PATAGONES - HOSP. L', locality: 'CARMEN DE PATAGONES' },
  { id: 'client-5', name: 'HOSP. REG. ESPANOL DE BAHIA BLANCA', locality: 'BAHIA BLANCA' },
  { id: 'client-6', name: 'CLINICA DELTA S.A.', locality: 'CAMPANA' },
  { id: 'client-7', name: 'CLINICA VIEDMA S.A.', locality: 'VIEDMA' },
  { id: 'client-8', name: 'HOSP. P. DR. RAUL MATERA - SERI', locality: 'BAHIA BLANCA' },
  { id: 'client-9', name: 'ASOC. HOSP. ITALIANO REG. DEL SUR', locality: 'BAHIA BLANCA' },
  { id: 'client-10', name: 'SANATORIO AUSTRAL S.R.L', locality: 'VIEDMA' }
];

export const MOCK_SUPPLIES: MockSupply[] = [
  { id: 'supply-1', name: 'AGUJA ESPINAL N 18', brand: 'PREFIX' },
  { id: 'supply-2', name: 'BARBIJO / MASCARA KN95 ALTA EFICACIA', brand: 'MEDISPO' },
  { id: 'supply-3', name: 'BOLSAS COLECTORAS DE ORINA X 2 LTS.', brand: 'STANDAR BAG' },
  { id: 'supply-4', name: 'CAMISOLIN AISL PREMIUM 30GR C/PUN', brand: 'MEDISPO' },
  { id: 'supply-5', name: 'CANULA NASAL K27 ADULTO', brand: 'INTRATUB' },
  { id: 'supply-6', name: 'CATETER VENOSO CENTRAL 1 LUMEN 14G X 20 CM', brand: 'INTRA' },
  { id: 'supply-7', name: 'GUANTES EXAMEN LATEX', brand: 'ON E GLOVES' },
  { id: 'supply-8', name: 'JERINGA 10 ML C/AGUJA 40/8', brand: 'CONTINENTAL' },
  { id: 'supply-9', name: 'LLAVE DE 3 VIAS PREMIUM QUALITY', brand: 'HARSORIA' },
  { id: 'supply-10', name: 'MASCARA DE OXIGENO CON RESERVORIO ADULTOS', brand: 'INTRATUB' },
  { id: 'supply-11', name: 'Guias V 14 Continental', brand: 'CONTINENTAL' },
  { id: 'supply-12', name: 'Guias con Regulador', brand: 'PREFIX' },
  { id: 'supply-13', name: 'Guias con medidor volumetrico', brand: 'MEDISPO' },
  { id: 'supply-14', name: 'Tiras reactivas', brand: 'CONTINENTAL' }
];

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
  { id: 'user-subcoord', name: 'Subcoordinacion', role: 'Subcoordinacion' }
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
        date: '03/06/2026, 10:17'
      }
    ]
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
        date: '01/06/2026, 09:40'
      }
    ]
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
        date: '04/06/2026, 11:25'
      }
    ]
  }
];
