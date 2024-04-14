import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rqnmipt.mongodb.net/`)
    .then(() => console.log("Connected DB"))
    .catch((error) => console.log("Error", error));