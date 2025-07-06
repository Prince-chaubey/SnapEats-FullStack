import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const contextStore = createContext();

export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [token, setToken] = useState("");

  //URL for API END POINT
  let url = "http://localhost:8080";

  //All the food list
  const [food_list, setFoodList] = useState([]);

  //Function to fetch all the foods from the Backend
  const fetchFood = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Failed to fetch food list:", error);
    }
  };

  const [loggedUser, setLoggedUser] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Function to add item in the cart

  const addCart = (id) => {
    setCartItem((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  //Calculating the total amount to product
  const deliveryFee = 50;
  let subtotal = 0;

  food_list.forEach((food) => {
    if (cartItem[food._id]) {
      subtotal += food.price * cartItem[food._id];
    }
  });

  //Calculating the total amount including Delivery Fee

  const total = subtotal + deliveryFee;

  //Function to remove food from the cart

  const removeCart = (id) => {
    setCartItem((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] === 0) {
        delete updated[id];
      }
      return updated;
    });
  };

  //Maintaining the user login
  useEffect(() => {
    //A particular to function Fetch Food
    const loadData = async () => {
      await fetchFood();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    };
    loadData();
  }, []);

  return (
    <contextStore.Provider
      value={{
        food_list,
        cartItem,
        addCart,
        removeCart,
        showLoginPage,
        setShowLoginPage,
        showSignUp,
        setShowSignUp,
        deliveryFee,
        subtotal,
        total,
        user,
        setUser,
        url,
        token,
        setToken,
        setLoggedUser,
        loggedUser,
      }}
    >
      {props.children}
    </contextStore.Provider>
  );
};
