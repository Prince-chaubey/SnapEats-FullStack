import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const contextStore = createContext();

export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [token, setToken] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userId, setUserId] = useState("");

  const currency = "₹";
  const url = "https://snapeats-fullstack-1.onrender.com";
  const [food_list, setFoodList] = useState([]);

  // Fetch food items from backend
  const fetchFood = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Failed to fetch food list:", error);
    }
  };

  // Load user's cart data
  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        {
          headers: { token },
        }
      );
      setCartItem(response.data.cartData);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  // Add item to cart
  const addCart = async (id) => {
    setCartItem((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId: id },
        {
          headers: { token },
        }
      );
    }
  };

  // Remove item from cart
  const removeCart = async (id) => {
    setCartItem((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] === 0) delete updated[id];
      return updated;
    });

    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId: id },
        {
          headers: { token },
        }
      );
    }
  };

  const deliveryFee = 50;
  let subtotal = 0;
  food_list.forEach((food) => {
    if (cartItem[food._id]) {
      subtotal += food.price * cartItem[food._id]*10;
    }
  });

  const total = subtotal + deliveryFee;

  // On component mount
  useEffect(() => {
    const loadData = async () => {
      await fetchFood();

      const storedToken = localStorage.getItem("token");
      const storedUserId = localStorage.getItem("userId");

      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }

      if (storedUserId) {
        setLoggedUser(storedUserId);
        setUserId(storedUserId);
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
        userId,
        setUserId,
        currency,
      }}
    >
      {props.children}
    </contextStore.Provider>
  );
};
