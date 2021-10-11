<template>
  <div>
    <b-navbar type="light" variant="light">
      <div class="container">
        <div class="logo">
          <router-link to="/"
            ><img alt="epiR logo" src="../assets/epiRLogo70x40.png"
          /></router-link>
        </div>
        <b-navbar-nav class="nav">
          <b-nav-item class="nav-item1">
            <router-link to="/menu">
              <b-icon icon="menu-button-fill"></b-icon>
              メニュー</router-link
            >
            |
            <router-link to="/event">
              <b-icon icon="calendar-plus"></b-icon>
              予約</router-link
            >
            |
            <router-link to="/customers">
              <b-icon icon="person-lines-fill"></b-icon>
              顧客
            </router-link>
            |
          </b-nav-item>
          <b-nav-item-dropdown text="アカウント" right>
            <b-dropdown-item>
              <router-link to="/customer">アカウント</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="#">ログアウト</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
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
