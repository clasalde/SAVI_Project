import mongoose from "mongoose";

//Defino el Schema
const planesSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    version: String,
    filename: String,
    path: String,
    precio: Number,
    montoSuscripción: Number,
    segmento_1: String,
    segmento_2: String,
    segmento_3: String,
    segmento_4: String,
    segmento_5: String,
    segmento_6: String,
    montoSegmento_1: Number,
    montoSegmento_2: Number,
    montoSegmento_3: Number,
    montoSegmento_4: Number,
    montoSegmento_5: Number,
    montoSegmento_6: Number,
})

//Defino el modelo
const PlanesModel = mongoose.model("planes", planesSchema);

export default PlanesModel;