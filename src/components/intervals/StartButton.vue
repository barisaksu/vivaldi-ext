<template>
  <button
      @click="start()"
      class="text-center bg-yellow-500  text-yellow-900 px-2 rounded hover:bg-yellow-400 px-4 mr-4"
      v-if="!$store.state.Interval.start"
  >
    Start
  </button>
</template>

<script>
export default {
  methods: {
    start() {
      this.$store.commit("start");
    },
    // reset(){
    //   this.$store.commit("reset")
    // }
  },
};
</script>

<style lang="scss" scoped>
</style>