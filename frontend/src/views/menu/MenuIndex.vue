<template>
  <div class="home container">
    <h1>メニュー一覧</h1>
    <div class="menu-new-btn">
      <b-button variant="outline-primary">
        <router-link :to="'/menus/new'">
          <b-icon icon="person-plus"></b-icon>
          新規登録
        </router-link>
      </b-button>
    </div>
    <MenuTable :menus="menus" :fields="fields" />
  </div>
</template>

<script>
import MenuTable from "./components/MenuTable.vue";

export default {
  name: "MenuIndex",
  components: {
    MenuTable,
  },
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "メニュー",
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        {
          key: "price",
          label: "価格",
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        {
          key: "duration",
          label: "時間",
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "" },
      ],
    };
  },
  computed: {
    menus: function () {
      return this.$store.state.menus;
    },
  },
  mounted() {
    this.$store.dispatch("getMenus");
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
.menu-new-btn {
  text-align: left;
  margin-bottom: 10px;
}
</style>