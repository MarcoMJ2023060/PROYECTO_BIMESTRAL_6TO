import { Router } from "express";
import { editarCarrito, eliminarCarrito, pagarCarrito, registrarCarritoCompra } from "./shoppingCart.controller.js";
import { editarCarritoValidador, eliminarCarritoValidador, pagarCarritoValidador, registrarCarritoCompraValidador } from "../middlewares/shoppingCart-Validator.js";

const router = Router();

/**
 * @swagger
 * /registrarCarritoCompra:
 *   post:
 *     summary: Registrar un nuevo carrito de compra
 *     tags: [ShoppingCart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // ...detallar propiedades esperadas...
 *     responses:
 *       201:
 *         description: Carrito registrado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post(
    "/registrarCarritoCompra",
    registrarCarritoCompraValidador,
    registrarCarritoCompra
)

/**
 * @swagger
 * /pagarCarrito/{uid}:
 *   patch:
 *     summary: Pagar el carrito de compra
 *     tags: [ShoppingCart]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carrito
 *     responses:
 *       200:
 *         description: Carrito pagado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Carrito no encontrado
 */
router.patch(
    "/pagarCarrito/:uid",
    pagarCarritoValidador,
    pagarCarrito
)

/**
 * @swagger
 * /editarCarrito/{uid}:
 *   patch:
 *     summary: Editar el carrito de compra
 *     tags: [ShoppingCart]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // ...detallar propiedades esperadas...
 *     responses:
 *       200:
 *         description: Carrito editado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Carrito no encontrado
 */
router.patch(
    "/editarCarrito/:uid",
    editarCarritoValidador,
    editarCarrito
)

/**
 * @swagger
 * /eliminarCarrito/{uid}:
 *   delete:
 *     summary: Eliminar el carrito de compra
 *     tags: [ShoppingCart]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del carrito
 *     responses:
 *       200:
 *         description: Carrito eliminado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Carrito no encontrado
 */
router.delete(
    "/eliminarCarrito/:uid",
    eliminarCarritoValidador,
    eliminarCarrito
)

export default router;