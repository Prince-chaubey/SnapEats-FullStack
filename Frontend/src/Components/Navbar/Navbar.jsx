import React, { useContext, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { LuDot } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { contextStore } from '../../Context/storeContext';
import Logo from "./logo.gif";
import Login from '../../Login/Login';
import SignUp from '../../Login/SignUp';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
    const {
        cartItem,
        showLoginPage,
        setShowLoginPage,
        showSignUp,
        loggedUser,
        setToken,
        setLoggedUser
    } = useContext(contextStore);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setLoggedUser("");
        toast.error("Logged out successfully!");
        navigate("/");
        setSidebar(false);
    };

    return (
        <header className="bg-white shadow-md px-4 py-3 sticky top-0 z-50 w-full">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">

              
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                    <img src={Logo} alt="mainlogo" className="h-10" />
                    <span className="text-2xl font-extrabold text-orange-600">SnapEats<span className="text-orange-600">.</span></span>
                </div>

               
                <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
                    <Link to="/"><li className="hover:text-orange-500 hover:underline">Home</li></Link>
                    <Link to="/Menu"><li className="hover:text-orange-500 hover:underline">Menu</li></Link>
                    <Link to="/About"><li className="hover:text-orange-500 hover:underline">About Us</li></Link>
                    <Link to="/Contact"><li className="hover:text-orange-500 hover:underline">Contact Us</li></Link>
                </ul>

               
                <div className="hidden md:flex items-center gap-5">
                    <Link to="/SearchFood"><img src={assets.search_icon} alt="search" className="w-6 h-6 cursor-pointer hover:scale-110" /></Link>

                    <Link to="/Cart" className="relative">
                        <img src={assets.bag_icon} alt="cart" className="w-6 h-6 cursor-pointer hover:scale-110 filter invert" />
                        {Object.keys(cartItem).length > 0 && <LuDot className="text-orange-600 absolute top-0 left-3" size={40} />}
                    </Link>

                    {loggedUser ? (
                        <div className="relative group">
                            <img src={assets.profile_icon} alt="profile" className="cursor-pointer w-7 h-7" />
                            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                <ul className="py-2 text-sm">
                                    <Link to="/MyOrders">
                                        <li className="px-4 py-2 hover:bg-orange-100 flex items-center gap-2">
                                            <img src={assets.bag_icon} alt="Orders" className="w-5 h-5" />
                                            <span>Orders</span>
                                        </li>
                                    </Link>
                                    <li onClick={logout} className="px-4 py-2 hover:bg-orange-100 text-red-600 flex items-center gap-2 cursor-pointer">
                                        <img src={assets.logout_icon} alt="Logout" className="w-5 h-5" />
                                        <span>Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => setShowLoginPage(!showLoginPage)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                        >
                            Sign In
                        </button>
                    )}
                </div>

              
                <div className="md:hidden text-2xl text-gray-700" onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
                </div>
            </nav>

        
            {sidebar && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md z-40 p-4 pb-10 md:hidden">
                    <ul className="flex flex-col gap-5 text-gray-800 text-lg">
                        <Link to="/" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">Home</li></Link>
                        <Link to="/Menu" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">Menu</li></Link>
                        <Link to="/About" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">About Us</li></Link>
                        <Link to="/Contact" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">Contact Us</li></Link>

                        <Link to="/SearchFood" onClick={() => setSidebar(false)}>
                            <li className="flex items-center gap-2"><img src={assets.search_icon} alt="search" className="w-5 h-5" />Search</li>
                        </Link>

                        <Link to="/Cart" onClick={() => setSidebar(false)} className="relative">
                            <li className="flex items-center gap-2">
                                <img src={assets.bag_icon} alt="cart" className="w-5 h-5 filter invert" />
                                Cart
                                {Object.keys(cartItem).length > 0 && <LuDot className="text-orange-600" size={20} />}
                            </li>
                        </Link>

                        {loggedUser ? (
                            <>
                                <Link to="/MyOrders" onClick={() => setSidebar(false)}>
                                    <li className="flex items-center gap-2">
                                        <img src={assets.bag_icon} alt="Orders" className="w-5 h-5" />
                                        My Orders
                                    </li>
                                </Link>
                                <li
                                    className="flex items-center gap-2 text-red-600 cursor-pointer"
                                    onClick={logout}
                                >
                                    <img src={assets.logout_icon} alt="Logout" className="w-5 h-5" />
                                    Logout
                                </li>
                            </>
                        ) : (
                            <li>
                                <button
                                    className="bg-orange-500 text-white w-full py-2 rounded-full hover:bg-orange-600"
                                    onClick={() => {
                                        setShowLoginPage(true);
                                        setSidebar(false);
                                    }}
                                >
                                    Sign In
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {/* Auth Modal */}
            {showLoginPage && (showSignUp ? <Login /> : <SignUp />)}
        </header>
    );
};

export default Navbar;
