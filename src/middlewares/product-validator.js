import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { productExists } from "../helpers/db-validators.js";
import { handleErrors } from "./handle-errors.js";
import {validateJWT} from "./validate-jwt.js" ;
import {hasRoles} from "./validate-roles.js";

export const registrarProductosValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name").not().isEmpty().withMessage("NOMBRE ES REQUERIDO"),
    body("description").not().isEmpty().withMessage("DESCRIPCION ES REQUERIDA"),
    body("price").not().isEmpty().withMessage("PRECIO ES REQUERIDO").isNumeric().withMessage("EL PRECIO DEBE SER NUMERO"),
    body("stock").notEmpty().withMessage("STOCK INVALIDO").isNumeric().withMessage("EL STOCK DEBE SER NUMERO"),
    body("brand").notEmpty().withMessage("EL PRODUCTO DEBE TENER UNA MARCA"),
    validarCampos
];

export const editarProductoValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name").optional().not().isEmpty().withMessage("NOMBRE ES REQUERIDO"),
    body("description").optional().not().isEmpty().withMessage("DESCRIPCION ES REQUERIDA"),
    body("price").optional().not().isEmpty().withMessage("PRECIO ES REQUERIDO").isNumeric().withMessage("EL PRECIO DEBE SER NUMERO"),
    body("stock").optional().notEmpty().withMessage("STOCK INVALIDO").isNumeric().withMessage("EL STOCK DEBE SER NUMERO"),
    body("brand").optional().notEmpty().withMessage("EL PRODUCTO DEBE TENER UNA MARCA"),
    validarCampos
];

export const incrementarInventarioValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("cantidad").notEmpty().withMessage("CANTIDAD ES REQUERIDA").isNumeric().withMessage("LA CANTIDAD DEBE SER NUMERO"),
    validarCampos
]

export const decrementarInventarioValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("cantidad").notEmpty().withMessage("CANTIDAD ES REQUERIDA").isNumeric().withMessage("LA CANTIDAD DEBE SER NUMERO"),
    validarCampos
]

export const productosAgotadosValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("stock").notEmpty().withMessage("STOCK INVALIDO").isNumeric().withMessage("EL STOCK DEBE SER UN NUMERO"),
    validarCampos
]

export const eliminarProductoValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("uid").isMongoId().withMessage("NO ES UN ID VALIDO"),
    param("uid").custom(productExists),
    validarCampos,
    handleErrors
]

export const obtenerProductosMasVendidosValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "CLIENT_ROLE")
]

export const buscarProductoPorNombreValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "CLIENT_ROLE")
]

export const obtenerCatalogoValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE")
]

export const obtenerProductosValidador = [
    validateJWT,
    hasRoles("ADMIN_ROLE")
]