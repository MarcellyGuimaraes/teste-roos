<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="justify-evenly">
        <q-tabs class="q-mr-xl">
          <img src="src/assets/imagens/logo.png" style="height: 40px" alt="OSIDI Logo" class="q-mr-md"/>
          <q-tab label="Label" />
          <q-tab label="Label" />
          <q-tab label="Label" />
          <q-tab label="Label" />
        </q-tabs>

        <q-btn
          label="Fazer doação"
          class="q-px-md"
          icon="favorite"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-dark text-white q-py-xl">
      <div class="container">
        <!-- Main Footer Content -->
        <div class="row q-col-gutter-xl q-mb-xl">
          <!-- Logo and Social Links -->
          <div class="col-12 col-md-3">
            <div class="q-mb-lg">
              <img src="src/assets/imagens/logo.png" alt="OSIDI" style="height: 40px" />
            </div>
            <div class="row q-gutter-md">
              <q-btn flat round color="white" icon="fab fa-instagram" href="#" target="_blank" />
              <q-btn flat round color="white" icon="fab fa-twitter" href="#" target="_blank" />
              <q-btn flat round color="white" icon="fab fa-linkedin" href="#" target="_blank" />
              <q-btn flat round color="white" icon="fab fa-youtube" href="#" target="_blank" />
              <q-btn flat round color="white" icon="fab fa-whatsapp" href="#" target="_blank" />
            </div>
          </div>

          <!-- Navigation Columns -->
          <div class="col-12 col-sm-6 col-md-3">
            <h6 class="text-h6 q-mb-md">Mapa do site</h6>
            <nav>
              <ul class="list-unstyled">
                <li class="q-mb-sm"><a href="#" class="text-white">Sobre nós</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Fale conosco</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Termos de uso</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Privacidade</a></li>
              </ul>
            </nav>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <h6 class="text-h6 q-mb-md">Produto</h6>
            <nav>
              <ul class="list-unstyled">
                <li class="q-mb-sm"><a href="#" class="text-white">Sobre nós</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Fale conosco</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Termos de uso</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Privacidade</a></li>
              </ul>
            </nav>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <h6 class="text-h6 q-mb-md">Conhecimento</h6>
            <nav>
              <ul class="list-unstyled">
                <li class="q-mb-sm"><a href="#" class="text-white">Blog</a></li>
                <li class="q-mb-sm"><a href="#" class="text-white">Central de Ajuda</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Copyright Bar -->
        <div class="row items-center justify-between q-pt-md" style="border-top: 1px solid rgba(255,255,255,0.1)">
          <div class="col-12 col-md-auto">
            <p class="text-grey-5 q-my-none">
              © 2024 <span class="text-green">OSIDI</span> - Todos os direitos reservados
            </p>
          </div>
          <div class="col-12 col-md-auto">
            <p class="text-grey-5 q-my-none">
              Desenvolvido em parceria <a href="#" class="text-white">Roos Corporation</a> ft. <a href="#" class="text-white">morais</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout'
})

</script>

<style scoped>
.bg-dark {
  background-color: #1d1d1d;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.q-header {
  background-color: #374835;
}

.q-btn {
  border-radius: 50px;
  background-color: #11B80E;
}

.q-btn:before{
  border-radius: 50px;
}

.q-toolbar {
  height: 100px;
}

.q-toolbar__title {
  min-width: 1px;
  max-width: max-content;
}

.list-unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  transition: opacity 0.3s;
}

a:hover {
  opacity: 0.8;
}

/* Responsive Styles */
@media (max-width: 767px) {
  .row.justify-between {
    text-align: center;
  }
  
  .col-12 {
    margin-bottom: 1rem;
  }

  .col-12:last-child {
    margin-bottom: 0;
  }
}
</style>