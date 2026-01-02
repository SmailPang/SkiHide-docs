<script setup lang="ts">
type Step = { code: string; note: string };

defineProps<{
  title: string;
  steps: Step[];
}>();
</script>

<template>
  <section class="steps">
    <h2 class="title">{{ title }}</h2>

    <div class="grid">
      <div v-for="(s, i) in steps" :key="i" class="card">
        <div class="idx">Step {{ i + 1 }}</div>
        <div class="code">{{ s.code }}</div>
        <div class="note">{{ s.note }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps {
  margin: 24px 0;
}
.title {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 700;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--vp-border-radius, 16px);
  padding: 14px;
  background: var(--vp-c-bg-soft);
}
.idx {
  opacity: 0.7;
  font-size: 13px;
}
.code {
  font-weight: 700;
  margin-top: 6px;
}
.note {
  opacity: 0.85;
  margin-top: 6px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
