// import { MdLogin } from "react-icons/md"; 
import { BiUserCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo1.jpg'
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const { user, userLogout } = useAuth();

    const handleLogout = () => {
        userLogout()
    }

    const navlinks =
        <>
            <li className=""><NavLink to='/'>Home</NavLink></li>
            <li className=""><NavLink to='/availableCamp'>Available Camp</NavLink></li>


            <li className=""><NavLink to='/dashboard'>Dashboard</NavLink></li>

            <li className=""><NavLink to='/contact'>Contact</NavLink></li>
            {
                // user ?
                //     ''
                //     :
                //     <>
                //         <li><NavLink to='/login' className="flex items-center gap-1 justify-center bg-sl2"><MdLogin className="text-xl mt-1"/>Sign in</NavLink></li>
                //         {/* <button className="rounded-xl border-2 border-sl2 "><li><NavLink to='/register'>Sign up</NavLink></li></button> */}
                //     </>
            }
        </>
    return (

        <div className="navbar">
            <div className="navbar-start w-3/5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="sty menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-600 rounded-box w-52 ">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="h-10 w-12" />
                    <a className="flex flex-col text-center"><span className="text-sl2 text-left md:text-2xl text-xl font-bold">SAVE LIFE</span>  <span className="text-txt1 text-left text-sm md:text-base font-semibold">Medical Camp</span></a>
                </div>
            </div>
            <ul className="navbar-center hidden lg:flex sty">
                {navlinks}
            </ul>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <li className="list-none"><button onClick={handleLogout} className="btn btn-sm bg-white md:mr-2 mr-1 border-2 border-sl2 text-sm md:text-xl">Sign Out</button></li>
                            <Link to='/dashboard'><img src={user.photoURL} alt="" className="h-14 w-14 rounded-full bg-sl2 p-1" /></Link>
                        </>
                        :
                        <Link to='/login' className="bg-sl2 rounded-full p-1"><BiUserCircle className="text-txt1 text-4xl"></BiUserCircle></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;