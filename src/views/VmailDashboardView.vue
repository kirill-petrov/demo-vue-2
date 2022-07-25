<template>
  <div class="card">
    <pre>DashboardView</pre>
    <pre>isAuth: {{ isAuth }}</pre>

    <router-link to="/vmail/mail">To Mail</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DashboardView',
  computed: {
    ...mapGetters({
      isAuth: 'vmail/checkAuth',
    }),
  },
};
</script>

<style scoped></style>
