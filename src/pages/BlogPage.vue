<!-- src/pages/BlogPage.vue -->
<template>
  <q-page padding>
    <!-- Banner Space -->
    <div class="banner q-mb-xl">
      <div class="text-center">Espaço Banner</div>
    </div>

    <div class="container">
      <div class="row">
        <!-- Left Sidebar -->
        <div class="col-12 col-md-3">
          <h5 class="text-h6 q-mb-md">Categorias</h5>

          <!-- Search -->
          <q-input
            v-model="search"
            outlined
            dense
            placeholder="Pesquisar"
            class="q-mb-md"
            @update:model-value="currentPage = 1"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>

          <!-- Categories List -->
          <q-list padding class="rounded-borders">
            <q-item
              clickable
              :active="!activeCategory"
              @click="
                () => {
                  activeCategory = null;
                  currentPage = 1;
                }
              "
              active-class="bg-green-1 text-green"
            >
              <q-item-section>Todas as categorias</q-item-section>
            </q-item>
            <q-item
              v-for="category in categories"
              :key="category.id"
              clickable
              :active="activeCategory?.id === category.id"
              @click="
                () => {
                  activeCategory = category;
                  currentPage = 1;
                }
              "
              active-class="bg-green-1 text-green"
            >
              <q-item-section>{{ category.name }}</q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Main Content -->
        <div class="col-12 col-md-9 q-pl-md">
          <div class="row items-center q-mb-lg">
            <h5 class="text-h6 q-my-none">
              {{ activeCategory?.name || "Todas as categorias" }}
            </h5>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="row justify-center q-pa-xl">
            <q-spinner color="green" size="3em" />
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="row justify-center q-pa-xl">
            <p class="text-negative">{{ error }}</p>
          </div>

          <!-- Empty State -->
          <div
            v-else-if="paginatedArticles.length === 0"
            class="row justify-center q-pa-xl"
          >
            <p class="text-grey-7">Nenhum artigo encontrado</p>
          </div>

          <!-- Blog Posts Grid -->
          <div v-else class="row q-col-gutter-lg">
            <div
              v-for="article in paginatedArticles"
              :key="article.id"
              class="col-12"
            >
              <q-card flat bordered class="blog-card">
                <div class="row q-col-gutter-lg">
                  <div class="col-12 col-md-4">
                    <q-img
                      :src="article.imageUrl || '/images/placeholder.jpg'"
                      :ratio="4 / 3"
                      style="border-radius: 8px"
                    >
                      <template v-slot:error>
                        <div class="absolute-full flex flex-center bg-grey-3">
                          <q-icon name="image" size="3em" color="grey-7" />
                        </div>
                      </template>
                    </q-img>
                  </div>
                  <div class="col-12 col-md-8 q-pa-md">
                    <div class="text-caption text-green q-mb-sm">
                      {{ article.categoryDetails?.name || article.category }}
                    </div>
                    <h2 class="text-h5 q-mt-none q-mb-sm">
                      {{ article.title }}
                    </h2>
                    <p class="text-grey-8 q-mb-md">{{ article.summary }}</p>
                    <q-btn
                      flat
                      color="green"
                      label="Ler mais"
                      class="q-px-none"
                      no-caps
                      :to="{ path: `/blog/${article.id}` }"
                    />
                  </div>
                </div>
              </q-card>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="row justify-center q-mt-xl">
            <q-pagination
              v-model="currentPage"
              :max="totalPages"
              direction-links
              boundary-links
              color="green"
              active-color="green"
            />
          </div>
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
}

.banner {
  background-color: #f5f5f5;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.blog-card {
  transition: transform 0.2s;
}

.blog-card:hover {
  transform: translateY(-4px);
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px;
  }
}
</style>
