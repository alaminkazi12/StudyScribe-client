import { Outlet } from "react-router-dom";
import Nabvar from "./components/Navbar/Nabvar";
import Footer from "./components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
