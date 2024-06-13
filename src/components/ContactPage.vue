<!-- src/views/Contact.vue -->
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-slide-x-transition>
        <div>
          <h1 class="text-h2 font-weight-bold">Contact Us</h1>
          <p>We'd love to hear from you! If you have any questions or feedback about this project, feel free to reach out.</p>
          <br><v-row justify="center">
            <v-col cols="12" md="6">
              <v-card>
                <v-img src="https://media.cdn.adultswim.com/uploads/20221115/thumbnails/2_2211151249465-RickandMorty_608_FullMetaJackrick.png"
                 height="200px"></v-img>
                <v-card-title>Get in Touch</v-card-title>
                <v-card-text>
                  <p>Email: mateo@fpmoz.sum.ba</p>
                  <p>Phone: +387 63 000 000</p>
                  <p>Address:Matice Hrvatske bb, 88000 Mostar</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-slide-x-transition>
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
  .v-card {
    text-align: left;
  }
</style>
