<template>
  <div id="app">
    <p>{{userName}}</p>
    <button @click="handler">Get User Name</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { createDecorator } from "vue-class-component";
import { AdvicePool, onException, beforeMethod, adviceMetadata, IMetadata, afterMethod, adviceParam } from 'kaop-ts';

class Advice extends AdvicePool {
  static getCached( @adviceMetadata metadata: IMetadata, @adviceParam(0) prop) {
    console.log('getCache executed');
    const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`;
    const cached = localStorage.getItem(key);
    if (cached) {
      metadata.scope[prop] = cached;
      this.stop();
    }
  }

  static setCache( @adviceMetadata metadata: IMetadata, @adviceParam(0) prop) {
    console.log('setCache executed');
    const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`;
    if (metadata.result) {
      metadata.result.then(_ => {
        localStorage.setItem(key, metadata.scope[prop]);
      })
    }
  }
  static notify( @adviceParam(0) toServer) {
    if (toServer) {
      console.log('Http call to server')
    } else {
      console.log('Notifying to client...');
    }
  }

  static report( @adviceMetadata metadata: IMetadata) {
    console.error('error...', metadata.exception)
  }
}

@Component
export default class App extends Vue {
  userName = '';

  @beforeMethod(Advice.getCached, 'userName')
  @onException(Advice.report)
  @afterMethod(Advice.setCache, 'userName')
  @afterMethod(Advice.notify, true)
  handler() {
    console.log('method executed');
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(user => {
        this.userName = user.name;
      })
      .catch(err => {
        throw Error("terrible error");
      })
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
