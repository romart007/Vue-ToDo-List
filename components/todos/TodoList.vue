<template>
  <v-card light class="mx-auto" min-width="580" max-width="max-content">
    <TodoHeader :todos="todos" />
    <v-card-text :class="{ 'overflow-auto': todos.length > 3 }">
      <v-scale-transition group>
        <TodoItem v-if="todos" v-for="todo in todos" :key="todo.id" :todo="todo" />
        <span key="keyed" ref="vCard"></span>
      </v-scale-transition>
    </v-card-text>
    <p v-if="!todos.length">No Item(s) to display. Please add a new To Do.</p>
    <TodoInput />
  </v-card>
</template>

<script>
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import TodoInput from "./TodoInput.vue";

export default {
  components: {
    TodoHeader,
    TodoItem,
    TodoInput,
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
  watch: {
    todos: {
      immediate: true,
      handler(val, _) {
        if (val && this.$refs.vCard) {
          this.$nextTick(() =>
            this.$refs.vCard.scrollIntoView({ behavior: "smooth" })
          );
        }
      },
    },
  },
};
</script>
<style lang="scss">
.v-card {
  &__text {
    max-height: 217px;
    padding-bottom: 0;
    padding-top: 2px;
  }
}
</style>
