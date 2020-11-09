<template>
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
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    value: {
      require: true,
    },
    id: {
      require: true,
    }
  }
}
</script>

<style scoped>

</style>