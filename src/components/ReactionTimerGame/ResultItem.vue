<template>
  <div>
    <p>Reaction time: {{ score }} ms</p>
    <p class="rank" v-if="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja Fingers!!!';
    } else if (this.score < 400) {
      this.rank = 'Быстрые рефлексы';
    } else {
      this.rank = 'Скорость улитки…';
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4rem;
  color: #42b983;
  font-weight: bold;
}
</style>
