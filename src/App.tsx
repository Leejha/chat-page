import { Outlet } from "react-router-dom";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <Outlet />
      <GlobalStyles />
    </>
  );
}

export default App;
