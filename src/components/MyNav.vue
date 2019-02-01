<template>
  <ul>
    <router-link exact-active-class="selected" tag="li" to="/">Home</router-link>
    <router-link exact-active-class="selected" tag="li" to="/about">About</router-link>
  </ul>
</template>

<<script>
export default {
  name: 'MyNav',
};
</script>

<style lang="less" scoped>
  ul {
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    margin: 0;
    border-bottom: 1px solid darkslategrey;
    li {
      flex: 0 50%;
      padding: 16px 0;
      text-align: center;
      &.selected {
        background-color: darkslategrey;
      }
    }
  }
</style>
