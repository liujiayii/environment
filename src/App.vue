<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
  import layout from '@/views/layout/layout'

  export default {
    name: "App",
    components: {layout}
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
