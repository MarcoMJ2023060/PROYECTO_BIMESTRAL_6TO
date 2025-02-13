import { body , param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { productExists, categoryExists } from "../helpers/db-validators.js";

export const registrarMarcaValidador = [
    body("name").not().isEmpty().withMessage("NOMBRE ES REQUERIDO"),
    validarCampos
];

export const añadirMarcasAProductosValidador = [
    param("uid").not().isEmpty().withMessage("EL ID ES REQUERIDO").isMongoId().withMessage("EL ID NO ES VALIDO").custom(categoryExists),
    body("productUid").notEmpty().withMessage("EL ID ES REQUERIDO").isMongoId().withMessage("EL ID NO ES VALIDO").custom(productExists),

]