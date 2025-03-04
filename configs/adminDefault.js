import bcrypt from "bcrypt"
import Usuario from "../src/user/user.model.js"

export const crearAdmin = async() =>{
    try{
        const adminExistente = await Usuario.findOne({ role: "ADMIN_ROLE" });

        if (adminExistente) {
            console.log("Ya existe un administrador en la base de datos.");
            return;
        }

        const datosAdmin = {
            name: "Fundacion",
            surname: "Kinal",
            username: "admin",
            email: "admin@gmail.com",
            password: "admin123",
            phone:"37996328",
            role: "ADMIN_ROLE"
        };

        const saltos = await bcrypt.genSalt(10);
        datosAdmin.password = await bcrypt.hash(datosAdmin.password, saltos);

        const nuevoAdmin = new Usuario(datosAdmin);
        await nuevoAdmin.save();

        console.log("Administrador por defecto creado exitosamente.");
    }catch(err){
        console.error("Error al crear el administrador por defecto:", err.message);
    }
}