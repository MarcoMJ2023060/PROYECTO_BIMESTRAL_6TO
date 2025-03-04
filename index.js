import { config } from "dotenv"
import { inicioServidor } from "./configs/server.js"
import { categoryDefault } from "./src/category/category.controller.js"
import {adminDefault} from "./configs/adminDefault.js"


config()
inicioServidor()
categoryDefault()
adminDefault()