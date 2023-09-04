import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): any[];
    getCarById(id: number): any;
    createCar(body: any): any;
    updateCar(id: number, body: any): any;
    deleteCar(id: number): {
        method: string;
        id: number;
    };
}
