import React, { useContext, useState } from 'react';
import { contextStore } from '../Context/storeContext';
import axios from 'axios';

const PlaceOrder = () => {
  const {
    total,
    subtotal,
    deliveryFee,
    food_list,
    cartItem,
    url,
    token
  } = useContext(contextStore);

  const userId = localStorage.getItem("userId"); 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: '',
    zipcode: '',
    country: '',
    state: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User not logged in");
      return;
    }

    const orderItems = food_list
      .filter((item) => cartItem[item._id] > 0)
      .map((item) => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: cartItem[item._id]
      }));

    const orderData = {
      userId,
      address: formData,
      items: orderItems,
      amount: subtotal + deliveryFee,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });

      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        alert('Error placing order!');
      }
    } catch (err) {
      console.error("Order Error:", err.response?.data || err.message);
      alert('Server error. Please try again.');
    }
  };

  return (
    <div className="my-10 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Place Your Order</h2>

      <form onSubmit={placeOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-start">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            {[
              { label: 'First Name', name: 'firstname' },
              { label: 'Last Name', name: 'lastname' },
              { label: 'Email', name: 'email', span: true },
              { label: 'Street Address', name: 'street', span: true },
              { label: 'City', name: 'city' },
              { label: 'Zip Code', name: 'zipcode' },
              { label: 'Country', name: 'country' },
              { label: 'State', name: 'state' },
              { label: 'Phone Number', name: 'phone', span: true },
            ].map((field, idx) => (
              <div key={idx} className={field.span ? 'col-span-1 md:col-span-2' : ''}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.label}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Cart Totals</h3>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Delivery Fee</span>
            <span>₹{subtotal === 0 ? 0 : deliveryFee}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
            <span>Total</span>
            <span>₹{subtotal === 0 ? 0 : total}</span>
          </div>
          <button type="submit" className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
