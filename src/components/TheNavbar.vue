<template>
  <header class="navbar" v-if="visible">
    <ul class="navbar-menu">
      <li>
        <router-link to="/vmail/dashboard">Главная</router-link>
      </li>
      <li>
        <router-link to="/vmail/mail">Почта</router-link>
      </li>
      <li @click="logout">
        <router-link to="/vmail">Выйти</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    visible: {
      type: Boolean,
    },
  },
  inject: ['logout'],
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
