import { ILaptop, ILaptopModel, LaptopModel } from "../models/Laptop.model.js";


class LaptopService {
    async createLaptop(laptopData: Partial<ILaptop>): Promise<ILaptopModel> {
        return await LaptopModel.create(laptopData);
    }

    async findAllLaptops(): Promise<ILaptopModel[] | null> {
        return await LaptopModel.find();
    }

    async updateLaptop(id: string, laptopNewData: Partial<ILaptop>): Promise<ILaptopModel | null> {
        return await LaptopModel.findByIdAndUpdate({_id: id}, laptopNewData);
    }

    async deleteLaptop(id: string): Promise<ILaptopModel | null> {
        return await LaptopModel.findByIdAndDelete(id);
    }

}

export default new LaptopService();