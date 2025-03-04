import { hash } from "argon2"; // Cambio aquí
import Usuario from "../src/user/user.model.js";

export const crearAdmin = async () => {
  try {
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
      phone: "37996328",
      role: "ADMIN_ROLE",
    };

    // Usar Argon2 en lugar de bcrypt
    const encryptedPassword = await hash(datosAdmin.password); // Cambio aquí
    datosAdmin.password = encryptedPassword;

    const nuevoAdmin = new Usuario(datosAdmin);
    await nuevoAdmin.save();

    console.log("Administrador creado exitosamente con Argon2.");
  } catch (err) {
    console.error("Error al crear el administrador:", err.message);
  }
};