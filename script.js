const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      todos: [],
      todoTitle: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: this.todos.length + 1,
        title: this.todoTitle,
        completed: false,
      };
      this.todos.push(newTodo);
      this.todoTitle = "";
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
app.mount("#app");
