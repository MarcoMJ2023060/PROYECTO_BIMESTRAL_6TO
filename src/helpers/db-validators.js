import User from "../user/user.model.js"
import Product from "../products/product.model.js"
import Category from "../category/category.model.js"

export const emailExists = async (email = "") => {
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${email} is already registered`)
    }
}

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const userExists = async (uid = " ") => {
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error("No existe el usuario con el ID proporcionado")
    }
}

export const productExists = async(uid = " ") =>{
    const existe = await Product.findById(uid);
    if(!existe){
        throw new Error("No existe el producto con el ID proporcionado");
    }
}

export const categoryExists = async(uid = "") =>{
    const existe = await Category.findById(uid);
    if(!existe){
        throw new Error("No existe la category con el ID proporcionado");
    }
}