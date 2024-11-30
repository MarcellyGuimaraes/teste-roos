<!-- src/components/home/HeroSection.vue -->
<template>
  <div class="hero-section q-py-md">
    <div class="container">
      <q-carousel
        v-model="slide"
        animated
        arrows
        navigation
        infinite
        :autoplay="5000"
        class="rounded-borders"
      >
        <q-carousel-slide name="1" class="column no-wrap">
          <q-img src="assets/imagens/hero.png" style="height: 600px">
            <div class="absolute-full bg-black" style="opacity: 0.4"></div>
            <div class="absolute-bottom text-container">
              <h1 class="text-h3 text-white q-mb-md">
                Solidariedade em Ação: ONG Apoia Comunidade Haitiana na Luta por
                Direitos e Dignidade!
              </h1>
              <p class="text-white q-mb-xl hero-description">
                Lorem ipsum dolor sit amet. In molestiae quaerat ut dolores quia
                qui repellendus impedit et quibusdam excepturi. Ut mollitia
                accusamus in sint provident quo voluptatem distinctio aut fugiat
                quas non itaque debitis rem quia harum. In corpo
              </p>
              <DonationButton unelevated />
            </div>
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DonationButton from "../shared/DonationButton.vue";

const slide = ref("1");
</script>

<style scoped>
.hero-section {
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.q-carousel {
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.q-carousel__slide {
  padding: 0;
}

.q-img__content > div {
  background-color: unset;
}

:deep(.q-carousel__arrow) {
  top: 50% !important;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  width: 36px;
  height: 36px;
  font-size: 20px;
  border-radius: 50%;
  margin: 0 24px;
}

:deep(.q-carousel__prev-arrow--horizontal) {
  left: -15px;
}

:deep(.q-carousel__next-arrow--horizontal) {
  right: -15px;
}

:deep(.q-carousel__navigation) {
  bottom: 24px;
}

:deep(.q-carousel__navigation-icon--inactive) {
  color: white !important;
  opacity: 0.7;
}

:deep(.q-carousel__navigation-icon--active) {
  color: white !important;
}

.text-container {
  padding: 32px 48px;
  max-width: 900px;
}

.hero-description {
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.6;
  max-width: 700px;
}

.donation-btn {
  background: #00b71d !important;
  padding: 12px 48px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
}

.donation-btn :deep(.q-icon) {
  margin-right: 8px;
}

h1.text-h3 {
  font-size: 32px;
  line-height: 1.2;
  font-weight: 600;
}
</style>
