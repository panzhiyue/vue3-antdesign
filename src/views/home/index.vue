<template>
  <div>{{ message }}</div>
  <div>{{ count }}<br /><button @click="increment">自增</button></div>
</template>
<script>
import { useHomeStore } from "@/store/home.js";
let homeStore = null;

export default {
  data() {
    return {
      message: "Hello World",
    };
  },
  computed: {
    count() {
      return homeStore.count;
    },
  },
  created() {
    homeStore = useHomeStore();
    console.log(homeStore);
  },
  methods: {
    increment() {
      homeStore.increment();
    },
  },
};
</script>
<style lang="less" scoped>
#app{
    text-align:center;
}
</style>