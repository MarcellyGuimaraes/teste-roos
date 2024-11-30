<!-- src/pages/BlogPostPage.vue -->
<template>
    <q-page padding>
      <!-- Breadcrumb Navigation -->
      <div class="container q-mb-lg">
        <div class="row items-center text-grey">
          <q-btn
            flat
            dense
            round
            icon="chevron_left"
            color="grey"
            :to="{ path: '/' }"
            size="sm"
          />
          <q-breadcrumbs separator="/">
            <q-breadcrumbs-el label="Início" :to="{ path: '/' }" />
            <q-breadcrumbs-el label="Blog" :to="{ path: '/blog' }" />
            <q-breadcrumbs-el label="Título da Publicação" />
          </q-breadcrumbs>
        </div>
      </div>
  
      <div class="container">
        <!-- Author and Date -->
        <div class="row items-center q-mb-md">
          <q-avatar size="40px" class="q-mr-sm">
            <img src="src/assets/imagens/author-avatar.jpg" alt="Author">
          </q-avatar>
          <div>
            <div class="text-weight-medium">Juliana Ribeiro</div>
            <div class="text-grey">28 Jul, 2024</div>
          </div>
        </div>
  
        <!-- Article Title -->
        <h1 class="text-h4 q-mb-lg">Saúde e Bem-Estar: Parcerias com instituições de saúdes</h1>
  
        <!-- Featured Image -->
        <q-img
          src="src/assets/imagens/blog/health-partnership.jpg"
          class="rounded-borders q-mb-lg"
          style="height: 500px"
        />
  
        <!-- Share Options -->
        <div class="row items-center q-mb-xl">
          <div class="text-weight-medium q-mr-md">Compartilhar:</div>
          <div class="row q-gutter-sm">
            <q-btn flat round color="grey-8" icon="fab fa-facebook" />
            <q-btn flat round color="grey-8" icon="fab fa-instagram" />
            <q-btn flat round color="grey-8" icon="fab fa-linkedin" />
            <q-btn flat round color="grey-8" icon="fab fa-whatsapp" />
            <q-btn flat round color="grey-8" icon="content_copy" />
            <q-btn flat round color="grey-8" icon="email" />
          </div>
        </div>
  
        <!-- Article Content -->
        <div class="text-body1 q-mb-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur. Sem malesuada habitasse curabitur sed blandit euismod. Nunc tortor amet dis ac interdum et. Volutpat nec tempus lorem mi lorem libero pulvinar neque. Pretium aliquam erat accumsan sollicitudin cum arcu. Arcu neque eget id ipsum orci in fermentum.
          </p>
          <p>
            Magna iaculis nisl mattis vel pellentesque. Gravida condimentum sed pharetra sit cursus pulvinar in. Et orci duis sed nulla. Dui ultrices accumsan varius et sit tortor sed mattis. Faucibus lorem commodo semper enim vehicula pharetra sit semper urna.
          </p>
          <p>
            Ac risus aliquet cursus tristique. Vitae mattis placerat id nisl felis facilisis vivamus leo euismod. Placerat convallis blandit curabitur vel ultricies eu nibh iaculis. Purus fermentum aenean pellentesque sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sem malesuada habitasse curabitur sed blandit euismod. Nunc tortor amet dis ac interdum et. Volutpat nec tempus lorem mi lorem libero pulvinar neque.
          </p>
        </div>
  
        <!-- Bottom Share Options -->
        <div class="row items-center q-mb-xl">
          <div class="text-weight-medium q-mr-md">Compartilhar:</div>
          <div class="row q-gutter-sm">
            <q-btn flat round color="grey-8" icon="fab fa-facebook" />
            <q-btn flat round color="grey-8" icon="fab fa-instagram" />
            <q-btn flat round color="grey-8" icon="fab fa-linkedin" />
            <q-btn flat round color="grey-8" icon="fab fa-whatsapp" />
            <q-btn flat round color="grey-8" icon="content_copy" />
            <q-btn flat round color="grey-8" icon="email" />
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // You can fetch the blog post data based on the route parameter
  // const route = useRoute()
  // const postId = route.params.id
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  @media (max-width: 767px) {
    .container {
      padding: 0 20px;
    }
  }
  </style>