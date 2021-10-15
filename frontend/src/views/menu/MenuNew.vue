<template>
  <div class="container">
    <h1>施術メニュー登録</h1>
    <MenuForm
      :form="form"
      @handleSubmit="handleSubmit"
      @handleCancel="handleCancel"
    />
  </div>
</template>

<script>
import MenuForm from "./components/MenuForm.vue";
const axios = require("axios");

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
      axios
        .post("/api/menus", {
          menu: this.form,
        })
        .then(function () {
          this.$router.push({ path: "/menus" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleCancel() {
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