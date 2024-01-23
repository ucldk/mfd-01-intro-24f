<script setup>
import { ref } from 'vue';

const active = ref(false);
</script>

<template>
  <h1>Conditional View</h1>

  <button @click="active = !active">Toggle Active</button>

  <p v-if="active">Active</p>
  <p v-else>Not Active</p>

  <p :class="{ active: active, 'not-active': !active }">Style Binding</p>
</template>

<style scoped>
.active {
  background: lime;
}

.not-active {
  background: red;
}
</style>
