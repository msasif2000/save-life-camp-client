import { FcHome } from "react-icons/fc";
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
import { Helmet } from "react-helmet";
import useUser from "../hooks/useUser";
import "./DashBoard.css"

const DashBoard = () => {

    const { userLogout } = useAuth();
    const [currentUser] = useUser();   
    const role = currentUser?.role;
    const handleLogout = () => {
        userLogout()
    }
    return (
        <div className="md:flex">
            <Helmet>
                <title>SAVE LIFE | DASHBOARD</title>
            </Helmet>
            <div className="lg:w-1/4 xl:w-1/5 2xl:w-1/6 lg:flex-shrink-0">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="sty menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-600 rounded-box w-52 ">
                            {
                                role === 'admin' ?
                                    <>
                                        <li>
                                            <h2 className="text-2xl text-red-800 font-bold bg-white my-2"><FcHome className="text-2xl" />ADMIN DashBoard</h2>
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
                                        {
                                            role === 'professional' ?
                                                <>
                                                    <li>
                                                        <h2 className="text-2xl text-red-800 font-bold bg-white my-2"><FcHome className="text-2xl" />Professional DashBoard</h2>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/nextCamp'><GiFrozenRing className="text-2xl" />Next Camp</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/prevCamp'><MdReviews className="text-2xl"></MdReviews>Previous Camp</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/paymentHistory'><GiWallet className="text-2xl"></GiWallet>Payment History</NavLink>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li>
                                                        <h2 className="text-2xl text-red-800 font-bold bg-white my-2"><FcHome className="text-2xl" />User DashBoard</h2>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/joinedCamp'><GiFrozenRing className="text-2xl" />Registered Camp</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/review'><MdReviews className="text-2xl"></MdReviews>Review history</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/paymentHistory'><GiWallet className="text-2xl"></GiWallet>Payment History</NavLink>
                                                    </li>
                                                </>

                                        }

                                    </>
                            }
                            <div className="divider"></div>


                            <li>
                                <NavLink to='/'><FaHome className="text-2xl"></FaHome>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/availableCamp'><GiCampingTent className="text-2xl" />Available Camp</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="flex items-center btn btn-sm">
                                    <BiLogOut className="text-2xl" /><span>Sign Out</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:flex hidden min-h-screen bg-ic2 pt-12">

                    <ul className="menu text-xl dash">
                        {
                            role === 'admin' ?
                                <>
                                    <li>
                                        <h2 className="text-2xl text-red-800 font-bold bg-white my-2"><FcHome className="text-2xl" />ADMIN DashBoard</h2>
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
                                    
                                    {
                                            role === 'professional' ?
                                                <>
                                                    <li>
                                                        <h2 className="text-2xl text-red-800 font-bold bg-white my-2"><FcHome className="text-2xl" />Professional DashBoard</h2>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/nextCamp'><GiFrozenRing className="text-2xl" />Next Camp</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/prevCamp'><MdReviews className="text-2xl"></MdReviews>Previous Camp</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/paymentHistory'><GiWallet className="text-2xl"></GiWallet>Payment History</NavLink>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li>
                                                        <h2 className="text-2xl text-red-800 font-bold bg-white my-2"><FcHome className="text-2xl" />User DashBoard</h2>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/joinedCamp'><GiFrozenRing className="text-2xl" />Registered Camp</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/review'><MdReviews className="text-2xl"></MdReviews>Review history</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/dashboard/paymentHistory'><GiWallet className="text-2xl"></GiWallet>Payment History</NavLink>
                                                    </li>
                                                </>

                                        }

                                </>
                        }

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
            <div className="lg:flex-1 overflow-x-auto mt-8 lg:mt-0">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;