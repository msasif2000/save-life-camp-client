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
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {

    const { userLogout } = useAuth();
    const [isAdmin] = useAdmin();
    const handleLogout = () => {
        userLogout()
    }
    return (
        <div className="md:flex md:container mx-auto">

            <div className="md:w-1/4 md:flex-shrink-0">
                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="sty menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-600 rounded-box w-52 ">
                            {
                                isAdmin ?
                                    <>
                                        <li>
                                            <h2 className="text-2xl text-red-200 font-bold">Admin DashBoard</h2>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/addCamp'><AiFillFolderAdd className="text-2xl" />Add Camp</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/upcomingCamp'><AiFillFolderAdd className="text-2xl" />Add Upcoming Camp</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/manageCamp'><BiCalendarEdit className="text-2xl" />Manage Camp</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/manageBookings'><MdManageHistory className="text-2xl" />Manage Bookings</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard/users'><FaUsers className="text-2xl" />All Users</NavLink>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <h2 className="text-2xl text-red-200 font-bold">User DashBoard</h2>
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
                            <div className="divider"></div>


                            <li>
                                <NavLink to='/'><FaHome className="text-2xl"></FaHome>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/availableCamp'><GiCampingTent className="text-2xl" />Available Camp</NavLink>
                            </li>
                            <li onClick={handleLogout}>
                                <BiLogOut className="text-2xl" />Sign Out
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:flex hidden w-68 min-h-screen bg-red-600 text-white pt-12">

                    <ul className="menu text-xl">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <h2 className="text-2xl text-red-200 font-bold">Admin DashBoard</h2>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addCamp'><AiFillFolderAdd className="text-2xl" />Add Camp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/upcomingCamp'><AiFillFolderAdd className="text-2xl" />Add Upcoming Camp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageCamp'><BiCalendarEdit className="text-2xl" />Manage Camp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageBookings'><MdManageHistory className="text-2xl" />Manage Bookings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'><FaUsers className="text-2xl" />All Users</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <h2 className="text-2xl text-red-200 font-bold">User DashBoard</h2>
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
                        {/* <li>
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
                                </li> */}

                        <div className="divider"></div>


                        <li>
                            <NavLink to='/'><FaHome className="text-2xl"></FaHome>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/availableCamp'><GiCampingTent className="text-2xl" />Available Camp</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="flex items-center">
                                <BiLogOut className="text-2xl" /><span>Sign Out</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:flex-1 overflow-x-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;