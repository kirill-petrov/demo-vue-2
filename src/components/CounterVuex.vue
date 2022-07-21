<template>
  <div id="app">
    <pre>CounterVuex</pre>
    <p>{{ count }}</p>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "CounterVuex",
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      return store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  },
};
</script>

<style>
button {
  width: 30px;
}
</style>
