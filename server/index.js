const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Adicione esta linha
const articlesRoutes = require("./routes/articlesRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Adicione esta linha

// Cria o diretório de uploads se não existir
const uploadDir = path.join(__dirname, "public/uploads");
const fs = require("fs");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Rotas
app.get("/", (req, res) => {
  res.send({ message: "Bem-vindo à API Quasar com Express!" });
});

// Configuração para servir arquivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.use("/api/articles", articlesRoutes);
app.use("/api/categories", categoriesRoutes);

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
