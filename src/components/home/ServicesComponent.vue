<!-- src/components/home/ServicesSection.vue -->
<template>
  <section class="services-section q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <q-img
            src="src/assets/imagens/servicos.png"
            style="height: 600px; border-radius: 8px"
          >
            <div class="absolute-full bg-black" style="opacity: 0.4"></div>
            <div class="absolute-right text-white" style="width: 50%; padding: 2rem;">
              <h2 class="text-h4 q-mb-lg">
                Facilitando a vinda para o Brasil e fornecendo todo o auxílio possível.
              </h2>
              
              <div class="services-list">
                <div 
                  v-for="service in services" 
                  :key="service" 
                  class="service-item q-mb-md"
                >
                  <div class="row items-center">
                    <q-icon 
                      name="check_circle" 
                      color="green" 
                      size="sm" 
                      class="q-mr-sm" 
                    />
                    <span>{{ service }}</span>
                  </div>
                </div>
              </div>
            </div>
          </q-img>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  'Planejamento',
  'Suporte e equipe de implantação',
  'Acompanhamento continuo',
  'Acompanhamento na educação',
  'Auxilio para as familias',
  'Suporte emocional'
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-item {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .absolute-right {
    width: 100% !important;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
    bottom: 0;
  }
}
</style>