import {Schema , model} from "mongoose"

const categorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: "Product",
        default: []
    }],
    status:{
        type: Boolean,
        default: true
    }
})

categorySchema.methods.toJSON = function(){
    const {status, _id, ...category } = this.toObject();
    category.uid = _id;
    return category;
}


export default model("Category", categorySchema);