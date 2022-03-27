import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

const routes = [
  {
    path: "/",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/create",
    name: "create",
    component: CreateComponent,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;