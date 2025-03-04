import ShoppingCart from "../shoppingCart/shoppingCart.model.js"
import Product from "../products/product.model.js"
import User from "../user/user.model.js"

export const registrarCarritoCompra = async(req,res) =>{
    try{

        const data = req.body
        let total = 0
        const {products} = req.body
        
        for (let i = 0; i < products.length; i++) {
            let value = await Product.findOne({code: products[i]})
            total += value.price
        }

        data.total = total; 

        const shoppingCart = await ShoppingCart.create(data)

        return res.status(201).json({
            message: "Buy Cart has been created",   
            shoppingCart
        })
    }catch(error){
            return res.status(500).json({
            message: "Buy cart creation failed",
            error: error.message
        })
    }
}