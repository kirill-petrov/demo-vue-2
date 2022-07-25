<template>
  <div>
    <pre>isAuth: {{ isAuth }}</pre>
    <the-navbar :visible="isAuth"></the-navbar>
    <login-comp :visible="!isAuth"></login-comp>

    <!-- test -->
    <signup-form v-if="false" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheNavbar from '@/components/TheNavbar.vue';
import LoginComp from '@/components/LoginComp.vue';
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: { TheNavbar, LoginComp, SignupForm },
  computed: {
    ...mapGetters({
      isAuth: 'vmail/checkAuth',
    }),
  },
  methods: {
    login() {
      this.$store.commit('vmail/login');
      // this.$router.push('/vmail/dashboard');
    },
    logout() {
      this.$store.commit('vmail/logout');
      // this.isAuth = false;
      // this.$router.push('/vmail');
    },
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: 1, theme: 'тема-1' },
        { id: 2, theme: 'тема-2' },
        { id: 3, theme: 'тема-3' },
        { id: 4, theme: 'тема-4' },
        { id: 5, theme: 'тема-5' },
      ],
    };
  },
};
</script>

<style></style>
