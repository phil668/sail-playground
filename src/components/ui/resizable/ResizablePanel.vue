<script setup lang="ts">
import type { SplitterPanelEmits, SplitterPanelProps } from "reka-ui";
import { SplitterPanel, useForwardPropsEmits } from "reka-ui";
import { ref } from "vue";

const props = defineProps<SplitterPanelProps>();
const emits = defineEmits<SplitterPanelEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const panel = ref<InstanceType<typeof SplitterPanel> | null>(null);
defineExpose({
  collapse: () => {
    panel.value?.collapse();
  },
});
</script>

<template>
  <SplitterPanel ref="panel" data-slot="resizable-panel" v-bind="forwarded">
    <slot />
  </SplitterPanel>
</template>
