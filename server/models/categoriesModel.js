const db = require("../firebase");
const collection = db.collection("categories");

module.exports = {
  /**
   * Retorna todas as categorias da coleção.
   */
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  /**
   * Retorna uma categoria pelo ID.
   * @param {string} id - ID da categoria.
   */
  async getById(id) {
    const doc = await collection.doc(id).get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() };
  },

  /**
   * Cria uma nova categoria.
   * @param {object} categoryData - Dados da categoria a ser criada.
   */
  async create(categoryData) {
    const docRef = await collection.add(categoryData);
    const doc = await docRef.get();
    return { id: doc.id, ...doc.data() };
  },

  /**
   * Atualiza uma categoria existente.
   * @param {string} id - ID da categoria a ser atualizada.
   * @param {object} updatedData - Dados atualizados da categoria.
   */
  async update(id, updatedData) {
    const docRef = collection.doc(id);
    await docRef.update(updatedData);
    const updatedDoc = await docRef.get();
    return { id: updatedDoc.id, ...updatedDoc.data() };
  },

  /**
   * Deleta uma categoria pelo ID.
   * @param {string} id - ID da categoria a ser deletada.
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
