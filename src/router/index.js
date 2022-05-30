import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import ArticleView from "../views/ArticleView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/article/:id",
    name: "article",
    component: ArticleView,
  },
  {
    path: "/new-post",
    name: "new-post",
    component: () => import("../views/NewPostForm.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
