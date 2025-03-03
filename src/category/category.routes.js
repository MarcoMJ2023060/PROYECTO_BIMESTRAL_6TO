import { Router } from "express";
import { registrarMarca, eliminarCategoria, editarCategorias, visualizarCategorias } from "./category.controller.js";
import { registrarMarcaValidador, eliminarCategoriaValidador, actualizarCategoriaValidador } from "../middlewares/category-validator.js";

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
router.delete(
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
    editarCategorias
);

export default router;