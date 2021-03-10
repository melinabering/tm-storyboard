import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import SplitView from "../views/SplitView.vue";
import Backlog from "../views/Backlog.vue";
import Sprints from "../views/Sprints.vue";
import Stories from "../views/Stories.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Splitview",
    name: "Splitview",
    component: SplitView
  },
  {
    path: "/Backlog",
    name: "Backlog",
    component: Backlog
  }
  ,
  {
    path: "/Sprints",
    name: "Sprints",
    component: Sprints
  }
  ,
  {
    path: "/Stories",
    name: "Stories",
    component: Stories
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
