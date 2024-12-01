<template>
  <q-page padding>
    <!-- Breadcrumb Navigation -->
    <div class="container q-mb-lg">
      <div class="row items-center text-grey q-gutter-x-sm">
        <router-link to="/" class="text-grey">Início</router-link>
        <span>/</span>
        <span class="text-grey">Sobre nós</span>
      </div>
    </div>

    <div class="container article-container">
      <!-- Article Title -->
      <h1 class="text-h4 q-mt-none q-mb-lg">Sobre nós</h1>

      <!-- Article Content -->
      <div class="text-body1 article-content">
        <p>
          Nossa missão é fornecer os melhores serviços e produtos para nossos
          clientes. Com uma equipe dedicada e apaixonada, trabalhamos
          incansavelmente para garantir a satisfação de todos.
        </p>
        <p>
          Fundada em [ano], nossa empresa tem se destacado no mercado por sua
          inovação e compromisso com a qualidade.
        </p>

        <h2 class="text-h5 q-mt-xl q-mb-md">Nossa História</h2>
        <p>
          Desde o início, temos nos esforçado para criar um impacto positivo na
          vida de nossos clientes e na comunidade. Ao longo dos anos, expandimos
          nossos serviços e produtos, sempre mantendo o foco na excelência.
        </p>

        <h2 class="text-h5 q-mt-xl q-mb-md">Valores</h2>
        <ul class="q-ml-md">
          <li class="q-mb-sm">Integridade</li>
          <li class="q-mb-sm">Inovação</li>
          <li class="q-mb-sm">Compromisso com a qualidade</li>
          <li>Responsabilidade social</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "AboutPage",
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.article-container {
  padding: 0;
}

a {
  text-decoration: none;
}

/* Estilos para o conteúdo do artigo */
:deep(.article-content) {
  line-height: 1.8;
}

:deep(.article-content p) {
  margin-bottom: 1.5rem;
  color: #333;
}

:deep(.article-content ul) {
  color: #333;
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
