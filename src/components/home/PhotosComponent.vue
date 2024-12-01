<!-- src/components/home/PhotosSection.vue -->
<template>
  <section class="photos-section q-py-xl">
    <div class="container">
      <div class="row items-center justify-between q-mb-xl">
        <div class="header-title">
          <OsidiIcon size="24" variant="primary" class="q-mr-md" />
          <h2 class="text-h4 q-my-none">Fotos</h2>
        </div>
        <router-link to="/gallery" class="gallery-link">
          Ver galeria completa
          <q-icon name="north_east" class="q-ml-sm" />
        </router-link>
      </div>

      <q-carousel
        v-model="currentSlide"
        animated
        swipeable
        infinite
        class="photos-carousel"
      >
        <q-carousel-slide
          v-for="slideIndex in 4"
          :key="slideIndex"
          :name="slideIndex"
        >
          <div class="row q-col-gutter-md">
            <div
              v-for="photoIndex in 4"
              :key="photoIndex"
              class="col-12 col-sm-6 col-md-3"
            >
              <div class="photo-wrapper">
                <q-img
                  loading="lazy"
                  :src="`assets/imagens/evento.png`"
                  :ratio="1"
                  class="photo-image"
                />
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import OsidiIcon from "../shared/OsidiIcon.vue";

const currentSlide = ref(1);
const autoplay = ref(3000);
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

.gallery-link {
  display: flex;
  align-items: center;
  color: #11b80e;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.gallery-link:hover {
  opacity: 0.8;
}

.gallery-link .q-icon {
  font-size: 20px;
}

.photos-carousel {
  background: transparent;
  padding-bottom: 40px;
}

.photo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.photo-image {
  filter: grayscale(100%);
  transition: transform 0.3s ease;
}

.photo-wrapper:hover .photo-image {
  transform: scale(1.05);
}

:deep(.q-carousel__navigation) {
  bottom: 0;
}

:deep(.q-carousel__navigation-icon--active),
:deep(.q-carousel__navigation-icon--inactive) {
  color: #11b80e !important;
}

:deep(.q-carousel__navigation-icon--inactive) {
  opacity: 0.5;
}

:deep(.q-carousel__arrow) {
  color: #11b80e;
  background: rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  font-size: 24px;
  margin: 0 8px;
  border-radius: 50%;
}

:deep(.q-carousel__arrow:hover) {
  background: rgba(255, 255, 255, 0.2);
}

:deep(.q-carousel__slide) {
  padding: 0;
}

@media (max-width: 599px) {
  .row.items-center.justify-between {
    flex-direction: column;
    align-items: flex-start;
  }

  .gallery-link {
    margin-top: 1rem;
  }
}
</style>
