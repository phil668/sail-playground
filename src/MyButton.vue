<script setup lang="ts"></script>

<template>
  <div>
    <div class="buttonStyle">
      <sail-button type="primary" size="large"> 123 </sail-button>
    </div>
  </div>
</template>

<style scoped>
:deep(.buttonStyle) {
  --sd-comp-button-size-container-height-large: 80px;
}
</style>
