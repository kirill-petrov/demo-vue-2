<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label class="form__label">email: {{ email }}</label>
    <input class="form__input" type="email" v-model="email" required />

    <label class="form__label">password: {{ password }}</label>
    <input class="form__input" type="password" v-model="password" required />
    <div class="form__error" v-if="passwordError">{{ passwordError }}</div>

    <label class="form__label">role: {{ role }}</label>
    <select class="form__select" v-model="role">
      <option value="frontend">frontend</option>
      <option value="backend">backend</option>
    </select>

    <label class="form__label">Skills (press enter):</label>
    <input
      class="form__input"
      type="text"
      v-model="tempSkill"
      @keyup.enter="addSkill"
    />
    <div v-for="skill in skills" :key="skill" class="form__pill">
      <span @click="deleteSkill(skill)">{{ skill }} &#215;</span>
    </div>

    <div class="form__terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>

    <div class="form__btn-submit">
      <button>Create an Account</button>
    </div>
    <!--
    <div class="terms">
      <input type="checkbox" v-model="accept" value="terms" />
      <label>Accept terms</label>
    </div>
    <div class="terms">
      <input type="checkbox" v-model="accept" value="conditions" />
      <label>Accept conditions</label>
    </div>
    <pre>{{ accept }}</pre>
    -->
  </form>
</template>

<script>
export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      accept: [],
      tempSkill: '',
      skills: [],
      passwordError: '',
    };
  },
  methods: {
    addSkill() {
      const value = this.tempSkill.trim();
      if (value !== '') {
        if (!this.skills.includes(value)) {
          this.skills.push(value);
        }
        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill);
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 3
          ? ''
          : 'Password must be at least 6 characters long';
      if (!this.passwordError) {
        // make request to database to save user
        console.log('Form submitted');
        console.log('email: ', this.email);
        console.log('password: ', this.password);
        console.log('role: ', this.role);
        console.log('skills: ', this.skills);
        console.log('terms accepted: ', this.terms);
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  max-width: 300px;
  margin: 30px auto;
  background: rgb(241, 241, 241);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
.form__label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.form__input,
.form__select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.form__terms {
  margin-top: 25px;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.form__pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #42b983;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #42b983;
  cursor: pointer;
}
.form__btn-submit {
  text-align: center;
  button {
    width: auto;
    margin-top: 45px;
    padding: 10px 20px;
    border: 0;
    border-radius: 20px;
    background: #42b983;
    color: white;
  }
}
.form__error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8rem;
}
</style>
