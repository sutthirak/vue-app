<template>
  <div>
    <b-jumbotron>      
      <template slot="lead">
        <h1>Question 1</h1>
        <hr class="my-4" />
        <p> 3, 5, 9, 15, X </p>
        <p>Please create new function for finding X value</p>
        <b-btn variant="primary" size="lg" @click="calculate(5)">Calculate</b-btn>
      </template>
    </b-jumbotron>
    <b-modal ref="answerModal" title="Question 1 : X is">
      <p class="answer">{{answer}}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Question1',
  data: function () {
    return {
      answer: ''
    }
  },
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
      this.answer = sequence[sequence.length-1];
      this.$refs.answerModal.show();
    }
  }
}

</script>

<style scoped>
  .answer{
    font-size: 100px;
  }
</style>
