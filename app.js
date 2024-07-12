import express from "express";
import { createConnection } from "mysql2/promise";
/* const express = require("express"); */// sincronica y no permite usar el await directamente

const conexionDB = await createConnection({
    host:"localhost",
    user:"root",
    password:"123123",
    database:"restaurante"
});



const app = express();




app.get("/inicio",(req, res)=>{
    res.send("<h1>Inicio :D</h1>");
});
app.get("/platos",async (req, res)=>{
    const [resConsulta] = await conexionDB.query("SELECT * FROM platos;");
    res.json(resConsulta);
});


//esto va al final
app.use((req,res)=>{
    res.send("<h1>Ruta no encontrada</h1>");
    /* res.status(404).json({mensaje: "error: ruta no encontrada"}); */
});

app.listen(3000, ()=>{
    console.log("servidor activo");
});