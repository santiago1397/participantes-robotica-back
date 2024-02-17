const express = require('express');
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const participantesRoute = require("./routes/participantes")
const equiposRoute = require("./routes/equipo")
const tutoresRoute = require("./routes/tutores")
const cors = require('cors');

dotenv.config()

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
};
connectToMongo()



const app = express()



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());



app.use("/api/participantes", participantesRoute)
app.use("/api/equipo", equiposRoute)
app.use("/api/tutores", tutoresRoute)

app.get("/", (req, res) => {
    res.send("Welcome to homepage")
})


app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running on port", process.env.PORT || 8800)
})