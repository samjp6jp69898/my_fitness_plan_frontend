<template>
  <div>
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
@import "./static/css/publicStyle.css";

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
}
</style>
