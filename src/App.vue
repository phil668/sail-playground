<script setup lang="ts">
  import { ref } from "vue";
  

  const modelValue = ref('1234.56');
  const info = window.navigator.userAgent;
</script>

<template>
  <div class="p-4">
    <sail-input v-model="modelValue" type="amount" />

    <div class="mt-4">{{ info }}</div>
  </div>
</template>
