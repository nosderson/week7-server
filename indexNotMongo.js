//ARQUIVO PRINCIPAL
import express from "express";
import * as dotenv from "dotenv";

//Routes - USER
import userRoute from "./routes/user.routes.js";

//habilitar o servidor a ter variáveis de ambiente
dotenv.config();
//configura a porta 
const port = 3000;
//Roda o express
const app = express();
//configurar o servidor para aceitar JSON
app.use(express.json());

app.use("/user", userRoute);

// SERVIDOR RODANDO
app.listen(process.env.PORT, () => {
    console.log(`App up and running on http://localhost:${process.env.PORT}`)
})