import { Router } from "express";
import { registrarProductos } from "./product.controller.js";
import { registrarProductosValidador } from "../middlewares/product-validator.js";

const router = Router()

router.post(
    "/registrarProductos",
    registrarProductosValidador,
    registrarProductos
)

export default router