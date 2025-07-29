import React, { useContext, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./logo.gif";
import { contextStore } from '../../Context/storeContext';
import Login from '../../Login/Login';
import SignUp from '../../Login/SignUp';
import { LuDot } from "react-icons/lu";
import { toast } from 'react-toastify';

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

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
        setLoggedUser("");
        toast.error("Logged out successfully!");
        setSidebar(false);
    };

    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">

              
                <div
                    className="text-2xl font-extrabold text-orange-600 tracking-wide flex items-center cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src={Logo} alt="mainlogo" className='h-14 w-auto mr-2' />
                    <span>SnapEats<span className="text-orange-600">.</span></span>
                </div>

               
                <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
                    <Link to="/"><li className="hover:text-orange-500 hover:underline">Home</li></Link>
                    <Link to="/Menu"><li className="hover:text-orange-500 hover:underline">Menu</li></Link>
                    <Link to="/About"><li className="hover:text-orange-500 hover:underline">About Us</li></Link>
                    <Link to="/Contact"><li className="hover:text-orange-500 hover:underline">Contact Us</li></Link>
                </ul>

            
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/SearchFood">
                        <img src={assets.search_icon} alt="search" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
                    </Link>

                    <div className="relative">
                        <Link to="/Cart">
                            <img src={assets.bag_icon} alt="cart" className="w-6 h-6 cursor-pointer hover:scale-110 transition filter invert" />
                            {Object.keys(cartItem).length > 0 && (
                                <LuDot className='text-orange-600 absolute -top-5 -right-4' size={40} />
                            )}
                        </Link>
                    </div>

                    {loggedUser ? (
                        <div className="relative group">
                            <img src={assets.profile_icon} alt="profile" className="cursor-pointer w-7" />
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                <ul className="py-2">
                                    <Link to="/MyOrders">
                                        <li className="px-4 py-2 hover:bg-orange-100 flex items-center gap-2">
                                            <img src={assets.bag_icon} alt="Orders" className="w-5 h-5" />
                                            <span>Orders</span>
                                        </li>
                                    </Link>
                                    <li
                                        className="px-4 py-2 text-red-600 hover:bg-orange-100 flex items-center gap-2 cursor-pointer"
                                        onClick={logout}
                                    >
                                        <img src={assets.logout_icon} alt="Logout" className="w-5 h-5" />
                                        <span>Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                            onClick={() => setShowLoginPage(true)}
                        >
                            Sign In
                        </button>
                    )}
                </div>

             
                <div className="md:hidden text-3xl text-gray-700 cursor-pointer" onClick={handleSidebar}>
                    {sidebar ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
                </div>
            </nav>

         
            {sidebar && (
                <div className='md:hidden fixed inset-0 bg-white z-40 p-6 pt-24'>
                    <ul className="flex flex-col gap-6 text-gray-800 font-medium text-xl">
                        <Link to="/" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">Home</li></Link>
                        <Link to="/Menu" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">Menu</li></Link>
                        <Link to="/About" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">About Us</li></Link>
                        <Link to="/Contact" onClick={() => setSidebar(false)}><li className="hover:text-orange-500 hover:underline">Contact Us</li></Link>

                        <div className="flex gap-4 items-center">
                            <Link to="/SearchFood" onClick={() => setSidebar(false)}>
                                <img src={assets.search_icon} alt="search" className="w-6 h-6 cursor-pointer" />
                            </Link>
                            <Link to="/Cart" onClick={() => setSidebar(false)} className="relative">
                                <img src={assets.bag_icon} alt="cart" className="w-6 h-6 filter invert" />
                                {Object.keys(cartItem).length > 0 && (
                                    <LuDot className='text-orange-600 absolute -top-5 -right-4' size={40} />
                                )}
                            </Link>
                        </div>

                        {loggedUser ? (
                            <>
                                <Link to="/MyOrders" onClick={() => setSidebar(false)}>
                                    <li className="text-gray-700 hover:text-orange-500 flex items-center gap-2">
                                        <img src={assets.bag_icon} alt="Orders" className="w-5 h-5" />
                                        Orders
                                    </li>
                                </Link>
                                <li
                                    className="text-red-600 hover:bg-orange-100 px-4 py-2 flex items-center gap-2 cursor-pointer"
                                    onClick={logout}
                                >
                                    <img src={assets.logout_icon} alt="Logout" className="w-5 h-5" />
                                    Logout
                                </li>
                            </>
                        ) : (
                            <button
                                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
                                onClick={() => {
                                    setShowLoginPage(true);
                                    setSidebar(false);
                                }}
                            >
                                Sign In
                            </button>
                        )}
                    </ul>
                </div>
            )}

           
            {showLoginPage && (showSignUp ? <Login /> : <SignUp />)}
        </header>
    );
};

export default Navbar;
