<template>
  <div class="container">
    <div>
      <b-modal id="bv-modal-example" hide-header size="lg">
        <CustomerForm :form="form" />
      </b-modal>
    </div>
    <h1>顧客一覧</h1>
    <div class="customer-new-btn">
      <b-button variant="outline-primary"
        ><b-icon icon="person-plus"></b-icon> 新規登録</b-button
      >
    </div>
    <CustomersTable />
  </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";
import CustomersTable from "@/components/CustomersTable.vue";

export default {
  name: "CustomersIndex",
  components: {
    CustomerForm,
    CustomersTable,
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