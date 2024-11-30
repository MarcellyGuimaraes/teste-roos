const db = require("../firebase");
const admin = require("firebase-admin");
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
   * @param {string} categoryId - ID da categoria.
   */
  async getByCategory(categoryId) {
    const snapshot = await collection
      .where("categoryId", "==", categoryId)
      .get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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
    const articleWithTimestamp = {
      ...articleData,
      publicationDate: admin.firestore.Timestamp.now(),
    };

    const docRef = await collection.add(articleWithTimestamp);
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
