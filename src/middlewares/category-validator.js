import { body , param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { productExists, categoryExists } from "../helpers/db-validators.js";

export const registrarMarcaValidador = [
    body("name").not().isEmpty().withMessage("NOMBRE ES REQUERIDO"),
    body("categoryDescription").not().isEmpty().withMessage("DESCRIPCION ES REQUERIDA"),
    validarCampos
]

export const eliminarCategoriaValidador = [
    param("uid").not().isEmpty().withMessage("EL ID ES REQUERIDO").isMongoId().withMessage("EL ID NO ES VALIDO").custom(categoryExists),
    validarCampos
]

export const actualizarCategoriaValidador = [
    param("uid").not().isEmpty().withMessage("EL ID ES REQUERIDO").isMongoId().withMessage("EL ID NO ES VALIDO").custom(categoryExists),
    body("name").optional(),
    body("categoryDescription").optional(),
    validarCampos
]