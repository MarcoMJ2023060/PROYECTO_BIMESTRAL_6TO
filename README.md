# 🎯 PROYECTO_BIMESTRAL_6TO 🎯
PROYECTO_BIMESTRAL_PRIMER_BIMESTRE_SEXTO API DISEÑADA PARA GESTIONAR VENTAS EN LINEA

## 🚀 PRERREQUISITOS 🚀

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14+ recomendado)
- [npm](https://www.npmjs.com/) (viene incluido con NodeJS)

## 🔧 INSTALACIÓN 🔧

Sigue estos pasos para configurar el proyecto localmente:

1. **Crea una carpeta local** (donde quieras almacenar el proyecto)
   ```cmd
   mkdir nombre-carpeta  
2. **Navega a la carpeta recién creada**
    ```cmd
   cd nombre-carpeta
3. **Clona el repositorio**
    ```cmd
   git clone <ENLAREREPOSITORIODEGITHUB>
4. **Accede al directorio del proyecto clonado**
   ```cmd
   cd nombre-del-proyecto
5. **Abrir codigo fuente del proyecto clonado, dentro del directorio ejecutar el comando**
   ```cmd
   code .
6. **Instala las dependencias**
    ```cmd
   npm i
7. **Iniciar proyecto en modo desarrollo**
    ```cmd
    npm run dev

## «ADMIN» CREDENCIALES LOGEO ADMIN DEFAULT «ADMIN»
 - **Cuerpo:**
    ```json
    {
    "email":"admin@gmail.com",
    "username":"admin",
    "password":"admin123"
    }
    ```

## 📍 CATEGORIA DEFAULT 📍
- **SE GENERA AUTOMATICAMENTE AL INICIAR EL SERVIDOR DE LA API**
## 📍 DATOS DE LA CATEGORIA POR DEFECTO 📍
- **name: "General"**
- **categoryDescription: "Esta categoría agrupa productos que no tienen una clasificación especifica"**

## 🌐 ENDPOINTS DE LA API PROYECTO BIMESTRAL 🌐
- **ESTA API CUENTA CON 28 ENDPOINTS LA COLECCION DE ESTOS LA ENCUENTRAS EN "CONFIGS"**
## 🔐 MODULO AUTH 🔐
- 📝 **REGISTRAR USUARIOS** 📝
- **URL:** `/proyectoBimestral/v1/auth/register`
- **METODO:** 🟡`POST`🟡
- **BODY/FORM DATA**
- **KEY:**
- **name** Text
- **username** Text
- **email** Text
- **surname** Text
- **profilePicture** File
- **password** Text
- **phone** Text
- **VALUE:**
- **LOS QUE DESEE INGRESAR EL USUARIO AL IGUAL QUE EL ARCHIVO DE FOTO QUE DESEE**

- 🔓**LOGIN ADMIN**🔓
- **URL:** `/proyectoBimestral/v1/auth/login`
- **METODO:** 🟡`POST`🟡
- **Cuerpo:**
    ```json
    {
    "email":"admin@gmail.com",
    "username":"admin",
    "password":"admin123"
    }
    ```
    
- 🔓**LOGIN CLIENTE**🔓
- **URL:** `/proyectoBimestral/v1/auth/login`
- **METODO:** 🟡`POST`🟡
- **Cuerpo:**
    ```json
    {
    "email":"string",
    "username":"string",
    "password":"string"
    }
    ```
    
## 🙍🏻‍♂️ MODULO USER 🙍🏻‍♂️
- 🔎 **BUSCAR USUARIO POR ID/INDIVIDUAL** 🔍
- **URL:** `/proyectoBimestral/v1/user/findUser/:uid`
- **METODO:** 🟢`GET`🟢

- ➤ **LISTADO DE USUARIOS** ➤
- **URL:** `/proyectoBimestral/v1/user/`
- **METODO:** 🟢`GET`🟢

- ❌ **ELIMINAR USUARIOS** ❌
- **URL:** `/proyectoBimestral/v1/user/deleteUser/:uid`
- **METODO:** 🔴`DELETE`🔴

- 🔄 **ACTUALIZAR CONTRASEÑA** 🔄
- **URL:** `/proyectoBimestral/v1/user/updatePassword/:uid`
- **METODO:** 🟣`PATCH`🟣
- **Cuerpo:**
    ```json
    {
    "newPassword":"string" 
    }
- **CONTRASEÑA MINIMO 8 CARACTERES/ 1 MAYUSCULA, 1 NUMERO, 1 CARACTER ESPECIAL**
    
- 🔄 **ACTUALIZAR USUARIO** 🔄
- **URL:** `/proyectoBimestral/v1/user/updateUser/:uid`
- **METODO:** 🔵`PUT`🔵
- **Cuerpo:**
    ```json
    {
    "name":"string",
    "surname":"string",
    "username":"string",
    "email":"string",
    "phone":"string"
    }
    ```

- 🔄 **ACTUALIZAR FOTO PERFIL/ID** 🔄
- **URL:** `/proyectoBimestral/v1/user/actualizarFotoPerfil/uid`
- **METODO:** 🟣`PATCH`🟣
- **BODY/FORM DATA**
- **KEY:**
- **profilePicture** File

## ⚖ MODULO CATEGORY ⚖
- 📑 **REGISTRAR MARCA** 📑
- **URL:** `/proyectoBimestral/v1/category/registrarMarca`
- **METODO:** 🟡`POST`🟡
- **Cuerpo:**
    ```json
    {
    "name":"string",
    "categoryDescription":"string"
    }
    ```
- 👀 **VISUALIZAR CATEGORIAS** 👀
- **URL:** `/proyectoBimestral/v1/category/visualizarCategorias`
- **METODO:** 🟢`GET`🟢

- ✏️ **EDITAR CATEGORIA** ✏️
- **URL:** `/proyectoBimestral/v1/category/actualizarCategoria/:uid`
- **METODO:** 🟣`PATCH`🟣
- **Cuerpo:**
    ```json
    {
    "name":"string",
    "categoryDescription":"string"
    }
    ```

- ⛔ **ELIMINAR CATEGORIA** ⛔
- **URL:** `/proyectoBimestral/v1/category/eliminarCategoria/:uid`
- **METODO:** 🔴`DELETE`🔴

## 📦 MODULO PRODUCTOS 📦
- 📑 **REGISTRAR PRODUCTOS** 📑
- **URL:** `/proyectoBimestral/v1/products/registrarProductos`
- **METODO:** 🟡`POST`🟡
- **Cuerpo:**
    ```json
    {
    "name":"string",
    "description":"string",
    "price":"numero",
    "stock":"numero",
    "brand":"string",
    "category":"string",
    "code": numero
    }
    ```
- ↩️**OBTENER UN PRODUCTO**↩️
- **URL:** `/proyectoBimestral/v1/products/producto/:uid`
- **METODO:** 🟢`GET`🟢

-  ↩️**OBTENER CATALOGO PRODUCTOS**↩️
- **URL:** `/proyectoBimestral/v1/products/catalogo`
- **METODO:** 🟢`GET`🟢

- 🔄 **ACTUALIZAR UN PRODUCTO** 🔄
- **URL:** `/proyectoBimestral/v1/products/producto/:uid`
- **METODO:** 🔵`PUT`🔵
- **Cuerpo:**
    ```json
    {
    "name":"string",
    "description":"string",
    "price":"numero",
    "stock":"numero",
    "brand":"string",
    "code": numero
    }
    ```

- ➕ **INCREMENTAR INVENTARIO** ➕
- **URL:** `/proyectoBimestral/v1/products/producto/:uid/incrementarInventario`
- **METODO:** 🔵`PUT`🔵
- **Cuerpo:**
    ```json
    {
     "cantidad":"numero"
    }
    ```

- ➖ **DECREMENTAR INVENTARIO** ➖
- **URL:** `/proyectoBimestral/v1/products/producto/:uid/decrementarInventario`
- **METODO:** 🔵`PUT`🔵
- **Cuerpo:**
    ```json
    {
     "cantidad":"numero"
    }
    ```

- ❗ **PRODUCTOS AGOTADOS** ❗
- **URL:** `/proyectoBimestral/v1/products/productosAgotados`
- **METODO:** 🟢`GET`🟢
- **Cuerpo:**
    ```json
    {
     "stock":"0"
    }
- **SI EL STOCK DEL PRODUCTO ES 0 NOS DEVOLVERA EL O LOS PRODUCTOS, SI NO HAY PRODUCTOS CON 0 DE STOCK NO DEVOLVERA NINGUN PRODUCTO**

- 🍠 **PRODUCTOS MAS VENDIDOS** 🍠
- **URL:** `/proyectoBimestral/v1/products/productosMasVendidos`
- **METODO:** 🟢`GET`🟢

- ⛔ **ELIMINAR PRODUCTO** ⛔
- **URL:** `/proyectoBimestral/v1/products/eliminarProducto/:uid`
- **METODO:** 🔴`DELETE`🔴

-  「 ✦ 𝐍𝐚𝐦𝐞 ✦ 」 **PRODUCTO POR NOMBRE** 「 ✦ 𝐍𝐚𝐦𝐞 ✦ 」
- **URL:** `/proyectoBimestral/v1/products/buscarProductoPorNombre`
- **METODO:** 🟢`GET`🟢
- **SE MANDA EN "PARAMS" ATRIBUTO "name" EN EL VALOR UN NOMBRE QUE EXISTA EN LA BASE DE DATOS Y NOS LO TRAE**

- ⚖️ **PRODUCTO POR CATEGORIA** ⚖️
- **URL:** `/proyectoBimestral/v1/products/buscarProductoPorCategoria`
- **METODO:** 🟢`GET`🟢
- - **SE MANDA EN "PARAMS" ATRIBUTO "category" EN EL VALOR DE CATEGORY QUE EXISTA EN LA BASE DE DATOS Y NOS LO TRAE**
 
## 🛒 MODULO CARRITO DE COMPRAS 🛒
- 🎨 **CREAR CARRITO** 🎨
- **URL:** `/proyectoBimestral/v1/shoppingCart/registrarCarritoCompra`
- **METODO:** 🟡`POST`🟡
- **Cuerpo:**
    ```json
    {
    "products":[numero],
    "user":"string"
    }
    ```
- **USER SE ENVIA UN ID DE USUARIO REGISTRADO EN LA BASE DE DATOS**
- **PRODUCTS:SE ENVIA EL VALOR DEL ATRIBUTO "CODE" REGISTRADO EN PRODUCTOS EN LA BASE DE DATOS**

- 💸 **PAGAR CARRITO** 💸
- **URL:** `/proyectoBimestral/v1/shoppingCart/pagarCarrito/:uid`
- **METODO:** 🟣`PATCH`🟣
- **AL PAGAR GENERA LA FACTURA EN PUBLIC/UPLOADS/BILLS**

- **ACTUALIZAR CARRITO**

- 🔄 **ACTUALIZAR CARRITO** 🔄
- **URL:** `/proyectoBimestral/v1/products/producto/:uid`
- **METODO:** 🟣`PATCH`🟣
- **Cuerpo:**
    ```json
    {
    "deleteProduct":[numero],
    "addproduct":[numero]
    }
    ```
    - **DELETEPRODUCT:RECIBE EL CODIGO YA REGISTRADO EN EL CARRITO DE COMPRA**
    - **ADDPRODUCT: RECIBE EL NUEVO CODIGO QUE LE ACTUALIZARA AL CARRITO**
 
-  ⛔ **ELIMINAR CARRITO** ⛔
- **URL:** `/proyectoBimestral/v1/shoppingCart/eliminarCarrito/:uid`
- **METODO:** 🔴`DELETE`🔴

##  🚨 ASPECTOS IMPORTANTES 🚨
