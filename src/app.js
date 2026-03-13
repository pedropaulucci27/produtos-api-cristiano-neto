const express = require("express");
const produtosRouter = require("./routes/produtos");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use("/api/v1/produtos", produtosRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ erro: err.message });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});