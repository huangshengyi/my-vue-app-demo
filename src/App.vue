<template>
  <div id="app">
    <ul class="nav-list">
      <router-link class="item" :to="{path: item.path}" custom v-slot="{ navigate }"
        v-for="(item, index) of navList" :key="index"
      >
        <li @click="navigate" @keypress.enter="navigate" role="link">{{item.name}}</li>
      </router-link>
    </ul>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      navList: [
        { name: '首页', path: '/' },
        { name: 'wangeditor富文本编辑器', path: '/editor/wangeditor' },
        { name: 'simditor富文本编辑器', path: '/editor/simditor' },
        { name: 'ckeditor5-build-classic富文本编辑器', path: '/editor/ckeditor5BuildClassic' },
        { name: 'jsplump流程图', path: '/flowChart/jsplump' },
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  * {
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }

  .nav-list {
    margin-bottom: 15px;
    padding-bottom: 20px;
    overflow: hidden;
    border-bottom: 1px solid rgb(202, 198, 198);
    .item {
      float: left;
      padding: 5px 10px;
      margin: 0 5px 8px 0;
      font-size: 15px;
      border-radius: 5px;
      color: rgb(37, 166, 218);
      cursor: pointer;
      background: #ddd;
      &:nth-last-child(1) {
        margin-right: 0;
      }
      &:hover {
        background: #2c3e50;
      }
    }
  }
}
</style>
