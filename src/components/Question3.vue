<template>
  <div>
    <b-jumbotron>      
      <template slot="lead">
        <h1>Question 3</h1>
        <hr class="my-4" />
        <p>If 1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 Then 5 = X</p>
        <p>Please create new function for finding X value</p>
        <b-btn variant="primary" size="lg" @click="calculate([5,2,3,4,5])">Calculate</b-btn>
      </template>
    </b-jumbotron>

    <b-modal ref="answerModal" title="Question 3 : X is">
      <p class="answer">{{answer}}</p>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'Question3',
  data: function () {
    return {
      answer: ''
    }
  }, 
  methods: {
    calculate(sequence) {
      this.answer = sequence.reverse().join("");
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
