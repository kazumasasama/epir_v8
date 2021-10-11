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
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
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
      sortBy: "first_name",
      fields: [
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
        {
          isActive: true,
          age: 40,
          name: { first: "Dickerson", last: "Macdonald" },
          href: "#",
        },
        { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
        },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
        { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
        { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
        { isActive: true, age: 27, name: { first: "高井", last: "一真" } },
        { isActive: true, age: 40, name: { first: "高木", last: "一真" } },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
        },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
        {
          isActive: false,
          age: 22,
          name: { first: "Genevieve", last: "Wilson" },
        },
        { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
        { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } },
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