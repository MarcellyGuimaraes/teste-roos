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
        component: () => import("components/forms/ArticleForm.vue"),
      },
    ],
  },
  {
    path: "/articles/:articleId/edit",
    name: "article-edit",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        props: true,
        component: () => import("components/forms/ArticleForm.vue"),
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
        component: () => import("components/forms/CategoryForm.vue"),
      },
    ],
  },
  {
    path: "/categories/:categoryId/edit",
    name: "category-edit",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        props: true,
        component: () => import("components/forms/CategoryForm.vue"),
      },
    ],
  },
  {
    path: "/admin/articles",
    name: "articles-manage",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ArticlesManagePage.vue"),
      },
    ],
  },
  {
    path: "/admin/categories",
    name: "categories-manage",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/CategoriesManagePage.vue"),
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
