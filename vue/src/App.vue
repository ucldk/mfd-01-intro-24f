<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
    <li><RouterLink to="/loop">Loop</RouterLink></li>
    <li><RouterLink to="/conditional">Conditional</RouterLink></li>
  </ul>
  <RouterView />
</template>
