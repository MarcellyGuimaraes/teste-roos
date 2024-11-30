<!-- src/components/home/StatsSection.vue -->
<template>
  <section class="bg-dark text-white q-py-xl">
    <div class="container">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-12 col-md-4">
          <h2 class="text-h4 text-weight-medium">Ajudamos a transformar...</h2>
        </div>

        <div class="col-12 col-md-8">
          <div class="row q-col-gutter-lg">
            <div
              v-for="stat in stats"
              :key="stat.value"
              class="col-12 col-md-4"
            >
              <div class="stat-card">
                <div class="stat-icon">
                  <q-icon name="arrow_upward" color="green" />
                </div>
                <div class="stat-content">
                  <div class="stat-value">+{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    value: "35",
    label: "Projetos realizados",
  },
  {
    value: "35",
    label: "Projetos realizados",
  },
  {
    value: "135.958",
    label: "Pessoas impactadas",
  },
];
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

.text-h4 {
  font-size: 29px;
  line-height: 1.2;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 16px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  gap: 16px;
  height: 100px;
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(17, 184, 14, 0.1);
  border-radius: 50%;
}

.stat-icon .q-icon {
  font-size: 24px;
  color: #11b80e;
}

.stat-content {
  flex: 1;
}

.stat-value {
  color: #11b80e;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 4px;
}

.stat-label {
  color: #202020;
  font-size: 14px;
  line-height: 1.4;
}

@media (max-width: 767px) {
  .text-h4 {
    margin-bottom: 2rem;
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
