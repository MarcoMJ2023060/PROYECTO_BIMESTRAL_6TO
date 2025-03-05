import { Router } from "express";
import { editarCarrito, pagarCarrito, registrarCarritoCompra } from "./shoppingCart.controller.js";
import { editarCarritoValidador, pagarCarritoValidador, registrarCarritoCompraValidador } from "../middlewares/shoppingCart-Validator.js";

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

router.patch(
    "/editarCarrito/:uid",
    editarCarritoValidador,
    editarCarrito
)
export default router;