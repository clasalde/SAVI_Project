import mongoose from "mongoose";

//Defino el Schema
const planesSchema = new mongoose.Schema({
    marca: String,
    filename: String,
    path: String,
})

//Defino el modelo
const PlanesModel = mongoose.model("planes", planesSchema);

export default PlanesModel;