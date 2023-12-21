import NewTodoForm from "./NewTodoForm.js";
import TodoItems from "./TodoItems.js";
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      todos: [],
      todoTitle: "",
      filterStatus: "all",
      totalTodos: 0,
    };
  },

  computed: {
    filterTodo() {
      if (this.filterStatus === "all") {
        return this.todos;
      }
      if (this.filterStatus === "active")
        return this.todos.filter((x) => x.completed === false);
      if (this.filterStatus === "completed") {
        return this.todos.filter((x) => x.completed === true);
      }
    },
  },
  watch: {
    "filterTodo.length": {
      handler() {
        this.totalTodos = this.filterTodo.length;
      },
      immediate: true,
    },
  },
  methods: {
    addNewToDo(data) {
      this.todoTitle = data;
      if (this.todoTitle.length > 0) {
        const newTodo = {
          id: this.todos.length + 1,
          title: this.todoTitle,
          completed: false,
        };
        this.todos.push(newTodo);
        this.$refs.myElement.$data.todoTitle = "";
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    changeFilterStatus(x) {
      this.filterStatus = x;
    },
  },
  components: {
    "newtodo-form": NewTodoForm,
    "todo-item": TodoItems,
  },
});
app.mount("#app");
