import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Parent extends Vue {
  // message: string = "Hello from parent";

  created() {
    console.log("parent created!");
  }

  parentClicked() {
    console.log("parent clicked");
  }
  clicked() {
    console.log("clicked from the parent");
  }
}
