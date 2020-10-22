<template>
  <v-card
    class="mx-auto my-auto grey lighten-2 mb-10"
    width="200px"
    height="350px"
  >
    <v-card-title class="justify-center">{{ name }}</v-card-title>
    <v-list rounded class="grey lighten-2">
      <v-list-item-group v-model="item">
        <draggable
          class="list-group grey lighten-5"
          :list="role.categories"
          group="people"
          @change="log(role.role, $event)"
          ><v-list-item
            v-for="category in role.categories"
            :key="category in role.categories"
          >
            {{ category.name }}
            <v-spacer></v-spacer>
            <v-icon @click="removeCategory(role, category)"
              >mdi-trash-can-outline</v-icon
            >
          </v-list-item>
        </draggable>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Role",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      roles: this.role,
    };
  },
};
</script>


<style>
</style>