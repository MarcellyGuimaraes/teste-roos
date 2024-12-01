<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- Desktop Header -->
      <q-toolbar class="desktop-toolbar justify-evenly">
        <q-tabs class="q-mr-xl">
          <router-link to="/">
            <img
              src="assets/imagens/logo.png"
              style="height: 40px"
              alt="OSIDI Logo"
              class="q-mr-md"
            />
          </router-link>

          <router-link to="/">
            <q-tab label="Home" />
          </router-link>

          <router-link to="/blog">
            <q-tab label="Blog" />
          </router-link>

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

      <!-- Mobile Header -->
      <q-toolbar class="mobile-toolbar">
        <div class="full-width">
          <div class="row items-center justify-between">
            <router-link to="/">
              <img
                src="assets/imagens/logo.png"
                alt="OSIDI Logo"
                class="mobile-logo"
              />
            </router-link>

            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="mobileMenuOpen = true"
            />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Mobile Menu Dialog -->
    <q-dialog
      v-model="mobileMenuOpen"
      position="right"
      seamless
      maximized
      full-height
    >
      <q-card class="mobile-menu-card">
        <q-toolbar class="mobile-menu-header">
          <div class="row full-width items-center justify-between">
            <router-link to="/" @click="mobileMenuOpen = false">
              <img
                src="assets/imagens/logo.png"
                alt="OSIDI Logo"
                class="mobile-menu-logo"
              />
            </router-link>
            <q-btn
              flat
              round
              dense
              icon="close"
              v-close-popup
              class="mobile-menu-close"
            />
          </div>
        </q-toolbar>

        <q-scroll-area class="mobile-menu-content">
          <q-list padding>
            <q-item clickable v-ripple to="/" @click="mobileMenuOpen = false">
              <q-item-section>Home</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              to="/blog"
              @click="mobileMenuOpen = false"
            >
              <q-item-section>Blog</q-item-section>
            </q-item>

            <q-expansion-item
              v-if="isAdmin"
              label="Admin"
              header-class="admin-expansion-header"
            >
              <q-list class="admin-submenu">
                <q-item
                  clickable
                  v-ripple
                  to="/articles/new"
                  @click="mobileMenuOpen = false"
                >
                  <q-item-section>Novo Artigo</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/categories/new"
                  @click="mobileMenuOpen = false"
                >
                  <q-item-section>Nova Categoria</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/admin/articles"
                  @click="mobileMenuOpen = false"
                >
                  <q-item-section>Gerenciar Artigos</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/admin/categories"
                  @click="mobileMenuOpen = false"
                >
                  <q-item-section>Gerenciar Categorias</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <!-- Donation Button -->
            <div class="q-pa-md">
              <DonationButton unelevated class="full-width" />
            </div>
          </q-list>
        </q-scroll-area>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-dark text-white q-py-xl">
      <div class="container">
        <div class="row q-col-gutter-xl">
          <!-- Logo e Redes Sociais -->
          <div class="col-12 col-md-3">
            <img
              src="assets/imagens/logo.png"
              alt="OSIDI"
              class="logo q-mb-lg"
            />
            <div class="social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="social-link"
              >
                <q-icon name="mdi-instagram" />
              </a>
              <a href="https://x.com/" target="_blank" class="social-link">
                <q-icon name="mdi-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcellyguimaraes/"
                target="_blank"
                class="social-link"
              >
                <q-icon name="mdi-linkedin" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                class="social-link"
              >
                <q-icon name="mdi-youtube" />
              </a>
              <a
                href="https://wa.link/rzw1q2"
                target="_blank"
                class="social-link"
              >
                <q-icon name="mdi-whatsapp" />
              </a>
            </div>
          </div>

          <!-- Mapa do Site -->
          <div class="col-6 col-md-3">
            <h6 class="footer-title">Mapa do site</h6>
            <ul class="footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li>
                <router-link to="/sobre-nos">Sobre nós</router-link>
              </li>
              <li>
                <router-link to="/admin/articles"
                  >Gerenciar Artigos</router-link
                >
              </li>
              <li>
                <router-link to="/admin/categories"
                  >Gerenciar Categorias</router-link
                >
              </li>
            </ul>
          </div>

          <!-- Produto -->
          <div class="col-6 col-md-3">
            <h6 class="footer-title">Produto</h6>
            <ul class="footer-links">
              <li>
                <router-link to="/fale-conosco">Fale conosco</router-link>
              </li>
              <li><router-link to="/termos">Termos de uso</router-link></li>
              <li><router-link to="/privacidade">Privacidade</router-link></li>
            </ul>
          </div>

          <!-- Conhecimento -->
          <div class="col-12 col-md-3">
            <h6 class="footer-title">Conhecimento</h6>
            <ul class="footer-links">
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/ajuda">Central de Ajuda</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="copyright-bar">
          <div>
            © 2024 <span class="text-primary">OSIDI</span> - Todos os direitos
            reservados
          </div>
          <div class="developers">
            Desenvolvido em parceria
            <a href="#" class="developer-link">Roos Corporation</a>
            ft.
            <a href="#" class="developer-link">morais°</a>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import DonationButton from "../components/shared/DonationButton.vue";

defineOptions({
  name: "MainLayout",
});

const isAdmin = ref(true);
const route = useRoute();
const mobileMenuOpen = ref(false);
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
  color: #fff;
  transition: opacity 0.3s;
}

a:hover {
  color: #fff;
  opacity: 0.8;
}

:deep(.q-dialog__inner) {
  padding: 0 !important;
}

/* Estilos do Menu Mobile */
.mobile-menu-card {
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background-color: #374835;
}

.mobile-menu-header {
  background-color: #374835;
  min-height: 64px;
  padding: 0 16px;
}

.mobile-menu-logo {
  height: 32px;
}

.mobile-menu-close {
  color: white;
}

.mobile-menu-content {
  height: calc(100vh - 64px);
}

.mobile-menu-content :deep(.q-item) {
  color: white;
  min-height: 48px;
  font-size: 16px;
}

.mobile-menu-content :deep(.q-expansion-item__content) {
  background-color: #2a2a2a;
}

.admin-expansion-header {
  color: white;
}

.admin-submenu :deep(.q-item) {
  padding-left: 32px;
  color: #999;
}
/* Área administrativa */
:deep(a.q-item.q-item-type) {
  color: #000000;
}

@media (max-width: 767px) {
  .desktop-toolbar {
    display: none;
  }

  .q-toolbar {
    height: 90px;
    align-content: center;
  }

  .mobile-toolbar {
    display: block;
    min-height: 64px;
    padding: 0 16px;
  }

  .mobile-logo {
    height: 32px;
  }
  .donation-button {
    font-size: 12px;
  }

  .donation-button :deep(.q-icon) {
    display: none;
  }
  :deep(a.q-item.q-item-type) {
    color: #ffffff;
  }
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

@media (min-width: 768px) {
  .mobile-toolbar {
    display: none;
  }

  .desktop-toolbar {
    display: flex;
    height: 100px;
  }
}

.bg-dark {
  background-color: #111;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  height: 40px;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  color: white;
  text-decoration: none;
  font-size: 20px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.social-link:hover {
  opacity: 1;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 24px;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 16px;
}

.footer-links a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
}

.copyright-bar {
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 14px;
}

.text-primary {
  color: #11b80e;
}

.developers {
  display: flex;
  align-items: center;
  gap: 4px;
}

.developer-link {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.developer-link:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .copyright-bar {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .developers {
    justify-content: center;
  }

  .col-12 {
    margin-bottom: 40px;
  }

  .col-12:last-child {
    margin-bottom: 0;
  }
}
</style>
