<template>
  <section class="stories-section q-py-xl">
    <div class="container">
      <!-- First Story -->
      <div class="row q-col-gutter-xl items-center q-mb-xl">
        <div class="col-12 col-md-6">
          <q-img src="assets/imagens/story-1.png" class="story-image" />
        </div>
        <div class="col-12 col-md-6">
          <p class="story-text">
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim purus
            egestas nulla feugiat arcu tellus cum accumsan.
          </p>
        </div>
      </div>

      <!-- Second Story -->
      <div class="row q-col-gutter-xl items-center">
        <div class="col-12 col-md-6 gt-sm">
          <p class="story-text">
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim purus
            egestas nulla feugiat arcu tellus cum accumsan.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <q-img src="assets/imagens/story-2.png" class="story-image" />
        </div>
        <div class="col-12 col-md-6 lt-md">
          <p class="story-text q-mt-md">
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim purus
            egestas nulla feugiat arcu tellus cum accumsan.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.story-image {
  height: 450px;
  width: 450px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.story-text {
  font-size: 33px;
  line-height: 1.3;
  font-weight: 600;
  color: #333539;
  margin: 0;
}

@media (max-width: 1023px) {
  .gt-sm {
    display: none;
  }

  .story-image {
    height: 400px;
  }

  .story-text {
    font-size: 24px;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .lt-md {
    display: none;
  }
}

@media (max-width: 599px) {
  .story-image {
    height: 300px;
    max-width: 100%;
  }

  .story-text {
    font-size: 20px;
  }
}
</style>
