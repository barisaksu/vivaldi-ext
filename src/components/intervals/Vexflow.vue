<template>
  <div>
    <Play :notes="notes" v-show="false"/>
    <div id="boo" class="flex justify-center"></div>
  </div>
</template>

<script>
import Vex from "vexflow";
import Play from "@/components/Play.vue";

// const VF = Vex.Flow;
export default {
  props: {
    notes: {
      required: true
    }
  },
  methods: {
    draw() {
      let vf = new Vex.Flow.Factory({renderer: {elementId: "boo", width: 350, height: 150, align_center: true}});
      let score = vf.EasyScore();
      let system = vf.System();

      // en son harmonic olduğunda görünüm değiştirmeyi ve harmonicte nota ortalamaya bakıyorudum.
      // nota ortalama çok da önemli değil.
      // puan sistemini ve settings/cookie ayarlarını yap

      if (this.$store.state.Interval.intervalType === "harmonic") {
        system.addStave({
          voices: [score.voice(score.notes(`(${this.notes[0]} ${this.notes[1]})/1`))],
        }).addClef('treble');
      } else {
        system.addStave({
          // voices: [score.voice(score.notes("C5/w"))],
          voices: [score.voice(score.notes(`${this.notes[0]}/2, ${this.notes[1]}/2`))],
        }).addClef('treble');
      }


      // Draw it!
      vf.draw();
    },
  },
  mounted() {
    this.draw();
  },
  components: {
    Play
  }

};
</script>

<style lang="scss" scoped>
</style>