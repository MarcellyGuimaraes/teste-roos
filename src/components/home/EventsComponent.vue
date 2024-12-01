<!-- src/components/home/EventsSection.vue -->
<template>
  <section class="events-section q-py-xl">
    <div class="container">
      <div class="header q-mb-lg">
        <OsidiIcon size="24" variant="primary" class="q-mr-md" />
        <h2 class="text-h4 q-my-none">Eventos</h2>
      </div>

      <q-carousel
        v-model="slide"
        animated
        arrows
        navigation
        infinite
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = 3000"
        class="events-carousel"
      >
        <q-carousel-slide
          v-for="event in events"
          :key="event.id"
          :name="event.id"
          class="events-slide"
        >
          <q-img loading="lazy" :src="event.image" class="event-image">
            <div class="image-overlay"></div>
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import OsidiIcon from "../shared/OsidiIcon.vue";

const slide = ref(1);
const autoplay = ref(3000);

const events = [
  {
    id: 1,
    image: "assets/imagens/evento.png",
  },
  {
    id: 2,
    image: "assets/imagens/evento.png",
  },
  {
    id: 3,
    image: "assets/imagens/evento.png",
  },
];
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  display: flex;
  align-items: center;
}

.text-h4 {
  font-size: 32px;
  font-weight: 500;
}

.events-carousel {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.events-slide {
  padding: 0;
}

.event-image {
  height: 400px;
  width: 100%;
  position: relative;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

:deep(.q-carousel__navigation) {
  bottom: 16px;
}

:deep(.q-carousel__navigation-icon--active),
:deep(.q-carousel__navigation-icon--inactive) {
  color: #fff !important;
}

:deep(.q-carousel__navigation-icon--inactive) {
  opacity: 0.6;
}

:deep(.q-carousel__arrow) {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  margin: 0 16px;
  top: 45%;
}

:deep(.q-carousel__arrow:hover) {
  background: rgba(0, 0, 0, 0.7);
}

@media (max-width: 599px) {
  .events-carousel,
  .event-image {
    height: 300px;
  }

  .text-h4 {
    font-size: 28px;
  }
}
</style>
