<template>
  <div class="container">
    <div>
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">
        Open Modal
      </b-button>
      <b-modal id="bv-modal-example" hide-header size="lg">
        <CustomerForm :form="form" />
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">
          Close Me
        </b-button>
      </b-modal>
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
