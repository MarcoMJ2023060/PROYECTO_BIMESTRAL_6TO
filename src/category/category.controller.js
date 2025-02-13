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