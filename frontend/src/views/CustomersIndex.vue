<template>
  <div class="container">
    <CustomerForm :form="form" />
  </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "CustomersIndex",
  components: {
    CustomerForm,
  },
  data() {
    return {
      form: {},
      customer: {},
      customers: [],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
