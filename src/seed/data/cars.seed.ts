import { v4 as uuid } from 'uuid';

export const CARS_SEED = [
    {
        id:uuid(),
        brand:'Toyota',
        mode:'Corolla'
    },
    {
        id:uuid(),
        brand:'Civic',
        mode:'Corolla2'
    },
    {
        id:uuid(),
        brand:'Bocho',
        mode:'Corolla3'
    }
]