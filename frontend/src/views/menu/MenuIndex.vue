<template>
  <div class="home container">
    <div>
      <b-modal id="bv-modal-example" hide-header size="lg"> </b-modal>
    </div>
    <h1>メニュー一覧</h1>
    <div class="customer-new-btn">
      <b-button variant="outline-primary"
        ><b-icon icon="person-plus"></b-icon> 新規登録</b-button
      >
    </div>
    <MenuTable :items="menus" :fields="fields" />
    <ul>
      <li v-for="menu in menus" :key="menu.id">{{ menu.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import MenuTable from "@/views/menu/components/MenuTable.vue";

export default {
  name: "MenuIndex",
  components: {
    MenuTable,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      sortBy: "title",
      menu: {},
      menus: [],
      menuInfo: {},
      menuInfoBool: false,
      fields: [
        {
          key: "title",
          label: "名前",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "duration",
          label: "時間",
          sortable: true,
          class: "text-center",
        },
        {
          key: "price",
          label: "金額",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "" },
      ],
    };
  },
  mounted: function () {
    axios
      .get("/api/menus/index-menus.json")
      .then((response) => (this.menus = response.data))
      .catch((error) => console.log(error));
  },
  methods: {
    fetchMenus() {
      axios.get("/api/menus").then(
        (res) => {
          for (var i = 0; i < res.data.menus.length; i++) {
            this.menus.push(res.data.menus[i]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setMenuInfo(id) {
      axios.get(`api/menus/${id}.json`).then((res) => {
        this.menuInfo = res.data;
        this.menuInfoBool = true;
      });
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
.customer-new-btn {
  text-align: left;
  margin-bottom: 10px;
}
</style>