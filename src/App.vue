<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Rick and Morty</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none"></v-app-bar-nav-icon>
      <div class="d-none d-sm-flex">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/info">Info</v-btn>
        <v-btn text to="/characters">Characters</v-btn>
        <v-btn text to="/locations">Locations</v-btn>
        <v-btn text to="/episodes">Episodes</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary class="d-sm-none">
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/info">
          <v-list-item-title>Info</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/characters">
          <v-list-item-title>Characters</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/locations">
          <v-list-item-title>Locations</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/episodes">
          <v-list-item-title>Episodes</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>
