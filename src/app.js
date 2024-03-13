import express from "express";
const app = express();
const PUERTO = 8080;
import "./database.js";
import planesRouter from "./routes/planes.router.js";
import exphbs from "express-handlebars";
import multer from "multer";


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/img");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
//image sale del formulario
app.use(multer({ storage }).single("image"));

//Rutas
app.use("/", planesRouter);

//Listen
app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto ${PUERTO}`);
})