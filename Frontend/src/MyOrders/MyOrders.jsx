import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { contextStore } from '../Context/storeContext';
import { assets } from '../assets/assets';

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, currency } = useContext(contextStore);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">My Orders</h2>
      <div className="flex flex-col gap-6">
        {data.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-6 md:grid-cols-3 gap-4 md:gap-6 items-center text-sm md:text-base p-5 border border-gray-300 shadow-md rounded-2xl bg-white"
          >
            <img src={assets.parcel_icon} alt="parcel" className="w-14 md:w-16 mx-auto" />
            <p className="col-span-3 md:col-span-1 text-gray-700 font-medium">
              {order.items.map((item, idx) =>
                idx === order.items.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              )}
            </p>
            <p className="text-gray-800 font-semibold">{currency}{order.amount*10}.00</p>
            <p className="text-gray-600">Items: <span className="font-medium">{order.items.length}</span></p>
            <p className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500">&#x25cf;</span>
              <b className="capitalize">{order.status}</b>
            </p>
            <button
              onClick={fetchOrders}
              className="py-2 px-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-200 text-sm cursor-pointer"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
