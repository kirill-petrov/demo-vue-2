<template>
  <form class="todo-container" @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button class="btn">Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'], // :id from @/router/index.js
  data() {
    return {
      uri: 'http://localhost:8000/projects/' + this.id,
      title: '',
      details: '',
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: this.title, details: this.details }),
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
form .btn {
  display: block;
  margin: 20px auto 0;
  background: $color-vue;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
