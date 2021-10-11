<template>
  <div class="container">
    <Calendar />
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";

export default {
  name: "Event",
  components: {
    Calendar,
  },
};
</script>
