<template>
  <div class="todo-container">
    <MainNav />
    <div v-if="projects.length">
      <div v-for="project of projects" :key="project.id">
        <single-project
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '@/components/todo/SingleProject.vue';
import MainNav from '@/components/todo/MainNav.vue';

export default {
  name: 'HomePage',
  components: { SingleProject, MainNav },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:8000/projects')
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((item) => item.id !== id);
    },
    handleComplete(id) {
      let project = this.projects.find((item) => item.id === id);
      project.complete = !project.complete;
    },
  },
};
</script>

<style></style>
