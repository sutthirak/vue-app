<template>
  <div>
    <p>(Y + 24) + (10 × 2) = 99</p>
    <p>Please create new function for finding Y value</p>
    <button v-on:click="calculate()">Calculate</button>
  </div>
</template>

<script>
export default {
  name: 'Question2',
  methods: {
    calculate() {
      alert (99 - 44);
    }
  }
}
</script>

<style scoped>

</style>
