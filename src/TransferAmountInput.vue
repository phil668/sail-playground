<script setup lang="ts">
  import { isEmpty } from 'lodash-es';
  import { computed, nextTick, ref, watchEffect } from 'vue';

  function clearComma(str: string | number) {
    if (!str) {
      return '';
    }
    if (str.toString().includes(',')) {
      return str.toString().replace(/,/g, '');
    } else {
      return str.toString();
    }
  }

  const props = withDefaults(
    defineProps<{
      label?: string;
      value?: string;
      curr?: string;
      errorMsg?: string;
      helperText?: string;
      isDisabled?: boolean;
      isAutoFocus?: boolean;
    }>(),
    {
      label: '',
      value: '',
      curr: '',
      errorMsg: '',
      helperText: '',
      isDisabled: false,
      isAutoFocus: false,
    },
  );

  const emits = defineEmits(['update:value', 'focus', 'blur']);
  const maxAmountLength = ref(16);
  const maxIntegerLength = ref(13);
  const inputRef = ref();

  const getAmount = computed({
    get: () => {
      return props.value;
    },
    set: (v) => emits('update:value', v),
  });
  const isFocus = ref(false);
  watchEffect(async () => {
    if (isFocus.value) {
      return;
    }
    const currInput = clearComma(getAmount.value);
    console.log('watchEffect currInput===========================', isFocus.value, currInput);
    if (!isNaN(Number(currInput)) && Number(currInput) === 0) {
      await nextTick();
      getAmount.value = '';
      console.log('onBlur getAmount 清空==========================');
    }
  });
  const onFocus = () => {
    isFocus.value = true;
    emits('focus');
  };

  const onBlur = async () => {
    console.log('onBlur getAmount.value==========================', getAmount.value);
    isFocus.value = false;
    emits('blur');
  };

  const focus = () => {
    inputRef.value?.focus();
  };

  defineExpose({
    focus,
  });
</script>

<template>
  <sail-input
    ref="inputRef"
    class="amount_Input"
    :class="isDisabled ? 'pointer-events-none' : ''"
    v-model:model-value="getAmount"
    type="calculator"
    :label="label"
    :unit="curr"
    placeholder="0.00"
    autocomplete="off"
    done-button-text="继续"
    :maxlength="maxAmountLength"
    :max-integer-length="maxIntegerLength"
    :error="!isEmpty(errorMsg)"
    :helperText="!errorMsg ? helperText : ''"
    :autofocus="isAutoFocus"
    @focus="onFocus"
    @blur="onBlur"
    :responsiveTextSizes="['48px', '44px', '40px', '36px', '32px', '28px']"
  />
  {{ isFocus }}
  <p v-if="errorMsg" class="text-#920022 mt-.16rem fw-400 text-.28rem" v-html="errorMsg" />
</template>

<style scoped>
  :deep(.amount_Input) {
    background: transparent;
    --sd-comp-input-font-unit-text-size-amount: 24px;
    --sd-comp-input-font-input-text-size-amount: 48px;
    --sd-comp-input-space-unit-gap: 6px;
  }
</style>
