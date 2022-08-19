import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
// import BMap from "@/views/BMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/bmap",
  //   name: "Bmap",
  //   component: BMap,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
