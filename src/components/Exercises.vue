<template>
  <div class="flex flex-col space-y-2 items-center">
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
              "With interval exercise, you can improve your sensation and gain practice.",
          slug: "interval",
          status: true
        },
        {
          name: "Rhythm Training",
          description:
              "Coming Soon",
          slug: "rhythm",
          status: false
        },
        {
          name: "Related Minors",
          description:
              "Coming Soon",
          slug: "relatedminors",
          status: false
        },
      ],
    };
  },
  components: {
    ExerciseCard,
  },
};
</script>
