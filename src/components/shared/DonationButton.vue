<!-- src/components/shared/DonationButton.vue -->
<template>
  <q-btn
    :unelevated="unelevated"
    :flat="flat"
    :label="label || 'Fazer doação'"
    :class="[
      'donation-button',
      size === 'large' ? 'donation-button--large' : '',
      customClass,
    ]"
    :icon="showIcon ? 'favorite' : undefined"
  >
    <slot></slot>
  </q-btn>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Fazer doação",
  },
  size: {
    type: String,
    default: "default",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  unelevated: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.donation-button {
  border-radius: 50px;
  background-color: #11b80e !important;
  padding: 8px 24px;
  font-weight: 500;
}

.donation-button:before {
  border-radius: 50px;
}

.donation-button--large {
  padding: 12px 48px;
  font-size: 16px;
}

.donation-button :deep(.q-icon) {
  margin-right: 8px;
  font-size: 20px;
}
</style>
