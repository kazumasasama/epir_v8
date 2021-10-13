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
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      hover
      @filtered="onFiltered"
    >
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
            <li v-for="(value, key) in row.item" :key="key">
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
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      sortBy: "name",
      fields: [
        {
          key: "danger",
          label: "☆",
          sortable: true,
          class: "text-center",
        },
        {
          key: "id",
          label: "ID",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "name",
          label: "名前",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "" },
      ],
      items: [
        { id: 1, age: 38, name: "aaaaa", danger: true },
        { id: 2, age: 38, name: "bbbbb", danger: true },
        { id: 3, age: 38, name: "11111", danger: true },
        { id: 4, age: 38, name: "22222", danger: true },
        { id: 5, age: 38, name: "*****", danger: true },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>