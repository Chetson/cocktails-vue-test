<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
  src: string;
  alt: string;
}
defineProps<Props>();

const isInView = ref(false);
const lazyImg = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isInView.value = true;
        observer.unobserve(entry.target);
      }
    });
  });

  if (lazyImg.value) {
    observer.observe(lazyImg.value);
  }
});
</script>

<template>
  <img
    :src="isInView ? src : ''"
    :alt="alt"
    loading="lazy"
    ref="lazyImg"
    :style="{ opacity: isInView ? 1 : 0 }"
  />
</template>

<style scoped>
img {
  transition: opacity 0.5s ease;
  width: 350px;
}

@media (max-width: 400px) {
  img {
    width: calc(100% - (26px));
  }
}
</style>
