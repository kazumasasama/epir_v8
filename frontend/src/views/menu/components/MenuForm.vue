<template>
  <div>
    <p>メニューフォーム</p>
    <!-- <b-form class="menu-form" @submit="handleSubmit" @reset="onReset">
      <b-form-group
        id="fieldset-1"
        description=""
        label="*必須"
        label-for="input-title"
        valid-feedback=""
        :invalid-feedback="invalidFeedback"
        :state="state"
      >
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-title"></label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-title"
              placeholder="*メニュー名"
              v-model="form.title"
              type="text"
              required
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        id="fieldset-2"
        description=""
        label="追加情報（任意）"
        label-for="input-2"
      >
        <b-row class="my-1">
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
            <label for="input-duration">時間</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-duration"
              placeholder="例: 03:45"
              v-model="form.duration"
              type="tel"
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-description">説明</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-description"
              placeholder="施術内容や注意事項（この項目は予約時のメニュー選択画面に表示されます）"
              v-model="form.description"
              type="text"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ menu }}</pre>
    </b-card> -->
  </div>
</template>

<script>
// export default {
//   props: {
//     menu: {
//       type: Object,
//       default() {
//         return {};
//       },
//     },
//     form: {
//       type: Object,
//       default() {
//         return {
//           title: "",
//           price: "",
//           duration: "",
//           description: "",
//         };
//       },
//     },
//   },
//   methods: {
//     handleSubmit() {
//       this.$emit("handleSubmit");
//     },
//     onReset() {
//       this.$emit("onReset");
//     },
//   },
// };
</script>

<style scoped>
.col-sm-10 {
  margin-bottom: 10px;
}
.menu-form {
  margin-top: 50px;
}
#fieldset-2 {
  margin-top: 50px;
}
</style>