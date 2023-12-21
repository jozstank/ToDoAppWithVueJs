import Filter from "./Filter.js";

const TodoItems = {
  props: {
    todos: {
      type: Array,
      required: true,
    },
    totalTodos: {
      type: Number,
      required: true,
    },
    filterStatus: {
      type: String,
      required: true,
    },
    filterTodo: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul class="todo-list">
        <li
          class="todo-item"
          v-if="todos.length > 0"
          v-for="todo in filterTodo"
          :key="todo.id"
        >
          <input type="checkbox" v-model="todo.completed" />
          <span class="todo-title" :class="{ completed: todo.completed }"
            >{{ todo.title }}</span
          >
          <span class="todo-remove" @click="emitDeleteTodo(todo.id)">
            &times;
          </span>
        </li>
        <li v-else class="todo-item">No todos found</li>
        <filter-component :receive-total-todos="totalTodos" :receive-filter-status="filterStatus" @changeStatus='getStatus'></filter-component>
      </ul>`,
  emits: ["deleteTodo", "setFilterStatus"],
  methods: {
    emitDeleteTodo(x) {
      this.$emit("deleteTodo", x);
    },
    getStatus(x) {
      this.$emit("setFilterStatus", x);
    },
  },
  components: {
    "filter-component": Filter,
  },
};
export default TodoItems;
