<template>
  <div>
    <h2>Hello, {{message}}</h2>
    <hello />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  name: 'App',
  components: { Hello },
  data() {
    return {
      message: 'Parcel!',
    };
  },
};
</script>

<style lang="less">
  div {
    margin: 0 auto;
    width: 800px;
    
    & > h2 {
      text-align: center;
      margin-bottom: 50px;
    }
  }
</style>

