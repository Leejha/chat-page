import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./lib/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
