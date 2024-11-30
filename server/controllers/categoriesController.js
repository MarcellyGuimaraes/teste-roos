const categoriesModel = require("../models/categoriesModel");

module.exports = {
  /**
   * Retorna todas as categorias.
   */
  async getAll(req, res) {
    try {
      const categories = await categoriesModel.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar categorias." });
    }
  },

  /**
   * Retorna uma categoria específica pelo ID.
   * @param {string} req.params.id - ID da categoria.
   */
  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await categoriesModel.getById(id);
      if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada." });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar categoria." });
    }
  },

  /**
   * Cria uma nova categoria.
   * @param {object} req.validatedCategory - Dados da categoria.
   */
  async create(req, res) {
    try {
      const categoryData = req.validatedCategory;
      const newCategory = await categoriesModel.create(categoryData);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar categoria." });
    }
  },

  /**
   * Atualiza uma categoria existente.
   * @param {string} req.params.id - ID da categoria.
   * @param {object} req.validatedCategory - Dados atualizados da categoria.
   */
  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.validatedCategory;
      const updatedCategory = await categoriesModel.update(id, updatedData);
      if (!updatedCategory) {
        return res.status(404).json({ error: "Categoria não encontrada." });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar categoria." });
    }
  },

  /**
   * Deleta uma categoria pelo ID.
   * @param {string} req.params.id - ID da categoria.
   */
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedCategory = await categoriesModel.delete(id);
      if (!deletedCategory) {
        return res.status(404).json({ error: "Categoria não encontrada." });
      }
      res.status(200).json({ message: "Categoria deletada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar categoria." });
    }
  },
};
