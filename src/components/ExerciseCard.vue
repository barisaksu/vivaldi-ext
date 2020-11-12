<template>
  <router-link
      v-if="exercise.status"
      :to="`/exercises/${exercise.slug}`"
      tag="a" :class="{'': !exercise.status}"
      class="flex w-full p-4 transition-all duration-500 ease-in-out bg-white rounded shadow cursor-pointer hover:shadow-lg hover:bg-opacity-75">
    <span class="mt-1"><component class="w-10" :is="exercise.slug"></component></span>
    <div class="flex flex-col ml-2">
      <h2 class="text-xl text-black border-b">{{ exercise.name }}</h2>
      <span class="text-gray-800">{{ exercise.description }}</span>
    </div>
  </router-link>

  <div
      class="flex w-full p-4 bg-gray-400 bg-opacity-25 rounded cursor-default"
      v-else>
    <span class="mt-1">
      <component class="w-10" :is="exercise.slug"></component>
    </span>
    <div class="flex flex-col ml-2">
      <h2 class="text-xl text-black border-b">{{ exercise.name }}</h2>
      <span class="text-gray-800">{{ exercise.description }}</span>
    </div>
  </div>
</template>

<script>
import Interval from "@/components/icons/Interval.vue";
import Rhythm from "@/components/icons/Rhythm.vue";
import Relatedminors from "@/components/icons/RelatedMinors.vue";

export default {
  props: {
    exercise: {
      required: true,
    },
  },
  computed: {
  },
  components: {
    Interval,
    Rhythm,
    Relatedminors
  },
};
</script>

<style lang="scss" scoped>
</style>