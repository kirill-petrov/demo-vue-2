<template>
  <div class="counter">
    <pre>store.state.count: {{ $store.state.count }}</pre>
    <pre>store.getters.multiplyByTwo: {{ $store.getters.multiplyByTwo }}</pre>
    <hr />
    <CounterVuex />
  </div>
</template>

<script>
import CounterVuex from "@/components/CounterVuex.vue";
export default {
  name: "CounterView",
  components: { CounterVuex },
};
</script>

<style>
hr {
  width: 300px;
}
</style>
