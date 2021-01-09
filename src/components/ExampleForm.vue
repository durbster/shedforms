<template lang="pug">
div
  h2 Example form
  question-input(v-for="q,i in questions" :key="i" :question-data="q")

  h3 Answers
  div(v-for="q,i in questions" :key="i") Answer {{ q.answer }}
</template>

<script lang="ts">
import {
  QuestionData,
  QuestionTypes,
  ShedQuestion
} from "../types/QuestionData";

import { defineComponent } from "vue";
import QuestionInput from "./QuestionInput.vue";

const questionA = new ShedQuestion({
  id: "yeah",
  label: "What is this question?",
  answer: "Dunno",
  type: QuestionTypes.TextInput
});

const questionB = new ShedQuestion({
  id: "nah",
  label: "Why is this here?",
  answer: "a",
  type: QuestionTypes.TextInput
});

export default defineComponent({
  components: {
    QuestionInput
  },
  data() {
    return {
      questions: [questionA, questionB] as QuestionData[]
    };
  }
});
</script>

<style></style>
