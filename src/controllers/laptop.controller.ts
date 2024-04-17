import { Request, Response } from "express";
import laptopService from "../services/laptop.service.js";


export const post = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await laptopService.createLaptop(data);
        res.status(200).json(
            result
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const get = async (req: Request, res: Response) => {
    try {
        const result = await laptopService.findAllLaptops();
        res.status(200).json(
            result
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const put = async (req: Request, res: Response) => {
    try {
        const id: string = req.query.id as string;
        const data = req.body;
        const result = await laptopService.updateLaptop(id, data);
        res.status(200).json(
            result
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await laptopService.deleteLaptop(id);
        res.status(200).json(
            result
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}