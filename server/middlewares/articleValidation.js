// middlewares/articleValidation.js
const admin = require("firebase-admin");
const db = require("../firebase");

const validateArticle = async (req, res, next) => {
  const { title, category, summary, fullText, author } = req.body;

  // Verifica se todos os campos obrigatórios estão presentes
  if (!title || !category || !summary || !fullText || !author) {
    return res.status(400).json({
      error: "Campos obrigatórios faltando",
      requiredFields: ["title", "category", "summary", "fullText", "author"],
    });
  }

  // Validações específicas para cada campo
  if (typeof title !== "string" || title.length < 3 || title.length > 100) {
    return res.status(400).json({
      error: "Título inválido",
      message: "O título deve ter entre 3 e 100 caracteres",
    });
  }

  // Validação da categoria - verifica se existe na coleção categories
  try {
    const categoriesRef = db.collection("categories");
    const categorySnapshot = await categoriesRef
      .where("code", "==", category)
      .get();

    if (categorySnapshot.empty) {
      return res.status(400).json({
        error: "Categoria inválida",
        message: "A categoria informada não existe",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao validar categoria",
      message: "Erro ao verificar existência da categoria",
    });
  }

  if (
    typeof summary !== "string" ||
    summary.length < 10 ||
    summary.length > 500
  ) {
    return res.status(400).json({
      error: "Resumo inválido",
      message: "O resumo deve ter entre 10 e 500 caracteres",
    });
  }

  if (typeof fullText !== "string" || fullText.length < 50) {
    return res.status(400).json({
      error: "Texto completo inválido",
      message: "O texto completo deve ter no mínimo 50 caracteres",
    });
  }

  if (typeof author !== "string" || author.length < 2 || author.length > 100) {
    return res.status(400).json({
      error: "Autor inválido",
      message: "O nome do autor deve ter entre 2 e 100 caracteres",
    });
  }

  // Se passou por todas as validações, formata os dados
  req.validatedArticle = {
    title,
    category, // agora é o código da categoria
    summary,
    fullText,
    author,
    publicationDate: admin.firestore.Timestamp.now(),
  };

  next();
};

module.exports = { validateArticle };
