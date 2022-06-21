<template>
  <div class="info">
    <div class="info-title">{{ title }}</div>
    <a
      v-if="href"
      class="info-content"
      :href="href"
      :target="tblank ? '_blank' : '_self'"
      >{{ content }}</a
    >
    <div v-else class="info-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tblank: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.info {
  margin: 20px 0;
  .info-title {
    font-weight: bold;
    font-size: 0.8rem;
  }
  .info-content {
    font-size: 0.7rem;
  }
}
</style>