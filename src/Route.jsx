import React from "react";

const Home = React.lazy(() => import("pages/home"));
const PageNotFound = React.lazy(() => import("pages/common/PageNotFound"));

const route = [
  {
    path: "/",
    component: Home,
    title: "Home page",
    exact: true,
  },
  {
    path: "/*",
    exact: false,
    component: PageNotFound,
  },
];

export { route };
