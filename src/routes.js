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
  {
    name: "Login",
    path: "/login",
    component: () => import("./components/Login.vue"),
  },
  {
    name: "Add",
    path: "/add",
    component: () => import("./components/Add.vue"),
  },
  {
    name: "Update",
    path: "/update/:id",
    component: () => import("./components/Update.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
