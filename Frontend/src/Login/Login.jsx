import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { contextStore } from '../Context/storeContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const {
    setShowLoginPage,
    showLoginPage,
    setShowSignUp,
    showSignUp,
    url,
    setToken,
    setLoggedUser,
  } = useContext(contextStore);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error("Please fill all the fields to login!");
      return;
    }

    try {
      const newURL = url + "/api/user/login";
      const response = await axios.post(newURL, user);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

       
        setLoggedUser(response.data.username);
        localStorage.setItem("userId",response.data.userId);
        

        toast.success("Login Successful!");
        setUser({ email: "", password: "" });
        setShowLoginPage(false);
      } else {
        toast.error(response.data.message || "Login failed.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 mt-5">
      <div className="bg-white shadow-lg w-[90%] max-w-md p-6 rounded-xl relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Login Now</h2>
          <button
            type="button"
            onClick={() => setShowLoginPage(!showLoginPage)}
            className="text-gray-500 hover:text-gray-700"
          >
            <img
              src={assets.cross_icon}
              alt="Close"
              className="w-5 h-5 object-contain hover:cursor-pointer"
            />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 cursor-pointer rounded-md hover:bg-orange-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-800 font-medium mt-4 text-center">
          New User?{' '}
          <span
            className="text-orange-600 hover:underline cursor-pointer"
            onClick={() => setShowSignUp(!showSignUp)}
          >
            Create an Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
