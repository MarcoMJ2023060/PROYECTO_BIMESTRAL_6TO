import Product from "../products/product.model.js"

export const registrarProductos = async(req,res) =>{
    try{
        const data = req.body
        const product = await Product.create(data)

        return res.status(201).json({
            message: "PRODUCTO HA SIDO REGISTRADO",
            product
        })
    }catch(error){
        return res.status(500).json({
            message: "FALLO EN EL REGISTRO DEL PRODUCTO",
            error: error.message
        })
    }
}

export const obtenerProductos = async (req, res) => {
    try {
        const { uid } = req.params;
        const product = await Product.findById(uid);
        if (!product) {
            return res.status(404).json({
                message: "PRODUCTO NO ENCONTRADO"
            })
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "FALLO AL RECUPERAR EL PRODUCTO",
            error: error.message
        })
    }
}

export const obtenerCatalogo = async (req, res) => {
    try {
        const query = { status: true }
        const products = await Product.find(query);
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({
            message: "FALLO AL RECUPERAR EL CATALOGO",
            err: err.message
        })
    }
}

export const editarProductos = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;
        const product = await Product.findByIdAndUpdate(uid, data, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "PRODUCTO NO ENCONTRADO"
            })
        }
        return res.status(200).json({
            message: "PRODUCTO ACTUALIZADO CORRECTAMENTE",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "ERROR AL ACTUALIZAR EL PRODUCTO",
            error: error.message
        })
    }
}

export const incrementarInventario = async (req, res) => {
    try {
        const { uid } = req.params;
        const { cantidad } = req.body;
        const product = await Product.findByIdAndUpdate(uid, { $inc: { stock: cantidad } }, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "PRODUCTO NO ENCONTRADO"
            })
        }
        return res.status(200).json({
            message: "INVENTAARIO INCREMENTADO CORRECTAMENTE",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "FALLO AL INCREMENTAR EL INVENTARIO",
            error: error.message
        })
    }
}

export const decrementarInventario = async (req, res) => {
    try {
        const { uid } = req.params;
        const { cantidad } = req.body;
        const product = await Product.findByIdAndUpdate(uid, { $inc: { stock: -cantidad } }, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "PRODUCTO NO ENCONTRADO"
            })
        }
        return res.status(200).json({
            message: "INVENTAARIO DECREMENTADO CORRECTAMENTE",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message: "FALLO AL DECREMENTAR EL INVENTARIO",
            error: error.message
        })
    }
}

export const productosAgotados = async (req, res) => {
    try {
        const products = await Product.find({ stock: { $lte: 0 } });
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({
            message: "ERROR AL RECIBIR EL STOCK DE PRODUCTOS",
            error: err.message
        })
    }
}

export const obtenerProductosMasVendidos = async (req, res) => {
    try {
        const { limite = 10, desde = 0 } = req.query;

        // Validar parámetros numéricos
        if (isNaN(limite) || isNaN(desde)) {
            return res.status(400).json({ msg: "limite y desde deben ser números" });
        }

        // Obtener productos ordenados por stock (menor a mayor)
        const [total, products] = await Promise.all([
            Product.countDocuments({ status: true }), // Total de productos activos
            Product.find({ status: true })
                .sort({ stock: 1 }) // 1 = ascendente (menor stock primero), -1 = descendente
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        res.status(200).json({ total, products });

    } catch (error) {
        res.status(500).json({
            msg: 'ERROR AL RECUPERAR LOS PRODUCTOS',
            error: error.message
        });
    }
};

export const eliminarProducto = async (req, res) => {
    try{
        const { uid } = req.params
        
        const product = await Product.findByIdAndUpdate(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "PRODUCTO ELIMINADO",
            product
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "ERRO AL ELIMIANR EL PRODUCTO",
            error: err.message
        })
    }
}

export const buscarProductoPorNombre = async (req, res) => {
    try {
        const { limite = 10, desde = 0, name } = req.query;
        
        const query = { status: true };
        if (name) {
            query.name = name.toString();
        }
        const [total, products] = await Promise.all([
            Product.countDocuments(query),
            Product.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            products
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER EL NOMBRE",
            error: err.message
        })
    }
}