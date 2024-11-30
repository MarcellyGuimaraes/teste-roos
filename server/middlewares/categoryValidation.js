const CategoryDTO = require("../dtos/categoryDTO");

const validateCategory = (req, res, next) => {
  try {
    const categoryData = {
      name: req.body.name,
      code: req.body.code,
    };

    const validation = CategoryDTO.validate(categoryData);

    if (!validation.isValid) {
      return res.status(400).json({
        error: validation.message,
        details: validation.errors,
      });
    }

    const dto = new CategoryDTO(categoryData);
    req.validatedCategory = dto.sanitize();

    next();
  } catch (error) {
    return res.status(500).json({
      error: "Erro na validação",
      message: error.message,
    });
  }
};

module.exports = { validateCategory };
