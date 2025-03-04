import ShoppingCart, { shoppingCart } from "../shoppingCart/shoppingCart.model.js"
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

export const pagarCarrito = async(req,res) =>{
    try{
        const {uid} = req.params
        const cart = await ShoppingCart.findById(uid)

        for (let i = 0; i < cart.products.length; i++) {
            const restStock = await Product.findOne({code: cart.products[i]})
            await Product.findByIdAndUpdate(restStock.id,{$inc: {stock: -1}}, {new: true})
        }

        await ShoppingCart.findByIdAndUpdate(uid,{status: "PAYED"})
        await User.findByIdAndUpdate(cart.user, {$push: {history: uid}})

        return res.status(201).json({
            message: "Thank you for your purchase, come back soon!",   
            cart
        })

    }catch(error){
        return res.status(500).json({
            message: "Pay cart failed",
            error: error.message
        })
    }
}
