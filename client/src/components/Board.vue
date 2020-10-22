<template>
  <v-app>
    <v-container>
      <v-row :align="align" class="ma-10">
        <div v-for="role in roles" v-bind:key="role.id" class="mx-auto">
          <Role :role="role" />
        </div>
      </v-row>
      <v-row class="justify-center ma-10">
        <AddRoleForm />
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
//import draggable from "vuedraggable";
import axios from "axios";
import Role from "./Role";
import AddRoleForm from "./AddRoleForm";

//import api from "../data/api.json";

export default {
  name: "Board",
  components: {
    Role,
    AddRoleForm,
    //draggable,
  },
  data() {
    return {
      roles: null,
      addRole: false,
      addCategory: false,
      newRole: null,
      newCategory: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/roles?filter[include][][relation]=categories")
      .then((response) => {
        this.roles = response.data;
      });
  },
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