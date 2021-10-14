<template>
  <div class="container">
    <h1>新規アカウントを作成</h1>
    <CustomerForm />
  </div>
</template>

<script>
import CustomerForm from "./components/CustomerForm.vue";
export default {
  name: "CustomerNew",
  components: {
    CustomerForm,
  },
};
</script>
