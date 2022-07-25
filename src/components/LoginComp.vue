<template>
  <div v-if="visible">
    <form class="form" @submit.prevent="submit">
      <div>
        <label class="form__label" for="email">Email</label>
        <input
          class="form__input"
          type="text"
          id="email"
          v-model.trim="email"
        />
      </div>
      <div>
        <label class="form__label" for="password">Password</label>
        <input
          class="form__input"
          type="password"
          id="password"
          v-model="password"
        />
      </div>
      <div class="form__btn-submit"><button>Войти</button></div>
    </form>
    <router-link class="form__link" to="/vmail/forget"
      >Забыл пароль?</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'LoginComp',
  props: {
    visible: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    isValid() {
      return this.email !== '' && this.password !== '';
    },
  },
  inject: ['login'],
  methods: {
    submit() {
      if (this.isValid) {
        this.email = '';
        this.password = '';
        this.login();
      }
    },
  },
};
</script>
