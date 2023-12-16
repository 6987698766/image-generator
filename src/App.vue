<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  font-family: "jyhphy-2", sans-serif;
  box-sizing: border-box;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

html,
body {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}
</style>
