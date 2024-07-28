import { Outlet } from "react-router-dom";

import styled, { css } from "../../themes";

import { useCallback, useEffect, useState } from "react";
import { ScrollToTop } from "@/src/components";

function BaseLayout() {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Content>
      <Outlet />
      <ScrollToTop />
    </Content>
  );
}

const Content = styled.div`
  max-width: 390px;
  margin: 0 auto;
  min-height: 100vh; /* fallback */
  min-height: calc(var(--vh) * 100);
  display: flex;
  flex: 1 !important;
  max-height: auto;
  box-sizing: border-box;

  position: relative;
`;

export default BaseLayout;
