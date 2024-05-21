import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./lib/styles";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [reactQueryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={reactQueryClient}>
      <ThemeProvider theme={theme}>
        <Outlet />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
