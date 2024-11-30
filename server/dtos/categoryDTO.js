class CategoryDTO {
  constructor(data) {
    this.name = data.name;
    this.code = data.code;
  }

  static validate(data) {
    const errors = [];

    // Validações de presença
    const requiredFields = ["name", "code"];
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

    // Validação do nome
    if (
      typeof data.name !== "string" ||
      data.name.length < 3 ||
      data.name.length > 100
    ) {
      errors.push("O nome deve ter entre 3 e 100 caracteres");
    }

    // Validação do código
    if (
      typeof data.code !== "string" ||
      data.code.length < 3 ||
      data.code.length > 50
    ) {
      errors.push("O código deve ter entre 3 e 50 caracteres");
    }

    // Validação do formato do código
    const codeRegex = /^[a-z0-9-]+$/;
    if (!codeRegex.test(data.code)) {
      errors.push(
        "O código deve conter apenas letras minúsculas, números e hífen"
      );
    }

    // Validação de segurança contra XSS
    const dangerousPattern = /<script>|javascript:|data:/i;
    const fieldsToCheck = ["name", "code"];
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
      name: this.name?.trim(),
      code: this.code?.toLowerCase().trim(),
    };
  }
}

module.exports = CategoryDTO;
