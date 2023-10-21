<template>
  <v-hover v-slot:default="{ hover }">
    <v-slide-y-transition>
      <v-alert
        dense
        outlined
        :colored-border="true"
        :class="{ 'grey lighten-3': hover }"
        class="todo--item"
      >
        <v-row>
          <v-col class="grow text-justify">
            <v-btn
              @click="toggleTodoStatus"
              icon
              color="lighten-1"
              :color="!todo.status.done ? 'green' : ''"
            >
              <v-icon>mdi-check-circle</v-icon>
            </v-btn>
            <span
              class="font-weight-bold"
              :class="{
                'text-decoration-line-through grey--text': todo.status.done,
              }"
              >{{ todo.name }}</span
            >
          </v-col>
          <v-col class="shrink">
            <v-btn
              v-show="hover"
              @click="removeTodo"
              text
              icon
              color="red lighten-2"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-slide-y-transition>
  </v-hover>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    toggleTodoStatus() {
      this.$store.dispatch("todos/toggleTodoStatus", this.todo.id);
    },
    removeTodo() {
      this.$store.commit("todos/removeTodo", this.todo.id);
    },
  },
};
</script>

<style lang="scss">
.v-alert {
  &.todo--item {
    &,
    &:hover {
      border: 2px solid #ccc !important;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
