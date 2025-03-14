"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConexion } from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import userRoutes from "../src/user/user.routes.js"
import productRoutes from "../src/products/product.routes.js"
import categoryRoutes from "../src/category/category.routes.js"
import shoppingCart from "../src/shoppingCart/shoppingCart.routes.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js"
import { swaggerDocs, swaggerUi } from "./swagger.js"

const middlewares = (app) =>{
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) =>{
    app.use("/proyectoBimestral/v1/auth", authRoutes)
    app.use("/proyectoBimestral/v1/user", userRoutes)
    app.use("/proyectoBimestral/v1/products" , productRoutes)
    app.use("/proyectoBimestral/v1/category", categoryRoutes)
    app.use("/proyectoBimestral/v1/shoppingCart", shoppingCart)
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

const conectarDB = async () =>{
    try{
        await dbConexion()
    }catch(e){
        console.log(`DATABASE CONNECTION FAILED: ${e}`)
        process.exit(1)    
    }
}

export const inicioServidor = () =>{
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`SERVER CORRIENDO EN EL PUERTO ${process.env.PORT}`)
    }catch(err){
        console.log(`FALLO INICIO DEL SERVIDOR: ${err}`) 
    }
}