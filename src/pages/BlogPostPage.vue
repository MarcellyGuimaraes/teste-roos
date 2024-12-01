<template>
  <q-page padding>
    <!-- Loading State -->
    <div v-if="loading" class="container flex flex-center q-pa-xl">
      <q-spinner color="green" size="3em" />
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="container flex flex-center q-pa-xl">
      <p class="text-negative">{{ error }}</p>
    </div>

    <template v-else-if="article">
      <!-- Breadcrumb Navigation -->
      <div class="container q-mb-lg">
        <div class="row items-center text-grey q-gutter-x-sm">
          <router-link to="/" class="text-grey">Início</router-link>
          <span>/</span>
          <router-link to="/blog" class="text-grey">Blog</router-link>
          <span>/</span>
          <span class="text-grey">{{ article.title }}</span>
        </div>
      </div>

      <div class="container article-container">
        <!-- Author Info -->
        <div class="row items-center no-wrap q-mb-md">
          <q-avatar class="q-mr-md">
            <img src="assets/imagens/default-user.png" alt="Author Avatar" />
          </q-avatar>
          <div>
            <div class="text-weight-bold text-body1">{{ article.author }}</div>
            <div class="text-grey text-caption">
              {{ formatDate(article.publicationDate) }}
            </div>
          </div>
        </div>

        <!-- Article Title -->
        <h1 class="text-h4 q-mt-none q-mb-lg">{{ article.title }}</h1>

        <!-- Featured Image -->
        <q-img
          :src="article.imageUrl"
          class="q-mb-lg article-image"
          :ratio="16 / 9"
        />

        <!-- Share Options -->
        <div class="share-section q-mb-xl">
          <div class="row items-center q-gutter-x-md">
            <div class="text-body1 text-weight-medium">Compartilhar:</div>
            <q-btn flat round color="grey-8" icon="mdi-facebook" />
            <q-btn flat round color="grey-8" icon="mdi-instagram" />
            <q-btn flat round color="grey-8" icon="mdi-linkedin" />
            <q-btn flat round color="grey-8" icon="mdi-whatsapp" />
            <q-btn flat round color="grey-8" icon="content_copy">
              <q-tooltip>Copiar link</q-tooltip>
            </q-btn>
            <q-btn flat round color="grey-8" icon="email" />
          </div>
        </div>

        <!-- Article Content -->
        <div
          class="text-body1 article-content q-mb-xl"
          v-html="article.fullText"
        ></div>

        <!-- Bottom Share Options -->
        <div class="share-section q-mb-xl">
          <div class="row items-center q-gutter-x-md">
            <div class="text-body1 text-weight-medium">Compartilhar:</div>
            <q-btn flat round color="grey-8" icon="mdi-facebook" />
            <q-btn flat round color="grey-8" icon="mdi-instagram" />
            <q-btn flat round color="grey-8" icon="mdi-linkedin" />
            <q-btn flat round color="grey-8" icon="mdi-whatsapp" />
            <q-btn flat round color="grey-8" icon="content_copy">
              <q-tooltip>Copiar link</q-tooltip>
            </q-btn>
            <q-btn flat round color="grey-8" icon="email" />
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useBlogPost } from "src/composables/useBlogPost";

const { article, loading, error, fetchArticle, formatDate } = useBlogPost();

onMounted(() => {
  fetchArticle();
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.article-container {
  padding: 0;
}

.article-image {
  border-radius: 8px;
  width: 100%;
}

a {
  text-decoration: none;
}

.q-avatar {
  font-size: unset;
  height: 4em;
  width: 5em;
}

/* Estilos para o conteúdo do artigo */
:deep(.article-content) {
  line-height: 1.8;
}

:deep(.article-content p) {
  margin-bottom: 1.5rem;
  color: #333;
}

.share-section {
  padding: 16px 0;
  border-bottom: 1px solid #eee;
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px;
  }

  .text-h4 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
}
</style>
