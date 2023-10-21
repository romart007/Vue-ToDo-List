<template>
  <v-card-actions class="todo--add-new grey lighten-4 pt-3 px-6 mt-7">
    <v-text-field
      outlined
      filled
      dense
      rounded
      append-icon="mdi-plus-circle"
      background-color="white"
      class="todo--input v-input--is-focused primary--text"
      color="primary"
      placeholder="New task"
      v-model="newTodo"
      @click:append="addTodo"
    >
    </v-text-field>
  </v-card-actions>
</template>
<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.dispatch("todos/addTodo", {
          id: Date.now(),
          name: this.newTodo,
          status: {
            done: false,
          },
        });
        this.newTodo = "";
      }
    },
  },
};
</script>
<style lang="scss">
.todo--input {
  .v-input__control {
    flex-direction: initial;
    flex-wrap: initial;

    .v-text-field__details {
      display: none;
    }
  }

  .v-icon {
    color: #1976d2 !important;
    caret-color: #1976d2 !important;
    font-size: 2.25rem;
    position: relative;
    right: -0.9rem;
  }
}
</style>
