<template>
  <div class="content">
    <h2 class="content__title">This is an new-post page</h2>
    <div class="new-post">
      <form class="new-post__form">
        <label for="post_title">Article Title</label>
        <input
          class="new-post__title new-post__input"
          id="post_title"
          name="post_subtitle"
          type="text"
          v-model.trim="post.title"
        />
        <label for="post_subtitle">Article Text</label>
        <textarea
          class="new-post__subtitle new-post__input"
          id="post_subtitle"
          name="post_subtitle"
          type="text"
          v-model.trim="post.text"
        />
        <div class="new-post__image-preview">
          <div class="new-post__image-container">
            <div v-if="imageUrl" class="new-post__smth">
              <img class="new-post__image" :src="imageUrl" alt="placeholder" />
              <div class="new-post__delete-image" @click="deleteImage">X</div>
            </div>

            <div v-else @click="onUpload" class="new-post__image-placeholder">
              <img src="../assets/upload.svg" alt="upload" />
              <div>Upload image to see preview</div>
            </div>
          </div>
          <div class="new-post__buttons">
            <label
              class="new-post__file-custom new-post__button"
              for="post__file"
              ><img src="../assets/attachImage.svg" alt="attach image"
            /></label>
            <input
              id="post__file"
              class="new-post__file"
              type="file"
              name="myImage"
              accept="image/*"
              @change="onFilePicked"
              ref="upload"
            />
            <button @click.prevent class="new-post__button">
              <img src="../assets/send.svg" alt="send" />
            </button>
          </div>
        </div>
      </form>
      <div class="new-post__preview">
        <AppPost :post="post" :imageUrl="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import AppPost from "../components/AppPost.vue";

export default {
  components: {
    AppPost,
  },
  data() {
    return {
      imageUrl: "",
      images: [],
      post: {
        title: "",
        text: "",
        image: null,
      },
    };
  },

  methods: {
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
        console.log(this.imageUrl, "hello");
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(files);
    },
    deleteImage() {
      this.image = null;
      this.imageUrl = "";
    },
    onUpload() {
      this.$refs.upload.click();
    },
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
    background: #fdd76d;
    padding: 25px;
    width: 100%;
    border-radius: 25px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    & > label {
      text-align: left;
      margin-bottom: 10px;
    }
  }
  &__input {
    height: 40px;
    margin-bottom: 30px;
    padding: 0 30px;
    border: 1px transparent solid;
    border-radius: 15px;
    &:focus {
      outline: 0.2px rgb(111, 124, 241) solid;
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
  &__image {
    max-width: 100%;
    height: 100%;
    border-radius: 25px;
    &-preview {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 300px;
      width: 400px;
      background: #fdd76d;
      border-radius: 25px;
    }
    &-placeholder {
      cursor: pointer;
      & > img {
        height: 40px;
        width: 50px;
        margin-bottom: 30px;
      }
    }
  }

  &__smth {
    position: relative;
    height: 100%;
    width: 100%;
    &:hover {
      .new-post__delete-image {
        opacity: 1;
      }
    }
  }

  &__delete-image {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    opacity: 0;
    transition: 0.1s opacity linear;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }

  &__file-custom {
    margin-bottom: 20px;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 70px;
    background: #ffffff;
    border-radius: 15px;
    border: none;
    transition: 0.2s linear all;

    cursor: pointer;
    &:hover {
      background: rgb(212, 212, 212);
    }
    & > img {
      height: 25px;
      width: 30px;
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  &__preview {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
