<template>
  <div id="app">
    <ul>
      <li v-for="user of users"> {{user.name}} </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import { lazyInject } from "./container";
import { TYPES } from './types';

@Component
export default class App extends Vue {
  users = [];

  @lazyInject(TYPES.UserService)
  userService;

  created() {
    this.userService.getUsers()
      .then(users => this.users = users)
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
