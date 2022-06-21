<template>
  <div id="app">
    <navbar @searchData='handleSearchData'/>
    <transition name="page">
      <router-view class="page" :searchData="searchData"></router-view>
    </transition>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
export default {
  name: 'App',
  components: {
    navbar
  },
  data() {
    return {
      searchData: '',
    };
  },
  methods: {
    handleSearchData(data) {
      this.searchData = data;
    },
  }
}
</script>
<style lang="scss">
body * {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
.page {
  height: calc(100vh - #{$nav-height});
}
</style>
