const app = Vue.createApp({
  data() {
    return {};
  },
});

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/project/:id",
      component: DetailedProject,
      name: "DetailedProject",
      props: true,
    },
  ],
});

app.component("app-home", Home);
app.component("app-detailed-project", DetailedProject);
app.component("component-profile", Profile);
app.component("component-projects", Projects);
app.component("component-selected-project", SelectedProject);
app.use(router);
app.mount("#app");
