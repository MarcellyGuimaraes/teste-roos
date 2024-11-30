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
            <q-img
              src="src/assets/imagens/hero.png"
              style="height: 600px"
            >
              <div class="absolute-full bg-black" style="opacity: 0.4"></div>
              <div class="absolute-bottom q-pb-lg q-px-lg">
                <h1 class="text-h3 text-white q-mb-md">
                  Solidariedade em Ação: ONG Apoia Comunidade Haitiana na Luta por Direitos e Dignidade!
                </h1>
                <p class="text-white q-mb-xl" style="max-width: 700px">
                  Lorem ipsum dolor sit amet. In molestiae quaerat ut dolores quia qui repellendus impedit et quibusdam excepturi. Ut mollitia accusamus in sint provident quo voluptatem distinctio aut fugiat quas non itaque debitis rem quia harum. In corpo
                </p>
                <q-btn
                  unelevated
                  color="green"
                  style="background: #00B71D"
                  label="Fazer doação"
                  class="q-px-xl q-py-sm"
                  size="lg"
                >
                  <q-icon name="favorite" size="20px" class="q-mr-sm" />
                </q-btn>
              </div>
            </q-img>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const slide = ref('1')
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
  
  .text-white.q-mb-xl {
    margin-bottom: 24px !important;
  }
  </style>