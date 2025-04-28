<script setup lang="ts">
import Aside from './components/Aside.vue';
</script>

<template>
  <section id="page">
    <aside>
      <Aside />
    </aside>
    <main>
      <RouterView />
    </main>
  </section>
</template>

<style scoped>
#page {
  display: flex;
  gap: 16px;
}

#page > aside {
  box-sizing: border-box;
}
#page > main {
  padding: 24px;
}

@media (max-width: 899px) {
  #page {
    flex-direction: column;
  }
}

@media (min-width: 900px) {
  #page {
    flex-direction: row;
  }
  #page > aside {
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    border-right: 1px solid gray;
  }
  #page > main {
    margin-left: 300px;
  }
}
</style>
