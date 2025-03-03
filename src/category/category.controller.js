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

export const eliminarCategoria = async (req, res) => {
    try{
        const {uid} = req.params

        const categoryExists = await Category.findById(uid);
        if (!categoryExists) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        await Category.findByIdAndDelete(uid)

        const categoryDefault = await Category.findOne({ name: "General" });
        await Product.updateMany({ category: uid }, { category: categoryDefault._id });

        return res.status(200).json({
            sucess: true,
            message: "Delete Category",
            category: categoryExists
        })

    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error deleting category',
            error: error.message
        })
    }
}

export const categoryDefault = async (req, res) => {
    const category = await Category.findOne({ name: "General" });
        if (!category) {
            await Category.create({
                name: "General",
                categoryDescription: "Esta categoría agrupa productos que no tienen una clasificación específica",});
        }
}

export const editarCategorias = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;
        const category = await Category.findByIdAndUpdate(uid, data, { new: true });
        if (!category) {
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