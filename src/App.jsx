import { Outlet } from "react-router-dom";

import NavItems from "./components/NavItems";

import "./App.css";


function App() {
  return (
    <>
      <NavItems />
      <Outlet />
    </>
  );
}

export default App;
