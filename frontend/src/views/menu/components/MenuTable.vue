<template>
  <div class="overflow-auto">
    <!-- <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      @click="$bvModal.show('bv-modal-example')"
      responsive="sm"
      striped
      hover
    >
    </b-table> -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="fill"
    ></b-pagination>
    <b-table
      :items="menus"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :sort-by.sync="sortBy"
      stacked="md"
      show-empty
      hover
    >
      <template #cell(id)="row">
        {{ row.menu.id }}
      </template>
      <template #cell(title)="row">
        {{ row.menu.title }}
      </template>

      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="$bvModal.show('bv-modal-example')"
          class="mr-1"
          variant="outline-success"
        >
          <b-icon icon="pencil"></b-icon>
          編集
        </b-button>
        <b-button
          size="sm"
          @click="row.toggleDetails"
          variant="outline-secondary"
        >
          <b-icon icon="info-circle"></b-icon>
          {{ row.detailsShowing ? "隠す" : "詳細" }}
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.menu" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>
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
    perPage: {},
    currentPage: {},
    sortBy: {},
    fields: [],
  },
  computed: {
    rows() {
      return this.menus.length;
    },
  },
};
</script>