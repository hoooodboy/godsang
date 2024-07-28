import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { useMemo, useState } from "react";
import * as Pages from "../pages/index";

import BaseLayout from "./layouts/BaseLayout";
import NavigateReplace from "./NavigateReplace";
import OnBoardingLayout from "./layouts/OnBoardingLayout";

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
