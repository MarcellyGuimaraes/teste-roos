<template>
  <div class="hero-section q-py-md">
    <div class="container">
      <div class="hero-content rounded-borders">
        <q-img
          loading="lazy"
          src="assets/imagens/hero.png"
          style="height: 600px"
        >
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
      </div>
    </div>
  </div>
</template>

<script setup>
import DonationButton from "../shared/DonationButton.vue";
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

.hero-content {
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
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

h1.text-h3 {
  font-size: 32px;
  line-height: 1.2;
  font-weight: 600;
}

@media (max-width: 767px) {
  h1.text-h3 {
    font-size: 25px;
  }

  .hero-description[data-v-49453163] {
    font-size: 15px;
  }
}
</style>
