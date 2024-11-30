<template>
  <q-page>
    <div class="container q-py-xl">
      <!-- Banner -->
      <div class="banner">
        <div class="text-center">Espaço Banner</div>
      </div>

      <div class="row q-col-gutter-xl">
        <!-- Left Sidebar -->
        <div class="col-12 col-md-3">
          <h5 class="sidebar-title q-mb-md">Categorias</h5>

          <!-- Search -->
          <q-input
            v-model="search"
            borderless
            dense
            placeholder="Pesquisar"
            class="search-input q-mb-md"
            bg-color="white"
            @update:model-value="currentPage = 1"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>

          <!-- Categories List -->
          <div class="categories-list">
            <div
              class="category-item"
              :class="{ active: !activeCategory }"
              @click="
                () => {
                  activeCategory = null;
                  currentPage = 1;
                }
              "
            >
              Todas as categorias
            </div>
            <div
              class="category-item"
              :class="{ active: activeCategory?.name === 'Categoria X' }"
              @click="
                () => {
                  activeCategory = { name: 'Categoria X' };
                  currentPage = 1;
                }
              "
            >
              Categoria X
            </div>
            <div
              v-for="category in categories"
              :key="category.id"
              class="category-item"
              :class="{ active: activeCategory?.id === category.id }"
              @click="
                () => {
                  activeCategory = category;
                  currentPage = 1;
                }
              "
            >
              {{ category.name }}
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-12 col-md-9">
          <!-- Current Category Title -->
          <div class="q-mb-lg">
            <h5 class="text-h6 q-my-none">
              {{ activeCategory ? activeCategory.name : "Todas as categorias" }}
            </h5>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="row justify-center q-pa-lg">
            <q-spinner color="green" size="3em" />
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="row justify-center q-pa-lg">
            <p class="text-negative">{{ error }}</p>
          </div>

          <!-- Articles List -->
          <template v-else>
            <div class="articles-list">
              <article
                v-for="article in paginatedArticles"
                :key="article.id"
                class="article-item"
              >
                <div class="article-image">
                  <q-img
                    :src="article.imageUrl || '/images/placeholder.jpg'"
                    :ratio="16 / 9"
                  />
                </div>
                <div class="article-content">
                  <div class="article-category">
                    {{ article.categoryDetails?.name || article.category }}
                  </div>
                  <h2 class="article-title">{{ article.title }}</h2>
                  <p class="article-summary">{{ article.summary }}</p>
                  <router-link :to="`/blog/${article.id}`" class="read-more">
                    Ler mais
                  </router-link>
                </div>
              </article>
            </div>

            <!-- Pagination -->
            <div class="pagination-wrapper">
              <div class="flex justify-end">
                <q-pagination
                  v-if="totalPages > 1"
                  v-model="currentPage"
                  :max="totalPages"
                  :max-pages="4"
                  direction-links
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useBlog } from "src/composables/useBlog";

const {
  articles,
  categories,
  loading,
  error,
  search,
  currentPage,
  activeCategory,
  paginatedArticles,
  totalPages,
  fetchArticles,
  fetchCategories,
} = useBlog();

onMounted(async () => {
  await Promise.all([fetchArticles(), fetchCategories()]);
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.banner {
  background: #f2f2f2;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 24px 20px;
}

.sidebar-title {
  font-size: 20px;
  font-weight: 500;
  color: #202020;
}

.search-input {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.search-input :deep(.q-field__marginal) {
  color: #999;
}

.categories-list {
  display: flex;
  flex-direction: column;
}

.category-item {
  padding: 8px 12px;
  color: #666;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 2px;
}

.category-item.active {
  background: #e8f5e9;
  color: #11b80e;
}

.category-x.active {
  background: #e8f5e9;
  color: #11b80e;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.article-item {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: start;
}

.article-image :deep(.q-img) {
  border-radius: 8px;
  overflow: hidden;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-category {
  color: #11b80e;
  font-size: 14px;
  font-weight: 500;
}

.article-title {
  font-size: 22px;
  font-weight: 500;
  color: #202020;
  margin: 0;
  line-height: 1.3;
}

.article-summary {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.read-more {
  color: #11b80e;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
}

.pagination-wrapper {
  margin-top: 40px;
}

:deep(.q-pagination) {
  .q-btn {
    padding: 0 8px;
    min-height: 32px;
    font-size: 14px;
    color: #666;
  }

  .q-btn--active {
    background: #11b80e;
    color: white;
  }
}

@media (max-width: 767px) {
  .article-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .pagination-wrapper {
    justify-content: center;
  }
}
</style>
