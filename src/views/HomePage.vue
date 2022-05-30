<template>
  <div class="posts content">
    <h2 class="content__title">Home page content</h2>
    <div class="posts__container">
      <AppPost :post="post" :key="post.id" v-for="post of posts" />
    </div>
  </div>
</template>
<script>
import AppPost from "@/components/AppPost.vue";
export default {
  components: { AppPost },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
<style lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 40px;
  }
}
</style>
