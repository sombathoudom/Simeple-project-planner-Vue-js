import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddProject from "../views/addProject.vue";
import EditProject from "../views/editProject.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add/project",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/edit/project/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
