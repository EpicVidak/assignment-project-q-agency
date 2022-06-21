<template>
  <div class="posts-page-wrap">
    <PostListItem v-for="post in filteredPosts" :key="post.id" :post="post" />
    <button v-if="shouldShowMore" class="show-more" @click="showMore()">
      {{ $t("showMorePosts") }}
    </button>
    <div v-if="filteredPosts.length === 0" class="no-posts">
      {{ $t("noPosts") }}
    </div>
  </div>
</template>

<script>
import api from "@/javascript/api";
import PostListItem from "./components/PostListItem.vue";
export default {
  components: { PostListItem },
  data() {
    return {
      posts: [],
      // simulating pagination since JSONPlaceholder has no API for it (or at least i could not find it)
      numberOfPosts: 20,
    };
  },
  props: {
    searchData: {
      type: String,
      default: "",
    },
  },
  computed: {
    filteredPosts() {
      if (this.posts.length === 0) return [];
      let posts = this.posts
        // filter posts by input data
        .filter((post) => {
          return post.title
            .toLowerCase()
            .includes(this.searchData.toLowerCase());
        })
        // simulate pagination
        .slice(0, this.numberOfPosts);
      console.log("Filtered and paginated posts: ", posts.length);
      return posts;
    },
    shouldShowMore() {
      // in case of production app, this would be detirmened from last pagination fetch request
      // instead of "manually" determined here
      return this.numberOfPosts < 100  && this.filteredPosts.length === this.numberOfPosts;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      let [res, err] = await this.callApi(api.getPosts);
      if (err) return;
      this.posts = res.data;
    },
    async showMore() {
      if (this.numberOfPosts < 100) this.numberOfPosts += 10;
    },
  },
};
</script>

<style scoped lang="scss">
.posts-page-wrap {
  overflow: auto;
  background-color: rgba(217, 217, 217, 0.266);
  .show-more {
    display: block;
    margin: 20px auto;
    width: 30%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 3px 9px rgba(175, 175, 175, 0.35);
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(51, 51, 51);
    cursor: pointer;
  }
  .no-posts {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
  }
}
</style>