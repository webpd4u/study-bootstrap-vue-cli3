import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Alert from "@/components/Alert";
import Form from "./views/Form";
import Modal from "./views/Modal";
import PopupForm from "./views/PopupForm";
import DraggableDiv from "./views/DraggableDiv";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/alert",
      name: "alert",
      component: Alert
    },
    {
      path: "/form",
      name: "form",
      component: Form
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal
    },
    {
      path: "/popup",
      name: "popup",
      component: PopupForm
    },
    {
      path: "/draggable",
      name: "draggable",
      component: DraggableDiv
    }
  ]
});
