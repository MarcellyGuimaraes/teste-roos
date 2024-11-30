const admin = require("firebase-admin");
const db = require("../firebase");

const validateArticle = async (req, res, next) => {
  const { title, category, summary, fullText, author } = req.body;

  if (!title || !category || !summary || !fullText || !author) {
    return res.status(400).json({
      error: "Campos obrigatórios faltando",
      requiredFields: ["title", "category", "summary", "fullText", "author"],
    });
  }

  if (typeof title !== "string" || title.length < 3 || title.length > 100) {
    return res.status(400).json({
      error: "Título inválido",
      message: "O título deve ter entre 3 e 100 caracteres",
    });
  }

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

  req.validatedArticle = {
    title,
    category,
    summary,
    fullText,
    author,
    publicationDate: admin.firestore.Timestamp.now(),
  };

  next();
};

module.exports = { validateArticle };
