<template>
  <div class="absolute z-50 flex flex-col justify-between lg:w-2/3 p-2 mb-4 bg-white border divide-x shadow">
    <div class="flex">
      <div class="flex flex-col w-1/2 pr-2"><h2 class="text-xl font-bold border-b">Intervals</h2>
        <div v-for="(interval, key) in $store.state.Interval.intervals" :key="key">
          <label class="flex items-start justify-start my-2">
            <div
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-white border-2 border-gray-400 rounded focus-within:border-blue-500"
            >
              <input
                  type="checkbox"
                  class="absolute opacity-0"
                  v-model="$store.state.Interval.selectedIntervals"
                  :value="key"
                  :id="key"
              />
              <svg
                  class="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
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
        <h2 class="text-xl font-bold border-b">Interval Type</h2>
        <div class="my-2 space-y-2">
          <RadioButton name="intervalType" checked="checked" value="melodic" text="Melodic" @selected="yazdir"/>
          <RadioButton name="intervalType" value="harmonic" text="Harmonic" @selected="yazdir"/>
        </div>
      </div>
      <div class="w-1/2 pl-2">
        <h2 class="text-xl font-bold border-b">Options </h2>
        <div class="my-2 space-y-2">
          <span>...</span>
        </div>

      </div>
    </div>

    <div class="flex justify-end space-x-2">
      <button class="relative right-0 px-4 text-blue-900 bg-blue-300 rounded hover:bg-blue-500" @click="
            $store.state.Interval.showSettings = !$store.state.Interval
              .showSettings
          ">OK
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