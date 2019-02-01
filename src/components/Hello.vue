<template>
  <div class="hello">
    <h4>Tips</h4>
    <ul>
      <li>This is the first tip.</li>
      <li>And this is the second one.</li>
    </ul>
  </div>
</template>

<<script>
export default {
  name: 'Hello',
};
</script>

<style lang="less" scoped>
  .hello {
    display: flex;
    flex-direction: column;
    color: #666;
    h4 {
      font-weight: 400;
    }
    ul {
      list-style-type: circle;
      padding-inline-start: 20px;

      & > li:nth-of-type(1) {
        color: green;
      }
    }
  }
</style>
