const express = require('express');
const app = express();
app.use(express.json());

/**
 * GET - Buscar informações
 * POST - Criar informações
 * PUT - Atualizar informações
 * PATCH - Atualizar informação específica
 * DELETE - Deletar informações
 */

app.get("/", (request, response) => {
    return response.json({message: "Hello World!"});
});

app.post("/", (request, response) => {
    return response.json({message: "Hello World!"});
});


//localhost:3000/
app.listen(3000);