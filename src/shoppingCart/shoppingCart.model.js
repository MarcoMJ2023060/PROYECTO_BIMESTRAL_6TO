import { Schema , model } from "mongoose"

export const shoppingCart = new Schema({
    products:[{
        type: Number,
        required: true
    }],
    user:{
        type: Schema.Types.ObjectId,
        required: [true, "The user is required"],
        ref: "User"
    },
    total:{
    type: Number
    },
    status:{
        type: String,
        enum: ["PENDING", "PAYED"],
        default: "PENDING"
    }
})

shoppingCart.methods.toJSON = function(){
    const { __v, status, _id, ...shoppingCart } = this.toObject();
    shoppingCart.uid = _id;
    return shoppingCart;
};

export default model("ShoppingCart", shoppingCart);