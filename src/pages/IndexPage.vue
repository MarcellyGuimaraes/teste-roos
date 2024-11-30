<template>
  <q-page>
    <hero-section />

    <stats-section :stats="stats" />

    <about-section />

    <services-section />

    <stories-section />

    <members-section />

    <news-section :news="news" />

    <events-section />

    <photos-section />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import HeroSection from "components/home/HeroComponent.vue";
import StatsSection from "components/home/StatsComponent.vue";
import AboutSection from "components/home/AboutComponent.vue";
import ServicesSection from "components/home/ServicesComponent.vue";
import StoriesSection from "components/home/StoriesComponent.vue";
import MembersSection from "components/home/MembersComponent.vue";
import NewsSection from "components/home/NewsComponent.vue";
import EventsSection from "components/home/EventsComponent.vue";
import PhotosSection from "components/home/PhotosComponent.vue";

defineOptions({
  name: "IndexPage",
});

const stats = ref([
  { value: "+35", label: "Projetos realizados" },
  { value: "+35", label: "Projetos realizados" },
  { value: "+135.958", label: "Pessoas impactadas" },
]);

const news = ref([
  {
    id: 1,
    image: "assets/imagens/noticias/noticia-1.png",
    category: "Categoria",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: "assets/imagens/noticias/noticia-2.png",
    category: "Categoria",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: "assets/imagens/noticias/noticia-3.png",
    category: "Categoria",
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]);
</script>
