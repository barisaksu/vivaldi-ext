import { Note, Interval } from "@tonaljs/tonal";

export default {
  state: {
    start: false,
    showSettings: false,
    scale: [],
    selectedIntervals: ["m2", "M3", "P5"],
    intervals: {
      P1: { name: "Unison" },
      m2: { name: "Minor 2nd" },
      M2: { name: "Major 2nd" },
      m3: { name: "Minor 3rd" },
      M3: { name: "Major 3rd" },
      P4: { name: "Perfect 4th" },
      P5: { name: "Perfect 5th" },
      m6: { name: "Minor 6th" },
      M6: { name: "Major 6th" },
      m7: { name: "Minor 7th" },
      M7: { name: "Major 7th" },
    },
    firstNote: "C4",
    secondNote: "D4",
    result: null,
  },
  getters: {
    randomNote(state) {
      return state.scale[Math.floor(Math.random() * state.scale.length)];
    },
  },
  mutations: {
    start(state) {
      state.start = !state.start;
    },
    setScale(state, payload) {
      state.scale = payload;
    },
    setFirstNote(state, payload) {
      state.firstNote = payload;
    },
    setSecondNote(state, payload) {
      state.secondNote = payload;
    },
    setResult(state) {
      state.result = Interval.distance(state.firstNote, state.secondNote);
    },
  },
  actions: {
    newInterval(context) {
      console.log(context.getters["randomNote"]);
      // set random first note use by scale
      context.commit(
        "setFirstNote",
        context.state.scale[
          Math.floor(Math.random() * context.state.scale.length)
        ]
      );

      // generate second note
      context.commit(
        "setSecondNote",
        Note.transpose(
          context.state.firstNote,
          context.state.selectedIntervals[
            Math.floor(Math.random() * context.state.selectedIntervals.length)
          ]
        )
      );

      // set result
      context.commit("setResult");
    },
  },
};
