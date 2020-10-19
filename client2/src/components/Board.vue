<template>
  <v-app>
    <v-container>
      <v-row class="ma-10">
        <v-card
          class="mx-auto my-auto grey lighten-2 mb-10"
          width="200px"
          height="350px"
          v-for="role in roles"
          :key="role in roles"
        >
          <v-card-title class="justify-center">{{ role.role }}</v-card-title>
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
      </v-row>
      <v-row class="justify-center ma-10">
        <v-btn v-if="!addRole" @click="toAddRole">Adicionar Role</v-btn>
        <v-text-field
          v-if="addRole"
          v-on:keyup.enter="onEnterRole"
          v-model="newRole"
          label="Role"
        ></v-text-field>
      </v-row>
      <v-row class="justify-center ma-10">
        <v-btn v-if="!addCategory" @click="toAddCategory"
          >Adicionar Categoria</v-btn
        >
        <v-text-field
          v-if="addCategory"
          v-on:keyup.enter="onEnterCategory"
          v-model="newCategory"
          label="Categoria"
        ></v-text-field>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import draggable from "vuedraggable";
//import axios from "axios";

import api from "../data/api.json";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      roles: api,
      addRole: false,
      addCategory: false,
      newRole: null,
      newCategory: null,
    };
  },
  mounted() {},
  methods: {
    toAddRole() {
      this.addRole = true;
    },
    toAddCategory() {
      this.addCategory = true;
    },
    onEnterRole() {
      if (this.newRole) this.roles.push({ role: this.newRole, categories: [] });
      this.addRole = false;
    },
    onEnterCategory() {
      if (this.newRole)
        this.roles[0].categories.push({
          name: this.newCategory,
        });
      this.addCategory = false;
    },
    log: function (role, evt) {
      console.log(role, evt);
    },
    remove(name, index) {
      alert("custom event" + name + index);
    },
    removeCategory(role, category) {
      this.roles.forEach((element) => {
        if (element.role === role.role) {
          const arrCategories = element.categories;
          const i = arrCategories.indexOf(category);
          arrCategories.splice(i, 1);
          console.log(arrCategories);
        }
      });
    },
  },
  computed: {},
};
</script>