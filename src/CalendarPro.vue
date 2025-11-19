<script setup lang="ts">
import { ref, computed } from "vue";
import { SailCalendar, SailDatePicker } from "@sail/ui";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

interface Props {
  modelValue?: Date | null;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: Date): void;
  (e: "confirm", value: Date): void;
  (e: "cancel"): void;
}>();

const selectType = ref<"day" | "month" | "year">("day");

const tempDateParts = ref<string[]>(
  props.modelValue
    ? [
        props.modelValue.getFullYear().toString(),
        (props.modelValue.getMonth() + 1).toString(),
        props.modelValue.getDate().toString(),
      ]
    : [
        new Date().getFullYear().toString(),
        (new Date().getMonth() + 1).toString(),
        new Date().getDate().toString(),
      ]
);

const yearSelection = ref<string[]>([tempDateParts.value[0]]);

const minDate = computed(() => {
  const [year, month] = tempDateParts.value;
  return new Date(Number(year), Number(month) - 1, 1);
});

const maxDate = computed(() => {
  const [year, month] = tempDateParts.value;
  return new Date(Number(year), Number(month), 0);
});

const handleDateConfirm = (v: Date) => {
  const selectedDate = v;
  tempDateParts.value = [
    selectedDate.getFullYear().toString(),
    (selectedDate.getMonth() + 1).toString(),
    selectedDate.getDate().toString(),
  ];

  emit("confirm", selectedDate);
  emit("update:modelValue", selectedDate);
};

const handlePrevMonth = () => {
  const currentMonth = Number(tempDateParts.value[1]);
  const currentYear = Number(tempDateParts.value[0]);

  if (currentMonth === 1) {
    tempDateParts.value[0] = (currentYear - 1).toString();
    tempDateParts.value[1] = "12";
  } else {
    tempDateParts.value[1] = (currentMonth - 1).toString();
  }
};

const handleNextMonth = () => {
  const currentMonth = Number(tempDateParts.value[1]);
  const currentYear = Number(tempDateParts.value[0]);

  if (currentMonth === 12) {
    tempDateParts.value[0] = (currentYear + 1).toString();
    tempDateParts.value[1] = "1";
  } else {
    tempDateParts.value[1] = (currentMonth + 1).toString();
  }
};

const handleSelectMonth = (month: number) => {
  selectType.value = "day";
  tempDateParts.value[1] = month.toString();
};

const handleSelectYear = (e: { selectedValues: string[] }) => {
  selectType.value = "day";
  tempDateParts.value[0] = e.selectedValues[0];
  yearSelection.value = e.selectedValues;
};

const resetView = () => {
  selectType.value = "day";
};

defineExpose({
  resetView,
});
</script>

<template>
  <div class="p-4 pb-8 sail-calendar-pro">
    <div class="flex justify-between items-center mb-4">
      <template v-if="selectType === 'day'">
        <div class="text-[#c53355] font-bold" @click="selectType = 'month'">
          {{ tempDateParts[0] }}年 {{ tempDateParts[1] }}月
        </div>
        <div class="flex items-center gap-2">
          <ChevronLeft
            class="text-[#c53355] cursor-pointer"
            @click="handlePrevMonth"
          />
          <ChevronRight
            class="text-[#c53355] cursor-pointer"
            @click="handleNextMonth"
          />
        </div>
      </template>
      <template v-else-if="selectType === 'month'">
        <div
          class="text-[#c53355] font-bold cursor-pointer"
          @click="selectType = 'year'"
        >
          {{ tempDateParts[0] }}年
        </div>
        <div></div>
      </template>
      <template v-else-if="selectType === 'year'">
        <div class="text-[#c53355] font-bold">选择年份</div>
        <div></div>
      </template>
    </div>

    <sail-calendar
      v-if="selectType === 'day'"
      v-model="tempDateParts[2]"
      switch-mode="month"
      :min-date="minDate"
      :max-date="maxDate"
      :show-title="false"
      :show-subtitle="false"
      show-confirm
      @confirm="handleDateConfirm"
      @cancel="emit('cancel')"
    />

    <div
      class="grid grid-cols-3 grid-rows-4 gap-4 mt-4 text-center"
      v-else-if="selectType === 'month'"
    >
      <div
        v-for="i in 12"
        :key="i"
        class="flex items-center justify-center rounded-xl py-2 cursor-pointer transition-colors"
        :class="{
          'bg-[#c53355] text-white': Number(tempDateParts[1]) === i,
          'bg-gray-100 hover:bg-gray-200': Number(tempDateParts[1]) !== i,
        }"
        @click="handleSelectMonth(i)"
      >
        {{ i }}月
      </div>
    </div>

    <sail-date-picker
      class="mt-4"
      v-else-if="selectType === 'year'"
      v-model="yearSelection"
      :columns-type="['year']"
      toolbarPosition="bottom"
      confirm-button-text="确定"
      cancel-button-text="取消"
      @confirm="handleSelectYear"
      @cancel="selectType = 'month'"
    ></sail-date-picker>
  </div>
</template>

<style>
.van-calendar__month-title {
  display: none;
}
.sail-calendar-pro .van-picker.sail-date-picker--primary .van-picker__toolbar {
  background-color: transparent !important;
}
</style>
