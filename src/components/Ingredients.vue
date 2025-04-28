<script setup lang="ts">
interface Props {
  data: {
    ingredients: string[];
    measures: string[];
  };
}

defineProps<Props>();
</script>

<template>
  <ul>
    <li v-for="(ingredient, index) in data.ingredients" :key="index">
      <span v-if="data.measures[Number(index)]">
        {{ data.measures[Number(index)] }}
      </span>
      -
      <span>
        {{ ingredient }}
      </span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: flex;
  gap: 4px;
  flex-direction: row;
}
</style>
