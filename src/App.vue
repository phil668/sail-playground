<script setup lang="ts">
import CalendarPro from "./CalendarPro.vue";
import { ref } from "vue";

const modelValue = ref();
const showPopup = ref(true);
</script>

<template>
  time: {{ modelValue }}
  <sail-popup :show="showPopup" position="bottom" round teleport="body">
    <CalendarPro v-model="modelValue" @confirm="showPopup = false" />
  </sail-popup>
</template>
