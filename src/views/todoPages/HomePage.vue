<template>
  <div class="todo-container">
    <MainNav />
    <FilterNav
      @filterChange="currentFilter = $event"
      :currentFilter="currentFilter"
    />
    <div v-if="projects.length">
      <div v-for="project of filteredProjects" :key="project.id">
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
import FilterNav from '@/components/todo/FilterNav.vue';

export default {
  name: 'HomePage',
  components: { SingleProject, MainNav, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: 'all',
    };
  },
  mounted() {
    fetch('http://localhost:8000/projects')
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'completed') {
        return this.projects.filter((project) => project.complete);
      }
      if (this.currentFilter === 'inProcess') {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
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
