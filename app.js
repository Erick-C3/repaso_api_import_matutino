import express from "express";
/* const express = require("express"); */// sincronica y no permite usar el await directamente

const app = express();

app.listen(3000, ()=>{
    console.log("servidor activo");
});