import { BiLogOut } from "react-icons/bi";
import { GiFrozenRing } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import { GiWallet } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const DashBoard = () => {
    const { user, userLogout } = useAuth();
    const handleLogout = () => {
        userLogout()
    }
    return (
        <div className="flex md:container mx-auto">
            <div className="w-64 min-h-screen bg-red-600 text-white">
                <ul className="menu text-xl">
                    <li>
                        <NavLink to='/dashboard'><img src={user.photoURL} alt="" className="w-12 rounded-full" /> My Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/joinedCamp'><GiFrozenRing className="text-2xl" />Enrolled Camp</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><MdReviews className="text-2xl"></MdReviews>Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'><GiWallet className="text-2xl"></GiWallet>Payment History</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome className="text-2xl"></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/availableCamp'><GiCampingTent className="text-2xl" />Available Camp</NavLink>
                    </li>
                    <li onClick={handleLogout}>
                        <NavLink to='/'><BiLogOut className="text-2xl" />logout</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;