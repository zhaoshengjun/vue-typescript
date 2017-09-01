<template>
  <div id="app">
    <button @click="sumUp">Count: {{count.acum}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  count = {
    acum: 0
  };
  @Watch('count.acum')
  watchCount(newVal, oldVal) {
    console.log('New :', newVal, ', Old: ', oldVal);
  }

  sumUp() {
    this.count.acum++;
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
</style>
