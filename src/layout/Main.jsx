import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="md:container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;