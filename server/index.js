const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const articlesRoutes = require("./routes/articlesRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
  res.send({ message: "Bem-vindo à API Quasar com Express!" });
});

app.use("/api/articles", articlesRoutes);
app.use("/api/categories", categoriesRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
