<template lang="html">
  <div>
    <div class="counter">
      <div class="col-md-8 offset-md-2 card">
        <div class="card-block">
          <h3 class="text-center">Tarik Tambang</h3>
          <hr />
          <button
            type="button"
            class="btn btn-block btn-info"
            @click="increment"
            @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
          >
            Team A Pull Right Side
          </button>

          <h4 class="text-center">{{ count }}</h4>

          <button
            type="button"
            class="btn btn-block btn-info"
            @click="decrement"
            @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')"
          >
            Team B Pull Left Side
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "counter",
  methods: {
    increment() {
      this.$store.dispatch("socket_increment");
    },
    decrement() {
      this.$store.dispatch("socket_decrement");
    },
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  },
  computed: {
    ...mapGetters(["count"]),
    isDisabledLeft() {
      // if (1 == 1) {
      //   return false;
      // } else {
      //   return true;
      // }
    },
    isDisabledRight() {
      // if (1 == 1) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
  },
};
</script>

<style lang="css"></style>
