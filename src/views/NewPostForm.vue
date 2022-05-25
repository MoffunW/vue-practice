<template>
  <div class="content">
    <h2>This is an new-post page</h2>
    <div class="new-post">
      <form class="new-post__form">
        <label for="post_title">Article Title</label>
        <input
          class="new-post__title new-post__input"
          id="post_title"
          name="post_subtitle"
          type="text"
        />
        <label for="post_subtitle">Article Text</label>
        <textarea
          class="new-post__subtitle new-post__input"
          id="post_subtitle"
          name="post_subtitle"
          type="text"
        />
        <div class="new-post__image-preview">
          <img src="https://via.placeholder.com/250x150" alt="placeholder" />
          <label class="new-post__file-custom" for="post__file">{{}}</label>
          <input
            id="post__file"
            class="new-post__file"
            type="file"
            name="myImage"
            accept="image/*"
          />
        </div>
      </form>
      <div class="new-post__preview">
        <AppPost />
      </div>
    </div>
  </div>
</template>

<script>
import AppPost from "../components/AppPost.vue";
// import { mdiAttachment } from "@mdi/js";

export default {
  components: {
    AppPost,
  },
};
</script>

<style lang="scss">
.new-post {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  justify-items: center;
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 100%;
    & > label {
      text-align: left;
      margin-bottom: 10px;
    }
  }
  &__input {
    height: 40px;
    margin-bottom: 30px;
    padding: 0 30px;
    border: none;
    border-radius: 15px;
    &:focus {
      outline: 0.2px red solid;
    }
  }
  &__subtitle {
    max-height: 400px;
    min-height: 40px;
    padding: 10px 30px;
    font-size: 18px;
    font-weight: 400;
    resize: none;
    height: 150px;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 50px;
      height: 140px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      border-radius: 10px;
    }
  }
  &__file {
    display: none;
  }
  &__image-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__file-custom {
    height: 40px;
    width: 70px;
    background: grey;
    border-radius: 15px;
  }
}
</style>
