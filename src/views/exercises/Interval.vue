<template>
  <div>
    <Settings :class="{ hidden: !$store.state.Interval.showSettings }"/>
    <div class="flex items-center justify-between">
      <h1 class="text-4xl">Interval Training</h1>
      <div class="flex justify-between divide-x-2">
        <button
            @click="newInterval()"
            class="px-2 px-4 mr-4 text-center text-green-900 bg-green-500 rounded hover:bg-green-400"
            v-if="$store.state.Interval.start"
        >
          New Interval
        </button>
        <Start/>
        <button
            @click="
            $store.state.Interval.showSettings = !$store.state.Interval
              .showSettings
          "
            class="px-4 text-center"
        >
          Exercise Settings
        </button>
      </div>
    </div>


    <div class="flex flex-col">
      <div class="w-1/2 my-10" v-if="!$store.state.Interval.start">
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
      </div>
      <div class="mb-auto" v-else>
        <div class="flex items-center justify-between h-10 p-4 text-center bg-white rounded shadow">
          <Play :notes="notalar"/>
          <div class="flex" v-if="isCheck">
            <span class="font-bold text-green-500" v-if="isCorrect">Wow, you are so good. Lets continue.</span>
            <span class="font-bold text-red-500" v-else>No worries, try again.</span>
          </div>
        </div>
<!--        <button>Show Me</button>-->
        <Vexflow :class="{blur: !isCorrect}" :notes="notalar" v-if="renderComponent"/>
        <div class="flex justify-center my-4 space-x-3">
          <button @click="check(interval)" v-for="interval in $store.state.Interval.selectedIntervals" :key="interval"
                  :disabled="isCorrect"
                  :class="{'bg-green-400 text-green-900': isCorrect && highlightBtn === interval, 'bg-gray-200 hover:bg-red-200 opacity-50 cursor-not-allowed': isCheck && isCorrect && highlightBtn !== interval }"
                  class="px-4 py-2 text-gray-700 bg-white border-t border-b-2 border-l-2 border-r border-gray-800 rounded shadow hover:bg-green-200 focus:outline-none">{{ interval }}
          </button>
        </div>
<!--        <span>-->
<!--          ({{ $store.state.Interval.firstNote }}) - ({{-->
<!--            $store.state.Interval.secondNote-->
<!--          }})</span-->
<!--        >-->
<!--        <b>Sonuç</b>-->
<!--        {{ $store.state.Interval.result }}-->

      </div>

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {Range} from "@tonaljs/tonal";
import Start from "@/components/intervals/Start.vue";
import Settings from "@/components/intervals/Settings.vue";
import Vexflow from "@/components/intervals/Vexflow.vue";
import Play from "@/components/Play.vue";

export default {
  name: "Interval",
  data() {
    return {
      renderComponent: true,
      isCheck: false,
      isCorrect: null,
      highlightBtn: null,
    }
  },
  created() {
    this.$store.commit("setScale", Range.chromatic(["C3", "C5"]));
  },
  computed: {
    notalar() {
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
      // Remove my-component from the DOM
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
    rePlay(){
      this.$emit("replay")
    },
    yas(){
      console.log("dene");
    }
  },
  components: {
    Start,
    Settings,
    Vexflow,
    Play
  },
  watch: {
    notalar() {
      this.forceRerender();
    }
  }
};
</script>

<style lang="scss">
input:checked + svg {
  display: block;
}
</style>