<template>
  <div class="view-post-wrap">
    <div class="post-head" v-if="post">
      <img class="image" :src="getImageLink(postId, 250)" alt="post-image">
      <div class="post-title"> 
        {{post.title | capitalize}} 
        <Author v-if="author" :author="author" />
      </div>
    </div>
    <div class="post-body" v-if="post">
      {{post.body | capitalize | punctuate}}
    </div>
    <div class="post-comments" v-if="comments.length > 0">
      <h2>{{$t('commentSection')}}</h2>
      <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </div>
</template>

<script>
import api from "@/javascript/api"
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";
export default {
  components: {
    Author,
    Comment
  },
  data() {
    return {
      post: null,
      author: null,
      comments: []
    }
  },
  computed: {
    postId () {
      let id = this.$router.currentRoute?.params?.id 
      console.log('Post ID: ', id);
      return id 
    }
  },
  mounted () {
    this.fetchAll()
  },
  methods: {
    async fetchAll () {
      let userId = await this.fetchPost()
      await this.fetchAuthor(userId)
      await this.fetchComments()
    },
    async fetchPost () {
      let [res, err] = await this.callApi(api.getPost, [this.postId])
      if (err) return;
      console.log("Post: ", res.data);
      this.post = res.data
      return res.data.userId
    },
    async fetchAuthor (uId) {
      let [res, err] = await this.callApi(api.getUser, [uId])
      if (err) return;
      console.log("Author: ", res.data);
      this.author = res.data
      return res.data
    },
    async fetchComments () {
      let [res, err] = await this.callApi(api.getComments, [this.postId])
      if (err) return;
      console.log("Comments: ", res.data);
      this.comments = res.data
      return res.data
    }
  }

}
</script>

<style scoped lang="scss">
.view-post-wrap {
  background-color: rgba(217, 217, 217, 0.266);
  overflow: auto;

  .post-head {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .image {
      border-radius: 10px;
    }
    .post-title {
      position: relative;
      font-size: 1.4rem;
      font-weight: bold;
      margin-left: 10px;
      text-align: left;
    }
  }
  .post-body {
    padding: 20px;
    font-size: 1.2rem;
    text-align: left;
  }
}
</style>