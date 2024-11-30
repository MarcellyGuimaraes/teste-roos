<!-- src/pages/BlogPage.vue -->
<template>
    <q-page padding>
      <!-- Banner Space -->
      <div class="banner q-mb-xl">
        <div class="text-center">
          Espaço Banner
        </div>
      </div>
  
      <div class="container">
        <div class="row">
          <!-- Left Sidebar -->
          <div class="col-12 col-md-3">
            <h5 class="text-h6 q-mb-md">Categorias</h5>
            
            <!-- Search -->
            <q-input
              v-model="search"
              outlined
              dense
              placeholder="Pesquisar"
              class="q-mb-md"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
  
            <!-- Categories List -->
            <q-list padding class="rounded-borders">
              <q-item
                v-for="category in categories"
                :key="category.name"
                clickable
                :active="category.name === activeCategory"
                @click="activeCategory = category.name"
                active-class="bg-green-1 text-green"
              >
                <q-item-section>{{ category.name }}</q-item-section>
              </q-item>
            </q-list>
          </div>
  
          <!-- Main Content -->
          <div class="col-12 col-md-9 q-pl-md">
            <div class="row items-center q-mb-lg">
              <h5 class="text-h6 q-my-none">{{ activeCategory }}</h5>
            </div>
  
            <!-- Blog Posts Grid -->
            <div class="row q-col-gutter-lg">
              <div v-for="post in blogPosts" :key="post.id" class="col-12">
                <q-card flat bordered class="blog-card">
                  <div class="row q-col-gutter-lg">
                    <div class="col-12 col-md-4">
                      <q-img
                        :src="post.image"
                        :ratio="4/3"
                        style="border-radius: 8px"
                      />
                    </div>
                    <div class="col-12 col-md-8 q-pa-md">
                      <div class="text-caption text-green q-mb-sm">{{ post.category }}</div>
                      <h2 class="text-h5 q-mt-none q-mb-sm">{{ post.title }}</h2>
                      <p class="text-grey-8 q-mb-md">{{ post.description }}</p>
                      <q-btn
                        flat
                        color="green"
                        label="Ler mais"
                        class="q-px-none"
                        no-caps
                        :to="{ path: `/blog/${post.id}` }"
                      />
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
  
            <!-- Pagination -->
            <div class="row justify-center q-mt-xl">
              <q-pagination
                v-model="currentPage"
                :max="4"
                direction-links
                boundary-links
                color="green"
                active-color="green"
              />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // State
  const search = ref('')
  const currentPage = ref(1)
  const activeCategory = ref('Categoria X')
  
  // Data
  const categories = ref([
    { name: 'Categoria X' },
    { name: 'Categoria P' },
    { name: 'Categoria T' },
    { name: 'Categoria O' }
  ])
  
  const blogPosts = ref([
    {
      id: 1,
      category: 'Categoria',
      title: 'Desenvolvimento Comunitário',
      description: 'Novos Projetos Comunitários: Informações sobre novos projetos e iniciativas que estão sendo lançados para melhorar as condições de vida.',
      image: 'src/assets/imagens/blog/community.jpg'
    },
    {
      id: 2,
      category: 'Categoria',
      title: '10 lições sobre Educação e Capacitação!',
      description: 'Perfis de alunos e suas conquistas, mostrando o impacto dos programas educacionais.',
      image: 'src/assets/imagens/blog/education.jpg'
    },
    {
      id: 3,
      category: 'Categoria',
      title: 'Saúde e Bem-Estar: Por onde começar?',
      description: 'Notícias sobre campanhas de vacinação, cuidados de saúde e programas de nutrição.',
      image: 'src/assets/imagens/blog/health.jpg'
    },
    // Add more blog posts...
  ])
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .banner {
    background-color: #f5f5f5;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  
  .blog-card {
    transition: transform 0.2s;
  }
  
  .blog-card:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 767px) {
    .container {
      padding: 0 20px;
    }
  }
  </style>