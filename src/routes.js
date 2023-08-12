import { createWebHistory, createRouter } from "vue-router";
// import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("./components/Home.vue"),
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
