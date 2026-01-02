<script setup lang="ts">
defineProps<{ items: { value: string; label: string }[] }>();
</script>

<template>
  <div class="stats-row">
    <div v-for="it in items" :key="it.label" class="stat">
      <div class="value">{{ it.value }}</div>
      <div class="label">{{ it.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}
.stat {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--vp-border-radius);
  padding: 14px 14px;
  background: var(--vp-c-bg-soft);
}
.value {
  font-size: 22px;
  font-weight: 700;
}
.label {
  opacity: 0.75;
  margin-top: 6px;
}
@media (max-width: 720px) {
  .stats-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
