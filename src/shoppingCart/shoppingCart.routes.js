import { Router } from "express";
import { registrarCarritoCompra } from "./shoppingCart.controller.js";
import { registrarCarritoCompraValidador } from "../middlewares/shoppingCart-Validator.js";

const router = Router();

router.post(
    "/registrarCarritoCompra",
    registrarCarritoCompraValidador,
    registrarCarritoCompra
)

export default router;