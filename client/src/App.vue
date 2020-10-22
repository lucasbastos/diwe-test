  
<template>
  <div id="app">
    <v-toolbar fixed dark>
      <v-spacer></v-spacer>
      <img class="mr-3" :src="require('./assets/logo.svg')" height="40" />
      <v-spacer></v-spacer>
    </v-toolbar>
    <Board />
  </div>
</template>

<script>
import Board from "./components/Board";
export default {
  name: "app",
  components: {
    Board,
  },
};
</script>

<style>
#app {
  background: grey;
}
</style>