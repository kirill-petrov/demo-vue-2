<template>
  <div class="block" v-show="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    // сработает только когда смонтируется в ДОМ
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      console.log('// start the timer, tick every 10ms');
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      console.log('// stop the timer', this.reactionTime);
      clearInterval(this.timer);
      this.$emit('end', this.reactionTime);
    },
  },
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #42b983;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
