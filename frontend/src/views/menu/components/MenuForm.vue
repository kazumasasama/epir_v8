<template>
  <div>
    <b-form class="menu-form" @submit="onSubmit" @reset="onReset">
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-title">*メニュー名</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-title"
            placeholder="必須"
            v-model="form.title"
            type="text"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <label for="input-price">価格</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-price"
            placeholder=""
            v-model="form.price"
            type="number"
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <label for="input-duration">施術時間</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-duration"
            placeholder=""
            v-model="form.duration"
            type="text"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary" @click="handleSubmit"
        >Submit</b-button
      >
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <p>当ウェブサイトの利用規約、プライバシーポリシーに同意して入会</p>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default() {
        return {
          title: "",
          price: "",
          duration: "",
          description: "",
        };
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style scoped>
.col-sm-10 {
  margin-bottom: 10px;
}
#input-memo {
  height: 150px;
}
.customer-form {
  margin-top: 50px;
}
#fieldset-2 {
  margin-top: 50px;
}
</style>