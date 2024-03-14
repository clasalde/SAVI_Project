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
            modelo: plan.modelo,
            version: plan.version,
            precio: plan.precio,
            montoSuscripcion: plan.montoSuscripcion,
            segmento_1: plan.segmento_1,
            segmento_2: plan.segmento_2,
            segmento_3: plan.segmento_3,
            segmento_4: plan.segmento_4,
            segmento_5: plan.segmento_5,
            segmento_6: plan.segmento_6,
            montoSegmento_1: plan.montoSegmento_1,
            montoSegmento_2: plan.montoSegmento_2,
            montoSegmento_3: plan.montoSegmento_3,
            montoSegmento_4: plan.montoSegmento_4,
            montoSegmento_5: plan.montoSegmento_5,
            montoSegmento_6: plan.montoSegmento_6,
            filename: plan.filename,
            path: plan.path
        }
    })
    res.render("planes", { planes: nuevoArrayPlanes });
    console.log(nuevoArrayPlanes);
})

//Ruta Delete
router.get("/plan/:id/delete", async (req, res) => {
    const { id } = req.params;
    await PlanesModel.findByIdAndDelete(id);
    res.redirect("/planes");
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