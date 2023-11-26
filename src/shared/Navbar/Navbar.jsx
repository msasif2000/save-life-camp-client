import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const handleLogout = () => {
        userLogout()
    }


    const navlinks =
        <>
            <li className=""><NavLink to='/'>Home</NavLink></li>
            {
                user ?
                    <li><button onClick={handleLogout} className="btn btn-sm">Sign Out</button></li>
                    :
                    <li><NavLink to='/login'>Sign in</NavLink></li>
            }
        </>
    return (
        <div className=" ">
            <div className="navbar  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="sty menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-600 rounded-box w-52 ">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2"> 
                        <img src={logo} alt="" className="h-12 w-12"/>
                        <a href="">SAVE LIFE</a>
                    </div>
                </div>
                <ul className="navbar-center hidden lg:flex sty">
                    {navlinks}
                </ul>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;