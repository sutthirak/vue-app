<template>
  <div>
    <p>If 1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 Then 5 = X</p>
    <p>Please create new function for finding X value</p>
    <button v-on:click="calculate([5,2,3,4,5])">Calculate</button>
  </div>
</template>

<script>
export default {
  name: 'Question3',
  methods: {
    calculate(sequence) {
      const answer = sequence.reverse().join("");
      alert(answer);
    }
  }
}
</script>

<style scoped>

</style>
