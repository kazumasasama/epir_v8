<template>
  <div>
    <b-form class="customer-form" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="fieldset-1"
        description=""
        label="連絡先をご記入ください"
        label-for="input-1"
        valid-feedback=""
        :invalid-feedback="invalidFeedback"
        :state="state"
      >
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-email">Email*</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-email"
              placeholder="例: example@email.com"
              v-model="customer.email"
              type="email"
              required
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-name">お名前*</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-name"
              placeholder="姓名"
              v-model="customer.name"
              type="text"
              required
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-phone">電話番号*</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-phone"
              placeholder="例: 090-1234-5678"
              v-model="customer.phone"
              type="tel"
              required
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group
        id="fieldset-2"
        description=""
        label="よろしければ下記項目もご記入ください（任意）"
        label-for="input-2"
      >
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-line">LINE:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-line"
              placeholder="LINEでご連絡を希望の方はLINEのIDを入力"
              v-model="customer.line_id"
              type="text"
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-birthday">生年月日:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-birthday"
              placeholder="例: 2021/01/01"
              v-model="customer.birthday"
              type="date"
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-gender">性別:</label>
          </b-col>
          <b-col sm="10">
            <b-form-select
              id="input-gender"
              v-model="customer.gender"
              :options="customer.options"
            ></b-form-select>
          </b-col>
          <b-col sm="2">
            <label for="input-zip">郵便番号:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-zip"
              v-model="customer.zip"
              type="text"
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-address">ご住所:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-address"
              v-model="customer.address"
              type="text"
            ></b-form-input>
          </b-col>
          <b-col sm="2">
            <label for="input-memo">ご要望など:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="input-memo"
              v-model="customer.memo"
              type="text"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-form-group>

      <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ customer }}</pre>
    </b-card>
    <p>当ウェブサイトの利用規約、プライバシーポリシーに同意して入会</p>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      default() {
        return {
          email: "",
          name: "",
          phone: "",
          line_id: "",
          birthday: "",
          gender: "",
          zip: "",
          address: "",
          checked: [],
          show: false,
          options: [
            { value: null, text: "未選択" },
            { value: "男性", text: "男性" },
            { value: "女性", text: "女性" },
            { value: "不詳", text: "不詳" },
            { value: "その他", text: "その他" },
            { value: "該当なし", text: "該当なし" },
          ],
        };
      },
    },
  },
  // data() {
  //   return {
  //     selected: null,
  //     options: [
  //       { value: null, text: "未選択" },
  //       { value: "男性", text: "男性" },
  //       { value: "女性", text: "女性" },
  //       { value: "不詳", text: "不詳" },
  //       { value: "その他", text: "その他" },
  //       { value: "該当なし", text: "該当なし" },
  //     ],
  //   };
  // },
  computed: {
    state() {
      return (
        this.customer.name.length >= 2 &&
        this.customer.email.length >= 5 &&
        this.customer.phone.length >= 10
      );
    },
    invalidFeedback() {
      if (
        this.customer.email.length > 0 &&
        this.customer.name.length > 0 &&
        this.customer.phone.length > 0
      ) {
        return "入力に誤りがあります";
      }
      return "未記入の必須項目があります";
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.customer));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.customer.email = "";
      this.customer.name = "";
      this.customer.food = null;
      this.customer.checked = [];
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
.col-sm-10 {
  margin-bottom: 10px;
}
#input-memo {
  height: 150px;
}
.customer-form {
  margin-top: 50px;
}
</style>