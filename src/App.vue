<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { createDecorator } from "vue-class-component";

const Log = (msg?: string) => {
  return createDecorator((component, key) => {
    console.log('Comp', component);
    console.log('key', key);
    console.log(msg);
  })
}

const NoCache = createDecorator((comp: any, key) => {
  comp.computed[key].cache = false;
})

@Component
export default class App extends Vue {
  @Log()
  name = 'paco';

  @Log('test')
  @NoCache
  get message() {
    return 'Hi, vue!'
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
