<template>
  <div class="container">
    <button class="btn" @click="flipHandle">切换</button>
    <div :class="{item1: true, animation: show}"></div>
    <div class="item2"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    flipHandle: function (event) {
      console.log('打印：', event)
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 600px;
    height: 500px;
    background: #0080ff;
    transform-style: preserve-3d;
  }
  .btn {
    color: #fff;
    background: #ff5e00;
  }
  .item1 {
    position: absolute;
    width: 300px;
    height: 150px;
    top: 120px;
    left: 70px;
    background: #fff;
    z-index: 2;
    box-shadow: 1px 1px 1px 1px rgb(71, 63, 63);
    border-radius: 10px;
  }
  .animation {
    animation: flip 1s ease-in-out infinite;
  }
  .item2 {
    position: absolute;
    width: 240px;
    height: 150px;
    top: 160px;
    left: 100px;
    background: #fff;
    z-index: 1;
    border-radius: 10px;
  }

  @keyframes flip {
    0% {
      transform: translate3d(0, -60px, 20px);
    }
    100% {
      transform: translate3d(0, 0px, 0);
    }
  }
</style>