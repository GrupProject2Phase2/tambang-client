import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import VueSocketIO from "vue-socket.io";

Vue.use(Vuex);
import counterModule from "@/store/counter";
import chatModule from "@/store/chat";

const store = new Vuex.Store({
  state: {
    io: {},
  },
  mutations: {
    setSocket: (state, socket) => {
      state.io = socket;
      console.log("socket Connected");
    },
  },
  modules: {
    counterModule,
    chatModule,
  },
});

Vue.use(VueSocketIO, "http://localhost:3000/", store);

new Vue({
  el: "#app",
  store,
  router,
  beforeCreate() {
    store.commit("setSocket", this.$socket);
  },
  render: (h) => h(App),
});
