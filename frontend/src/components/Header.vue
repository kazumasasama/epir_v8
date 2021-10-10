<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="container">
        <div class="logo">
          <img alt="epiR logo" src="../assets/epiRLogo70x40.png" />
        </div>
        <b-navbar-nav class="nav">
          <b-nav-item class="nav-item1">
            <router-link to="/">メニュー選択</router-link> |
            <router-link to="/event">ご予約カレンダー</router-link>
          </b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="言語設定" right>
            <b-dropdown-item @click="switchToEn">ENG</b-dropdown-item>
            <b-dropdown-item @click="switchToJa">日本語</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="アカウント" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    switchToEn() {
      this.$emit("switchToEn");
    },
    switchToJa() {
      this.$emit("switchToJa");
    },
  },
};
</script>

<style>
.nav {
  padding: 15px;
  text-align: right;
}
.nav-item1 {
  margin-left: 20px;
}
</style>
