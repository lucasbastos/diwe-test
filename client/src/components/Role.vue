<template>
  <v-card
    class="mx-auto my-auto grey lighten-2 mb-10"
    width="200px"
    height="350px"
  >
    <v-card-title class="justify-center">{{ role.name }}</v-card-title>
    <v-list rounded class="grey lighten-2">
      <v-list-item-group>
        <div
          v-for="category in role.categories"
          :key="category.id in role.categories"
        >
          <Category :roleId="role.id" :category="category" />
        </div>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import Category from "./Category";

export default {
  name: "Role",
  components: {
    Category,
  },
  props: {
    role: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>


<style>
</style>