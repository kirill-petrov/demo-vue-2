<template>
  <div class="counter">
    <pre>store.state.count: {{ $store.state.count }}</pre>
    <pre>store.getters.multiplyByTwo: {{ storeGetters }}</pre>
    <pre>store.getters.getCount: {{ count }}</pre>
    <hr />
    <CounterVuex />
  </div>
</template>

<script>
import CounterVuex from '@/components/CounterVuex.vue';

export default {
  name: 'CounterView',
  components: { CounterVuex },
  computed: {
    storeGetters() {
      return this.$store.getters.multiplyByTwo;
    },
    count() {
      return this.$store.getters.getCount;
    },
  },
};
</script>

<style>
hr {
  width: 300px;
}
</style>
