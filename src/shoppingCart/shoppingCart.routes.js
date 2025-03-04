import { Router } from "express";
import { pagarCarrito, registrarCarritoCompra } from "./shoppingCart.controller.js";
import { pagarCarritoValidador, registrarCarritoCompraValidador } from "../middlewares/shoppingCart-Validator.js";

const router = Router();

router.post(
    "/registrarCarritoCompra",
    registrarCarritoCompraValidador,
    registrarCarritoCompra
)

router.patch(
    "/pagarCarrito/:uid",
    pagarCarritoValidador,
    pagarCarrito
)

export default router;