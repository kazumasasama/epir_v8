<template>
  <div class="login">
    log in
    <div>
      <div>{{ this.message }}</div>
      <input type="text" v-model="email" placeholder="NAME" /><br />
      <input type="password" v-model="password" placeholder="PASSWORD" /><br />
      <button v-on:click="login()">LOGIN</button>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
const qs = require("qs");

export default {
  name: "LogIn",
  data: function () {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async login() {
      const self = this;
      const result = await axios
        .post("/api/login", {
          account: {
            email: self.email,
            password: self.password,
          },
          paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: "brackets" });
          },
        })
        .catch((e) => {
          console.error(e);
        });

      if (!result) {
        this.message = "エラー";
        return;
      }
      if (!result.data) {
        this.message = "エラー";
        return;
      }

      if (result.data.state) {
        //結果を基にページ遷移
        this.$router.push("/home");
      }
    },
  },
};
</script>