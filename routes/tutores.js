const router = require("express").Router();
const TutorR = require("../models/TutorR");


router.get("/", async (req, res) => {
  res.send("qlq sucias")
});


//agregar participante
router.post("/", async (req, res) => {
  console.log(req.body)
  const newEstudiante = new TutorR(req.body);
  try {
    const savedEstudiante = await newEstudiante.save();
    res.status(200).json(savedEstudiante);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//obtener todos los participantes
/* router.get("/all", async (req,res) =>{
    Participantes.find().then((result) => {
    res.send(result)
  }).catch((err) =>{
    console.log(err)
  })
}) */


module.exports = router;