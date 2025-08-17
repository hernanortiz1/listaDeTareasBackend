import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  inputTarea: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 50,
    unique: true,
  },
});
const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;