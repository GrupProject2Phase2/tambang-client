import Vue from "vue";
import Router from "vue-router";
import Counter from "@/components/Counter";
import Chat from "@/components/Chat";
import WinnerDec from "@/components/WinnerDec"
import WinnerInc from "@/components/WinnerInc"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/counter",
      name: "counter",
      component: Counter,
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
    },
    {
      path: "/winnerDec",
      name: "winnerDec",
      component: WinnerDec
    },
    {
      path: "/winnerInc",
      name: "winnerInc",
      component: WinnerInc
    }
  ],
});
