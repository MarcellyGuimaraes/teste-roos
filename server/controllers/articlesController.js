const articlesModel = require("../models/articlesModel");
const fs = require("fs");
const path = require("path");
const ArticleDTO = require("../dtos/articleDTO");
const db = require("../firebase");
const { convertToBase64 } = require("../utils/imageUtils");

module.exports = {
  /**
   * Retorna todos os artigos.
   */
  async getAll(req, res) {
    try {
      var articles = await articlesModel.getAll();
      const limit = parseInt(req.query.limit);
      if (!isNaN(limit) && limit > 0) {
        articles = articles.slice(0, limit);
      }

      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar artigos." + error });
    }
  },

  /**
   * Retorna os artigos filtrados por categoria.
   * @param {string} req.params.categoryId - ID da categoria.
   */
  async getByCategory(req, res) {
    try {
      const { categoryCode } = req.params;
      const articles = await articlesModel.getByCategory(categoryCode);
      res.status(200).json(articles);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao buscar artigos por categoria." + error });
    }
  },

  /**
   * Retorna um artigo específico pelo ID.
   * @param {string} req.params.id - ID do artigo.
   */
  async getById(req, res) {
    try {
      const { id } = req.params;
      const article = await articlesModel.getById(id);
      if (!article) {
        return res.status(404).json({ error: "Artigo não encontrado." });
      }
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar artigo." });
    }
  },

  /**
   * Cria um novo artigo.
   * @param {object} req.validatedArticle - Dados do artigo validados.
   */
  async create(req, res) {
    try {
      const articleData = req.validatedArticle;

      if (req.file) {
        const base64Image = await convertToBase64(req.file);
        articleData.imageUrl = base64Image;
      }

      const newArticle = await articlesModel.create(articleData);
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar artigo: " + error.message });
    }
  },

  /**
   * Atualiza um artigo existente.
   * @param {string} req.params.id - ID do artigo.
   * @param {object} req.validatedArticle - Dados atualizados do artigo.
   */
  async update(req, res) {
    try {
      const { id } = req.params;
      let updatedData = req.validatedArticle;

      if (req.file) {
        const base64Image = await convertToBase64(req.file);
        updatedData.imageUrl = base64Image;
      }

      const updatedArticle = await articlesModel.update(id, updatedData);

      if (!updatedArticle) {
        return res.status(404).json({ error: "Artigo não encontrado." });
      }

      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar artigo." + error });
    }
  },

  /**
   * Deleta um artigo pelo ID.
   * @param {string} req.params.id - ID do artigo.
   */
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedArticle = await articlesModel.delete(id);

      if (!deletedArticle) {
        return res.status(404).json({ error: "Artigo não encontrado." });
      }

      res.status(200).json({ message: "Artigo deletado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar artigo." });
    }
  },
};
