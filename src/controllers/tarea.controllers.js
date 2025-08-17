import Tarea from "../models/tarea.models.js"

export const test = (req, res,)=>{
    res.status(200)
    res.send("primera prueba desde el backend")   
}

export const leerTareas = (req, res)=>{
}

export const creartareas = async (req, res) =>{
    try {
        //recibir obj que tengo que agregagr a BD
        console.log(req.body)
    //validar datos del obj

    //guardar obj en BD
        const nuevoProducto = new Producto(req.body)
        await nuevoProducto.save(); //guarda el obj en la BD
    //enviar respuesta
    res.status(201).json({mensaje: "La tarea fue crear exitosamente"}) //representa que el prod fue creado
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Error al crear la tarea"})
    }
    
}