import { Injectable } from '@nestjs/common';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  populateDB() {
    // BRAND_SEED
    // CARS_SEED
    return BRAND_SEED;
  }
}
