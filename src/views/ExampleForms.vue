<template>
  <div>
    <example-form />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ExampleForm from "@/components/ExampleForm.vue";

@Options({
  components: {
    ExampleForm
  }
})
export default class ExampleForms extends Vue {}
</script>

<style></style>
