<template>
  <div class="container">
    <h1>施術メニュー登録</h1>
    <MenuForm :form="form" @handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import MenuForm from "./components/MenuForm.vue";

export default {
  name: "MenuNew",
  components: {
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
      this.$store.dispatch("createMenu", this.form);
      this.$router.push({ path: "/menus" });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 35px;
  color: rgb(77, 77, 77);
}
</style>