<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="justify-evenly">
        <q-tabs class="q-mr-xl">
          <router-link to="/">
            <img
              src="assets/imagens/logo.png"
              style="height: 40px"
              alt="OSIDI Logo"
              class="q-mr-md"
            />
          </router-link>

          <q-tab to="/" label="Home" />
          <q-tab to="/blog" label="Blog" />

          <!-- Menu Admin -->
          <q-btn-dropdown flat label="Admin" v-if="isAdmin">
            <q-list>
              <q-item clickable v-close-popup to="/articles/new">
                <q-item-section>Novo Artigo</q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/categories/new">
                <q-item-section>Nova Categoria</q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-close-popup to="/admin/articles">
                <q-item-section>Gerenciar Artigos</q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/admin/categories">
                <q-item-section>Gerenciar Categorias</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>

        <DonationButton unelevated />
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
              <img
                src="assets/imagens/logo.png"
                alt="OSIDI"
                style="height: 40px"
              />
            </div>
            <div class="row q-gutter-md">
              <q-btn
                flat
                round
                color="white"
                icon="fab fa-instagram"
                href="#"
                target="_blank"
              />
              <q-btn
                flat
                round
                color="white"
                icon="fab fa-twitter"
                href="#"
                target="_blank"
              />
              <q-btn
                flat
                round
                color="white"
                icon="fab fa-linkedin"
                href="#"
                target="_blank"
              />
              <q-btn
                flat
                round
                color="white"
                icon="fab fa-youtube"
                href="#"
                target="_blank"
              />
              <q-btn
                flat
                round
                color="white"
                icon="fab fa-whatsapp"
                href="#"
                target="_blank"
              />
            </div>
          </div>

          <!-- Navigation Columns -->
          <div class="col-12 col-sm-6 col-md-3">
            <h6 class="text-h6 q-mb-md">Mapa do site</h6>
            <nav>
              <ul class="list-unstyled">
                <li class="q-mb-sm">
                  <router-link to="/" class="text-white">Home</router-link>
                </li>
                <li class="q-mb-sm">
                  <router-link to="/blog" class="text-white">Blog</router-link>
                </li>
                <li class="q-mb-sm">
                  <a href="#" class="text-white">Sobre nós</a>
                </li>
                <li class="q-mb-sm">
                  <a href="#" class="text-white">Fale conosco</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <h6 class="text-h6 q-mb-md">Admin</h6>
            <nav>
              <ul class="list-unstyled">
                <li class="q-mb-sm">
                  <router-link to="/articles/new" class="text-white"
                    >Novo Artigo</router-link
                  >
                </li>
                <li class="q-mb-sm">
                  <router-link to="/categories/new" class="text-white"
                    >Nova Categoria</router-link
                  >
                </li>
                <li class="q-mb-sm">
                  <router-link to="/admin/articles" class="text-white"
                    >Gerenciar Artigos</router-link
                  >
                </li>
                <li class="q-mb-sm">
                  <router-link to="/admin/categories" class="text-white"
                    >Gerenciar Categorias</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <h6 class="text-h6 q-mb-md">Conhecimento</h6>
            <nav>
              <ul class="list-unstyled">
                <li class="q-mb-sm">
                  <router-link to="/blog" class="text-white">Blog</router-link>
                </li>
                <li class="q-mb-sm">
                  <a href="#" class="text-white">Central de Ajuda</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Copyright Bar -->
        <div
          class="row items-center justify-between q-pt-md"
          style="border-top: 1px solid rgba(255, 255, 255, 0.1)"
        >
          <div class="col-12 col-md-auto">
            <p class="text-grey-5 q-my-none">
              © 2024 <span class="text-green">OSIDI</span> - Todos os direitos
              reservados
            </p>
          </div>
          <div class="col-12 col-md-auto">
            <p class="text-grey-5 q-my-none">
              Desenvolvido em parceria
              <a href="#" class="text-white">Roos Corporation</a> ft.
              <a href="#" class="text-white">morais</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import DonationButton from "../components/shared/DonationButton.vue";

defineOptions({
  name: "MainLayout",
});

// Simula verificação de admin - você deve implementar sua própria lógica de autenticação
const isAdmin = ref(true);

const route = useRoute();

// Gera breadcrumbs baseado na rota atual
const breadcrumbs = computed(() => {
  const path = route.path;
  const crumbs = [];

  if (path.includes("/blog")) {
    crumbs.push({ to: "/blog", label: "Blog" });
    if (route.params.id) {
      crumbs.push({ label: "Artigo" });
    }
  }

  if (path.includes("/articles")) {
    crumbs.push({ to: "/admin/articles", label: "Artigos" });
    if (path.includes("/new")) {
      crumbs.push({ label: "Novo Artigo" });
    } else if (path.includes("/edit")) {
      crumbs.push({ label: "Editar Artigo" });
    }
  }

  if (path.includes("/categories")) {
    crumbs.push({ to: "/admin/categories", label: "Categorias" });
    if (path.includes("/new")) {
      crumbs.push({ label: "Nova Categoria" });
    } else if (path.includes("/edit")) {
      crumbs.push({ label: "Editar Categoria" });
    }
  }

  return crumbs;
});

// Mostra breadcrumbs apenas em páginas específicas
const showBreadcrumbs = computed(() => {
  return route.path !== "/";
});
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

.donation-btn {
  border-radius: 50px;
  background-color: #11b80e;
}

.donation-btn:before {
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

/* Área administrativa */
.admin-link {
  color: #11b80e;
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
