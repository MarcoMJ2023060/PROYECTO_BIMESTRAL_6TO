import Product from "../products/product.model.js"

export const registrarProductos = async(req,res) =>{
    try{
        const data = req.body
        const product = await Product.create(data)

        return res.status(201).json({
            message: "Brand has been registred",
            product
        })
    }catch(error){
        return res.status(500).json({
            message: "Brand registration failed",
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
                message: "Product not found"
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to retrieve product",
            error: error.message
        });
    }
};

export const obtenerCatalogo = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({
            message: "Failed to retrieve catalog",
            err: error.message
        });
    }
};

export const editarProductos = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;
        const product = await Product.findByIdAndUpdate(uid, data, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json({
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update product",
            error: error.message
        });
    }
};

export const incrementarInventario = async (req, res) => {
    try {
        const { uid } = req.params;
        const { cantidad } = req.body;
        const product = await Product.findByIdAndUpdate(uid, { $inc: { stock: cantidad } }, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json({
            message: "Inventory increased successfully",
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to increase inventory",
            error: error.message
        });
    }
};

export const decrementarInventario = async (req, res) => {
    try {
        const { uid } = req.params;
        const { cantidad } = req.body;
        const product = await Product.findByIdAndUpdate(uid, { $inc: { stock: -cantidad } }, { new: true });
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json({
            message: "Inventory decreased successfully",
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to decrease inventory",
            error: error.message
        });
    }
};

export const productosAgotados = async (req, res) => {
    try {
        const products = await Product.find({ stock: { $lte: 0 } });
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({
            message: "Failed to retrieve out of stock products",
            error: err.message
        });
    }
};

export const obtenerProductosMasVendidos= async (req, res) => {
    try {
        const { limite, desde } = req.body;

        // Obtener los productos más vendidos ordenados por cantidad de ventas
        const products = await Product.find({ state: true })
            .sort({ sales: -1 })
            .skip(Number(desde))
            .limit(Number(limite));

        res.status(200).json({
            total: products.length,
            products
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error retrieving most sold products',
            error: error.message
        });
    }
}

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