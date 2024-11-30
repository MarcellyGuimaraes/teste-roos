<!-- src/components/home/AboutSection.vue -->
<template>
  <section class="q-py-xl">
    <div class="container">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-img
            src="src/assets/imagens/sobre-nos.png"
            spinner-color="primary"
            style="height: 400px; border-radius: 8px"
          />
        </div>
        
        <div class="col-12 col-md-6">
          <div class="row items-center q-mb-md">
            <q-icon name="eco" color="green" size="md" class="q-mr-sm" />
            <h2 class="text-h4 q-my-none">Sobre nós</h2>
          </div>

          <p class="text-grey-7 q-mb-md">
            Lorem ipsum dolor sit amet consectetur. Diam duis mauris consequat at. Congue tellus aliquam ac malesuada. Morbi gravida ut nunc elementum risus. Sit enim nulla risus sed mauris consequat. In massa ut consectetur nascetur dolor amet. Proin ridiculus mi quis euismod quam sit nullam at leo. At adipiscing amet enim feugiat vitae. Ultrices nunc ipsum mauris lacus faucibus dolor in euismod urna. Enim auctor nisi ac commodo laoreet enim massa sagittis aliquam.
          </p>

          <p class="text-grey-7 q-mb-md">
            Lorem ipsum dolor sit amet consectetur. Diam duis mauris consequat at. Congue tellus aliquam ac malesuada. Morbi gravida ut nunc elementum risus. Sit enim nulla risus sed mauris consequat. In massa ut consectetur nascetur dolor amet. Proin ridiculus mi quis euismod quam sit nullam at leo. At adipiscing amet enim feugiat vitae. Ultrices nunc ipsum mauris lacus faucibus dolor in euismod urna.
          </p>

          <q-btn
            flat
            color="green"
            label="Ler História completa"
            class="q-px-none"
            icon-right="arrow_forward"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente simplificado sem props
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 767px) {
  .q-img {
    margin-bottom: 2rem;
  }
}
</style>