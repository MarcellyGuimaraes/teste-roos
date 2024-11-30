const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/BlogPage.vue") }],
  },
  {
    path: "/blog/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/BlogPostPage.vue") }],
  },

  {
    path: "/articles/new",
    name: "article-new",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("components/articles/ArticleForm.vue"),
      },
    ],
  },
  {
    path: "/articles/:id/edit",
    name: "article-edit",
    props: true,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("components/articles/ArticleForm.vue"),
      },
    ],
  },
  {
    path: "/categories/new",
    name: "category-new",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("components/categories/CategoryForm.vue"),
      },
    ],
  },
  {
    path: "/categories/:id/edit",
    name: "category-edit",
    props: true,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("components/categories/CategoryForm.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
