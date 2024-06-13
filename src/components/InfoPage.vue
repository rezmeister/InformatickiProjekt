<!-- src/views/Info.vue -->
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-slide-y-transition>
        <div>
          <h1 class="text-h2 font-weight-bold">Info Page</h1>
          <p>This project is for fun and for the faculty FPMOZ and the course IP2.</p>
          <p>I have always liked Rick and Morty. The show's unique blend of humor, science fiction, and deep philosophical themes has always fascinated me. That's why I chose this topic for my project. Through this project, I hope to share my enthusiasm for the show and explore its various characters, locations, and episodes in depth.</p>
          <br><p>I hope you enjoy this project as much as I enjoyed creating it!</p>
        </div>
      </v-slide-y-transition>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>

<style scoped>
  .v-responsive > div {
    text-align: center;
    margin-top: 20px;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
  }
</style>
