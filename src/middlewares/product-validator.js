import { body  } from "express-validator";
import { validarCampos } from "./validar-campos.js";

export const registrarProductosValidador = [
    body("name").not().isEmpty().withMessage("NOMBRE ES REQUERIDO"),
    body("description").not().isEmpty().withMessage("DESCRIPCION ES REQUERIDA"),
    body("price").not().isEmpty().withMessage("PRECIO ES REQUERIDO").isNumeric().withMessage("EL PRECIO DEBE SER NUMERO"),
    body("stock").notEmpty().withMessage("STOCK INVALIDO").isNumeric().withMessage("EL STOCK DEBE SER NUMERO"),
    body("brand").notEmpty().withMessage("EL PRODUCTO DEBE TENER UNA MARCA"),
    validarCampos
];