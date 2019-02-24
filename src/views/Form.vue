<template>
  <div class="form-page">
    <form-ex class="form-contaner"></form-ex>
  </div>
</template>

<script>
import FormEx from "@/components/FormEx.vue";

export default {
  // name: "form",
  components: {
    'form-ex': FormEx,
  }
};
</script>

<style>
.form-page {
  margin: 10px;
  padding: 30px;
  border: solid 1px black;
  text-align: left;
}
.form-container {
  /* border-radius: 5px; */
  background-color: #f2f2f2;
  padding: 30px;
}
</style>