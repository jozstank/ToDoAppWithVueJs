const Filter = {
  props: {
    receiveTotalTodos: {
      type: Number,
      required: true,
    },
    receiveFilterStatus: {
      type: String,
      required: true,
    },
  },
  emits: ["changeStatus"],
  template: `<div class="actions">
    <p>{{receiveTotalTodos}} todos</p>
    <div class="filter">
      <button
        @click="changeFilterStatus('all')"
        :class="{selected:receiveFilterStatus==='all'}"
      >
        All
      </button>
      <button
        @click="changeFilterStatus('active')"
        :class="{selected:receiveFilterStatus==='active'}"
      >
        Active
      </button>
      <button
        @click="changeFilterStatus('completed')"
        :class="{selected:receiveFilterStatus==='completed'}"
      >
        Completed
      </button>
    </div>
  </div>`,
  methods: {
    changeFilterStatus(status) {
      this.$emit("changeStatus", status);
    },
  },
};

export default Filter;
