<template>
  <section class="todo-list">
    <form @submit.prevent="submitTodo">
      <div class="add-items d-lg-flex">
        <input
          v-model="newTodo" type="text" class="form-control todo-list-input"
          placeholder="What do you need to do today?"
        >
        <button id="add-task" class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn ml-0 ml-lg-2 mt-2 mt-lg-0">Add</button>
      </div>
    </form>
    <div class="list-wrapper">
      <ul class="d-flex flex-column-reverse todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <div class="form-check">
            <label class="form-check-label">
              <input class="checkbox" type="checkbox">{{ todo.title }}<i class="input-helper" /></label>
          </div>
          <i class="remove mdi mdi-close-circle-outline" @click.prevent="deleteTodo(todo)" />
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'TodoList',
  data() {
    return {
      todos: [
        { 'title': 'Pick up kids from school', 'done': false },
        { 'title': 'Prepare for presentation', 'done': false },
        { 'title': 'Print Statements', 'done': false },
        { 'title': 'Create invoice', 'done': false },
        { 'title': 'Call John', 'done': false },
        { 'title': 'Meeting with Alisa', 'done': false },
      ],
      newTodo: '',
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
  mounted() {
    // console.log(localStorage.todos)
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  methods: {
    submitTodo() {
      if (!this.newTodo === '') {
        this.todos.push({
          title: this.newTodo,
          done: false,
        });
        this.newTodo = '';
      }
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
};
</script>

<style scoped>

</style>
