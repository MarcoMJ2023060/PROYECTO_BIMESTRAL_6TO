import { Router } from "express";
import { registrarProductos, obtenerProducto, obtenerCatalogo, editarProducto, incrementarInventario, decrementarInventario, productosAgotados, obtenerProductosMasVendidos, eliminarProducto } from "./product.controller.js";
import { registrarProductosValidador, editarProductoValidador, incrementarInventarioValidador, decrementarInventarioValidador, productosAgotadosValidador, eliminarProductoValidador } from "../middlewares/product-validator.js";

const router = Router()

router.post(
    "/registrarProductos",
    registrarProductosValidador,
    registrarProductos
);

router.get(
    "/producto/:uid", 
    obtenerProducto
)
router.get(
    "/catalogo", 
    obtenerCatalogo
)
router.put(
    "/producto/:uid", 
    editarProductoValidador, 
    editarProducto
)

router.put(
    "/producto/:uid/incrementarInventario", 
    incrementarInventarioValidador, 
    incrementarInventario
)
router.put(
    "/producto/:uid/decrementarInventario", 
    decrementarInventarioValidador, 
    decrementarInventario
)

router.get(
    "/productosAgotados", 
    productosAgotadosValidador, 
    productosAgotados
)

router.get(
    "/productosMasVendidos",
    obtenerProductosMasVendidos
)

router.delete(
    "/eliminarProducto/:uid", 
    eliminarProductoValidador, 
    eliminarProducto
)

export default router