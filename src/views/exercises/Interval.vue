<template>
  <div>

    <Settings :class="{ hidden: !$store.state.Interval.showSettings }"/>

    <div class="flex flex-col items-center justify-between lg:flex-row">
      <h1 class="text-4xl">Interval Training</h1>
      <div class="justify-between hidden divide-x-2 lg:flex">
        <button
            ref="newIntervalBtn"
            @click="newInterval()"
            class="px-2 px-4 mr-4 text-center text-green-900 bg-green-500 rounded hover:bg-green-400"
            v-if="$store.state.Interval.start">[N]ew Interval
        </button>
        <StartButton/>
        <button @click="settings()" class="px-4 text-center focus:outline-none">
          Exercise Settings
        </button>
      </div>
    </div>


    <div class="flex flex-row lg:flex-col justify-center">
      <div class="w-full my-5 lg:w-1/2" v-if="!$store.state.Interval.start">
        <p>
          With interval exercise, you can improve your sensation and gain
          practice.
        </p>
        <p class="my-4">
          If you're ready, click the start button on the right.
        </p>
        <p>
          Are you having a problem?
          <a href="mailto:vivaldi@barisaksu.com" class="underline"
          >Let me know that</a
          >
        </p>
        <StartButton class="w-full mt-4 p-4 lg:hidden"/>
      </div>
      <div class="w-full" v-else>
        <div class="items-center justify-between hidden h-10 p-4 text-center bg-white rounded shadow lg:flex">
          <Play :notes="notes"/>
          <div class="flex" v-if="isCheck">
            <span class="font-bold text-green-500" v-if="isCorrect">Wow, you are so good. Lets continue.</span>
            <span class="font-bold text-red-500" v-else>No worries, try again.</span>
          </div>
        </div>
        <div class="lg:hidden">
          <div class="flex justify-center" v-if="isCheck">
          <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-500"
                v-if="isCorrect">Wow, you are so good. Lets continue.</span>
            <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500" v-else>No worries, try again.</span>
          </div>
          <!--bknz: işini bilmeyen çavuşlar döner götünü avuçlar-->
          <div class="h-6" v-else></div>
        </div>
        <Vexflow :class="{blur: !isCorrect}" :notes="notes" v-if="renderComponent"/>
        <div class="flex flex-col justify-center my-4 space-x-3 space-y-3">
          <div class="flex justify-center my-4 space-x-3">
            <button @click="check(interval)" v-for="interval in $store.state.Interval.selectedIntervals" :key="interval"
                    :disabled="isCorrect"
                    :class="{'bg-green-400 text-green-900': isCorrect && highlightBtn === interval, 'bg-gray-200 hover:bg-red-200 opacity-50 cursor-not-allowed': isCheck && isCorrect && highlightBtn !== interval }"
                    class="px-4 py-2 text-gray-700 bg-white border-t border-b-2 border-l-2 border-r border-gray-800 rounded shadow hover:bg-green-200 focus:outline-none">
              {{ interval }}
            </button>
          </div>
        </div>

      </div>
      <div class="flex fixed bottom-0 lg:hidden bg-gradient-to-r from-gray-200 to-gray-400" v-if="$store.state.Interval.start">
        <Play class="p-4" text="Replay"
              :notes="notes"/>
        <button
            ref="newIntervalBtn"
            @click="newInterval()"
            class="p-4 text-center text-green-900   "
            v-if="$store.state.Interval.start">New Interval
        </button>
        <button @click="settings()"
                class=" p-4 text-center focus:outline-none ">
          Exercise Settings
        </button>
      </div>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {Range} from "@tonaljs/tonal";
import StartButton from "@/components/intervals/StartButton.vue";
import Settings from "@/components/intervals/Settings.vue";
import Vexflow from "@/components/intervals/Vexflow.vue";
import Play from "@/components/Play";

export default {
  name: "Interval",
  title: "Interval Training | Vivaldi",
  data() {
    return {
      isStart: this.$store.state.Interval.start,
      renderComponent: true,
      isCheck: false,
      isCorrect: null,
      highlightBtn: null,
    }
  },
  created() {
    this.$store.commit("setScale", Range.chromatic(["C3", "C5"]));
    this.newInterval();

    let vm = this;
    window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      if (event.key === "N" || event.key === "n") {
        vm.$refs.newIntervalBtn.click();
      } else {
        return;
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    }, true);
  },
  destroyed() {

    // return this.$store.commit("start") ?? this.$store.state.Interval.start;
    if (this.$store.state.Interval.start) {
      this.$store.commit("start");
    }
  },
  computed: {
    notes() {
      // return `(${this.$store.state.Interval.firstNote} ${this.$store.state.Interval.secondNote})/1`;
      return [this.$store.state.Interval.firstNote, this.$store.state.Interval.secondNote];
    }
  },
  methods: {
    newInterval() {
      this.isCheck = false;
      this.isCorrect = false;
      this.$store.dispatch("newInterval");
    },
    forceRerender() {
      // Remove component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
    check: function (value) {
      let changeIntervalName = this.$store.state.Interval.result[1] + this.$store.state.Interval.result[0];

      this.isCheck = true;

      this.isCorrect = changeIntervalName === value;
      if (!this.isCorrect) {
        return;
      }
      this.highlightBtn = value
    },
    rePlay() {
      this.$emit("replay")
    },
    settings() {
      this.$store.state.Interval.showSettings = !this.$store.state.Interval.showSettings
    }
  },
  components: {
    StartButton,
    Settings,
    Vexflow,
    Play
  },
  watch: {
    notes() {
      this.forceRerender();
    },
    isStart() {
      this.newInterval();
    }
  }
};
</script>

<style lang="scss">
input:checked + svg {
  display: block;
}
</style>