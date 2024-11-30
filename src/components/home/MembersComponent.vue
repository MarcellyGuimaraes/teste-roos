<!-- src/components/home/MembersSection.vue -->
<template>
  <section class="members-section bg-dark text-white q-py-xl">
    <div class="container">
      <!-- Header -->
      <div class="row items-center justify-between q-mb-xl">
        <div class="row items-center">
          <q-icon name="eco" color="green" size="md" class="q-mr-sm" />
          <h2 class="text-h4 q-my-none">Membros</h2>
        </div>
        <q-btn
          flat
          color="green"
          label="Visitar blog"
          class="q-px-md"
          icon-right="north_east"
          :to="{ path: '/blog' }"
        />
      </div>

      <!-- Members Grid -->
      <div class="row q-col-gutter-xl">
        <div v-for="member in members" :key="member.name" class="col-12 col-sm-6 col-md-3">
          <div class="member-card">
            <q-img
              :src="member.image"
              :ratio="1"
              style="border-radius: 8px"
            />
            <h3 class="text-h5 q-mt-md q-mb-none">{{ member.name }}</h3>
            <p class="text-subtitle1 text-grey-5 q-mb-sm">{{ member.title }}</p>
            <div class="text-grey-6" style="font-size: 0.9rem">{{ member.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const members = [
  {
    name: 'Lord Ara Darzi',
    title: 'Chair',
    description: 'Co-Director of the Institute of Global Health Innovation at Imperial College London',
    image: 'src/assets/imagens/membros/membro-1.png'
  },
  {
    name: 'George Clooney',
    title: 'Honorary Co-Chair',
    description: 'Co-founder, The Sentry; Humanitarian, performer and film maker',
    image: 'src/assets/imagens/membros/membro-2.png'
  },
  {
    name: 'Leymah Gbowee',
    title: 'Member',
    description: 'Liberian peace activist and women\'s rights advocate; Nobel Laureate',
    image: 'src/assets/imagens/membros/membro-3.png'
  },
  {
    name: 'Dele Olojede',
    title: 'Member', 
    description: 'Journalist, Writer, Pulitzer Prize Winner',
    image: 'src/assets/imagens/membros/membro-4.png'
  }
]
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

.member-card {
  height: 100%;
}

@media (max-width: 599px) {
  .member-card {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .member-card:last-child {
    margin-bottom: 0;
  }
}
</style>