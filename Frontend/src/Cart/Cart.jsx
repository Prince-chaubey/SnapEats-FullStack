import React, { useContext } from 'react';
import { contextStore } from '../Context/storeContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { food_list, cartItem, removeCart, addCart,total,subtotal,deliveryFee } = useContext(contextStore);
    const navigate=useNavigate();

  

    return (
        <div className="my-8 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

            {/* Title Row - Desktop */}
            <div className="hidden sm:grid grid-cols-12 items-center text-gray-700 font-semibold gap-4 border-b py-4 px-2">
                <div className="col-span-3">Item</div>
                <div className="col-span-2 text-center">Title</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2">Total</div>
                <div className="col-span-1 text-center">Remove</div>
            </div>

            {/* Mobile Label */}
            <div className="sm:hidden font-semibold text-gray-700 text-lg mb-2">Cart Items</div>

            {/* Cart Items */}
            {food_list.map((food, index) => {
                const quantity = cartItem[food._id];
                if (quantity > 0) {
                    const total = quantity * food.price;
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-12 items-center text-gray-700 gap-4 py-5 border-b"
                        >
                            <div className="col-span-3 flex items-center">
                                <img src={food.image} alt={food.name} className="h-15 w-15 object-cover rounded" />
                            </div>
                            <div className="col-span-2 text-center">{food.name}</div>
                            <div className="col-span-2">₹{food.price}</div>
                            <div className="col-span-2 flex items-center justify-center gap-2">
                                <button onClick={() => removeCart(food._id)} className="px-2 py-1 bg-gray-200 rounded cursor-pointer">-</button>
                                <span>{quantity}</span>
                                <button onClick={() => addCart(food._id)} className="px-2 py-1 bg-gray-200 rounded cursor-pointer">+</button>
                            </div>
                            <div className="col-span-2">₹{total}</div>
                            <div className="col-span-1 flex justify-center">
                                <button onClick={() => removeCart(food._id)} className="text-red-500 hover:scale-110 transition">
                                    <img src={assets.cross_icon} alt="Remove" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    );
                }
                return null;
            })}

            {/* Totals and Promo Section */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Cart Totals */}
                <div className="border p-6 rounded-lg shadow-md bg-white">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cart Totals</h3>

                    <div className="flex justify-between mb-3 text-gray-700">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between mb-3 text-gray-700">
                        <span>Delivery Fee</span>
                        <span>₹{subtotal===0?0:deliveryFee}</span>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between text-lg font-semibold text-gray-800">
                        <span>Total</span>
                        <span>₹{subtotal===0?0:total}</span>
                    </div>

                    {
                        cartItem && Object.keys(cartItem).length > 0 ? (
                            <button
                                onClick={() => navigate('/PlaceOrder')}
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition mt-6"
                            >
                                Proceed to Checkout
                            </button>
                        ) : (
                            <p className="text-gray-500 mt-6">Your cart is empty.</p>
                        )
                    }
                </div>

                {/* Promo Code Section */}
                <div className="p-6 rounded-lg shadow-md bg-white">
                    <p className="text-lg font-medium text-gray-800 mb-4">Have a promo code? Enter it below:</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            name="promocode"
                            id="promocode"
                            placeholder="Enter Promo Code"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition w-full sm:w-auto cursor-pointer font-medium"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;