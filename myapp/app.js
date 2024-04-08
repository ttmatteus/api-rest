import express from "express";
import connection from "./app/database/connection.js"
import SelecaoController from "./app/controllers/SelecaoController.js";

const app = express();

// Indicar para ler o body como json
app.use(express.json());

// ROTAS
app.get("/selecoes", SelecaoController.index);
app.get("/selecoes/:id", SelecaoController.show);
app.post("/selecoes", SelecaoController.store);
app.put("/selecoes/:id", SelecaoController.update);
app.delete("/selecoes/:id", SelecaoController.delete);

export default app;
