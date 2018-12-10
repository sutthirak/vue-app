<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link to="/question1">Question 1</router-link>
      <router-link to="/question2">Question 2</router-link>
      <router-link to="/question3">Question 3</router-link>
    </p>
    <router-view></router-view>
    build with <strong>Vue.js</strong> <br /> &copy; Sutthirak Sangchan
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
    margin-bottom: 20px;
    animation-name: spinner;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    -webkit-animation-name: spinner;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 2s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  @-webkit-keyframes spinner {
    from { -webkit-transform: rotateY(0deg);    }
    to   { -webkit-transform: rotateY(-360deg); }
  }

  @keyframes spinner {
    from {
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    to {
      -moz-transform: rotateY(-360deg);
      -ms-transform: rotateY(-360deg);
      transform: rotateY(-360deg);
    }
  }
</style>
