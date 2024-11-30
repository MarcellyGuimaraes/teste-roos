const ArticleDTO = require("../dtos/articleDTO");
const admin = require("firebase-admin");
const db = require("../firebase");

const validateArticle = async (req, res, next) => {
  try {
    const articleData = {
      title: req.body.title,
      category: req.body.category,
      summary: req.body.summary,
      fullText: req.body.fullText,
      author: req.body.author,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : undefined,
      publicationDate: admin.firestore.Timestamp.now(),
    };

    const validation = await ArticleDTO.validate(articleData, db);

    if (!validation.isValid) {
      return res.status(400).json({
        error: validation.message,
        details: validation.errors,
      });
    }

    const dto = new ArticleDTO(articleData);
    req.validatedArticle = dto.sanitize();

    next();
  } catch (error) {
    return res.status(500).json({
      error: "Erro na validação",
      message: error.message,
    });
  }
};

module.exports = { validateArticle };
