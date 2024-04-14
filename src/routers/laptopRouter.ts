import express, { Router } from "express";

const router: Router = express.Router();

router.get('/laptop', (req, res) => res.status(200).json({msg: "hello"}))

export default router;