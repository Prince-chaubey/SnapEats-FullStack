import React, { useContext } from 'react';
import { contextStore } from '../Context/storeContext';

const PlaceOrder = () => {
  const { total, subtotal, deliveryFee } = useContext(contextStore);

  const shippingFields = [
    { label: 'First Name', name: 'firstname', type: 'text' },
    { label: 'Last Name', name: 'lastname', type: 'text' },
    { label: 'Email', name: 'email', type: 'email', span: true },
    { label: 'Street Address', name: 'street', type: 'text', span: true },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'Zip Code', name: 'zipcode', type: 'text' },
    { label: 'Country', name: 'country', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
    { label: 'Phone Number', name: 'phone', type: 'text', span: true },
  ];

  return (
    <div className="my-10 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Place Your Order</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Shipping Information</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            {shippingFields.map((field, idx) => (
              <div key={idx} className={field.span ? 'col-span-1 md:col-span-2' : ''}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.label}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            ))}
          </form>
        </div>

        {/* Cart Totals */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Cart Totals</h3>

          <div className="flex justify-between text-gray-700 mb-4">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-gray-700 mb-4">
            <span>Delivery Fee</span>
            <span>₹{subtotal==0?0:deliveryFee}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
            <span>Total</span>
            <span>₹{subtotal===0?0:total}</span>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;