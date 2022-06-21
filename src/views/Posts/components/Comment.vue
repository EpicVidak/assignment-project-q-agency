<template>
  <div class="comment-wrap">
    <div class="posted-by"> {{$t('postedBy')}} <a :href="'mailto:'+comment.email">{{comment.email}}</a> </div>
    <div class="comment-title">{{comment.name | capitalize}}</div>
    <div class="comment-body">{{comment.body | capitalize | punctuate}}</div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.comment-wrap {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.267);
  border-radius: 10px;
  width: 60%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .posted-by {
    font-size: 0.7rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.486);
  }
  .comment-title, .comment-body {
    width: 100%;
    text-align: left;
  }
  .comment-title {
    margin: 5px 0 10px;
    font-weight: 700;
  }
}

</style>