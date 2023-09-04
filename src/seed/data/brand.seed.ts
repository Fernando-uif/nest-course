import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getDay(),
  },
  {
    id: uuid(),
    name: 'Toyota2',
    createdAt: new Date().getDay(),
  },
  {
    id: uuid(),
    name: 'Toyota3',
    createdAt: new Date().getDay(),
  },
];
