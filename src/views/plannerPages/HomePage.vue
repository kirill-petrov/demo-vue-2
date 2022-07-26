<template>
  <div class="planner-home">
    <div v-if="projects.length">
      <div v-for="project of projects" :key="project.id">
        <single-project :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '@/components/planner/SingleProject.vue';

export default {
  name: 'HomePage',
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:8000/projects')
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.log(error.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.planner-home {
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
