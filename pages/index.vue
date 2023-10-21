<template>
  <div class="todo-container d-flex justify-center align-center">
    <section class="text-center">
      <h1 class="mb-4 headline font-weight-bold">Vue ToDo List</h1>
      <TodoList />
      <Alert />
    </section>
  </div>
</template>

<script>
import TodoList from "../components/todos/TodoList.vue";
import Alert from "@/components/UI/Alert";
export default {
  name: "TodoPage",
  components: {
    TodoList,
    Alert,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    this.$store.commit("todos/initializeStore");
  },
};
</script>
<style lang="scss">
.todo-container {
  height: 80vh;
}
</style>
