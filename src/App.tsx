import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, normalTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import { Toast } from "./components";

function App() {
  return (
    <>
      <ThemeProvider theme={normalTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
        <Toast />
      </ThemeProvider>
    </>
  );
}

export default App;
