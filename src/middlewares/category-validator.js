import { body , param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { productExists, categoryExists } from "../helpers/db-validators.js";
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validate-roles.js";

export const registrarMarcaValidador = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    body("name").not().isEmpty().withMessage("NOMBRE ES REQUERIDO"),
    body("categoryDescription").not().isEmpty().withMessage("DESCRIPCION ES REQUERIDA"),
    validarCampos
]

export const eliminarCategoriaValidador = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    param("uid").not().isEmpty().withMessage("EL ID ES REQUERIDO").isMongoId().withMessage("EL ID NO ES VALIDO").custom(categoryExists),
    validarCampos
]

export const actualizarCategoriaValidador = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    param("uid").not().isEmpty().withMessage("EL ID ES REQUERIDO").isMongoId().withMessage("EL ID NO ES VALIDO").custom(categoryExists),
    body("name").optional(),
    body("categoryDescription").optional(),
    validarCampos
]

export const visualizarCategoriasValidador = [
    validateJWT,
    hasRoles('ADMIN_ROLE')
]