// src/composables/useBlog.js
import { ref, computed } from "vue";
import { api } from "boot/axios";

export function useBlog() {
  const articles = ref([]);
  const categories = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const search = ref("");
  const currentPage = ref(1);
  const activeCategory = ref(null);
  const itemsPerPage = 6;

  // Filtra os artigos com base na busca e categoria
  const filteredArticles = computed(() => {
    let filtered = [...articles.value];

    // Filtra por categoria
    if (activeCategory.value) {
      filtered = filtered.filter(
        (article) => article.category === activeCategory.value.code
      );
    }

    // Filtra pela busca
    if (search.value) {
      const searchLower = search.value.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.summary.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  });

  // Calcula os artigos da página atual
  const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredArticles.value.slice(start, start + itemsPerPage);
  });

  // Calcula o número total de páginas
  const totalPages = computed(() =>
    Math.ceil(filteredArticles.value.length / itemsPerPage)
  );

  // Busca todos os artigos
  const fetchArticles = async () => {
    try {
      loading.value = true;
      const { data } = await api.get("/articles");
      articles.value = data;
    } catch (err) {
      console.error("Erro ao carregar artigos:", err);
      error.value = "Não foi possível carregar os artigos";
    } finally {
      loading.value = false;
    }
  };

  // Busca todas as categorias
  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      categories.value = data;
    } catch (err) {
      console.error("Erro ao carregar categorias:", err);
      error.value = "Não foi possível carregar as categorias";
    }
  };

  // Reseta os filtros
  const resetFilters = () => {
    search.value = "";
    activeCategory.value = null;
    currentPage.value = 1;
  };

  return {
    articles,
    categories,
    loading,
    error,
    search,
    currentPage,
    activeCategory,
    filteredArticles,
    paginatedArticles,
    totalPages,
    fetchArticles,
    fetchCategories,
    resetFilters,
  };
}
