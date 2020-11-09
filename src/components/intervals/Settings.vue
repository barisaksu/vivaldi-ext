<template>
  <div class="flex flex-col bg-white shadow border p-2 mb-4 justify-between divide-x absolute w-2/3 z-50">
    <div class="flex">
      <div class="flex flex-col w-1/2 pr-2"><h2 class="border-b text-xl font-bold">Intervals</h2>
        <div v-for="(interval, key) in $store.state.Interval.intervals" :key="key">
          <label class="flex justify-start items-start my-2">
            <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
            >
              <input
                  type="checkbox"
                  class="opacity-0 absolute"
                  v-model="$store.state.Interval.selectedIntervals"
                  :value="key"
                  :id="key"
              />
              <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
              </svg>
            </div>
            <div class="select-none">{{ key }} ({{ interval.name }})</div>
          </label>
        </div>
      </div>
      <div class="w-1/2 pl-2">
        <h2 class="border-b text-xl font-bold">Interval Type</h2>
      </div>
      <div class="w-1/2 pl-2">
        <h2 class="border-b text-xl font-bold">Options </h2>
        <div class="border p-2 my-2 space-y-2">
          <RadioButton name="intervalType" checked="checked" value="melodic" text="Melodic" @selected="yazdir"/>
          <RadioButton name="intervalType" value="harmonic" text="Harmonic" @selected="yazdir"/>
        </div>

      </div>
    </div>

    <div class="flex justify-end space-x-2">
      <button class="relative right-0 bg-red-300 text-red-900 px-4 rounded" @click="
            $store.state.Interval.showSettings = !$store.state.Interval
              .showSettings
          ">Cancel
      </button>
      <button class="relative right-0 bg-blue-300 text-blue-900 px-4 rounded" @click="
            $store.state.Interval.showSettings = !$store.state.Interval
              .showSettings
          ">Save
      </button>
    </div>

  </div>
</template>

<script>
import RadioButton from "@/components/buttons/RadioButton";

export default {
  data() {
    return {
      type: 1
    }
  },
  methods: {
    setType() {
      this.$store.commit('setIntervalType', 'melodic');
    },
    yazdir(value) {
      this.$store.commit("setIntervalType", value)
    }
  },
  components: {
    RadioButton
  },
};
</script>

<style lang="sass" scoped>
</style>