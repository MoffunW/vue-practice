<template>
  <div class="post">
    <div v-if="post.imageUrl" class="post__image-wrapper">
      <div class="post__image-placeholder">
        <div class="post__imagee">
          <img class="post__image" :src="post.imageUrl" alt="post" />
          <div class="post__image-overlay">
            <router-link :to="'article/' + post.id" class="post__image-read"
              >Read article</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else class="post__no-image">
      <router-link :to="'article/' + post.id" class="post__no-image__link"
        >Read article</router-link
      >
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
  },
  methods: {
    openArticle() {},
  },
};
</script>
<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  background: #fff;
  border-radius: 15px;
  max-height: 480px;
  min-height: 200px;
  width: 300px;
  padding: 15px 15px 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    .post__no-image {
      display: flex;
    }
  }
  &__image {
    display: block;
    border-radius: 15px;
    width: 100%;
    max-height: 160px;
    object-fit: fill;

    &-placeholder {
      // height: 150px;
    }
    &-container {
      background: red;
    }

    &-wrapper {
      position: relative;
      max-height: 160px;
      margin-bottom: 25px;
      &:hover {
        .post__image-overlay {
          opacity: 1;
          background: rgba(44, 44, 44, 0.5);
        }
      }
    }

    &-overlay {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(44, 44, 44, 0.2);
      transition: 0.3s linear all;
      border-radius: 15px;
      z-index: 10;
      transition: all 0.1s linear;
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
      text-decoration: none;
      cursor: pointer;
    }
  }
  &__title {
    max-width: 275px;
    margin-bottom: 15px;
    font-size: 27px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;
  }
  &__subtitle {
    max-width: 275px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;
  }
  &__no-image {
    display: none;
    height: 40px;
    text-decoration: none;
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    background: #0f1516;
    color: #fff;
    cursor: pointer;
    order: 1;
    margin-top: 30px;
    &__link {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
