<!-- src/views/Locations.vue -->
<template>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="search" label="Search" @input="fetchData" />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="location in locations" :key="location.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ location.name }}</v-card-title>
            <v-card-text>
              <p>Type: {{ location.type }}</p>
              <p>Dimension: {{ location.dimension }}</p>
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
  import { fetchLocations } from '@/apiService';
  
  const locations = ref([]);
  const totalPages = ref(1);
  const page = ref(1);
  const search = ref('');
  
  const fetchData = async () => {
    const { results, info } = await fetchLocations(page.value, search.value);
    locations.value = results;
    totalPages.value = info.pages;
  };
  
  watchEffect(() => {
    fetchData();
  });
  </script>
  