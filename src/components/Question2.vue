<template>
  <div>
    <b-jumbotron>      
      <template slot="lead">
        <h1>Question 2</h1>
        <hr class="my-4" />
        <p>(Y + 24) + (10 × 2) = 99</p>
        <p>Please create new function for finding Y value</p>
        <b-btn variant="primary" size="lg" @click="calculate()">Calculate</b-btn>
      </template>
    </b-jumbotron>

    <b-modal ref="answerModal" title="Question 2 : Y is">
      <p class="answer">{{answer}}</p>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'Question2',
  data: function () {
    return {
      answer: ''
    }
  }, 
  methods: {
    calculate() {
      this.answer = (99 - 44);
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
