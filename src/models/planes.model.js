import mongoose from "mongoose";

//Defino el Schema
const planesSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    version: String,
    precio: Number,
    montoSuscripcion: Number,
    segmento1: String,
    segmento2: String,
    segmento3: String,
    segmento4: String,
    segmento5: String,
    segmento6: String,
    montoSegmento1: Number,
    montoSegmento2: Number,
    montoSegmento3: Number,
    montoSegmento4: Number,
    montoSegmento5: Number,
    montoSegmento6: Number,
    filename: String,
    path: String,
})

//Defino el modelo
const PlanesModel = mongoose.model("planes", planesSchema);

export default PlanesModel;