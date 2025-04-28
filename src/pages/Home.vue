<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { usePageStore } from '../shared/store';
import { watch } from 'vue';
import { cocktails } from '../shared/enums/cocktails';
import Cocktail from '../components/Cocktail.vue';

const route = useRoute();
const router = useRouter();
const pageStore = usePageStore();

if (route.params?.cocktail) {
  pageStore.loadData(String(route.params.cocktail));
} else {
  router.push({
    name: 'Cocktails',
    params: {
      cocktail: cocktails[0],
    },
  });
}

watch(
  () => route.params.cocktail,
  newCocktail => {
    if (newCocktail) {
      pageStore.loadData(String(newCocktail));
    }
  }
);
</script>

<template>
  <Cocktail
    v-if="!pageStore.loading && !pageStore.error"
    v-for="cocktail in pageStore.data"
    :key="cocktail.strDrink"
    :data="cocktail"
  />
  <div v-else-if="!!pageStore.error">
    <h1>404 not found</h1>
    <h2>{{ pageStore.error }}</h2>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
