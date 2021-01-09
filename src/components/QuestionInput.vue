<template lang="pug">
div(:id="questionData.id")
  text-input(v-if="questionData.type === 'TextInput'" :question-data="questionData" v-model="questionData.answer")
</template>

<script lang="ts">
import { QuestionData } from "@/types/QuestionData";
import { defineComponent } from "vue";
import TextInput from "./TextInput.vue";

export default defineComponent({
  components: {
    TextInput
  },
  props: {
    questionData: {
      type: Object as () => QuestionData,
      required: true
    }
  }
});
</script>

<style></style>
