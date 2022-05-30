<template>
  <div class="article">
    <div class="article__container">
      <div v-if="post.imageUrl" class="article__image">
        <img :src="post.imageUrl" alt="article" />
      </div>
      <h2 class="article__title">{{ post.title }}</h2>
      <div class="article__text">{{ post.text }}</div>
    </div>
  </div>
</template>
<script>
// import AppPost from "@/components/AppPost.vue";
export default {
  // components: { AppPost },
  data() {
    return {};
  },
  computed: {
    post() {
      return this.$store.getters.POST(this.$route.params.id);
    },
  },
};
</script>
<style lang="scss">
.article {
  display: flex;
  justify-content: center;
  &__container {
    width: 760px;
    background: rgb(235, 229, 229);
    padding-bottom: 40px;
    border-radius: 0 0 30px 30px;
  }
  &__image {
    height: 250px;
    width: 100%;
    margin-bottom: 40px;
    & > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 30px;
    font-weight: 600;
    margin: 30px 0;
    text-align: left;
    padding: 0 20px;
  }
  &__text {
    text-align: left;
    line-height: 30px;
    padding: 0 20px;
  }
}
</style>
