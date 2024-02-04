<template>
  <div class="app">
    <RouterView class="routerview"></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    RouterView,
  },
}
</script>

<style lang="scss">
@import "./static/css/publicStyle.scss";

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
  font-family: 'PingFang SC',Arial,Helvetica,'Microsoft YaHei';
}

.app {
  padding: 0;
  margin: 0;
  background-color: #eeeeee;
  height: 100%;
  width: 100%;
  font-family: 'PingFang SC',Arial,Helvetica,'Microsoft YaHei';
  color: #000000;
}
</style>
