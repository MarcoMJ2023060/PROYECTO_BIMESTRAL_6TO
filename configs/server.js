"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConexion } from "./mongo.js"

const middlewares = (app) =>{
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
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
        app.listen(process.env.PORT)
        console.log(`SERVER CORRIENDO EN EL PUERTO ${process.env.PORT}`)
    }catch(err){
        console.log(`FALLO INICIO DEL SERVIDOR: ${err}`) 
    }
}