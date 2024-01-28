import { Outlet } from "react-router-dom";

import NavItems from "./components/NavItems";

import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
