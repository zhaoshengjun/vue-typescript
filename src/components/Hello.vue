<template>
  <div class="hello">
    <h1 v-colorDirective="{background:'green',color:'white'}">{{ fullMessage }}</h1>
    <router-link to="hello-ts">HelloTS</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Hello extends Vue {
  message: string = 'Hello';

  @Prop({ type: String, default: " Vue" })
  msg: string;

  get fullMessage() {
    return `${this.message}${this.msg} from TypeScript`
  }

  created() {
    console.log('created!');
  }

  clicked() {
    console.log('clicked');
  }

  beforeRouteEnter(to, from, next) {
    console.log('enter');
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
