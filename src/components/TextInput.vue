<template lang="pug">
div(:id="questionData.id")
  label {{ questionData.label }} 
  input(v-model="currentValue" @change="$emit('update:modelValue', currentValue)")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { QuestionData } from "../types/QuestionData";

export default defineComponent({
  props: {
    questionData: {
      type: Object as () => QuestionData,
      required: true
    },
    modelValue: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.modelValue
    };
  }
});
</script>

<style></style>
