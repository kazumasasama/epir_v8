<template>
  <div class="overflow-auto">
    <b-table striped hover :items="menus" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>