const validateCategory = (req, res, next) => {
  const { name, code } = req.body;

  if (!name || !code) {
    return res.status(400).json({
      error: "Campos obrigatórios faltando",
      requiredFields: ["name", "code"],
    });
  }

  if (typeof name !== "string" || name.length < 3 || name.length > 100) {
    return res.status(400).json({
      error: "Nome inválido",
      message: "O nome deve ter entre 3 e 100 caracteres",
    });
  }

  if (typeof code !== "string" || code.length < 3 || code.length > 50) {
    return res.status(400).json({
      error: "Código inválido",
      message: "O código deve ter entre 3 e 50 caracteres",
    });
  }

  const codeRegex = /^[a-z0-9-]+$/;
  if (!codeRegex.test(code)) {
    return res.status(400).json({
      error: "Código inválido",
      message: "O código deve conter apenas letras minúsculas, números e hífen",
    });
  }

  req.validatedCategory = {
    name,
    code,
  };

  next();
};

module.exports = { validateCategory };
