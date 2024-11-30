<!-- src/components/home/NewsSection.vue -->
<template>
  <section class="news-section q-py-xl">
    <div class="container">
      <!-- Header -->
      <div class="row items-center justify-between q-mb-xl">
        <div class="header-title">
          <OsidiIcon size="24" variant="primary" class="q-mr-md" />
          <h2 class="text-h4 q-my-none">Notícias</h2>
        </div>
        <router-link to="/blog" class="visit-blog">
          Visitar blog
          <q-icon name="north_east" class="q-ml-sm" />
        </router-link>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="row justify-center q-pa-lg">
        <q-spinner color="green" size="3em" />
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="row justify-center q-pa-lg">
        <p class="text-negative">{{ error }}</p>
      </div>

      <!-- News Grid -->
      <div v-else class="row q-col-gutter-xl">
        <div
          v-for="article in articles"
          :key="article.id"
          class="col-12 col-md-4"
        >
          <article class="news-card">
            <q-img
              :src="article.imageUrl || '/images/placeholder.jpg'"
              :ratio="16 / 9"
              class="article-image"
            >
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-grey-3">
                  <q-icon name="image" size="3em" color="grey-7" />
                </div>
              </template>
            </q-img>
            <div class="article-content">
              <div class="text-category">
                {{ article.categoryDetails?.name || article.category }}
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-summary">{{ article.summary }}</p>
              <router-link :to="`/blog/${article.id}`" class="read-more">
                Ler mais
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";
import OsidiIcon from "../shared/OsidiIcon.vue";

const articles = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchArticles = async () => {
  try {
    loading.value = true;
    const { data } = await api.get("/articles?limit=3");
    articles.value = data;
  } catch (err) {
    console.error("Erro ao carregar artigos:", err);
    error.value = "Não foi possível carregar as notícias";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchArticles();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-title {
  display: flex;
  align-items: center;
}

.text-h4 {
  font-size: 32px;
  font-weight: 500;
}

.visit-blog {
  display: flex;
  align-items: center;
  color: #11b80e;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.visit-blog:hover {
  opacity: 0.8;
}

.visit-blog .q-icon {
  font-size: 20px;
}

.news-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.article-image {
  border-radius: 12px;
  margin-bottom: 16px;
}

.article-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.text-category {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}

.article-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-summary {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.read-more {
  color: #11b80e;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: opacity 0.3s;
}

.read-more:hover {
  opacity: 0.8;
}

@media (max-width: 599px) {
  .article-title {
    font-size: 20px;
  }

  .article-summary {
    font-size: 14px;
  }
}
</style>
