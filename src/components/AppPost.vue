<template>
  <div class="post">
    <div class="post__image-wrapper">
      <div class="post__image-placeholder">
        <img v-if="imageUrl" class="post__image" :src="imageUrl" alt="post" />
        <div v-else class="post__image-container"></div>
      </div>
      <div class="post__image-overlay">
        <button class="post__image-read">Read article</button>
      </div>
    </div>
    <div class="post__title">
      {{ post.title ? post.title : "Post Title here..." }}
    </div>
    <div class="post__subtitle">
      {{ post.text ? post.text : "Post Text here..." }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object,
    imageUrl: String,
  },
};
</script>
<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
  border-radius: 15px;
  height: 400px;
  width: 300px;
  padding: 15px;
  &__image {
    display: block;
    border-radius: 15px;
    max-width: 100%;
    max-height: 100%;
    object-fit: fill;

    &-placeholder {
      height: 150px;
    }

    &-wrapper {
      position: relative;
      margin-bottom: 25px;
      &:hover {
        .post__image-overlay {
          display: block;
          background: rgba(44, 44, 44, 0.5);
        }
      }
    }

    &-overlay {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(44, 44, 44, 0.2);
      transition: 0.3s linear all;
      border-radius: 15px;
      z-index: 10;
      // transition: all 0.4s linear;
    }
    &-read {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px 15px;
      border: none;
      border-radius: 6px;
      background: #0f1516;
      color: #fff;
      cursor: pointer;
    }
  }
  &__title {
    margin-bottom: 15px;
    font-size: 27px;
    font-weight: 500;
  }
  &__subtitle {
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
  }
}
</style>
