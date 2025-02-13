import { Router } from "express";
import {registrarMarca, añadirMarcasAProductos, eliminarCategoria, actualizarCategoria} from "./category.controller.js"
import {registrarMarcaValidador, añadirMarcasAProductosValidador, eliminarCategoriaValidador, actualizarCategoriaValidador} from "../middlewares/category-validator.js"

const router = Router();

router.post(
    "/registrarMarca",
    registrarMarcaValidador,
    registrarMarca
)

router.post(
    "/añadirCategoriaProducto/:uid",
    añadirMarcasAProductosValidador,
    añadirMarcasAProductos
)

router.patch(
    "eliminarCategoria/:uid",
    eliminarCategoriaValidador,
    eliminarCategoria
)

router.patch(
    "actualizarCategoria/:uid",
    actualizarCategoriaValidador,
    actualizarCategoria
)

export default router;