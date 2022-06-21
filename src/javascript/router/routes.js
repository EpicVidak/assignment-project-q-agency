import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("@/views/Posts/Posts.vue"),
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/views/Posts/ViewPost.vue"),
    }
  ]
})

export default router