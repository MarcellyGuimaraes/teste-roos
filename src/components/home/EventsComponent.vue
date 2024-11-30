<!-- src/components/home/EventsSection.vue -->
<template>
  <section class="events-section q-py-xl">
    <div class="container">
      <div class="row items-center q-mb-lg">
        <q-icon name="eco" color="green" size="md" class="q-mr-sm" />
        <h2 class="text-h4 q-my-none">Eventos</h2>
      </div>
      
      <q-carousel
        v-model="slide"
        animated
        arrows
        navigation
        infinite
        class="rounded-borders"
        height="400px"
      >
        <q-carousel-slide v-for="n in 5" :key="n" :name="n">
          <q-img
            src="assets/imagens/evento.png"
            style="height: 100%"
            class="full-width"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Evento {{ n }}
            </div>
          </q-img>
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

.events-section {
  background-color: #ffffff;
}

/* Override Quasar carousel navigation dots color */
:deep(.q-carousel__navigation .q-btn) {
  color: #4caf50 !important;
}

:deep(.q-carousel__navigation-inner--bottom) {
  margin-bottom: -12px;
}

/* Navigation arrows styling */
:deep(.q-carousel__arrow) {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  width: 56px;
  height: 56px;
  font-size: 24px;
  border-radius: 50%;
  margin: 0 16px;
}

:deep(.q-carousel__navigation) {
  bottom: 16px;
}

:deep(.q-carousel__navigation-icon--inactive) {
  color: white !important;
  opacity: 0.7;
}

:deep(.q-carousel__navigation-icon--active) {
  color: white !important;
}
</style>