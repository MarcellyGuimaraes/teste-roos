<!-- src/components/home/StoriesSection.vue -->
<template>
  <section class="stories-section q-py-xl">
    <div class="container">
      <!-- First Story -->
      <div class="row q-col-gutter-xl items-center q-mb-xl">
        <div class="col-12 col-md-6">
          <q-img
            src="src/assets/imagens/story-1.png"
            style="border-radius: 8px; height: 400px"
          />
        </div>
        <div class="col-12 col-md-6">
          <p class="text-h5 text-weight-regular">
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim purus egestas nulla feugiat arcu tellus cum accumsan.
          </p>
        </div>
      </div>

      <!-- Second Story -->
      <div class="row q-col-gutter-xl items-center">
        <div class="col-12 col-md-6 gt-sm">
          <p class="text-h5 text-weight-regular">
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim purus egestas nulla feugiat arcu tellus cum accumsan.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <q-img
            src="src/assets/imagens/story-2.png"
            style="border-radius: 8px; height: 400px"
          />
        </div>
        <div class="col-12 col-md-6 lt-md q-mt-md">
          <p class="text-h5 text-weight-regular">
            Lorem ipsum dolor sit amet consectetur. Tristique dignissim purus egestas nulla feugiat arcu tellus cum accumsan.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 1023px) {
  .gt-sm {
    display: none;
  }
}

@media (min-width: 1024px) {
  .lt-md {
    display: none;
  }
}
</style>