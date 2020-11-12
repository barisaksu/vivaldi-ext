<template>
  <div class="flex flex-col-reverse lg:flex-row">

    <Exercises class="w-full mt-4 lg:mt-0 lg:w-1/2"></Exercises>
    <h2 class="text-xl border-b font-bold mt-10 lg:hidden">Exercises</h2>
    <div class="flex flex-col lg:px-4 w-full lg:w-1/2">
      <div class="flex items-center space-x-3 mb-4 w-full">
        <h3 class="text-xl font-bold">
          About Vivaldi</h3>
      </div>
      <div class="space-y-4">
        <p>
          Vivaldi is a completely open source and free musical ear enhancement application. </p>
        <p>Vivaldi is still in development, so you are likely to encounter some errors while using the app. If you come
          across an error, please let me know.</p>

        <p><a href="mailto:baris@barisaksu.com" class="underline">Contact me</a></p>
      </div>

    </div>
  </div>
</template>

<script>
import Exercises from "@/components/Exercises.vue";

export default {
  name: "Home",
  title: "Vivaldi | Welcome",
  components: {
    Exercises,
  },
};
</script>
