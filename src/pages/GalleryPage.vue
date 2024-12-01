<template>
  <q-page padding>
    <!-- Breadcrumb Navigation -->
    <div class="container q-mb-lg">
      <div class="row items-center text-grey q-gutter-x-sm">
        <router-link to="/" class="text-grey">Início</router-link>
        <span>/</span>
        <span class="text-grey">Galeria</span>
      </div>
    </div>

    <div class="container article-container">
      <!-- Header -->
      <h1 class="text-h4 q-mt-none q-mb-lg">Galeria de Fotos</h1>

      <p class="text-body1 q-mb-xl">
        Explore nossa coleção de fotos que capturam os melhores momentos e
        eventos.
      </p>

      <!-- Gallery Grid -->
      <div class="row q-col-gutter-md">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="col-12 col-sm-6 col-md-4"
        >
          <div class="gallery-image-wrapper">
            <q-img
              :src="image"
              :ratio="16 / 9"
              class="gallery-image"
              @click="openImage(image)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Image Dialog -->
    <q-dialog
      v-model="dialog"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="dialog-card">
        <q-card-section class="dialog-header">
          <q-btn
            icon="close"
            flat
            round
            v-close-popup
            color="white"
            class="q-ml-md"
          />
        </q-card-section>

        <q-card-section class="dialog-content">
          <q-img :src="selectedImage" class="full-image" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "GalleryPage",
});

const dialog = ref(false);
const selectedImage = ref("");

const images = [
  "assets/imagens/evento.png",
  "assets/imagens/evento.png",
  "assets/imagens/evento.png",
  "assets/imagens/evento.png",
  "assets/imagens/evento.png",
  "assets/imagens/evento.png",
];

const openImage = (image) => {
  selectedImage.value = image;
  dialog.value = true;
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.article-container {
  padding: 0;
}

.gallery-image-wrapper {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-image-wrapper:hover {
  transform: scale(1.02);
}

.gallery-image {
  cursor: pointer;
}

/* Dialog Styles */
.dialog-card {
  background: rgba(0, 0, 0, 0.9);
  min-width: 100vw;
  min-height: 100vh;
}

.dialog-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
}

.dialog-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
}

.full-image {
  max-height: 90vh;
  max-width: 90vw;
  object-fit: contain;
}

a {
  text-decoration: none;
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
