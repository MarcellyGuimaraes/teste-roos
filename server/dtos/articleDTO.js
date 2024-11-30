class ArticleDTO {
  constructor(data) {
    this.title = data.title;
    this.category = data.category;
    this.summary = data.summary;
    this.fullText = data.fullText;
    this.author = data.author;
    this.imageUrl = data.imageUrl;
    this.publicationDate = data.publicationDate;
  }

  static async validate(data, db) {
    const errors = [];

    // Validações de presença
    const requiredFields = [
      "title",
      "category",
      "summary",
      "fullText",
      "author",
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        errors.push(`${field} é obrigatório`);
      }
    }

    if (errors.length > 0) {
      return {
        isValid: false,
        errors,
        message: "Campos obrigatórios faltando",
      };
    }

    // Validações específicas
    if (
      typeof data.title !== "string" ||
      data.title.length < 3 ||
      data.title.length > 100
    ) {
      errors.push("O título deve ter entre 3 e 100 caracteres");
    }

    if (
      typeof data.summary !== "string" ||
      data.summary.length < 10 ||
      data.summary.length > 500
    ) {
      errors.push("O resumo deve ter entre 10 e 500 caracteres");
    }

    if (typeof data.fullText !== "string" || data.fullText.length < 50) {
      errors.push("O texto completo deve ter no mínimo 50 caracteres");
    }

    if (
      typeof data.author !== "string" ||
      data.author.length < 2 ||
      data.author.length > 100
    ) {
      errors.push("O nome do autor deve ter entre 2 e 100 caracteres");
    }

    // Validação da categoria no Firestore
    try {
      const categoriesRef = db.collection("categories");
      const categorySnapshot = await categoriesRef
        .where("code", "==", data.category)
        .get();

      if (categorySnapshot.empty) {
        errors.push("A categoria informada não existe");
      }
    } catch (error) {
      errors.push("Erro ao validar categoria");
    }

    // Validação de segurança contra XSS
    const dangerousPattern = /<script>|javascript:|data:/i;
    const fieldsToCheck = ["title", "summary", "fullText", "author"];
    for (const field of fieldsToCheck) {
      if (data[field] && dangerousPattern.test(data[field])) {
        errors.push(`${field} contém caracteres não permitidos`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      message: errors.length > 0 ? errors[0] : null,
    };
  }

  sanitize() {
    return {
      title: this.title?.trim(),
      category: this.category,
      summary: this.summary?.trim(),
      fullText: this.fullText?.trim(),
      author: this.author?.trim(),
      imageUrl: this.imageUrl,
      publicationDate: this.publicationDate,
    };
  }
}

module.exports = ArticleDTO;
