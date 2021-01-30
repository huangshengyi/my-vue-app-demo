<template>
  <div id="app">
    <!-- <jsplump /> -->
    <wangeditor />
    <!-- <simditor /> -->

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jsplump from './components/jsplump.vue'
import wangeditor from './components/editorExample/wangeditor'
import simditor from './components/editorExample/simditor'

export default {
  name: 'app',
  components: {
    HelloWorld,
    jsplump,
    wangeditor,
    simditor,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
