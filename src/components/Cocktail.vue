<script setup lang="ts">
import type { Cocktail } from '../shared/types';
import Ingredients from './Ingredients.vue';
import LazyImage from './LazyImage.vue';

interface Props {
  data: Cocktail;
}

const props = defineProps<Props>();

console.log(props);
</script>

<template>
  <section class="cocktails-wrapper">
    <h2>
      {{ data.strDrink }}
    </h2>
    <div class="cocktails-content">
      <div class="cocktails-description">
        <div>
          {{ data.strCategory }}
        </div>
        <div>
          {{ data.strAlcoholic }}
        </div>
        <div>
          {{ data.strGlass }}
        </div>
        <div>
          <h3>Instructions:</h3>
          {{ data.strInstructions }}
        </div>
      </div>
      <div class="cocktails-image">
        <LazyImage :src="data.strDrinkThumb" :alt="data.strDrink" />
      </div>
    </div>

    <div class="cocktails-ingredients">
      <h3>List of ingredients:</h3>
      <Ingredients
        :data="{ ingredients: data.ingredients, measures: data.measures }"
      />
    </div>
  </section>
</template>

<style scoped>
.cocktails-wrapper:not(:last-child) {
  margin-bottom: 6rem;
}

.cocktails-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.cocktails-image {
  order: 1;
}
.cocktails-description {
  order: 2;
}

@media (min-width: 780px) {
  .cocktails-content {
    display: flex;
    gap: 24px;
    flex-direction: row;
  }
  .cocktails-image {
    order: 2;
  }
  .cocktails-description {
    flex-grow: 1;
    order: 1;
  }
}
</style>
