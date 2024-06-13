<!-- src/views/Episodes.vue -->
<template>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="search" label="Search" @input="fetchData" />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="episode in episodes" :key="episode.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ episode.name }}</v-card-title>
            <v-card-text>
              <p>Air Date: {{ episode.air_date }}</p>
              <p>Episode: {{ episode.episode }}</p>
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
  import { fetchEpisodes } from '@/apiService';
  
  const episodes = ref([]);
  const totalPages = ref(1);
  const page = ref(1);
  const search = ref('');
  
  const fetchData = async () => {
    const { results, info } = await fetchEpisodes(page.value, search.value);
    episodes.value = results;
    totalPages.value = info.pages;
  };
  
  watchEffect(() => {
    fetchData();
  });
  </script>
  