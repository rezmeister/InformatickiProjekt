<!-- src/views/Characters.vue -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field v-model="search" label="Search" @input="fetchData" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="character in characters" :key="character.id" cols="12" md="4">
        <v-card>
          <v-img :src="character.image" height="200px"></v-img>
          <v-card-title>{{ character.name }}</v-card-title>
          <v-card-text>
            <p>Status: {{ character.status }}</p>
            <p>Species: {{ character.species }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-pagination v-model="page" :length="totalPages" @input="fetchData"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { fetchCharacters } from '@/apiService';

const characters = ref([]);
const totalPages = ref(1);
const page = ref(1);
const search = ref('');

const fetchData = async () => {
  const { results, info } = await fetchCharacters(page.value, search.value);
  characters.value = results;
  totalPages.value = info.pages;
};

watchEffect(() => {
  fetchData();
});
</script>
