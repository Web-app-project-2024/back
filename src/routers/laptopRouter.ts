import express, { Router } from "express";
import * as LaptopController from '../controllers/laptop.controller.js';

const router: Router = express.Router();

router.get('/laptops', LaptopController.get);
router.post('/laptops', LaptopController.post);
router.put('/laptops/:id', LaptopController.put);
router.delete('/laptops/:id', LaptopController.remove)

export default router;