<template>
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <block v-if="isPlaying" :delay="delay" @end="endGame" />
    <result v-if="showResults" :score="score" />
  </div>
</template>

<script>
import Block from '@/components/ReactionTimerGame/BlockItem.vue';
import Result from '@/components/ReactionTimerGame/ResultItem.vue';

export default {
  name: 'ReactionTimer',
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      // set time amount (ms)
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  color: #444;
  margin-top: 60px;
}
button {
  background: #42b983;
  width: auto;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
