import { Outlet } from "react-router-dom";
import { GlobalStyles, theme } from "./styles";

import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
