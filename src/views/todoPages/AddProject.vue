<template>
  <form class="todo-container" @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <div class="btn-group">
      <button class="btn btn--gray" type="button" @click="$router.back()">
        Back
      </button>
      <button class="btn">Add Project</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };

      fetch('http://localhost:8000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      })
        .then(() => this.$router.push({ name: 'homePage' }))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/global.scss';

form {
  background: $color-vue-gray;
  padding: 20px;
  border-radius: 10px;

  .btn-group {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .btn--gray {
    background: #bbb;
  }
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
.btn {
  display: block;
  margin: 20px 0;
  background: $color-vue;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
