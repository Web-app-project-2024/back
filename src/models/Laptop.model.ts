import { model, Document, Schema } from 'mongoose';


export interface ILaptop {
    name: string;
    price: number;
    processorType: string;
    processorCount: number;
    ram: number;
    SSDrom: number;
    HDDrom: number;
    amount: number;
}

export interface ILaptopModel extends ILaptop, Document {
    _doc?: any
}

const LaptopSchema: Schema = new Schema<ILaptop>(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        processorType: {
            type: String,
            required: true,
        },
        processorCount: {
            type: Number,
            required: true,
        },
        ram: {
            type: Number,
            required: true,
        },
        SSDrom: {
            type: Number,
            required: true,
        },
        HDDrom: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const LaptopModel = model<ILaptopModel>('Laptop', LaptopSchema);