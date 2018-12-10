<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link to="/question1">Question 1</router-link>
      <router-link to="/question2">Question 2</router-link>
      <router-link to="/question3">Question 3</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a:link {
  margin-left: 50px;
  font-weight: bold;
  text-decoration: none; 
}
img {
  width: 100px;
  height: 100px;
}
</style>
