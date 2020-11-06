<template>
  <router-link
    :to="`/exercises/${exercise.slug}`"
    tag="div"
    class="flex bg-white shadow hover:shadow-lg w-1/2 m-4 p-4 rounded-lg cursor-pointer hover:bg-opacity-75 transition-all duration-500 ease-in-out"
  >
    <span class="mt-1"><Interval></Interval></span>
    <div class="flex flex-col ml-2">
      <h2 class="text-xl font-bold border-b">{{ exercise.name }}</h2>
      <span>{{ exercise.description }}</span>
    </div>
  </router-link>
</template>

<script>
import Interval from "@/components/icons/interval.vue";
export default {
  props: {
    exercise: {
      required: true,
    },
  },
  components: {
    Interval,
  },
};
</script>

<style lang="scss" scoped>
</style>