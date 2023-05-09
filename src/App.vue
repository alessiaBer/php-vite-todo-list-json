<script>
import axios from "axios";
export default {
  data() {
    return {
      tasks: null,
      newTask: "",
      apiUrl: "http://localhost:8888/PHP/php-todo-list-json/app/Http/Controllers/TaskController/",
      apiGet:
        "http://localhost:8888/PHP/php-todo-list-json/app/Http/Controllers/TaskController/index.php",
      apiPost: "store.php",
      apiDelete: "delete.php",
      apiToggleDone: "toggle.php",
    };
  },
  methods: {
    addTask() {
      const api = `${this.apiUrl + this.apiPost}`;
      const data = {
        newTask: this.newTask,
      };

      axios
        .post(api, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
        this.newTask = ""
    },
    toggleDone(index) {
      const api = `${this.apiUrl + this.apiToggleDone}`;
      const data = {
        index,
      };
      axios
        .post(api, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    deleteTask(index) {
      event.stopPropagation();
      const api = `${this.apiUrl + this.apiDelete}`;
      const data = {
        index,
      };
      axios
        .post(api, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  mounted() {
    axios
      .get(this.apiGet)
      .then((response) => {
        this.tasks = response.data;
      })
      .catch((error) => {
        console.error(error.message);
      });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="mt-4">ToDo List</h1>
    <div class="card my-4">
      <ul class="list-group list-group-flush">
        <li
          class="px-4 py-3 d-flex justify-content-between align-items-center list-group-item"
          v-for="(task, index) in tasks"
          :class="task.done ? 'done' : ''"
          @click="toggleDone(index)"
        >
          {{ task.name }}
          <div class="delete" @click="deleteTask(index)">
            <font-awesome-icon icon="fa-solid fa-trash" class="icon" />
          </div>
        </li>
      </ul>
      <!-- /.list-group -->
    </div>
    <!-- /.card -->
    <div class="input-group mb-3">
      <span class="input-group-text" @click="addTask()"> + </span>
      <input
        type="text"
        class="form-control"
        placeholder="Add new task"
        v-model="newTask"
        @keyup.enter="addTask()"
      />
    </div>
    <!-- /.input-group-->
  </div>
</template>

<style scoped></style>
