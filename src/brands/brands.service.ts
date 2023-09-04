import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getDate(),
    },
  ];
  create(createBrandDto: CreateBrandDto) {
    const car: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getDate(),
    };
    this.brands.push(car);
    return car;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const car = this.brands.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`This car does't exist: ${id}`);
    return car;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
  fillBrandWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
