<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    // customEmit: function (data) {
    // //     console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    // // }
  },
};
</script>
