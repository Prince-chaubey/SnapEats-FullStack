import React, { useContext } from 'react';
import { contextStore } from '../Context/storeContext';
import { assets } from '../assets/assets';

const Foodlist = () => {
    const { food_list, cartItem, addCart, removeCart } = useContext(contextStore);


    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8">
            <h1 className="text-3xl font-bold mb-10 text-center text-orange-600">
                Our Delicious Food Items
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {food_list.map((food) => (
                    <div
                        key={food._id}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={food.image}
                            alt={food.name}
                            className="mx-auto object-cover mb-4 rounded-lg"
                        />

                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
                            <img
                                src={assets.rating_starts}
                                alt="ratings"
                                className="w-20 h-5 object-contain"
                            />
                        </div>

                        <p className="text-sm text-gray-600 mb-3">{food.description}</p>



                        <div className="flex items-center justify-between mb-2">

                            {
                                !cartItem[food._id] ?
                                    <img
                                        src={assets.add_icon_white}
                                        alt="ratings"
                                        className="object-contain hover:cursor-pointer"
                                        onClick={() => addCart(food._id)}
                                    />
                                    : (
                                        <div className='flex gap-2 items-center font-semibold'>
                                            <img
                                                src={assets.remove_icon_red}
                                                alt="ratings"
                                                className="object-contain hover:cursor-pointer"
                                                onClick={() => removeCart(food._id)}
                                            />
                                            <p> {cartItem[food._id]}</p>
                                            <img
                                                src={assets.add_icon_green}
                                                alt="ratings"
                                                className="object-contain hover:cursor-pointer"
                                                onClick={() => addCart(food._id)}
                                            />
                                        </div>
                                    )
                            }
                            <p className="text-green-700 font-bold text-lg text-right">
                                ₹{food.price * 100}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foodlist;
