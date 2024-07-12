import { createConnection } from "mysql2/promise";

const conexionDB = await createConnection({
    host:"localhost",
    user:"root",
    password:"123123",
    database:"restaurante"
});

export default conexionDB;