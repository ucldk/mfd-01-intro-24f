<script setup>
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Joe' },
]
</script>

<template>
  <h1>Loop View</h1>
  <ul>
    <li v-for="index in 10" :key="index">
      {{ index }}
    </li>
  </ul>

  <hr>

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>
