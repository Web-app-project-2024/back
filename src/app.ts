import express, { Express } from "express";
import router from "./routers/laptopRouter.js";

import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import './db/index.js';


const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port", process.env.PORT || 3000);
})