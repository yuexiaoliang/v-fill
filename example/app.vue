<script setup lang="ts">
import BaseHeader from './base-header.vue';
import BaseFooter from './base-footer.vue';
import BaseMain from './base-main.vue';
</script>

<template>
  <base-header></base-header>
  <div class="app">
    <base-main></base-main>
  </div>
  <base-footer></base-footer>
</template>

<style lang="scss" scoped>
.app {
}
</style>
