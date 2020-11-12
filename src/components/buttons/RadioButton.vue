<template>
  <div class="flex items-center mr-4">
    <input :id="id" type="radio" :checked="checked" :value="text" :name="name" v-model="radioButtonValue"
           class="hidden"/>

    <label :for="id" class="flex items-center cursor-pointer">
      <span class="inline-block w-4 h-4 mr-1 border rounded-full border-grey"></span>
      {{ text }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: ['name', 'text', 'value', 'checked'],
  data() {
    return {
      id: "radio-id-" + this._uid,
      // isChecked: false
    }
  },
  computed: {
    radioButtonValue: {
      get: function () {
        return this.value
      },
      set: function () {
        this.$emit("selected", this.value)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
input[type="radio"] + label span {
  transition: background .2s,
  transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  background-color: #48bb78;
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: #48bb78; //bg-blue
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #48bb78; //text-blue
}

//input[type="radio"] + label {
//  color: #000000; //text-blue
//}
</style>