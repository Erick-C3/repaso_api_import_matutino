import express from "express";
/* const express = require("express"); */// sincronica y no permite usar el await directamente

const app = express();

app.get("/inicio",(req, res)=>{
    res.send("<h1>Inicio</h1>");
});


app.use((req,res)=>{
    res.send("<h1>Ruta no encontrada</h1>");
    /* res.status(404).json({mensaje: "error: ruta no encontrada"}); */
});


app.listen(3000, ()=>{
    console.log("servidor activo");
});