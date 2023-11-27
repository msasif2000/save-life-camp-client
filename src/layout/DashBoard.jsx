import { BiCalendarEdit } from "react-icons/bi"; 
import { AiFillFolderAdd } from "react-icons/ai"; 
import { MdManageHistory } from "react-icons/md"; 
import { FaUsers } from "react-icons/fa"; 
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
    const isAdmin = true;
    const handleLogout = () => {
        userLogout()
    }
    return (
        <div className="flex md:container mx-auto">
            <div className="w-64 min-h-screen bg-red-600 text-white">
                <ul className="menu text-xl">

                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/admin'><img src={user?.photoURL} alt="" className="w-12 rounded-full" /> Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addCamp'><AiFillFolderAdd className="text-2xl" />Add Camp</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageCamp'><BiCalendarEdit className="text-2xl"/>Manage Camp</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageBookings'><MdManageHistory className="text-2xl"/>Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allUsers'><FaUsers className="text-2xl"/>All Users</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/profile'><img src={user?.photoURL} alt="" className="w-12 rounded-full" /> My Profile</NavLink>
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
                            </>
                    }
                     <li>
                                    <NavLink to='/dashboard/profile'><img src={user?.photoURL} alt="" className="w-12 rounded-full" /> My Profile</NavLink>
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