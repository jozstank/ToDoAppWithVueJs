const NewTodoForm = {
  data() {
    return {
      todoTitle: "",
    };
  },
  emits: ["addTodo"],
  template: `
    <form action="#" @submit.prevent="emitAddTodo">
        <input
          type="text"
          placeholder="What needs to be done?"
          v-model="todoTitle"
        />
      </form>
    `,
  methods: {
    emitAddTodo() {
      this.$emit("addTodo", this.todoTitle);
    },
  },
};
export default NewTodoForm;
