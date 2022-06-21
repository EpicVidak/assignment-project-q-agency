<template>
  <div class="input-wrap">
    <input
      class="text-input"
      :placeholder="placeholder"
      type="text"
      v-model="text"
      @input="emitChange"
    />
    <span class="material-icons" v-if="text === ''"> {{icon}} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      timeoutInt: null,
    };
  },
  props: {
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  methods: {
    emitChange() {
      // throttle to prevent too many events on fast typing
      if (this.timeoutInt) clearTimeout(this.timeoutInt);
      this.timeoutInt = setTimeout(() => {
        this.$emit("change", this.text);
      }, 500);
    },
  },
};
</script>

<style scoped lang="scss">
.input-wrap {
  position: relative;
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  .text-input {
    width: 100%;
    height: 25px;
    border-radius: 15px;
    padding: 0 10px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .material-icons {
    position: absolute;
    right: 5px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 22px;
  }
}
</style>