class ArticleDTO {
  constructor(data) {
    // Mantém apenas os campos que foram fornecidos
    if (data.title !== undefined) this.title = data.title;
    if (data.category !== undefined) this.category = data.category;
    if (data.summary !== undefined) this.summary = data.summary;
    if (data.fullText !== undefined) this.fullText = data.fullText;
    if (data.author !== undefined) this.author = data.author;
    if (data.imageUrl !== undefined) this.imageUrl = data.imageUrl;
    if (data.publicationDate !== undefined) this.publicationDate = data.publicationDate;
  }

  static async validate(data, db, isUpdate = false) {
    const errors = [];

    // Lista de campos obrigatórios apenas para criação
    const requiredFields = [
      "title",
      "category",
      "summary",
      "fullText",
      "author",
    ];

    // Se não for atualização, valida campos obrigatórios
    if (!isUpdate) {
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
    }

    // Validações específicas apenas para campos presentes
    if (data.title !== undefined) {
      if (typeof data.title !== "string" || data.title.length < 3 || data.title.length > 100) {
        errors.push("O título deve ter entre 3 e 100 caracteres");
      }
    }

    if (data.summary !== undefined) {
      if (typeof data.summary !== "string" || data.summary.length < 10 || data.summary.length > 500) {
        errors.push("O resumo deve ter entre 10 e 500 caracteres");
      }
    }

    if (data.fullText !== undefined) {
      if (typeof data.fullText !== "string" || data.fullText.length < 50) {
        errors.push("O texto completo deve ter no mínimo 50 caracteres");
      }
    }

    if (data.author !== undefined) {
      if (typeof data.author !== "string" || data.author.length < 2 || data.author.length > 100) {
        errors.push("O nome do autor deve ter entre 2 e 100 caracteres");
      }
    }

    // Validação da categoria apenas se ela estiver sendo atualizada
    if (data.category !== undefined) {
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
    }

    // Validação de segurança contra XSS para campos presentes
    const dangerousPattern = /<script>|javascript:|data:/i;
    const fieldsToCheck = ["title", "summary", "fullText", "author"];
    for (const field of fieldsToCheck) {
      if (data[field] !== undefined && dangerousPattern.test(data[field])) {
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
    // Cria um objeto apenas com os campos definidos
    const sanitized = {};
    
    if (this.title !== undefined) sanitized.title = this.title.trim();
    if (this.category !== undefined) sanitized.category = this.category;
    if (this.summary !== undefined) sanitized.summary = this.summary.trim();
    if (this.fullText !== undefined) sanitized.fullText = this.fullText.trim();
    if (this.author !== undefined) sanitized.author = this.author.trim();
    if (this.imageUrl !== undefined) sanitized.imageUrl = this.imageUrl;
    if (this.publicationDate !== undefined) sanitized.publicationDate = this.publicationDate;

    return sanitized;
  }
}

module.exports = ArticleDTO;
