import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Layouts = () => {
    return (
        <div className="max-w-full">
           <Navbar></Navbar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Layouts;