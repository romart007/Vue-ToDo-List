<template>
  <div class="alert mb-5">
    <v-btn
      absolute
      bottom
      right
      tile
      color="primary"
      @click="snackbar = true"
      class="mb-5 mr-2"
    >
      Show Info
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      transition="slide-x-transition"
      :timeout="-1"
      :value="true"
      color="#002455"
      rounded="pill"
      absolute
      bottom
      right
      class="mb-5"
    >
      <span class="white--text font-weight-bold">{{ text }}</span>
      <template v-slot:action="{ attrs }">
        <v-btn
          light
          rounded
          class="background-white px-1 py-1"
          height="auto"
          min-width="auto"
          @click="snackbar = false"
        >
          <v-icon light v-bind="attrs">mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: true,
    text: `This application uses the browser's Local Storage to store data.`,
  }),
};
</script>
