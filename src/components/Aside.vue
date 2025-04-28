<script setup lang="ts">
import { cocktails } from '../shared/enums/cocktails.ts';
</script>

<template>
  <ul>
    <li v-for="navItem in cocktails" :key="navItem">
      <RouterLink
        :to="{
          name: 'Cocktails',
          params: { cocktail: navItem },
        }"
      >
        {{ navItem }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 24px;
}
.router-link-exact-active {
  border-bottom: 2px solid #42b983;
}

@media (max-width: 899px) {
  ul {
    flex-direction: row;
    padding: 8px 24px;
  }
}
</style>
