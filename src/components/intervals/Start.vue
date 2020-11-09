<template>
  <div>
    <button
      @click="start()"
      class="text-center bg-yellow-500  text-yellow-900 px-2 rounded hover:bg-yellow-400 px-4 mr-4"
      v-if="!$store.state.Interval.start"
    >
      Start
    </button>
    <button
      @click="reset()"
      class="text-center bg-red-500 text-red-900 px-2 rounded hover:bg-red-400 px-4 mr-4"
      v-else
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$store.commit("start");
    },
    reset(){
      this.$store.commit("reset")
    }
  },
};
</script>

<style lang="scss" scoped>
</style>