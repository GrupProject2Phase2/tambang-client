import router from "../router";

const counterModule = {
  state: {
    count: 50,
  },

  mutations: {
    SOCKET_COUNTER_INCREMENT(state, counter) {
      state.count = counter[0];
    },
    SOCKET_COUNTER_DECREMENT(state, counter) {
      state.count = counter[0];
    },
  },

  actions: {
    socket_increment: ({ state, rootState }) => {
      rootState.io.emit("increment", state.count);
    },
    socket_decrement: ({ state, rootState }) => {
      rootState.io.emit("decrement", state.count);
    },
  },
  getters: {
    count(state) { 
      if (state.count === 100){
        router.push('/winnerInc')
      }
      else if (state.count === 0){
        router.push('/winnerDec')
      }
      return state.count;
    },
  },
};

export default counterModule;
