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
    <MenuTable />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuTable from "@/components/MenuTable.vue";

export default {
  name: "Menu",
  components: {
    MenuTable,
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