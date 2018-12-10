<template>
  <div>
    <p> 3, 5, 9, 15, X </p>
    <p>Please create new function for finding X value</p>
    <button v-on:click="calculate(5)">Calculate</button>
  </div>
</template>

<script>
export default {
  name: 'Question1',
  methods: {
    calculate(size) {
      let current = 3;
      const sequence = [];
      for(let i = 0; i<size; i++) {
        if(i !== 0) {
          current = current + (2 * (i));
        }
        sequence.push(current);
      }
      const answer = sequence[sequence.length-1];
      alert(answer);
    }
  }
}

</script>

<style scoped>

</style>
