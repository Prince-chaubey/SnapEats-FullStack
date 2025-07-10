import React, { useContext, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { assets } from '../../assets/assets';
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./logo.gif"
import { contextStore } from '../../Context/storeContext';
import Login from '../../Login/Login';
import SignUp from '../../Login/SignUp';
import { LuDot } from "react-icons/lu";
import { toast } from 'react-toastify';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
    const { cartItem, showLoginPage, setShowLoginPage, showSignUp, loggedUser,setToken,setLoggedUser } = useContext(contextStore);

    function handleSidebar() {
        setSidebar(!sidebar);
    }

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
        setLoggedUser("");
        toast.error("Logged out successfully!");

    }


    

    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-extrabold text-orange-600 tracking-wide flex items-center" onClick={() => navigate("/")}>

                    <img src={Logo} alt="mainlogo" className='h-15 inline' />
                    <span>SnapEats<span className="text-orange-600">.</span></span>

                </div>


                <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
                    <Link to="/">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">Home</li>
                    </Link>

                    <Link to="/Menu">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">Menu</li>
                    </Link>

                    <Link to="/About">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">About Us</li>
                    </Link>

                    <Link to="/Contact">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">Contact Us</li>
                    </Link>
                </ul>


                <div className="hidden md:flex items-center gap-6">
                    <Link to="/SearchFood">
                        <img src={assets.search_icon} alt="search" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
                    </Link>

                    <div>
                        <Link to="/Cart">
                            <img src={assets.bag_icon} alt="cart" className="w-6 h-6 cursor-pointer hover:scale-110 transition filter invert" />
                            {Object.keys(cartItem).length > 0 && (
                                <LuDot className='text-orange-600 absolute top-3' size={40} />
                            )}
                        </Link>
                    </div>

                    {
                        loggedUser ? (
                            <div className="relative group">
                                <img
                                    src={assets.profile_icon}
                                    alt="profile"
                                    className="cursor-pointer"
                                />
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                    <ul className="py-2">
                                       <Link to="/MyOrders">
                                        <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer flex items-center gap-2">
                                            <img src={assets.bag_icon} alt="Orders" className="w-5 h-5" />
                                            <span>Orders</span>
                                        </li>
                                       </Link>
                                       
                                        <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-red-600 flex items-center gap-2" onClick={()=>logout()}>
                                            <img src={assets.logout_icon} alt="Logout" className="w-5 h-5" />
                                            <span>Logout</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        ) : <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition hover:cursor-pointer" onClick={() => setShowLoginPage(!showLoginPage)}>
                            Sign In
                        </button>
                    }

                </div>


                <div className="md:hidden text-3xl text-gray-700 cursor-pointer" onClick={handleSidebar}>

                    {
                        !sidebar ? <RxHamburgerMenu size={30} /> : <RxCross1 size={30} />
                    }
                </div>


                {sidebar && (
                    <div className='absolute w-full top-17 right-0 p-2 pb-10 z-50 bg-white'>
                        <ul className="w-full mt-12 flex flex-col gap-5 items-center text-gray-800 font-medium">
                            <Link to="/">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">Home</li>
                            </Link>

                            <Link to="/Menu">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">Menu</li>
                            </Link>

                            <Link to="/About">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">About Us</li>
                            </Link>

                            <Link to="/Contact">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">Contact Us</li>
                            </Link>

                            {loggedUser ? (
                                <li className="text-orange-600 font-semibold text-lg">Hello, {loggedUser}</li>
                            ) : (
                                <li>
                                    <button
                                        className="bg-orange-500 text-white px-4 py-2 rounded-full w-full hover:bg-orange-600 transition"
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
            </nav>
            {
                showLoginPage ? (showSignUp ? <Login /> : <SignUp />) : ""
            }
        </header>
    );
};

export default Navbar;
