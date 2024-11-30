<!-- src/pages/BlogPostPage.vue -->
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
        <div class="row items-center text-grey">
          <q-btn
            flat
            dense
            round
            icon="chevron_left"
            color="grey"
            :to="{ path: '/blog' }"
            size="sm"
          />
          <q-breadcrumbs separator="/">
            <q-breadcrumbs-el label="Início" :to="{ path: '/' }" />
            <q-breadcrumbs-el label="Blog" :to="{ path: '/blog' }" />
            <q-breadcrumbs-el :label="article.title" />
          </q-breadcrumbs>
        </div>
      </div>

      <div class="container">
        <!-- Category -->
        <div class="text-caption text-green q-mb-sm">
          {{ article.categoryDetails?.name || article.category }}
        </div>

        <!-- Author and Date -->
        <div class="row items-center q-mb-md">
          <q-avatar size="40px" class="q-mr-sm">
            <img :src="'/images/default-avatar.jpg'" alt="Author" />
          </q-avatar>
          <div>
            <div class="text-weight-medium">{{ article.author }}</div>
            <div class="text-grey">
              {{ formatDate(article.publicationDate) }}
            </div>
          </div>
        </div>

        <!-- Article Title -->
        <h1 class="text-h4 q-mb-lg">{{ article.title }}</h1>

        <!-- Featured Image -->
        <q-img
          :src="article.image || '/images/placeholder.jpg'"
          class="rounded-borders q-mb-lg"
          style="height: 500px"
        >
          <template v-slot:error>
            <div class="absolute-full flex flex-center bg-grey-3">
              <q-icon name="image" size="3em" color="grey-7" />
            </div>
          </template>
        </q-img>

        <!-- Share Options -->
        <div class="row items-center q-mb-xl">
          <div class="text-weight-medium q-mr-md">Compartilhar:</div>
          <div class="row q-gutter-sm">
            <q-btn
              flat
              round
              color="grey-8"
              icon="fab fa-facebook"
              @click="shareArticle('facebook')"
            />
            <q-btn
              flat
              round
              color="grey-8"
              icon="fab fa-linkedin"
              @click="shareArticle('linkedin')"
            />
            <q-btn
              flat
              round
              color="grey-8"
              icon="fab fa-whatsapp"
              @click="shareArticle('whatsapp')"
            />
            <q-btn
              flat
              round
              color="grey-8"
              icon="content_copy"
              @click="shareArticle('copy')"
            >
              <q-tooltip>Copiar link</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="grey-8"
              icon="email"
              @click="shareArticle('email')"
            />
          </div>
        </div>

        <!-- Article Content -->
        <div class="text-body1 q-mb-xl" v-html="article.fullText"></div>

        <!-- Bottom Share Options -->
        <div class="row items-center q-mb-xl">
          <div class="text-weight-medium q-mr-md">Compartilhar:</div>
          <div class="row q-gutter-sm">
            <q-btn
              flat
              round
              color="grey-8"
              icon="fab fa-facebook"
              @click="shareArticle('facebook')"
            />
            <q-btn
              flat
              round
              color="grey-8"
              icon="fab fa-linkedin"
              @click="shareArticle('linkedin')"
            />
            <q-btn
              flat
              round
              color="grey-8"
              icon="fab fa-whatsapp"
              @click="shareArticle('whatsapp')"
            />
            <q-btn
              flat
              round
              color="grey-8"
              icon="content_copy"
              @click="shareArticle('copy')"
            >
              <q-tooltip>Copiar link</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="grey-8"
              icon="email"
              @click="shareArticle('email')"
            />
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useBlogPost } from "src/composables/useBlogPost";

const { article, loading, error, fetchArticle, formatDate, shareArticle } =
  useBlogPost();

onMounted(() => {
  fetchArticle();
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px;
  }
}

/* Estilos para o conteúdo do artigo */
:deep(.text-body1) {
  line-height: 1.8;
}

:deep(.text-body1 p) {
  margin-bottom: 1.5rem;
}
</style>
