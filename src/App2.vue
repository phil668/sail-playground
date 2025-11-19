<script setup lang="ts">
import { ref, computed } from "vue";
import {
  SailButton,
  SailPopup,
  SailCalendar,
  SailDatePicker,
  SailLocale,
} from "@sail/ui";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

SailLocale.use("en-US");

const showPopup = ref(false);

const selectType = ref<"day" | "month" | "year">("day");
const year = ref<string[]>([new Date().getFullYear().toString()]);

const modelValue = ref();

const date = ref<string[]>([
  new Date().getFullYear().toString(),
  (new Date().getMonth() + 1).toString(),
]);

const minDate = computed(() => {
  return new Date(Number(date.value[0]), Number(date.value[1]) - 1, 1);
});

const maxDate = computed(() => {
  return new Date(Number(date.value[0]), Number(date.value[1]), 0);
});

const handleDateConfirm = (v) => {
  // date.value = e.selectedValues;
  modelValue.value = v;
  showPopup.value = false;
};

const handlePrevMonth = () => {
  date.value[1] = (Number(date.value[1]) - 1).toString();
};

const handleNextMonth = () => {
  date.value[1] = (Number(date.value[1]) + 1).toString();
};

const handleSelectMonth = (month: number) => {
  selectType.value = "day";
  date.value[1] = month.toString();
};

const handleSelectYear = (e) => {
  selectType.value = "day";
  date.value[0] = e.selectedValues[0];
};
</script>

<template>
  <sail-button @click="showPopup = true">choose date</sail-button>
  <div>{{ modelValue }}</div>
  <sail-popup v-model:show="showPopup" position="bottom" round>
    <div class="p-4 pb-8">
      <div>{{ date }}</div>
      <div>{{ minDate.toLocaleDateString() }}</div>
      <div>{{ maxDate.toLocaleDateString() }}</div>
      <div class="flex justify-between items-center">
        <template v-if="selectType === 'day'">
          <div class="text-[#c53355] font-bold" @click="selectType = 'month'">
            {{ date.join("-") }}
          </div>
          <div class="flex items-center gap-2">
            <ChevronLeft class="text-[#c53355]" @click="handlePrevMonth" />
            <ChevronRight class="text-[#c53355]" @click="handleNextMonth" />
          </div>
        </template>
        <template v-else-if="selectType === 'month'">
          <div class="text-[#c53355] font-bold" @click="selectType = 'year'">
            {{ date[0] }}
          </div>
        </template>
        <template v-else-if="selectType === 'year'">
          <div class="text-[#c53355] font-bold">选择年份</div>
        </template>
      </div>

      <sail-calendar
        v-if="selectType === 'day'"
        switch-mode="month"
        :min-date="minDate"
        :max-date="maxDate"
        :show-title="false"
        :show-subtitle="false"
        show-confirm
        @confirm="handleDateConfirm"
      ></sail-calendar>
      <div
        class="grid grid-cols-3 grid-rows-4 gap-4 mt-4"
        v-else-if="selectType === 'month'"
      >
        <div
          v-for="i in 12"
          :key="i"
          class="flex items-center justify-center rounded-xl py-2"
          :class="{ 'bg-[#c53355] text-white': Number(date[1]) === i }"
          @click="handleSelectMonth(i)"
        >
          {{ i }}
        </div>
      </div>
      <sail-date-picker
        class="mt-4"
        v-else-if="selectType === 'year'"
        v-model="year"
        :columns-type="['year']"
        toolbarPosition="bottom"
        confirm-button-text="done"
        cancel-button-text="cancel"
        @confirm="handleSelectYear"
      ></sail-date-picker>
    </div>
  </sail-popup>
</template>

<style>
.van-calendar__month-title {
  display: none;
}
.van-picker.sail-date-picker--primary .van-picker__toolbar {
  background-color: transparent !important;
}
</style>
