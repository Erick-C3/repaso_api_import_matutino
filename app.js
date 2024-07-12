import express from "express";
import conexionDB from "./db.js";
/* const express = require("express"); */// sincronica y no permite usar el await directamente

const app = express();

app.get("/inicio",(req, res)=>{
    res.send("<h1>Inicio :D</h1>");
});

app.get("/platos",async (req, res)=>{
    const [resConsulta] = await conexionDB.query("SELECT * FROM platos");
    res.json(resConsulta);
});

app.get("/platos/:id",async (req, res)=>{
    const idPlato = req.params.id;
    console.log(req.params);
    const [resConsulta] = await conexionDB.query("SELECT * FROM platos WHERE id_plato = ?;",[idPlato]);
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