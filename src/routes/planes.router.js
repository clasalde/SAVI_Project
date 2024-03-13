import { Router } from "express";
import PlanesModel from "../models/planes.model.js";
const router = Router();

//Obtengo el listado de todos los planes
router.get("/planes", async (req, res) => {
    const planes = await PlanesModel.find();
    
    //para evitar restriccion de Handlebars
    const nuevoArrayPlanes = planes.map(plan => {
        return {
            id: plan._id,
            marca: plan.marca,
            filename: plan.filename,
            path: plan.path
        }
    })
    res.render("planes", { planes: nuevoArrayPlanes });
})

//Muestro el formulario de carga
router.get("/upload", (req, res) => {
    res.render("upload");
})

//Doy de alta un nuevo plan
router.post("/upload", async (req, res) => {
    try {
        const nuevoPlan = new PlanesModel();
        nuevoPlan.marca = req.body.marca;
        nuevoPlan.filename = req.file.filename;
        nuevoPlan.path = "/img/" + req.file.filename;

        await nuevoPlan.save();

        res.redirect("/");
        
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor al dar de alta un nuevo plan" });
        console.log(error);
    }
})

router.get("/", (req, res) => {
    res.render("index");
});

export default router;