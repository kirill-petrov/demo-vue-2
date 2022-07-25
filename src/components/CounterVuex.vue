<template>
  <div id="app">
    <pre>CounterVuex</pre>
    <p>{{ count }}</p>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementAsync">+10</button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';

export default {
  name: 'CounterVuex',
  computed: {
    // v1
    //  count() {
    //   return store.state.count;
    // },
    // v2
    ...mapGetters({
      count: 'getCount',
    }),
  },
  methods: {
    increment() {
      return store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync');
    },
  },
};
</script>

<style>
button {
  width: 50px;
}
</style>
