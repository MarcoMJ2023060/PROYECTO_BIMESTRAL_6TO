import { Router } from "express";
import { registrarMarca, añadirMarcasAProductos, eliminarCategoria, actualizarCategoria, visualizarCategorias } from "./category.controller.js";
import { registrarMarcaValidador, añadirMarcasAProductosValidador, eliminarCategoriaValidador, actualizarCategoriaValidador } from "../middlewares/category-validator.js";

const router = Router();

/**
 * @swagger
 * /registrarMarca:
 *   post:
 *     summary: Registrar una nueva marca
 *     tags: [Categorías]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Marca registrada exitosamente
 *       500:
 *         description: Error al registrar la marca
 */
router.post(
    "/registrarMarca",
    registrarMarcaValidador,
    registrarMarca
);

/**
 * @swagger
 * /añadirCategoriaProducto/{uid}:
 *   post:
 *     summary: Añadir una categoría a un producto
 *     tags: [Categorías]
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
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría añadida exitosamente
 *       500:
 *         description: Error al añadir la categoría
 */
router.post(
    "/añadirCategoriaProducto/:uid",
    añadirMarcasAProductosValidador,
    añadirMarcasAProductos
);

/**
 * @swagger
 * /visualizarCategorias:
 *   get:
 *     summary: Visualizar todas las categorías
 *     tags: [Categorías]
 *     responses:
 *       200:
 *         description: Categorías obtenidas exitosamente
 *       500:
 *         description: Error al obtener las categorías
 */
router.get(
    "/visualizarCategorias",
    visualizarCategorias
);

/**
 * @swagger
 * /eliminarCategoria/{uid}:
 *   patch:
 *     summary: Eliminar una categoría por ID
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       500:
 *         description: Error al eliminar la categoría
 */
router.patch(
    "/eliminarCategoria/:uid",
    eliminarCategoriaValidador,
    eliminarCategoria
);

/**
 * @swagger
 * /actualizarCategoria/{uid}:
 *   patch:
 *     summary: Actualizar una categoría por ID
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *       500:
 *         description: Error al actualizar la categoría
 */
router.patch(
    "/actualizarCategoria/:uid",
    actualizarCategoriaValidador,
    actualizarCategoria
);

export default router;