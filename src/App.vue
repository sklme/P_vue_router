<template>
  <div id="nav">
    <div class="tdesign-demo-block-row">
      <t-button theme="default" variant="base"> 填充按钮 </t-button>
      <t-button theme="default" variant="outline"> 描边按钮 </t-button>
      <t-button theme="default" variant="dashed"> 虚框按钮 </t-button>
      <t-button theme="default" variant="text"> 文字按钮 </t-button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
