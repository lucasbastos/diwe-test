<template>
<v-app>
    <v-app-bar app >
        <v-spacer></v-spacer>
        <v-toolbar-title><p class="font-weight-black">DIWE - Test</p></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
        <v-row no-gutters>
    <Board
        v-for="role in roles"
        v-bind:key="role.id"
        v-bind:title="role.title"
    ></Board>
        </v-row>
    </v-container>
</v-app>
</template>

<script>

import Board from "./components/Board"

export default {
    name: "App",
    components: {
        Board,       
    },
    data: function() {
        return {
            roles: [
                { id: 1, title: 'Jogador' },
                { id: 2, title: 'Colecionador' },
                { id: 3, title: 'Cliente' },
            ]
        }
    }
};
</script>

<style>
</style>
