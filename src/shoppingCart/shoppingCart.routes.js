import { Router } from "express";
import { editarCarrito, eliminarCarrito, pagarCarrito, registrarCarritoCompra } from "./shoppingCart.controller.js";
import { editarCarritoValidador, eliminarCarritoValidador, pagarCarritoValidador, registrarCarritoCompraValidador } from "../middlewares/shoppingCart-Validator.js";

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

router.delete(
    "/eliminarCarrito/:uid",
    eliminarCarritoValidador,
    eliminarCarrito
)

export default router;