<template>
  <div class="flex flex-1 flex-col items-center">
    <ExerciseCard
      v-for="(exercise, index) in exercises"
      :key="index"
      :exercise="exercise"
    ></ExerciseCard>
  </div>
</template>

<script>
import ExerciseCard from "@/components/ExerciseCard.vue";
export default {
  name: "Exercises",
  data() {
    return {
      exercises: [
        {
          name: "Interval Training",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          slug: "interval",
        },
        {
          name: "Rhythm Training",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          slug: "rhythm",
        },
      ],
    };
  },
  components: {
    ExerciseCard,
  },
};
</script>
