import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, normalTheme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";

function App() {
  return (
    <>
      <ThemeProvider theme={normalTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
