<!-- src/components/home/AboutSection.vue -->
<template>
  <section class="q-py-xl">
    <div class="container">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-img
            loading="lazy"
            src="assets/imagens/sobre-nos.png"
            spinner-color="primary"
            class="about-image"
          />
        </div>

        <div class="col-12 col-md-6">
          <div class="about-header q-mb-lg">
            <div class="icon-wrapper">
              <OsidiIcon size="25" />
            </div>
            <h2 class="text-h4">Sobre nós</h2>
          </div>

          <p class="text-body q-mb-lg">
            Lorem ipsum dolor sit amet consectetur. Diam duis mauris consequat
            at. Congue tellus aliquam ac malesuada. Morbi gravida ut nunc
            elementum risus. Sit enim nulla risus sed mauris consequat. In massa
            ut consectetur nascetur dolor amet. Proin ridiculus mi quis euismod
            quam sit nullam at leo. At adipiscing amet enim feugiat vitae.
            Ultrices nunc ipsum mauris lacus faucibus dolor in euismod urna.
            Enim auctor nisi ac commodo laoreet enim massa sagittis aliquam.
          </p>

          <p class="text-body q-mb-xl">
            Lorem ipsum dolor sit amet consectetur. Diam duis mauris consequat
            at. Congue tellus aliquam ac malesuada. Morbi gravida ut nunc
            elementum risus. Sit enim nulla risus sed mauris consequat. In massa
            ut consectetur nascetur dolor amet. Proin ridiculus mi quis euismod
            quam sit nullam at leo. At adipiscing amet enim feugiat vitae.
            Ultrices nunc ipsum mauris lacus faucibus dolor in euismod urna.
          </p>

          <router-link to="/about" class="read-more">
            Ler História completa
            <q-icon name="arrow_forward" class="q-ml-sm" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OsidiIcon from "../shared/OsidiIcon.vue";
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-image {
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(17, 184, 14, 0.1);
  border-radius: 50%;
}

.icon-wrapper .q-icon {
  font-size: 20px;
  color: #11b80e;
}

.text-h4 {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
}

.text-body {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: #11b80e;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
  margin-top: 70px;
}

.read-more:hover {
  opacity: 0.8;
}

.read-more .q-icon {
  font-size: 20px;
}

@media (max-width: 767px) {
  .about-image {
    height: 300px;
    margin-bottom: 2rem;
  }

  .text-h4 {
    font-size: 28px;
  }
}
</style>
