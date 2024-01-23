<script setup>
import {
  ref,
  watch,
} from 'vue';

const emit = defineEmits(['update:message']);
const message = ref('Hello world');

(() => {
  emit('update:message', message.value);
})();

watch(message, (newValue) => {
  console.log('Message updated', newValue);
  emit('update:message', newValue);
});
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>
