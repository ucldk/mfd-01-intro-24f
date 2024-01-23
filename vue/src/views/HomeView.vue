<script setup>
import {
  ref,
} from 'vue';
import Basic from '../components/Basic.vue';
import Message from '../components/Message.vue';

const parentMsg = ref('');
</script>

<template>
  <h1>Home</h1>
  <Basic />
  <hr />
  <p><strong>Parent:</strong> {{ parentMsg? parentMsg : 'Nothing written' }}</p>
  <Message @update:message="(val) => parentMsg = val" />
</template>
