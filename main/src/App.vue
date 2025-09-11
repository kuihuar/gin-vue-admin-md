<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Ensure full-height context */
html, body, #app { height: 100%; }

/* On small screens (no fullpage.js), push footer to the bottom */
@media (max-width: 1199px) {
  .home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  #fullpage {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .section.footer {
    margin-top: auto;
  }
}
</style>
