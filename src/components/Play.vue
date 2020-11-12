<template>
  <button ref="playBtn" @click="play()">🙉 {{text}}</button>
</template>

<script>
import * as Tone from 'tone';
import Piano from '@/assets/PianoSampler.js'

export default {
  name: "Play",
  props: {
    notes: {
      required: true
    },
    text: {
      default: "[R]eplay"
    }
  },
  created() {
    this.play();
    this.keyCode();
  },
  mounted() {

  },
  afterMount() {

  },
  beforeUpdate() {

  },
  methods: {
    play() {
      const sampler = new Tone.Sampler({
        ...Piano
      }).toDestination();

      Tone.loaded().then(() => {
        // melodik
        if (this.$store.state.Interval.intervalType === "melodic") {
          const now = Tone.now();
          console.log(`Tümü -> ${this.notes} / 0 -> ${this.notes[0]} / 1 -> ${this.notes[1]}`)
          sampler.triggerAttackRelease(this.notes[0], "2n", now)
          sampler.triggerAttackRelease(this.notes[1], "2n", now + 1)
        } else {
          sampler.triggerAttackRelease(this.notes, 2);
        }

        //armonik
        // sampler.triggerAttackRelease(this.notes, 1);
      })
    },
    keyCode() {
      let vm = this;
      window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }

        if (event.key === "R" || event.key === "r") {
          vm.$refs.playBtn.click();
        } else {
          return;
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true);
    },
  },
  watch: {
    notes() {
      // this.$parent.$on('replay', () => {
      //   this.play();
      // });
    }
  }
}
</script>

<style scoped>

</style>