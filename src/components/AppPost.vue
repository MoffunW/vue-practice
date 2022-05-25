<template>
  <div class="post">
    <div class="post__img-wrapper">
      <img
        class="post__img"
        src="https://via.placeholder.com/650x250"
        alt="post"
      />
      <div class="post__img-overlay">
        <button class="post__img-read">Read article</button>
      </div>
    </div>
    <div class="post__title">
      {{ post.title ? post.title : "Post title here..." }}
    </div>
    <div class="post__subtitle">
      {{ post.text ? post.text : "Post text here..." }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object,
  },
};
</script>
<style lang="scss">
.post {
  position: relative;
  background: #fff;
  border-radius: 15px;
  height: 400px;
  width: 300px;
  padding: 15px;
  &__img {
    display: block;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: fill;

    &-wrapper {
      position: relative;
      margin-bottom: 25px;
      &:hover {
        .post__img-overlay {
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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: wrap;
    overflow: hidden;
    // text-align: left;
  }
  &__subtitle {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    // text-align: left;
  }
}
</style>
