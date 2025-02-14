import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Proyecto Bimestral API",
            version: "1.0.0",
            description: "API para un sistema de gestión de ventas en linea",
            contact:{
                name: "Marco Bolaños",
                email: "marcojosepro2007@gmail.com"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/proyectoBimestral/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/product/product.routes.js",
        "./src/category/category.routes.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}