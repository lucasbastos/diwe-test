<template>
  <draggable class="list-group grey lighten-5" group="board">
    <v-list-item>
      <p>{{ category.name }}</p>
      <v-spacer></v-spacer>
      <v-icon @click="removeCategory(category.id)"
        >mdi-trash-can-outline</v-icon
      >
    </v-list-item>
  </draggable>
</template>

<script>
//import axios from "axios";
import draggable from "vuedraggable";

export default {
  name: "Category",
  components: {
    draggable,
  },
  props: {
    roleId: {
      type: Number,
    },
    category: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  mounted() {
    // axios
    //   .get(`http://localhost:3000/roles/${this.id}/categories`)
    //   .then((response) => {
    //     this.categories = response.data;
    //   });
  },
  methods: {
    removeCategory(category) {
      alert("Role: " + this.roleId + " Category: " + category);
    },
  },
};
</script>

<style>
</style>
