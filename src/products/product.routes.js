import { Router } from "express";
import { registrarProductos, obtenerProductos, obtenerCatalogo, editarProductos, incrementarInventario, decrementarInventario, productosAgotados, obtenerProductosMasVendidos, eliminarProducto, buscarProductoPorNombre } from "./product.controller.js";
import { registrarProductosValidador, editarProductoValidador, incrementarInventarioValidador, decrementarInventarioValidador, productosAgotadosValidador, eliminarProductoValidador, obtenerProductosMasVendidosValidador, buscarProductoPorNombreValidador, obtenerCatalogoValidador, obtenerProductosValidador } from "../middlewares/product-validator.js";

const router = Router();

/**
 * @swagger
 * /registrarProductos:
 *   post:
 *     summary: Registrar un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               brand:
 *                 type: string
 *     responses:
 *       201:
 *         description: Producto registrado exitosamente
 *       500:
 *         description: Error al registrar el producto
 */
router.post(
    "/registrarProductos",
    registrarProductosValidador,
    registrarProductos
);

/**
 * @swagger
 * /producto/{uid}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al obtener el producto
 */
router.get(
    "/producto/:uid", 
    obtenerProductosValidador,
    obtenerProductos
);

/**
 * @swagger
 * /catalogo:
 *   get:
 *     summary: Obtener el catálogo completo de productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Catálogo obtenido exitosamente
 *       500:
 *         description: Error al obtener el catálogo
 */
router.get(
    "/catalogo", 
    obtenerCatalogoValidador,
    obtenerCatalogo
);

/**
 * @swagger
 * /producto/{uid}:
 *   put:
 *     summary: Editar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               brand:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto editado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al editar el producto
 */
router.put(
    "/producto/:uid", 
    editarProductoValidador, 
    editarProductos
);

/**
 * @swagger
 * /producto/{uid}/incrementarInventario:
 *   put:
 *     summary: Incrementar el inventario de un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Inventario incrementado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al incrementar el inventario
 */
router.put(
    "/producto/:uid/incrementarInventario", 
    incrementarInventarioValidador, 
    incrementarInventario
);

/**
 * @swagger
 * /producto/{uid}/decrementarInventario:
 *   put:
 *     summary: Decrementar el inventario de un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Inventario decrementado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al decrementar el inventario
 */
router.put(
    "/producto/:uid/decrementarInventario", 
    decrementarInventarioValidador, 
    decrementarInventario
);

/**
 * @swagger
 * /productosAgotados:
 *   get:
 *     summary: Obtener productos agotados
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Productos agotados obtenidos exitosamente
 *       500:
 *         description: Error al obtener productos agotados
 */
router.get(
    "/productosAgotados", 
    productosAgotadosValidador, 
    productosAgotados
);

/**
 * @swagger
 * /productosMasVendidos:
 *   get:
 *     summary: Obtener productos más vendidos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Productos más vendidos obtenidos exitosamente
 *       500:
 *         description: Error al obtener productos más vendidos
 */
router.get(
    "/productosMasVendidos",
    obtenerProductosMasVendidosValidador,
    obtenerProductosMasVendidos
);

/**
 * @swagger
 * /eliminarProducto/{uid}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       500:
 *         description: Error al eliminar el producto
 */
router.delete(
    "/eliminarProducto/:uid", 
    eliminarProductoValidador, 
    eliminarProducto
);

router.get(
    "/buscarProductoPorNombre",
    buscarProductoPorNombreValidador,
    buscarProductoPorNombre
)

export default router;