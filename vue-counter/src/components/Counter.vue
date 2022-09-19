<template>
  <div class="counter">
    <h2>My counter</h2>
    {{ message }}
    <button @click="increase">increment</button><button @click="count--">decrement</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    message(){
      return `The counter value is: ${this.count}`;
    }
  },
  methods: {
    increase(){
      this.count++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
