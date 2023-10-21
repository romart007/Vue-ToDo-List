<template>
  <v-card-title dense class="justify-end grey lighten-3 py-2 mb-8">
    <v-btn
      rounded
      color="primary ma-1 pr-1 text-capitalize font-weight-bold"
      dark
    >
      Tasks <span class="task--count">{{ todos.length }}</span>
    </v-btn>
    <v-btn
      rounded
      color="primary ma-1 pr-1 text-capitalize font-weight-bold"
      dark
    >
      Tasks Done <span class="task--count">{{ todosDone.length }}</span>
    </v-btn>
    <v-btn
      @click="removeCompletedTodos"
      v-show="todosDone.length"
      tile
      class="ma-1 pl-1 text-capitalize"
      color="error"
      dark
    >
      <v-icon dark right class="mr-1 font-weight-bold"> mdi-delete </v-icon
      >Tasks Done
    </v-btn>
    <v-btn
      tile
      class="ma-1 pl-1 text-capitalize font-weight-bold"
      color="error"
      dark
    >
      <v-icon dark right class="mr-1"> mdi-delete </v-icon>Tasks
    </v-btn>
  </v-card-title>
</template>
<script>
export default {
  props: {
    todos: [],
  },
  computed: {
    todosDone() {
      return this.todos.filter((todo) => todo.status.done);
    },
  },
  methods: {
    removeCompletedTodos() {
      this.$store.dispatch("todos/removeAllDoneTodo");
    },
  },
};
</script>
<style lang="scss">
.task--count {
  background: white;
  border-radius: 100%;
  color: #1976d2;
  min-width: 1.8rem;
  padding: 0.4rem;
  position: relative;
  margin-left: 5px;
}
</style>
