<template>
  <div class="nav-inner-wrap">
    <div class="filler"></div>
    <nav class="nav-wrap">
      <div class="name">{{ $t("name") }}</div>
      <transition name="fade">
        <textInput
          v-if="isOnPost"
          :class="{ removed: !isOnPost }"
          :placeholder="$t('searchPost')"
          icon="search"
          @change="$emit('searchData', $event)"
        />
      </transition>
      <div class="links">
        <router-link to="/" class="link">{{ $t("homePage") }}</router-link>
        <router-link to="/posts" class="link">{{ $t("postPage") }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import textInput from "@/components/textInput.vue";

export default {
  components: {
    textInput,
  },
  data() {
    return {
      name: "Vidak Kozomara",
      isOnPost: false,
    };
  },
  watch: {
    // check if the current route is the post page
    $route: function (to) {
      this.checkPath(to);
    },
    // reset search value when leaving post page
    isOnPost: function () {
      this.$emit("searchData", "");
    },
  },
  mounted() {
    this.checkPath(this.$route);
  },
  methods: {
    checkPath(to) {
      this.isOnPost = to.path === "/posts";
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.nav-inner-wrap {
  position: relative;
  width: 100%;
  height: $nav-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .filler {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $nav-height;
    background-color: #fff;
  }
}
.nav-wrap {
  position: fixed;
  height: $nav-height;
  background-color: #2c3e50;
  color: #fff;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .links {
    display: flex;
    align-items: center;
    .link {
      color: #fff;
      font-size: 0.9rem;
      font-weight: bold;
      padding: 0 10px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: rgb(157, 157, 157);
      }
    }
  }
}
</style>