<template>
  <div class="container">
    <MenuForm :form="form" @handleSubmit="handleSubmit" @onReset="onReset" />
    <h1>this is Menu New page</h1>
  </div>
</template>

<script>
import MenuForm from "./components/MenuForm.vue";
export default {
  name: "MenuNew",
  component: {
    MenuForm,
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    handleSubmit() {
      if (!this.form.title) return;
      this.$store.dispatch("index/createMenu", this.form);
      this.$router.push({ path: "/menus" });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.price = "";
      this.form.duration = "";
      this.form.description = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>