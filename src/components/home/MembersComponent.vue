<!-- src/components/home/MembersSection.vue -->
<template>
  <section class="members-section bg-dark text-white q-py-xl">
    <div class="container">
      <!-- Header -->
      <div class="row items-center justify-between q-mb-xl">
        <div class="header-title">
          <OsidiIcon size="24" variant="white" class="q-mr-md" />
          <h2 class="text-h4 q-my-none">Membros</h2>
        </div>
        <router-link to="/blog" class="visit-blog">
          Visitar blog
          <q-icon name="north_east" class="q-ml-sm" />
        </router-link>
      </div>

      <!-- Members Carousel -->
      <q-carousel
        v-model="slide"
        animated
        arrows
        navigation
        infinite
        :autoplay="5000"
        swipeable
      >
        <q-carousel-slide :name="1">
          <div class="row q-col-gutter-xl">
            <div
              v-for="member in displayedMembers"
              :key="member.name"
              class="col-12 col-sm-6 col-md-3"
            >
              <div class="member-card">
                <q-img :src="member.image" :ratio="1" class="member-image" />
                <div class="member-info">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role">{{ member.title }}</p>
                  <div class="divider"></div>
                  <p class="member-description">{{ member.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import OsidiIcon from "../shared/OsidiIcon.vue";

const slide = ref(1);

const members = [
  {
    name: "Lord Ara\nDarzi",
    title: "Chair",
    description:
      "Co-Director of the Institute of Global Health Innovation at Imperial College London",
    image: "src/assets/imagens/membros/membro-1.png",
  },
  {
    name: "George Clooney",
    title: "Honorary Co-Chair",
    description:
      "Co-founder, The Sentry; Humanitarian, performer and film maker",
    image: "src/assets/imagens/membros/membro-2.png",
  },
  {
    name: "Leymah Gbowee",
    title: "Member",
    description:
      "Liberian peace activist and women's rights advocate; Nobel Laureate",
    image: "src/assets/imagens/membros/membro-3.png",
  },
  {
    name: "Dele Olojede",
    title: "Member",
    description: "Journalist, Writer, Pulitzer Prize Winner",
    image: "src/assets/imagens/membros/membro-4.png",
  },
];

// Pode adicionar mais membros aqui e eles serão distribuídos em slides adicionais
const displayedMembers = computed(() => members);
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.bg-dark {
  background-color: #1d1d1d;
}

.header-title {
  display: flex;
  align-items: center;
}

.text-h4 {
  font-size: 32px;
  font-weight: 500;
}

.visit-blog {
  display: flex;
  align-items: center;
  color: #11b80e;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.visit-blog:hover {
  opacity: 0.8;
}

.visit-blog .q-icon {
  font-size: 20px;
}

:deep(.q-carousel) {
  background: transparent;
  height: auto;
}

:deep(.q-carousel__navigation) {
  bottom: -40px;
}

:deep(.q-carousel__navigation-icon--active),
:deep(.q-carousel__navigation-icon--inactive) {
  color: #11b80e !important;
}

:deep(.q-carousel__navigation-icon--inactive) {
  opacity: 0.5;
}

:deep(.q-carousel__arrow) {
  color: #d3d3d3;
  background: rgb(255 255 255 / 80%);
  font-size: 24px;
  margin: 0;
  width: 40px;
  top: 115px;
  height: 40px;
}

:deep(.q-carousel__arrow--left) {
  left: -50px;
}

:deep(.q-carousel__arrow--right) {
  right: -50px;
}

.member-card {
  height: 100%;
  text-align: center;
}

.member-image {
  border-radius: 4px;
}

.member-info {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-name {
  font-size: 20px;
  font-weight: 500;
  margin: 16px 0 4px;
  line-height: 1.2;
  white-space: pre-line;
}

.member-role {
  color: #fff;
  font-size: 14px;
  margin: 0 0 12px;
  font-style: italic;
}

.divider {
  width: 40px;
  height: 1px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 12px;
}

.member-description {
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  margin: 0;
  max-width: 250px;
  margin: 0 auto;
}

@media (max-width: 1279px) {
  :deep(.q-carousel__arrow--left) {
    left: 0;
  }

  :deep(.q-carousel__arrow--right) {
    right: 0;
  }
}

@media (max-width: 599px) {
  .member-card {
    margin-bottom: 2rem;
  }

  .member-card:last-child {
    margin-bottom: 0;
  }

  .header-title {
    margin-bottom: 1rem;
  }

  .row.items-center.justify-between {
    flex-direction: column;
  }
}
</style>
