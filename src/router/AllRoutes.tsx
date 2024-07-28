import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import * as Pages from "../pages/index";

import BaseLayout from "./layouts/BaseLayout";

import LocalStorage from "../local-storage";

function AllRoutes() {
  const isLoggedIn = LocalStorage.get("accessToken");

  const Routes: RouteObject[] = [
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Pages.Home />,
        },
        {
          path: "/questions",
          element: <Pages.Questions />,
        },
        {
          path: "/result/:id",
          element: <Pages.Result />,
        },
        {
          path: "/*",
          element: <Pages.Home />,
        },
      ],
    },
  ];

  return useRoutes(Routes);
  // return useRoutes(mobileRoutes);
}

export default AllRoutes;
