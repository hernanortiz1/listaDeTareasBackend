import Tarea from "../models/tarea.models.js";

export const test = (req, res) => {
  res.status(200);
  res.send("primera prueba desde el backend");
};

export const leerTareas = async (req, res) => {
  try {
    const listaTareas = await Tarea.find({});

    res.status(200).json(listaTareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error  al leer una tarea" });
  }
};

export const leerTareaPorId = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "Tarea no encontrado" });
    }
    //constestar el front
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el tarea" });
  }
};

export const borrarTareaPorId = async (req, res) => {
  try {
 
    const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaEliminada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    //responder front
    res.status(200).json({mensaje: "Tarea eliminada con exito"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar tarea" });
  }
};

export const editarTareaPorId = async (req, res) => {
  try {

    const tareaModificada = await Tarea.findByIdAndUpdate(req.params.id, req.body);
    if (!tareaModificada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    res.status(200).json({mensaje: "Tarea modificada con exito"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al modificar tarea" });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();

    res.status(201).json({ mensaje: "La tarea fue creada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la tarea" });
  }
};
