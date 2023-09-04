"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BrandsService = class BrandsService {
    constructor() {
        this.brands = [
            {
                id: (0, uuid_1.v4)(),
                name: 'Toyota',
                createdAt: new Date().getDate(),
            },
        ];
    }
    create(createBrandDto) {
        const car = {
            id: (0, uuid_1.v4)(),
            name: createBrandDto.name.toLowerCase(),
            createdAt: new Date().getDate(),
        };
        this.brands.push(car);
        return car;
    }
    findAll() {
        return this.brands;
    }
    findOne(id) {
        const car = this.brands.find((car) => car.id === id);
        if (!car)
            throw new common_1.NotFoundException(`This car does't exist: ${id}`);
        return car;
    }
    update(id, updateBrandDto) {
        return `This action updates a #${id} brand`;
    }
    remove(id) {
        return `This action removes a #${id} brand`;
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map