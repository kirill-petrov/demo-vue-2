<template>
  <nav class="todo-nav">
    <router-link :to="{ name: 'homePage' }">Projects</router-link>
    <router-link :to="{ name: 'addProject' }">Add a New Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/assets/global.scss';

.todo-nav {
  text-align: center;
  margin: 40px auto;
  a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
  }
  a.router-link-active {
    border-bottom: 2px solid $color-vue;
    padding-bottom: 4px;
  }
}
</style>
