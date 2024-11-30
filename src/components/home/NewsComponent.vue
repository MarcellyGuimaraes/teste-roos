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

      <!-- News Grid -->
      <div class="row q-col-gutter-xl">
        <div v-for="article in news" :key="article.id" class="col-12 col-md-4">
          <article class="news-card">
            <q-img
              :src="article.image"
              :ratio="16/9"
              style="border-radius: 8px"
              class="q-mb-md"
            />
            <div class="text-grey-7 text-caption q-mb-sm">{{ article.category }}</div>
            <h3 class="text-h5 q-mb-md">{{ article.title }}</h3>
            <p class="text-grey-8 q-mb-md">{{ article.description }}</p>
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
defineProps({
  title: {
    type: String,
    default: 'Notícias'
  },
  buttonLabel: {
    type: String,
    default: 'Visitar blog'
  },
  readMoreLabel: {
    type: String,
    default: 'Ler mais'
  },
  news: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(article => {
        return (
          'id' in article &&
          'image' in article &&
          'category' in article &&
          'title' in article &&
          'description' in article
        )
      })
    }
  }
})
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
}

.news-card h3 {
  font-weight: 500;
}

/* Hover effect */
.news-card {
  transition: transform 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
}
</style>