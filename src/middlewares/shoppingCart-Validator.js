import {body, param} from "express-validator"
import { validarCampos } from "./validar-campos.js"
import { handleErrors } from "./handle-errors.js"
import { codeExist, shoppingCartExist } from "../helpers/db-validators.js"
import { validateJWT } from "./validate-jwt.js"
import { hasRoles } from "./validate-roles.js"

export const registrarCarritoCompraValidador = [
    validateJWT,
    hasRoles("CLIENT_ROLE"),
    body("user").not().isEmpty().withMessage("User is required").isMongoId().withMessage("This id is'nt valid"),
    body("products").notEmpty().withMessage("The products is required").custom(codeExist),
    validarCampos,
    handleErrors
];

export const pagarCarritoValidador =[
    validateJWT,
    hasRoles("CLIENT_ROLE"),
    param("uid").notEmpty().withMessage("The uid is required").custom(shoppingCartExist),
    validarCampos,
    handleErrors
]

export const editarCarritoValidador = [
    validateJWT,
    hasRoles("CLIENT_ROLE"),
    param("uid").notEmpty().withMessage("The uid is required").custom(shoppingCartExist),
    body("addProduct").optional().custom(codeExist),
    body("deleteProduct").optional().custom(codeExist),
    validarCampos,
    handleErrors
]

export const eliminarCarritoValidador = [
    validateJWT,
    hasRoles("CLIENT_ROLE"),
    param("uid").notEmpty().withMessage("The uid is required").custom(shoppingCartExist),
    validarCampos,
    handleErrors
]