<template>
  <div>
    <div class="flex justify-between items-center">
      <h1 class="text-4xl">Interval Training</h1>
      <div class="flex justify-between divide-x-2">
        <button
          @click="newInterval()"
          class="text-center bg-green-500 px-2 rounded hover:bg-green-400 px-4 mr-4"
          v-if="$store.state.Interval.start"
        >
          New Interval
        </button>
        <Start />
        <button
          @click="
            $store.state.Interval.showSettings = !$store.state.Interval
              .showSettings
          "
          class="text-center px-4"
        >
          Exercise Settings
        </button>
      </div>
    </div>
    <Settings :class="{ hidden: !$store.state.Interval.showSettings }" />

    <div class="flex flex-col">
      <div class="h-full my-10 w-1/2" v-if="!$store.state.Interval.start">
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
      <div v-else>
        <span>
          ({{ $store.state.Interval.firstNote }}) - ({{
            $store.state.Interval.secondNote
          }})</span
        >
        <b>Sonuç</b>
        {{ $store.state.Interval.result }}
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Range } from "@tonaljs/tonal";
import Start from "@/components/intervals/Start.vue";
import Settings from "@/components/intervals/Settings.vue";

export default {
  name: "Interval",
  created() {
    this.$store.commit("setScale", Range.chromatic(["C2", "C6"]));
  },
  methods: {
    newInterval() {
      this.$store.dispatch("newInterval");
    },
  },
  components: {
    Start,
    Settings,
  },
};
</script>

<style lang="scss">
input:checked + svg {
  display: block;
}
</style>