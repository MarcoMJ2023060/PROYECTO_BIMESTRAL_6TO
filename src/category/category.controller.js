import Category from "../category/category.model.js"
import Product from "../products/product.model.js"

export const registrarMarca = async(req,res) =>{
    try{
        const data = req.body
        const category = await Category.create(data)
        return res.status(201).json({
            message: "MARCA HA SIDO REGISTRADA",
            name: category.name
        })
    }catch(err){
        return res.status(500).json({
            message: "FALLO EL REGISTRO DE LA MARCA",
            error: err.message
        })
    }
}

export const añadirMarcasAProductos = async(req,res) =>{
    try{
        const { uid } = req.params
        const productUid = req.body

        const category = await Category.findById(uid)
        const product = await Product.findById(productUid);

        const addProduct = await Category.findByIdAndUpdate(category, {$push: {products: product}}, {new: true})        
        await Product.findByIdAndUpdate(product, {$push: {category: category}}, {new: true})

        return res.status(201).json({
            message: "MARCA HA SIDO REGISTRADA",
            addProduct
        })
    }catch(err){
        return res.status(500).json({
            message: "FALLO EL REGISTRO DE LA MARCA",
            error: err.message
        })
    }
}

export const eliminarCategoria = async (req, res) => {
    try {

        const { uid } = req.params;
        const category = await Category.findById(uid);
        const productIds = category.products;

        if (!category) {
            return res.status(404).json({
                message: "CATEGORIA NO ENCONTRADA" 
            })
        }

        await Category.findByIdAndUpdate(uid, { status: false, products: [] }, { new: true });
        await Product.updateMany({ category: uid },{ category: null });

        return res.status(200).json({ 
            message: "CATEGORIA ELIMINADA DE PRODUCTOS" 
        });

    } catch (err) {
        return res.status(500).json({
            message: "FALLO EN LA ELIMINACION DE LA CATEGORIA",
            error: err.message
        })
    }
}


export const actualizarCategoria = async(req,res) => {
    try{
        const { uid } = req.params;
        const data = req.body

        const category = await Category.findById(uid)

        if(!category){
            return res.status(404).json({
                message: "CATEGORIA NO EXISTE",
                error: err.message
            })
        }

        const updatedCategory = await Category.findByIdAndUpdate(uid, data, {new: true})
        
        return res.status(200).json({ 
            message: "CATEGORIA ACTUALIZADA",
            updatedCategory
        })

    }catch(err){
        return res.status(500).json({
            message: "FALLO EN LA ACTUALIZACION DE LA CATEGORIA",
            error: err.message
        })
    }
}

export const visualizarCategorias = async (req, res) => {
    try{
        const { limite = 5, desde = 0 } = req.query
        const query = { status: true }

        const [total, categories ] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            categories
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: err.message
        })
    }
}