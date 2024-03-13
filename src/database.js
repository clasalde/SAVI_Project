//Conexión con MongoAtlas
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://calasalde:savi1979@cluster0.cwlqfln.mongodb.net/SAVI_Project?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD correctamente !"))
    .catch(() => console.log("Error de conexión a la BD !!!"))