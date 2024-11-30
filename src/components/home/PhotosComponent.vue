<!-- src/components/home/PhotosSection.vue -->
<template>
  <section class="photos-section q-py-xl">
    <div class="container">
      <div class="row items-center justify-between q-mb-lg">
        <div class="row items-center">
          <q-icon name="eco" color="green" size="md" class="q-mr-sm" />
          <h2 class="text-h4 q-my-none">Fotos</h2>
        </div>
        <q-btn
          flat
          color="green"
          label="Ver galeria completa"
          class="q-px-md"
          icon-right="north_east"
        />
      </div>

      <q-carousel
        v-model="slide"
        infinite
        :autoplay="3000"
        arrows
        navigation-position="bottom"
        navigation
      >
        <q-carousel-slide v-for="n in 7" :key="n" :name="n">
          <div class="row q-col-gutter-md">
            <div v-for="i in 4" :key="i" class="col-12 col-md-3">
              <q-img
                src="assets/imagens/evento.png"
                :ratio="4/3"
                class="rounded-borders"
              />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.photos-section {
  background-color: #f5f5f5;
}

/* Navigation dots styling */
:deep(.q-carousel__navigation .q-btn) {
  color: #4caf50 !important;
}

:deep(.q-carousel__navigation-inner--bottom) {
  margin-bottom: -12px;
}

/* Arrow navigation styling */
:deep(.q-carousel__arrow) {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  width: 56px;
  height: 56px;
  font-size: 24px;
  border-radius: 50%;
  margin: 0 16px;
}

/* Image hover effect */
.q-img {
  transition: transform 0.2s ease;
}

.q-img:hover {
  transform: scale(1.05);
}

</style>