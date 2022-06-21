<template>
  <div class="author" @mousemove.capture.prevent="handleMouseOverName">
    {{ $t("authoredBy") }} {{ author.name }}
    <transition name="fade-top"> 
      <div
        v-if="showMoreInfo"
        class="expendedInfo"
        @mousemove.capture.prevent="handleMouseOverInfo"
        @click.capture.stop
      >
        <div class="triangle"></div>
        <div class="info">
          <div class="info-title">{{ $t("email") }}</div>
          <a class="info-content" :href="'mailto:'+author.email">{{ author.email }}</a>
        </div>
  
        <div class="info">
          <div class="info-title">{{ $t("phone") }}</div>
          <a class="info-content" :href="'tel:'+author.phone">{{ author.phone }}</a>
        </div>
  
        <div class="info">
          <div class="info-title">{{ $t("website") }}</div>
          <a class="info-content" :href="'https://'+author.website" target="_blank">{{ author.website }}</a>
        </div>
  
        <div class="info">
          <div class="info-title">{{ $t("address") }}</div>
          <a class="info-content" target="_blank" :href="'https://maps.google.com/?q='+author.address.city+','+author.address.street"> {{ author.address.city }} {{ ", " }} {{ author.address.street }} </a>  
        </div>
      </div>
    </transition>  
  </div>
</template>

<script>
export default {
  props: ["author"],
  data() {
    return {
      lastMoveEvent: null,
      closeTimeout: null,
      showMoreInfo: false,
    };
  },
  mounted() {
    console.log(this.author);
  },
  methods: {
    extendShow() {
      if (this.lastMoveEvent && Date.now() - this.lastMoveEvent < 100) return;

      this.lastMoveEvent = Date.now();

      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
      this.showMoreInfo = true;
      this.closeTimeout = setTimeout(() => {
        this.showMoreInfo = false;
      }, 500);
    },

    handleMouseOverName() {
      this.extendShow();
    },
    handleMouseOverInfo() {
      this.extendShow();
    },
  },
};
</script>

<style scoped lang="scss">
.fade-top-enter-active,
.fade-top-leave-active {
  transition: all 0.2s;
}
.fade-top-enter,
.fade-top-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.author {
  position: absolute;
  top: -20px;
  font-size: 0.7rem;
  color: rgba(93, 93, 93, 0.502);

  .expendedInfo {
    position: absolute;
    z-index: 9999;
    top: 30px;
    padding: 0 20px;
    width: fit-content;
    background-color: #fff;
    box-shadow: 0px 3px 9px rgba(175, 175, 175, 0.35);
    // enable selection of text
    user-select: text;
    .triangle{
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translate(-50%);
      width: 0;
      height: 0;
      border-width: 0 10px 15px 10px;
      border-color: transparent transparent #a9a9a9 transparent;
      border-style: solid;
    }
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
  }
}
</style>