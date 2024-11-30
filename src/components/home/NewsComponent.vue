<!-- src/components/home/NewsSection.vue -->
<template>
  <section class="news-section q-py-xl">
    <div class="container">
      <!-- Header -->
      <div class="row items-center justify-between q-mb-xl">
        <div class="row items-center">
          <q-icon name="eco" color="green" size="md" class="q-mr-sm" />
          <h2 class="text-h4 q-my-none">{{ title }}</h2>
        </div>
        <q-btn
          flat
          color="green"
          :label="buttonLabel"
          class="q-px-md"
          icon-right="north_east"
          :to="{ path: '/blog' }"
        />
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
              style="border-radius: 8px"
              class="q-mb-md"
            >
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-grey-3">
                  <q-icon name="image" size="3em" color="grey-7" />
                </div>
              </template>
            </q-img>
            <div class="text-grey-7 text-caption q-mb-sm">
              {{ article.categoryDetails?.name || article.category }}
            </div>
            <h3 class="text-h5 q-mb-md text-weight-500 ellipsis-2-lines">
              {{ article.title }}
            </h3>
            <p class="text-grey-8 q-mb-md ellipsis-3-lines">
              {{ article.summary }}
            </p>
            <q-btn
              flat
              color="green"
              :label="readMoreLabel"
              class="q-px-none"
              no-caps
              :to="{ path: `/blog/${article.id}` }"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios"; // Certifique-se de que o boot/axios está configurado

defineProps({
  title: {
    type: String,
    default: "Notícias",
  },
  buttonLabel: {
    type: String,
    default: "Visitar blog",
  },
  readMoreLabel: {
    type: String,
    default: "Ler mais",
  },
});

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

.news-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ellipsis-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
