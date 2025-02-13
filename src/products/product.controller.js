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