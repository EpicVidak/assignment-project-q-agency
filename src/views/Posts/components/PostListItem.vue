<template>
  <div class="post-wrap" @click="navigateTo('/post/' + post.id)">
    <div class="top">
      <img :src="getImageLink(post.id)" loading="lazy" alt="post-image" />
      <div class="title">
        {{ post.title | capitalize | punctuate }}
        <Author :author="post.author"/>
      </div>
    </div>
    <div class="bottom">
      <div class="content">
        {{ post.body | capitalize | punctuate }}
      </div>
    </div>
  </div>
</template>

<script>
import Author from "./Author.vue";
export default {
  components: {
    Author
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style scoped lang="scss">
.post-wrap {
  cursor: pointer;
  margin: 30px auto;
  width: 90%;
  height: fit-content;
  border-radius: 10px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 3px 9px rgba(175, 175, 175, 0.35);
  .top,
  .bottom {
    padding: 10px 5px;
    height: 50%;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    img {
      border-radius: 10px;
    }
    .title {
      position: relative;
      font-size: 1.5rem;
      text-align: left;
      font-weight: bold;
    }
  }
  .bottom {
    .content {
      font-size: 1.1rem;
      text-align: left;
    }
  }
}
</style>