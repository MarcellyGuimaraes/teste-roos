<!-- src/components/home/ServicesSection.vue -->
<template>
  <section class="services-section q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <q-img src="assets/imagens/servicos.png" class="services-image">
            <div class="absolute-full overlay"></div>
            <div class="content-wrapper">
              <h2 class="text-h4 q-mb-lg">
                Facilitando a vinda para o Brasil e fornecendo todo o auxílio
                possível.
              </h2>

              <div class="services-list">
                <div
                  v-for="service in services"
                  :key="service"
                  class="service-item"
                >
                  <div class="service-icon">
                    <q-icon name="check_circle" color="green" />
                  </div>
                  <span class="service-text">{{ service }}</span>
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
  "Planejamento",
  "Suporte e equipe de implantação",
  "Acompanhamento contínuo",
  "Acompanhamento na educação",
  "Auxílio para as famílias",
  "Suporte emocional",
];
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.services-image {
  height: 600px;
  border-radius: 12px;
}

.overlay {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.75) 100%
  );
}

.content-wrapper {
  position: absolute;
  right: 0;
  top: 100px;
  bottom: 0;
  width: 50%;
  height: 500px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-h4 {
  color: white;
  font-size: 32px;
  line-height: 1.3;
  font-weight: 500;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon :deep(.q-icon) {
  font-size: 24px;
  color: #11b80e;
}

.service-text {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .content-wrapper {
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
    padding: 32px;
    justify-content: flex-end;
  }

  .overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  }

  .text-h4 {
    font-size: 24px;
  }

  .service-text {
    font-size: 14px;
  }
}
</style>
