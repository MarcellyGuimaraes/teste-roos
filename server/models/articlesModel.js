const db = require("../firebase");
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const collection = db.collection("articles");

module.exports = {
  /**
   * Retorna todos os artigos da coleção.
   */
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  /**
   * Retorna os artigos filtrados por categoria.
   * @param {string} categoryCode - ID da categoria.
   */
  async getByCategory(categoryCode) {
    const categorySnapshot = await db
      .collection("categories")
      .where("code", "==", categoryCode)
      .get();

    if (categorySnapshot.empty) {
      return [];
    }

    const categoryData = {
      id: categorySnapshot.docs[0].id,
      ...categorySnapshot.docs[0].data(),
    };

    const articlesSnapshot = await collection
      .where("category", "==", categoryCode)
      .get();

    const articles = articlesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      categoryDetails: categoryData,
    }));

    return articles;
  },

  /**
   * Retorna um artigo pelo ID.
   * @param {string} id - ID do artigo.
   */
  async getById(id) {
    const doc = await collection.doc(id).get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() };
  },

  /**
   * Cria um novo artigo.
   * @param {object} articleData - Dados do artigo a ser criado.
   */
  async create(articleData) {
    const docRef = await collection.add({
      ...articleData,
      publicationDate: admin.firestore.Timestamp.now(),
    });
    const doc = await docRef.get();
    return { id: doc.id, ...doc.data() };
  },

  /**
   * Atualiza um artigo existente.
   * @param {string} id - ID do artigo a ser atualizado.
   * @param {object} updatedData - Dados atualizados do artigo.
   */
  async update(id, updatedData) {
    const docRef = collection.doc(id);
    await docRef.update(updatedData);
    const updatedDoc = await docRef.get();
    return { id: updatedDoc.id, ...updatedDoc.data() };
  },

  /**
   * Deleta um artigo pelo ID.
   * @param {string} id - ID do artigo a ser deletado.
   */
  async delete(id) {
    const docRef = collection.doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return null;
    }

    await docRef.delete();
    return { id: doc.id, ...doc.data() };
  },
};
