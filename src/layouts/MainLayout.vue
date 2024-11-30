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

          <router-link to="/">
            <q-tab label="Home" />
          </router-link>

          <router-link to="/blog">
            <q-tab label="Blog" />
          </router-link>

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
        <div class="row q-col-gutter-xl">
          <!-- Logo e Redes Sociais -->
          <div class="col-12 col-md-3">
            <img
              src="assets/imagens/logo.png"
              alt="OSIDI"
              class="logo q-mb-lg"
            />
            <div class="social-links">
              <a href="#" target="_blank" class="social-link">
                <q-icon name="mdi-instagram" />
              </a>
              <a href="#" target="_blank" class="social-link">
                <q-icon name="mdi-twitter" />
              </a>
              <a href="#" target="_blank" class="social-link">
                <q-icon name="mdi-linkedin" />
              </a>
              <a href="#" target="_blank" class="social-link">
                <q-icon name="mdi-youtube" />
              </a>
              <a href="#" target="_blank" class="social-link">
                <q-icon name="mdi-whatsapp" />
              </a>
            </div>
          </div>

          <!-- Mapa do Site -->
          <div class="col-12 col-md-3">
            <h6 class="footer-title">Mapa do site</h6>
            <ul class="footer-links">
              <li><router-link to="/sobre-nos">Sobre nós</router-link></li>
              <li>
                <router-link to="/fale-conosco">Fale conosco</router-link>
              </li>
              <li><router-link to="/termos">Termos de uso</router-link></li>
              <li><router-link to="/privacidade">Privacidade</router-link></li>
            </ul>
          </div>

          <!-- Produto -->
          <div class="col-12 col-md-3">
            <h6 class="footer-title">Produto</h6>
            <ul class="footer-links">
              <li><router-link to="/sobre-nos">Sobre nós</router-link></li>
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
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import DonationButton from "../components/shared/DonationButton.vue";

defineOptions({
  name: "MainLayout",
});

// Simula verificação de admin - você deve implementar sua própria lógica de autenticação
const isAdmin = ref(true);

const route = useRoute();
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
