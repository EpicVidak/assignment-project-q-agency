<template>
  <div class="author" @mousemove.capture.prevent="extendShow">
    {{ $t("authoredBy") }} {{ author.name }}
    <transition name="fade-top"> 
      <div
        v-if="showMoreInfo"
        class="expendedInfo"
        @mousemove.capture.prevent="extendShow"
        @click.capture.stop
      >
        <div class="triangle"></div>
        <AuthorItem :title="$t('email')" :content="author.email" :href="'mailto:'+author.email"/>
        <AuthorItem :title="$t('phone')" :content="author.phone" :href="'tel:'+author.phone" />
        <AuthorItem :title="$t('website')" :content="author.website" :href="'https://'+author.website" tblank />
        <AuthorItem :title="$t('address')" :content="author.address.city + ', ' + author.address.street" :href="'https://maps.google.com/?q='+author.address.city+','+author.address.street" tblank />
  
      </div>
    </transition>  
  </div>
</template>

<script>
import AuthorItem from './AuthorItem.vue';
export default {
  components: {
    AuthorItem
  },
  props: ["author"],
  data() {
    return {
      lastMoveEvent: null,
      closeTimeout: null,
      showMoreInfo: false,
    };
  },
  methods: {
    extendShow() {
      // throttling logic to not spam timeouts
      if (this.lastMoveEvent && Date.now() - this.lastMoveEvent < 100) return;
      this.lastMoveEvent = Date.now();

      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
      this.showMoreInfo = true;
      this.closeTimeout = setTimeout(() => {
        this.showMoreInfo = false;
      }, 700);
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
  }
}
</style>