import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layouts = () => {
    return (
        <div className="max-w-full">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Layouts;