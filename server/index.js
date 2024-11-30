const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const articlesRoutes = require("./routes/articlesRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/articles", articlesRoutes);
app.use("/api/categories", categoriesRoutes);

// Serve os arquivos estáticos do Quasar em produção
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist/spa")));

  // Rota catch-all para o SPA
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/spa/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send({ message: "Bem-vindo à API Quasar com Express!" });
  });
}

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Erro interno do servidor",
    message: err.message,
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
