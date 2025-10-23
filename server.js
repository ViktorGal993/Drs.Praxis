import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import formRouter from "./routes/formRoutes.js";

dotenv.config();

const app =express();
app.use(cors()); //erlaubt Abfrage von Fronend

app.use(express.json());//ablesen JSON von body

//einbindung zu MongoDB
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    iseUnifiedTopology:true,
})
.then(()=> console.log("Erfolg"))
.catch(err => {
    console.error("Misserfolg",err);
    process.exit(1); //wenn Keine DB
});

//Routen
app.use("/api/form",formRouter);

//Default Fehler
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error:"Internal Server Error"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server geht auf port ${PORT}`));