<template>
  <div id="app">
    <h2>Hello, {{ msg }}</h2>
    <my-nav></my-nav>
    <router-view class="app-content"></router-view>
  </div>
</template>

<script>
import MyNav from './components/MyNav.vue';

export default {
  name: 'App',
  components: { MyNav, },
  data() {
    return {
      msg: 'Vue!',
    };
  },
};
</script>

<style lang="less">
  div#app {
    margin: 0 auto;
    width: 800px;
    
    & > h2 {
      text-align: center;
      margin-bottom: 50px;
    }
    & > .app-content {
      text-align: center;
      padding: 100px;
    }
  }
</style>

