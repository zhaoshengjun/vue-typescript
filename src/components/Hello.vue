<template>
  <div class="hello">
    <h1 v-colorDirective="{background:'green',color:'white'}">{{ fullMessage }}</h1>
    <router-link to="hello-ts">HelloTS</router-link>
  </div>
</template>

<script lang="ts">
import Parent from './Parent';
import Component from 'vue-class-component';
import colorDirective from '../color-directive';

@Component({
  directives: {
    colorDirective
  }
})
export default class Hello extends Parent {
  message: string = 'Hello Vue';

  get fullMessage() {
    return `${this.message} from TypeScript`
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
