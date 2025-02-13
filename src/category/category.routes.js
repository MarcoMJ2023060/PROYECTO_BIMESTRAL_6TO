import { Router } from "express";
import {registrarMarca, añadirMarcasAProductos} from "./category.controller.js"
import {registrarMarcaValidador, añadirMarcasAProductosValidador} from "../middlewares/category-validator.js"

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

export default router;