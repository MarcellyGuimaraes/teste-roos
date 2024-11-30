<!-- src/components/home/StatsSection.vue -->
<template>
  <section class="bg-dark text-white q-py-xl">
    <div class="container">
      <div class="row items-center">
        <div class="col-12 col-md-3">
          <h2 class="text-h4">Ajudamos a transformar...</h2>
        </div>
        
        <div class="col-12 col-md-9">
          <div class="row q-col-gutter-md">
            <div v-for="stat in stats" :key="stat.value" class="col-12 col-md-4">
              <q-card flat bordered class="bg-white text-dark">
                <q-card-section>
                  <div class="row items-center">
                    <q-icon name="arrow_upward" color="green" size="md" />
                    <div class="q-ml-md">
                      <div class="text-h5 text-green">{{ stat.value }}</div>
                      <div class="text-subtitle2 text-grey">{{ stat.label }}</div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
    default: () => []
  }
})
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

@media (max-width: 767px) {
  .text-h4 {
    margin-bottom: 2rem;
  }
  
  .col-12 {
    margin-bottom: 1rem;
  }

  .col-12:last-child {
    margin-bottom: 0;
  }
}
</style>